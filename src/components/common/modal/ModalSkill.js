import { ReactComponent as Close } from "../../../assets/icons/Close.svg";
import { StyledModalSkill } from "./ModalSkill.styled";
import { Text } from "../text/Text.styled";
import React from "react";

const ModalSkill = ({
  id,
  name,
  color,
  background,
  setSkillId,
  setRemoveClicked,
}) => {
  const removeSkillFromUser = () => {
    setSkillId(id);
    setRemoveClicked(true);
  };

  return (
    <StyledModalSkill background={background}>
      <Text size="1rem" color={color}>
        {name}
      </Text>
      <Close
        size="10px"
        onClick={removeSkillFromUser}
        style={{ cursor: "pointer" }}
      />
    </StyledModalSkill>
  );
};

export default ModalSkill;
