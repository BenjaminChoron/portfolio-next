'use client';

import Image from 'next/image';
import Badge from '../base/badge';
import Button from '../base/button';
import { Project } from '@/types/project.types';

export default function ProjectCard({ project }: { project: Project }) {
  const handleModal = () => {
    const modal = document.getElementById(
      `modal_${project.id}`,
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <button className="m-4 w-5/6 sm:w-80" onClick={handleModal}>
        <div className="card shadow-lg cursor-pointer bg-secondary text-primary hover:scale-105 hover:bg-primary hover:text-secondary">
          <figure className="max-h-40">
            <Image
              src={project.image}
              alt={project.title}
              width={320}
              height={160}
            />
          </figure>
          <h3 className="px-4 py-2 text-left">{project.title}</h3>
          <div className="card-actions justify-end p-3">
            <Badge>{project.badge}</Badge>
          </div>
        </div>
      </button>
      <dialog
        id={`modal_${project.id}`}
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box bg-primary text-secondary">
          <div className="flex justify-between">
            <h3 className="text-lg">{project.title}</h3>
            <div className="flex">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path>
                  </svg>
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <p className="py-4 font-thin">{project.description}</p>
          <form method="dialog" className="flex justify-center">
            <Button>Fermer</Button>
          </form>
        </div>
      </dialog>
    </>
  );
}
