import React, { useState } from "react";
import { Text } from "../text/Text.styled";
import { StyledMoreSkills } from "./Skill.styled";
import MoreSkillsPopup from "./MoreSkillsPopup";
import { theme } from "../../../style/Theme";

const MoreSkills = ({ children, moreSkills }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = (event) => {
    event.stopPropagation();
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <StyledMoreSkills>
      <Text
        size="0.875rem"
        weight="normal"
        color={theme.colors.black}
        onClick={onClickHandler}
        style={{ cursor: "pointer" }}
      >
        + {moreSkills?.length} more
      </Text>
      {isClicked && <MoreSkillsPopup moreSkills={moreSkills} />}
      {children}
    </StyledMoreSkills>
  );
};

export default MoreSkills;
