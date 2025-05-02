
import { projectsAnalysis } from './project-analytics'

export function getProjectData(project: string) {
  return (
    projectsAnalysis.find(p => getPageSlug(p.title) === project) || projectsAnalysis[0]
  )
}

export const getPageSlug = (pathname: string) => {
  return pathname.toLowerCase().replace(/\s+/g, '-')
}