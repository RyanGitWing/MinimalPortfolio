import React from "react";
import ProjectsItem from "./ProjectItem.jsx";
import ProjectsData from "../data/ProjectData.js";
import Title from "./Title.jsx";

function Projects() {
  return (
    <div className="flex flex-col mb-10 mx-auto mt-[100px] p-8">
        <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {ProjectsData.map((project) => (
            <ProjectsItem
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
