import MainSection from '@/components/base/main-section';
import ProjectCard from '@/components/projects/project-card';
import { Project } from '@/types/project.types';

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Project 1',
      image: '/project1.png',
      description: 'Description 1',
      badges: ['React', 'TypeScript'],
      github: 'https://github.com',
      link: 'https://example.com',
    },
    {
      id: '2',
      title: 'Project 2',
      image: '/project2.png',
      description: 'Description 2',
      badges: ['Next.js', 'TypeScript'],
      github: 'https://github.com',
      link: 'https://example.com',
    },
    {
      id: '3',
      title: 'Project 3',
      image: '/project3.png',
      description: 'Description 3',
      badges: ['React', 'JavaScript'],
      github: 'https://github.com',
      link: 'https://example.com',
    },
  ];

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
