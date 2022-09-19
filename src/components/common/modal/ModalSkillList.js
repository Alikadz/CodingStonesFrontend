import React from "react";
import ModalSkill from "./ModalSkill";
import { theme } from "../../../style/Theme";

const ModalSkillList = ({ skills, setSkillId, setRemoveClicked }) => {
  return (
    <>
      {skills?.map((skill) => (
        <ModalSkill
          key={skill.skill.id}
          id={skill.skill.id}
          background={
            skill.level === 1
              ? theme.colors.skills.bg_low
              : skill.level === 2
              ? theme.colors.skills.bg_mid
              : theme.colors.skills.bg_high
          }
          color={
            skill.level === 1
              ? theme.colors.skills.txt_low
              : skill.level === 2
              ? theme.colors.skills.txt_mid
              : theme.colors.skills.txt_high
          }
          name={skill.skill.name}
          setSkillId={setSkillId}
          setRemoveClicked={setRemoveClicked}
        />
      ))}
    </>
  );
};

export default ModalSkillList;
