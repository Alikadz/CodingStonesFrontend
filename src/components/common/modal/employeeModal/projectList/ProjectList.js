import ProjectAssigned from './ProjectAssigned'
import React from 'react'

const ProjectList = ({projects}) => {
    console.log(projects)
  return (
    <>
        {
            projects?.map((project) => (
                <ProjectAssigned
                    key={project.project.id}
                    id={project.project.id}
                    name={project.project.name}
                    position={project.position}
                    skills={project.skills}
                />
            ))
        }
    </>
  )
}

export default ProjectList