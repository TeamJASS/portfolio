import React from "react";

const ProjectShowcase = ({ projects }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mb-10">
      <h2 className="text-2xl font-bold mb-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
