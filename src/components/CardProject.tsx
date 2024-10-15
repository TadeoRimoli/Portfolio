import React from "react";
import { useIntl } from "react-intl";

function Card({ project }: any) {
  const intl = useIntl();
  return (
    <div className="self-center my-4 pb-4 w-full rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 border border-gray-200 bg-gray-800 min-h-[400px]">
      {" "}
      {/* Ajusta el valor de min-h según sea necesario */}
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2 text-white">
          {intl.formatMessage({ id: project.title })}
        </div>
        <p className="text-gray-300 text-base">
          {intl.formatMessage({ id: project.description })}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank" // Enlace que se abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            className="text-teal-400 hover:underline text-sm float-right cursor-pointer"
          >
            {intl.formatMessage({ id: "ViewProject" })}
          </a>
        )}
        {project.images && (
          <a
            href={project.images}
            target="_blank" // Enlace que se abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            className="ml-2 text-teal-400 hover:underline text-sm float-right cursor-pointer"
          >
            {intl.formatMessage({ id: "ViewImages" })}
          </a>
        )}
        {project.download && (
          <a
            href={project.download}
            target="_blank" // Enlace que se abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
            className="ml-2 text-teal-400 hover:underline text-sm float-right cursor-pointer"
          >
            {intl.formatMessage({ id: "DownloadApp" })}
          </a>
        )}
      </div>
      <div className="px-6 pb-4">
        <h4 className="font-semibold text-gray-200 mb-2">
          {intl.formatMessage({ id: "TechnologiesUsed" })}:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
