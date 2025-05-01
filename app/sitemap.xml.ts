import { MetadataRoute } from 'next'
import {
  productDesignProjects,
  productDevelopmentProjects,
  // Import other project arrays if they have detail pages
} from '@/helpers/constants'
import { getPageSlug } from '@/helpers/parsers'

const URL = 'https://maazrana.com' // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [
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
    // {
    //   url: `${URL}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    ...projectEntries,
  ]
} 