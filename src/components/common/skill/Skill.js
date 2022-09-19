import React from "react";
import { StyledSkill } from "./Skill.styled";
import { Text } from "../text/Text.styled";

const Skill = ({ name, color, background }) => {
  return (
    <StyledSkill background={background}>
      <Text size="0.875rem" weight="normal" color={color}>
        {name}
      </Text>
    </StyledSkill>
  );
};

export default Skill;
