"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/assets/assets";

const Projects = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 scroll-mt-16 ${
        isDarkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4
            className={`text-center mb-2 text-lg font-Ovo ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            My Portfolio
          </h4>
          <h2
            className={`text-center text-5xl font-Ovo mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <p
            className={`max-w-2xl font-Ovo mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Here are some of my notable projects. Each project reflects my
            passion for building impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isDarkMode={isDarkMode} // truyền xuống để custom màu từng card nếu cần
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
