import { NextResponse } from 'next/server'

// ISR: Revalidate every 1 week
export const revalidate = 604800
export const dynamic = 'force-static'

const URL = 'https://maazrana.com'
const LAST_MODIFIED = '2026-02-05' // Update this when you make content changes

export async function GET() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${URL}/sitemap-pages.xml</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${URL}/sitemap-image.xml</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${URL}/sitemap-video.xml</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
  </sitemap>
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 