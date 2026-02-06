import { NextResponse } from 'next/server'
import { MetadataRoute } from 'next'
import {
  clientData,
  productDesignProjects,
  productDevelopmentProjects,
  // Import other project arrays if they have detail pages
} from '@/helpers/constants'
import { getPageSlug } from '@/helpers/parsers'

// ISR: Revalidate every 1 week
export const revalidate = 604800
export const dynamic = 'force-static'

const URL = 'https://maazrana.com' // Replace with your actual domain
const LAST_MODIFIED = '2026-02-05' // Update this when you make content changes

function generatePageSitemap(): MetadataRoute.Sitemap {
  // Combine projects that have detail pages
  const allProjects = [
    ...productDesignProjects,
    ...productDevelopmentProjects,
    // ... Add other project arrays here
  ]

  const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${URL}/work/${getPageSlug(project.title)}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Client page entries - updated to use dynamic routes
  const clientPageEntries: MetadataRoute.Sitemap = clientData.map((client) => ({
    url: `${URL}/clients/${client.key}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Portfolio category entries
  const portfolioEntries: MetadataRoute.Sitemap = [
    {
      url: `${URL}/portfolio/product-design`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/portfolio/product-development`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/portfolio/video-editing`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/portfolio/illustration`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/portfolio/blender`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/portfolio`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${URL}/clients`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add other static pages like /about if they exist and are indexable
  ]

  return [...staticPages, ...projectEntries, ...clientPageEntries, ...portfolioEntries]
}

export async function GET() {
  const sitemapData = generatePageSitemap()

  const sitemapEntries = sitemapData.map(entry => `
    <url>
      <loc>${entry.url}</loc>
      <lastmod>${typeof entry.lastModified === 'string' ? entry.lastModified : entry.lastModified instanceof Date ? entry.lastModified.toISOString().split('T')[0] : LAST_MODIFIED}</lastmod>
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