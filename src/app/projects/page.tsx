import MainSection from '@/components/base/main-section';
import ProjectCard from '@/components/projects/project-card';
import { getProjects } from '@/lib/projects';
import { Project } from '@/types/project.types';

export default function Projects() {
  const projects: Project[] = getProjects();

  return (
    <MainSection>
      <h2 className="pb-3 text-3xl">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </MainSection>
  );
}
