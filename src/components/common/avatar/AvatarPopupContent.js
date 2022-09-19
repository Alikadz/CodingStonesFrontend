import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { Text } from "../text/Text.styled";
import { theme } from "../../../style/Theme";

const AvatarPopupContent = ({ name, percentage }) => {
  let assignedType = "Full time";

  if (percentage < 100) {
    assignedType = "Part time";
  }

  return (
    <Wrapper display="flex" flow="column wrap">
      <Text size="0.9rem" color={theme.colors.green} weight="bold">
        {name}
      </Text>
      <Text size="0.8rem" color={theme.colors.grey800} weight="regular">
        {assignedType} ({percentage}%)
      </Text>
    </Wrapper>
  );
};

export default AvatarPopupContent;
