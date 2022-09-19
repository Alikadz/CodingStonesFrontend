import React from 'react'
import { theme } from '../../../style/Theme'
import ModalSkill from './ModalSkill'

const ModalSubskillList = ({subskills}) => {
  return (
    <>
      {
          subskills?.map((subskill) =>(
            <ModalSkill
              key={subskill.id}
              id={subskill.id}
              name={subskill.name}
              background={theme.colors.white200}
              color={theme.colors.black}
            />
          ))
      }
    </>
  )
}

export default ModalSubskillList