"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Sample data including multiple tags
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Build a personalized portfolio showcasing your projects.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Node.js API",
    description: "A RESTful API built with Express and Node.js.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend", "Node.js"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Handle tag change
  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
  };

  // Filter projects based on tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  // Extract all unique tags
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tag)));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 mb-6 md:mb-6">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-3 py-6">
        {allTags.map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            onClick={handleTagChange}
            isSelected={selectedTag === tag}
          />
        ))}
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
