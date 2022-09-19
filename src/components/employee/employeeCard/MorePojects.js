import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";
import { Text } from "../../common/text/Text.styled";
import { theme } from "../../../style/Theme";
import { useState } from "react";
import MoreProjectsPopup from "./MoreProjectsPopup";

const MorePojects = ({ moreProjects }) => {
  const [isClicked, setIsClicked] = useState(false);

  const sortedProjects = moreProjects.reverse();

  const onClickHandler = (event) => {
    event.stopPropagation();
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <Wrapper style={{ position: "relative", cursor: "pointer" }}>
      <div>
        <Text
          size="0.8rem"
          color={theme.colors.black}
          weight="regular"
          onClick={onClickHandler}
        >
          +{sortedProjects?.length} more
        </Text>
      </div>
      {isClicked && <MoreProjectsPopup moreProjects={sortedProjects} />}
    </Wrapper>
  );
};

export default MorePojects;
