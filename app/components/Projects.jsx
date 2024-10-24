"use client"; // Ensure the component is a Client Component

import React from 'react';
import { PROJECTS } from '@/constants'; // Ensure the path is correct
import { FaEye, FaGithub } from 'react-icons/fa'; // Importing the icons

const Projects = () => {
  return (
    <div className="my-24">
      <div className="line-container relative flex justify-center items-center">
        <div className="line"></div>
        <div className="circle"></div>
      </div>

      <h2 className="projects-text text-center tracking-tighter lg:text-[6rem] text-4xl font-normal text-white mt-6">
        Projek
      </h2>

      <div className="mt-24">
        {PROJECTS.length > 0 ? (
          PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap justify-center">
              <div className="w-full lg:w-1/4 p-2 flex justify-center">
                <div className="relative group">
                  <img
                    src={project.gambar}
                    width={300}
                    height={300}
                    alt={project.judul} // Ensure descriptive alt text
                    className="mb-6 rounded transition duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70 rounded" />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <a href={project.linkWebsite} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <FaEye className="w-8 h-8 text-white transition-opacity duration-300 ease-in-out" />
                    </a>
                    <a href={project.linkGithub} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <FaGithub className="w-8 h-8 text-white transition-opacity duration-300 ease-in-out" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-xl lg:w-3/4 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h6 className="mb-2 font-semibold text-neutral-400 transition duration-300 ease-in-out hover:text-[#00b894] hover:translate-x-1">
                  {project.judul}
                </h6>
                <p className="mb-4 text-neutral-400 transition duration-300 ease-in-out hover:text-[#00b894] hover:translate-x-1">
                  {project.deskripsi}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.teknologi.map((tech, techIndex) => (
                    <span key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 transition duration-300 ease-in-out hover:bg-[#00b894] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-neutral-400">No projects available.</p>
        )}
      </div>

      <div className="line-container relative flex justify-center items-center mt-12">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Projects;
