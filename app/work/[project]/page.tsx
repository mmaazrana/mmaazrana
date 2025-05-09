import Nav from '@/components/navs/nav'
import ProjectBottomNav from '@/components/navs/bottom-nav/project-bottom-nav'
import ProjectDetailsSection from '@/components/sections/project-page/project-details-section'
import ProjectHero from '@/components/sections/project-page/project-hero'
import { productDesignProjects } from '@/helpers/constants'
import { productDevelopmentProjects } from '@/helpers/constants'
import { ProjectAnalysisT } from '@/helpers/project-analytics'
import { getPageSlug, getRelevantProjects } from '@/helpers/parsers'
import { Params, SearchParams } from '@/helpers/types'
import { ProjectCategories } from '@/helpers/enums'
import type { Metadata } from 'next' // Import Metadata type
import Work from '@/components/sections/main-page/work'
import SingleClientTestimonial from '@/components/sections/project-page/single-testimonial'
// --- Start of added code ---

// Combine all project arrays that have dedicated pages
// Adjust this list based on which categories actually have dynamic pages
const allProjects = [...productDesignProjects, ...productDevelopmentProjects]

// Helper function to find project data by slug
// Ensure this logic correctly matches slugs to projects in your application
async function getProjectData(slug: string): Promise<ProjectAnalysisT | undefined> {
  // This assumes getPageSlug(project.title) generates the slug used in the URL
  return allProjects.find(project => getPageSlug(project.title) === slug)
}

// Define the base URL for metadata
const metadataBase = new URL('https://www.maazrana.com') // Replace with your actual domain

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Params // Specify 'project' in Params
  searchParams: SearchParams
}): Promise<Metadata> {
  const { project } = await params
  const { tab } = await searchParams
  const activeTab = tab ? String(tab) : ProjectCategories.overview
  const projectData = await getProjectData(project)

  if (!projectData) {
    // Fallback metadata if project not found
    return {
      title: 'Project Not Found',
      description: 'The requested project case study could not be found.',
      robots: { index: false, follow: false }, // Don't index non-existent pages
    }
  }

  // Construct dynamic metadata from project data
  const title =
    tab ? `${projectData.title} - ${activeTab}` : `${projectData.title} - Project Case Study`
  // Use project description or generate a fallback
  const description =
    tab ?
      projectData.shortDescription + ' - ' + activeTab ||
      `Explore the case study for the ${projectData.title} project by Maaz Rana, detailing the design and development process - ${activeTab}.`
    : projectData.shortDescription ||
      `Explore the case study for the ${projectData.title} project by Maaz Rana, detailing the design and development process.`
  // Generate keywords from project details
  const keywords = [
    projectData.title,
    'Case Study',
    'Portfolio',
    'Maaz Rana',
    ...(projectData.categories || []), // Add categories if they exist
    ...(projectData.techStack?.map(tech => tech.title) || []), // Add tech stack titles
  ].filter(Boolean) // Remove any potentially undefined values

  // Prepare Open Graph and Twitter image data if available
  // const ogImageUrl = project.imageUrl || '/default-og-image.png'; // Define a default image

  // --- Add Article Schema ---
  // Determine the canonical URL based on the tab
  const canonicalUrlPath = `/work/${project}`
  const canonicalFullUrl = `${metadataBase.toString().replace(/\/$/, '')}${canonicalUrlPath}` // Construct full URL

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article', // Or TechArticle
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: 'Maaz Rana',
      url: 'https://maazrana.com', // Your main URL
    },
    // Use a date from project data if available, otherwise fallback
    // datePublished: project.datePublished || new Date().toISOString(),
    // dateModified: project.dateModified || new Date().toISOString(),
    // image: ogImageUrl, // Add main project image URL here
    publisher: {
      '@type': 'Person', // Or Organization if applicable
      name: 'Maaz Rana',
    },
    // Use the dynamically determined canonical URL here
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalFullUrl },
  }
  // --- End Article Schema ---

  return {
    metadataBase,
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | Maaz Rana`,
      description,
      // images: [ogImageUrl], // Add image URL
      // Use the dynamic canonical URL path for OpenGraph
      url: canonicalUrlPath,
      type: 'article', // More specific type for case studies
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Maaz Rana`,
      description,
      // images: [ogImageUrl], // Add image URL
      // creator: '@_mmaazrana_', // Already in layout, but can be specific if needed
    },
    alternates: { canonical: './' },
    // Add the structured data script to the page metadata
    other: { 'structured-data-article': JSON.stringify(articleSchema) },
  }
}

// --- End of added code ---

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { project } = await params
  const { tab } = await searchParams
  const activeTab = tab ? String(tab) : ProjectCategories.overview
  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 pb-2xl xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
          <ProjectHero project={project} />
          <ProjectDetailsSection project={project} activeTab={activeTab} />
          <ProjectBottomNav pathName={project} activeTab={activeTab} />
          <SingleClientTestimonial project={project} />
          <Work title={'Related Projects'} projects={getRelevantProjects(project)} />
        </main>
      </div>
    </div>
  )
}
