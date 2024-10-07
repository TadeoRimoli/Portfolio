import React from "react";

function CardProject({ project }: any) {
  return (
    <div className="my-4 max-w-lg mx-auto p-8 flex flex-col h-full items-center text-center bg-gray-900 rounded-lg  shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <span className="text-5xl">{project.icon}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300">{project.description}</p>

      <h4 className="text-lg font-semibold mt-4 mb-2 text-white">
        Description:
      </h4>
      <p className="text-gray-200 mb-4">{project.longDescription}</p>

      <h4 className="text-lg font-semibold mb-2 text-white">
        Technologies Used:
      </h4>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {project.technologies.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="border border-gray-400 text-gray-200 px-4 py-1 rounded-full text-sm transition duration-300 hover:bg-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-right mt-auto">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:underline cursor-pointer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default CardProject;
