import React from "react";
import { useState } from "react";
import { Text } from "../text/Text.styled";
import { theme } from "../../../style/Theme";
import { ProjectDetails } from "../../employee/employeeCard/ProjectDetails";
import Wrapper from "../wrapper/Wrapper";

const ProjectContainer = ({
  name,
  percentage,
  position,
  end_date,
  ending_soon,
}) => {
  const [isProjectShown, setIsProjectShown] = useState(false);
  const showProjectDetails = () => {
    setIsProjectShown(true);
  };
  const closeProjectDetails = () => {
    setIsProjectShown(false);
  };

  return (
    <Wrapper>
      {ending_soon ? (
        <Wrapper style={{ position: "relative" }}>
          <Wrapper
            onMouseEnter={showProjectDetails}
            onMouseOut={closeProjectDetails}
            style={{ cursor: "pointer" }}
          >
            <Text
              size="0.875rem"
              weight="normal"
              color={theme.colors.yellow200}
              style={{ textAlign: "end" }}
            >
              {name} ({percentage}%)
            </Text>
          </Wrapper>
          {isProjectShown && (
            <ProjectDetails
              position={position}
              percentage={percentage}
              end_date={end_date}
              ending_soon={ending_soon}
            />
          )}
        </Wrapper>
      ) : (
        <Wrapper style={{ position: "relative" }}>
          <Wrapper
            onMouseEnter={showProjectDetails}
            onMouseOut={closeProjectDetails}
            style={{ cursor: "pointer" }}
          >
            <Text
              size="0.875rem"
              weight="normal"
              color={theme.colors.blue200}
              style={{ textAlign: "end" }}
            >
              {name} ({percentage}%)
            </Text>
          </Wrapper>
          {isProjectShown && (
            <ProjectDetails
              position={position}
              percentage={percentage}
              end_date={end_date}
              ending_soon={ending_soon}
            />
          )}
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default ProjectContainer;
