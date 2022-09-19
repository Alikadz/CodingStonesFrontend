import React from "react";
import { SkillsEmployeeWrapper } from "./Skill.styled";
import Skill from "./Skill";
import { theme } from "../../../style/Theme";
import MoreSkills from "./MoreSkills";

const SkillList = ({ skills }) => {
  const tempSkills = skills.map((x) => x);

  let moreSkills = [];
  while (tempSkills?.length > 3) {
    moreSkills.push(tempSkills.pop());
  }
  return (
    <SkillsEmployeeWrapper className="mt-2">
      {tempSkills?.map((skill) => (
        <Skill
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
        />
      ))}
      {moreSkills?.length !== 0 ? <MoreSkills moreSkills={moreSkills} /> : ""}
    </SkillsEmployeeWrapper>
  );
};

export default SkillList;
