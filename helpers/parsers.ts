import { projectNotFound, projectsAnalysis } from './project-analytics'
import { ProjectAnalysisT } from './project-analytics'

/**
 * Calculates string similarity between two strings using Levenshtein distance
 * @param str1 First string to compare
 * @param str2 Second string to compare
 * @returns Similarity score between 0 and 1
 */
function calculateStringSimilarity(str1: string, str2: string): number {
  const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null))
  
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j
  }

  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      )
    }
  }

  const maxLength = Math.max(str1.length, str2.length)
  return 1 - track[str2.length][str1.length] / maxLength
}

/**
 * Calculates similarity between two tech stacks
 * @param techStack1 First tech stack
 * @param techStack2 Second tech stack
 * @returns Similarity score between 0 and 1
 */
function calculateTechStackSimilarity(techStack1: ProjectAnalysisT["techStack"], techStack2: ProjectAnalysisT["techStack"]): number {
  const titles1 = techStack1.map(tech => tech.title.toLowerCase())
  const titles2 = techStack2.map(tech => tech.title.toLowerCase())
  
  const intersection = titles1.filter(title => titles2.includes(title))
  const union = titles1.concat(titles2).filter((title, index, self) => self.indexOf(title) === index)
  
  return intersection.length / union.length
}

/**
 * Gets four relevant projects based on similarity to the current project
 * @param project The project page slug
 * @returns Array of four similar projects with specific isMobile constraints
 */
export function getRelevantProjects(project: string): ProjectAnalysisT[] {
  const currentProject = getProjectData(project)
  // Remove current project from consideration
  const otherProjects = projectsAnalysis.filter(p => p.title !== currentProject.title)
  
  // Calculate similarity scores for each project
  const projectsWithScores = otherProjects.map(project => {
    // Calculate title similarity
    const titleSimilarity = calculateStringSimilarity(
      currentProject.title.toLowerCase(),
      project.title.toLowerCase()
    )
    
    // Calculate category similarity (1 if any category matches, 0 if none)
    const categorySimilarity = currentProject.categories.some(cat => 
      project.categories.includes(cat)
    ) ? 1 : 0
    
    // Calculate tech stack similarity
    const techStackSimilarity = calculateTechStackSimilarity(
      currentProject.techStack,
      project.techStack
    )
    
    // Weighted average of similarities
    const totalSimilarity = (
      titleSimilarity * 0.5 + // Title similarity is most important
      categorySimilarity * 0.3 + // Categories are second most important
      techStackSimilarity * 0.2 // Tech stack is least important
    )
    
    return {
      project,
      similarity: totalSimilarity
    }
  })
  
  // Separate projects by isMobile status
  const desktopProjects = projectsWithScores
    .filter(item => !item.project.isMobile)
    .sort((a, b) => b.similarity - a.similarity)
  
  const mobileProjects = projectsWithScores
    .filter(item => item.project.isMobile)
    .sort((a, b) => b.similarity - a.similarity)
  
  // Get top 2 desktop and mobile projects
  const topDesktop = desktopProjects.slice(0, 3).map(item => item.project)
  const topMobile = mobileProjects.slice(0, 3).map(item => item.project)
  
  // Return projects in the required order: desktop, mobile, mobile, desktop
  return [
    topDesktop[0],
    topMobile[0],
    topMobile[1],
    topDesktop[1],
    topDesktop[2],
    topMobile[2],
  ]
}

/**
 * Gets details of the project based on the project page slug
 * @param project The project page slug
 * @returns Details of the project
 */
export function getProjectData(project: string) {
  return (
    projectsAnalysis.find(p => getPageSlug(p.title) === project) || projectNotFound
  )
}

/**
 * Gets the page slug of the project based on the project title
 * @param pathname The pathname of the project page
 * @returns The page slug of the project
 */
export const getPageSlug = (pathname: string) => {
  return pathname.toLowerCase().replace(/\s+/g, '-')
}

/**
 * Generates a project ID from the project heading
 * @param heading The heading of the project
 * @returns The client ID
 */
export const getClientId = (heading: string): string => {
  return `client-${heading
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '')}` // Remove invalid characters
}

/**
 * Generates a query string for the client page
 * @param openProjectsParam The open projects parameter
 * @param itemKey The key of the item
 * @param isOpen Whether the item is open
 * @returns The query string
 */
export const getClientQueryString = ({ openProjectsParam, itemKey, isOpen }: { openProjectsParam: string; itemKey: string; isOpen: boolean }) => {
    const currentKeys = openProjectsParam ? openProjectsParam.split(',') : []
    let newKeys: string[]

    if (!isOpen) {
      if (!currentKeys.includes(itemKey)) {
        newKeys = [...currentKeys, itemKey]
      } else {
        newKeys = currentKeys // No change needed
      }
    } else {
      newKeys = currentKeys.filter(key => key !== itemKey)
    }

    const newKeysString = newKeys.join(',')
    const newSearchParam = new URLSearchParams([['openProjects', newKeysString]])

    if (newKeys.length > 0) {
      newSearchParam.set('openProjects', newKeys.join(','))
    } else {
      newSearchParam.delete('openProjects')
    }

    const search = newSearchParam.toString()
    const query = search ? `?${search}` : ''
    return query
  }

/**
 * Capitalizes the first letter of each word in a string
 * @param str The string to capitalize
 * @returns The capitalized string
 */
export const capitalizeWords = (str: string) => {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
