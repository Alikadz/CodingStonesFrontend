import React from 'react'
import { theme } from '../../../style/Theme'
import Skill from '../skill/Skill'

const SubskillList = ({ subskills }) => {
    return (
        <>
            {
                subskills?.map((subskill) => (
                    <Skill
                        key={subskill.id}
                        id={subskill.id}
                        name={subskill.name}
                        background={theme.colors.white200}
                        color={theme.colors.black}
                    />
                ))}
        </>
    )
}

export default SubskillList