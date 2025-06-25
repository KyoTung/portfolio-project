"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col
        ${
          isDarkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-500"
        }
      `}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-amber-600 transition-colors ${
                  isDarkMode
                    ? "hover:text-amber-400 text-white"
                    : "text-gray-900"
                }`}
                aria-label="GitHub repository"
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-amber-600 transition-colors ${
                  isDarkMode
                    ? "hover:text-amber-400 text-white"
                    : "text-gray-900"
                }`}
                aria-label="Live demo"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`mb-4 flex-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-white text-sm rounded-full
                ${isDarkMode ? "bg-gray-700" : "bg-gray-800"}
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
