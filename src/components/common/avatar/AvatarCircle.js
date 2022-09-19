import React from "react";
import { StyledAvatarCircle } from "./AvatarCircle.styled";
import { Text } from "../text/Text.styled";
import { useState } from "react";
import AvatarCirclePopup from "./AvatarCirclePopup";

const AvatarCircle = ({ services }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = (event) => {
    event.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <StyledAvatarCircle onClick={onClickHandler}>
      <Text size="1rem" wieght="medium" color="white">
        {services.length}
      </Text>
      {isClicked && <AvatarCirclePopup services={services} />}
    </StyledAvatarCircle>
  );
};

export default AvatarCircle;
