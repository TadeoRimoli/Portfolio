import React, { useState } from "react";

function CardProject({ project }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`relative rounded-lg text-card-foreground overflow-hidden group cursor-pointer transition-all duration-300 ${project.color} w-1/2 m-2`}
        onClick={toggleModal}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
          style={{ borderRadius: "15px" }}
        ></div>
        <div
          className="relative z-10 p-6 flex flex-col justify-between h-full items-center text-center"
          style={{ borderRadius: "15px" }}
        >
          <div>
            <div className="flex justify-center items-center mb-4">
              <span className="text-4xl">{project.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className={`bg-gradient-to-br ${
              project.color
            } rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-in-out ${
              isModalOpen ? "scale-100" : "scale-0"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              <button
                className="text-white hover:text-gray-300 text-2xl"
                onClick={toggleModal}
              >
                &times;
              </button>
            </div>
            <p className="text-white text-lg mb-4">{project.longDescription}</p>

            <h4 className="text-xl font-semibold mb-2 text-white">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-white text-black px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-right">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-200 hover:underline cursor-pointer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProject;
