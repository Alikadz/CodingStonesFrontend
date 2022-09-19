import React from 'react'
import { TechCards } from '../../pages/technologies/Technology.styled'
import TechCard from './TechCard'


const TechnologyList = ({data, setOpenSkill, setSkill}) => {
    return (
        <>
            <TechCards className="mt-6">
                {data?.map((tech) => (
                    <TechCard
                        key={tech.id}
                        id={tech.id}
                        name={tech.name}
                        users={tech.users}
                        subskills={tech.subskills}
                        setOpenSkill={setOpenSkill}
                        setSkill={setSkill}
                    />
                ))}
            </TechCards>
        </>
    )
}

export default TechnologyList