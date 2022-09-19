import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { StyledAvatarCirclePopup } from "./AvatarCirclePopup.styled";
import AvatarPopupContent from "./AvatarPopupContent";
import { Text } from "../text/Text.styled";
import { theme } from "../../../style/Theme";

const AvatarCirclePopup = ({ services }) => {
  return (
    <StyledAvatarCirclePopup>
      <Text size="1rem" color={theme.colors.black} weight="bold">
        Leads assigned
      </Text>
      {services.map((service) => (
        <AvatarPopupContent
          key={service.id}
          name={service.lead.name}
          percentage={service.percentage}
        />
      ))}
    </StyledAvatarCirclePopup>
  );
};

export default AvatarCirclePopup;
