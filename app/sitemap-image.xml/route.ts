import { NextResponse } from 'next/server'
import {
  blenderProjects,
  graphicDesignProjects,
  productDesignProjects,
  productDevelopmentProjects,
  videoProjects,
  services,
} from '@/helpers/constants'
import type { StaticImageData } from 'next/image'

const URL = 'https://maazrana.com'

// Helper function to safely get the public path from StaticImageData or string
function getPublicPath(image: StaticImageData | string | undefined): string | undefined {
  if (!image) return undefined
  if (typeof image === 'string') {
    return image.startsWith('/') ? image : undefined
  }
  // For StaticImageData objects, the 'src' property usually holds the public path
  return image.src
}

// Function to extract image URLs from various data structures
function extractImageUrls(): Set<string> {
  const imageUrls = new Set<string>()

  // Helper to add URL if valid
  const addUrl = (imageSource: StaticImageData | string | undefined) => {
    const path = getPublicPath(imageSource) // Call getPublicPath here
    if (path) {
        // Ensure path starts with a slash if it doesnt already
        const fullPath = path.startsWith('/') ? path : `/${path}`;
        imageUrls.add(`${URL}${fullPath}`)
    }
  }

  // From ProjectAnalysisT arrays (productDesign, productDevelopment)
  const projectAnalysisLists = [productDesignProjects, productDevelopmentProjects]
  projectAnalysisLists.forEach(list => {
    list.forEach(project => {
      addUrl(project.images.main)
      project.images.screenshots.forEach(screenshot => addUrl(screenshot))
    })
  })

  // From BlenderProjectT array
  blenderProjects.forEach(project => {
    project.image.forEach(img => addUrl(img))
  })

  // From GraphicDesignProjectT array
  graphicDesignProjects.forEach(project => {
    project.image.forEach(img => addUrl(img))
  })

  // From VideoProjectT array (thumbnails)
  videoProjects.forEach(project => addUrl(project.thumbnail))

  // From ServiceT array (illustrations - use baseSrc, not placeholders)
  services.forEach(service => addUrl(`${service.baseSrc}.svg`)); // Assuming SVG format

  // From ClientDataT array (logos)
  // Need to inspect how logos are stored (StaticImageData? Component? String?)
  // clientData.forEach(client => {
  //   client.productsInvolved.forEach(product => {
  //     // If product.logo is a StaticImageData or string path:
  //     // addUrl(getPublicPath(product.logo)); 
  //   })
  // })

  // Add other known single images
  addUrl('/images/pfp.webp')
  addUrl('/images/memoji-pfp.webp')
  addUrl('/logo.svg')
  addUrl('/quote.svg')
  addUrl('/icon.svg')

  // TODO: Add images from public directories if needed (fs module required)
  // e.g., scan public/images/projects, public/svgs

  return imageUrls
}

export async function GET() {
  const imageUrls = extractImageUrls()

  const sitemapEntries = Array.from(imageUrls)
    .map((imageUrl) => {
      // Determine the page the image is likely associated with
      // This is a simplification; ideally, map images to their specific project pages
      let pageLoc = URL;
      if (imageUrl.includes('/images/projects/') || imageUrl.includes('/images/thumbnails/')) {
        pageLoc = `${URL}/portfolio` // Assume project images are on work page(s)
      } else if (imageUrl.includes('/svgs/services/')) {
        pageLoc = `${URL}/#services` // Assume service images are on home page services section
      } else if (imageUrl.includes('/logo.svg')) {
        pageLoc = URL // Logo likely on home page
      } // Add more specific mappings if possible
      
      // Get the image URL part only for the image:loc tag
      const imageLoc = imageUrl

      return `
        <url>
          <loc>${pageLoc}</loc>
          <image:image>
            <image:loc>${imageLoc}</image:loc>
          </image:image>
        </url>
      `
    })
    .join('')

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${sitemapEntries}
</urlset>`

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 