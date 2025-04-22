import Nav from '@/components/navs/nav';
import ProjectBottomNav from '@/components/navs/bottom-nav/project-bottom-nav';
import { ProjectProvider } from '@/app/context/project-provider';
import ProjectDetailsSection from '@/components/sections/project/project-details-section';
import ProjectHero from '@/components/sections/hero/project-hero';

export default function ProjectPage() {
  return (
    <ProjectProvider>
      <div className={'overflow-x-hidden max-w-[100vw]'}>
        <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col">
          <Nav />
          <ProjectHero />
          <ProjectBottomNav />
          <ProjectDetailsSection />
        </main>
      </div>
    </ProjectProvider>
  );
}
