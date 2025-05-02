import { NextResponse } from 'next/server'
import { MetadataRoute } from 'next'
import {
  productDesignProjects,
  productDevelopmentProjects,
  // Import other project arrays if they have detail pages
} from '@/helpers/constants'
import { getPageSlug } from '@/helpers/parsers'

const URL = 'https://maazrana.com' // Replace with your actual domain

function generatePageSitemap(): MetadataRoute.Sitemap {
  // Combine projects that have detail pages
  const allProjects = [
    ...productDesignProjects,
    ...productDevelopmentProjects,
    // ... Add other project arrays here
  ]

  const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${URL}/work/${getPageSlug(project.title)}`,
    lastModified: new Date(), // Or use a specific date if available
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
     {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${URL}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add other static pages like /about if they exist and are indexable
  ]

  return [...staticPages, ...projectEntries]
}

export async function GET() {
  const sitemapData = generatePageSitemap()

  const sitemapEntries = sitemapData.map(entry => `
    <url>
      <loc>${entry.url}</loc>
      <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : new Date().toISOString()}</lastmod>
      ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
      ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
    </url>
  `).join('')

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 