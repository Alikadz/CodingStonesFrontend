import React from "react";
import CurrentProject from "./CurrentProject";

const CurrentProjectsList = ({
  projects,
  setProjectId,
  setSaveEditIsClicked,
  setProjectBody,
}) => {
  return (
    <>
      {projects?.map((project) => (
        <CurrentProject
          key={project.project.id}
          id={project.project.id}
          name={project.project.name}
          position={project.position}
          percentage={project.percentage}
          end_date={project.end_date}
          start_date={project.start_date}
          setProjectId={setProjectId}
          setSaveEditIsClicked={setSaveEditIsClicked}
          setProjectBody={setProjectBody}
        />
      ))}
    </>
  );
};

export default CurrentProjectsList;
