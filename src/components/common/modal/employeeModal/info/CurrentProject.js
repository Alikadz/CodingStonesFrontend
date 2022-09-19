import { theme } from "../../../../../style/Theme";
import { Title } from "../../../text/Title.styled";
import { Text } from "../../../text/Text.styled";
import Wrapper from "../../../wrapper/Wrapper";
import React, { useState } from "react";
import { StyledInput, DateInput } from "../../../UI/FormParts.styled";

const CurrentProject = ({
  id,
  name,
  position,
  percentage,
  end_date,
  start_date,
  setProjectId,
  setSaveEditIsClicked,
  setProjectBody,
}) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [newPosition, setNewPosition] = useState(position);
  const [newPercentage, setNewPercentage] = useState(percentage);
  const [newStartDate, setNewStartDate] = useState(start_date);
  const [newEndDate, setNewEndDate] = useState(end_date);

  const editCurrentProject = () => {
    setIsEditClicked(true);
  };

  const changePosition = (enteredPostion) => {
    setNewPosition(enteredPostion);
  };
  const changePercentage = (enteredPercentage) => {
    setNewPercentage(enteredPercentage);
  };
  const changeStartDate = (selectedStartDate) => {
    setNewStartDate(selectedStartDate);
  };
  const changeEndDate = (selectedEndDate) => {
    setNewEndDate(selectedEndDate);
  };

  const saveEditedCurrentProject = (projectId) => {
    setProjectId(projectId);
    setIsEditClicked(false);
    setSaveEditIsClicked(true);
    setProjectBody({
      position: newPosition,
      percentage: newPercentage,
      start_date: newStartDate,
      end_date: newEndDate,
    });
  };

  const closeEditingCurrentProject = () => {
    setIsEditClicked(false);
  };

  return (
    <>
      {!isEditClicked && (
        <Wrapper display="flex" justify="space-between" className="mb-2">
          <Wrapper display="flex" direction="column">
            <Wrapper className="mb-1">
              <Text size="1rem" weight="bold" color={theme.colors.black}>
                {name}
              </Text>
            </Wrapper>
            <Wrapper display="flex">
              <Text size="1rem" color={theme.colors.black} className="pr-1">
                {position} ({percentage}%) |
              </Text>
              <Text size="1rem" color={theme.colors.blue200}>
                {start_date} - {end_date}
              </Text>
            </Wrapper>
          </Wrapper>

          <Wrapper display="flex" align="flex-end">
            <Title
              size="1rem"
              color={theme.colors.green}
              onClick={editCurrentProject}
            >
              Edit
            </Title>
          </Wrapper>
        </Wrapper>
      )}
      {isEditClicked && (
        <Wrapper display="flex" flow="column wrap" className="mb-2">
          <Wrapper className="mb-1">
            <Text size="1rem" weight="bold" color={theme.colors.black}>
              {name}
            </Text>
          </Wrapper>
          <Wrapper display="flex" align="center">
            <StyledInput
              type="text"
              defaultValue={newPosition}
              onChange={(event) => changePosition(event.target.value)}
              width="10rem"
            />
            <StyledInput
              type="text"
              defaultValue={newPercentage}
              width="3rem"
              className="ml-2 mr-2"
              onChange={(event) => changePercentage(event.target.value)}
            />
            <DateInput
              type="date"
              defaultValue={newStartDate}
              width="8.5rem"
              onChange={(event) => changeStartDate(event.target.value)}
            />
            <DateInput
              type="date"
              defaultValue={newEndDate}
              width="8.5rem"
              onChange={(event) => changeEndDate(event.target.value)}
              className="ml-2 mr-4"
            />
            <Title
              size="1rem"
              color={theme.colors.green}
              onClick={() => saveEditedCurrentProject(id)}
              className="ml-4 mr-4"
            >
              Save
            </Title>
            <Title
              size="1rem"
              color={theme.colors.grey100}
              onClick={closeEditingCurrentProject}
            >
              Cancel
            </Title>
          </Wrapper>
        </Wrapper>
      )}
    </>
  );
};

export default CurrentProject;
