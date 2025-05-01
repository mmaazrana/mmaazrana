import Nav from '@/components/navs/nav'
import ProjectBottomNav from '@/components/navs/bottom-nav/project-bottom-nav'
import { ProjectProvider } from '@/app/context/project-provider'
import ProjectDetailsSection from '@/components/sections/project/project-details-section'
import ProjectHero from '@/components/sections/hero/project-hero'
import { productDesignProjects } from '@/helpers/constants'
import { productDevelopmentProjects } from '@/helpers/constants'
import { ProjectAnalysisT } from '@/helpers/project-analytics'
import { getPageSlug } from '@/helpers/parsers'

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

type Params = Promise<{ project: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { project } = await params
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
  const title = `${projectData.title} - Project Case Study`
  // Use project description or generate a fallback
  const description =
    projectData.shortDescription ||
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

  const URL = 'https://maazrana.com' // Replace with your actual domain

  // --- Add Article Schema ---
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
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${URL}/work/${project}` },
  }
  // --- End Article Schema ---

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | Maaz Rana`,
      description,
      // images: [ogImageUrl], // Add image URL
      url: `/work/${project}`, // Canonical URL for this project page
      type: 'article', // More specific type for case studies
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Maaz Rana`,
      description,
      // images: [ogImageUrl], // Add image URL
      // creator: '@_mmaazrana_', // Already in layout, but can be specific if needed
    },
    // Add the structured data script to the page metadata
    other: { 'structured-data-article': JSON.stringify(articleSchema) },
  }
}

// --- End of added code ---

export default function ProjectPage() {
  return (
    <ProjectProvider>
      <div className='overflow-x-hidden max-w-[100vw]'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
          <Nav />
          <ProjectHero />
          <ProjectBottomNav />
          <ProjectDetailsSection />
        </main>
      </div>
    </ProjectProvider>
  )
}
