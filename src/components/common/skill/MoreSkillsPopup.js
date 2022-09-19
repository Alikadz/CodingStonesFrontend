import React from "react";
import { StyledMoreSkillsPopup } from "./Skill.styled";
import Wrapper from "../wrapper/Wrapper";
import Skill from "./Skill";
import { theme } from "../../../style/Theme";

const MoreSkillsPopup = ({ moreSkills }) => {
  return (
    <StyledMoreSkillsPopup>
      <Wrapper>
        {moreSkills.map((skill) => (
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
      </Wrapper>
    </StyledMoreSkillsPopup>
  );
};

export default MoreSkillsPopup;
