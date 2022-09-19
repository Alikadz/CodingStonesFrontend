import React from "react";
import Wrapper from "../../common/wrapper/Wrapper";
import { StyledProjectDetails } from "./ProjectDetails.styled";
import { Text } from "../../common/text/Text.styled";
import { theme } from "../../../style/Theme";

export const ProjectDetails = ({
  position,
  percentage,
  end_date,
  ending_soon,
}) => {
  return (
    <StyledProjectDetails>
      <Wrapper display="flex" className="mb-2">
        <Wrapper display="flex" flow="column wrap" style={{ flex: "1" }}>
          <Text size="0.9rem" weight="bold" color={theme.colors.black}>
            {position}
          </Text>
          <Text size="0.9rem" weight="regular" color={theme.colors.grey800}>
            {percentage}%
          </Text>
        </Wrapper>
        <Text size="0.9rem" weight="bold" color={theme.colors.black}>
          $50/hr
        </Text>
      </Wrapper>
      <Wrapper display="flex">
        <Wrapper>
          {ending_soon ? (
            <Text size="0.9rem" weight="regular" color={theme.colors.yellow200}>
              Endign soon
            </Text>
          ) : (
            <Text size="0.9rem" weight="regular" color={theme.colors.blue200}>
              Ongoing
            </Text>
          )}
        </Wrapper>
        <Wrapper display="flex" justify="flex-end" style={{ flex: "1" }}>
          <Text size="0.9rem" weight="regular" color={theme.colors.black}>
            {end_date}
          </Text>
        </Wrapper>
      </Wrapper>
    </StyledProjectDetails>
  );
};
