import React from "react";
import { StyledProjectsPopup } from "./MoreProjectsPopup.styled";
import { Text } from "../../common/text/Text.styled";
import { theme } from "../../../style/Theme";

const MoreProjectsPopup = ({ moreProjects }) => {
  return (
    <StyledProjectsPopup>
      {moreProjects.map((project) =>
        project.ending_soon ? (
          <Text
            key={project.project.id}
            size="0.875rem"
            weight="normal"
            color={theme.colors.yellow200}
            style={{ textAlign: "end" }}
          >
            {project.project.name} ({project.percentage}%)
          </Text>
        ) : (
          <Text
            key={project.project.id}
            size="0.875rem"
            weight="normal"
            color={theme.colors.blue200}
            style={{ textAlign: "end" }}
          >
            {project.project.name} ({project.percentage}%)
          </Text>
        )
      )}
    </StyledProjectsPopup>
  );
};

export default MoreProjectsPopup;
