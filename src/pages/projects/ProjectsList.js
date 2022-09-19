import ProjectCard from "../../components/common/UI/ProjectCard";
import { CardList } from "../../components/common/UI/CardList";
import React from "react";

const ProjectsList = ({ filteredProjects, setProject,isOpen, setIsOpen }) => {
  return (
    <>
      <CardList className="mt-6">
        {filteredProjects?.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              company={project.company}
              type={project.type}
              description={project.description}
              start_date={project.start_date}
              end_date={project.end_date}
              skills={project.skills}
              users={project.users}
              setProject={setProject}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </CardList>
    </>
  );
};

export default ProjectsList;
