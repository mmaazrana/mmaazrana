export const runtime = 'edge'

import { NextResponse } from 'next/server'
import { videoProjects } from '@/helpers/constants'
import type { StaticImageData } from 'next/image'

const URL = 'https://maazrana.com'
const CDN_URL = 'https://dfq6zt494pcpl.cloudfront.net'

// Helper function to get the public path from StaticImageData
function getPublicPath(image: StaticImageData | string): string | undefined {
  if (typeof image === 'string') {
    return image.startsWith('/') ? image : undefined // Assume strings starting with / are public paths
  }
  // For StaticImageData objects, the 'src' property usually holds the public path
  return image.src
}

export async function GET() {
  const sitemapEntries = videoProjects
    .map((project) => {
      const thumbnailUrl = getPublicPath(project.thumbnail)
      if (!thumbnailUrl) {
        console.warn(`Could not determine thumbnail URL for video project: ${project.title}`)
        return null // Skip if thumbnail URL can't be determined
      }
      const videoUrl = `${CDN_URL}/${project.fileName}`
      const pageUrl = `${URL}/portfolio` // Assuming videos are displayed on the main work page or a generic gallery

      return `
        <url>
          <loc>${pageUrl}</loc>
          <video:video>
            <video:thumbnail_loc>${URL}${thumbnailUrl}</video:thumbnail_loc>
            <video:title>${project.title.replace(/&/g, '&amp;')}</video:title>
            <video:description>${project.description.replace(/&/g, '&amp;')}</video:description>
            <video:content_loc>${videoUrl}</video:content_loc>
            <video:publication_date>${new Date().toISOString()}</video:publication_date> 
            <video:family_friendly>yes</video:family_friendly>
            <video:requires_subscription>no</video:requires_subscription>
            <video:live>no</video:live>
          </video:video>
        </url>
      `
    })
    .filter(Boolean) // Remove null entries
    .join('')

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${sitemapEntries}
</urlset>`

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 