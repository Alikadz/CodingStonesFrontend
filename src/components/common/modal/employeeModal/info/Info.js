import { ReactComponent as Add } from "../../../../../assets/icons/Add1.svg";
import CurrentProjectsList from "./CurrentProjectsList";
import { Body, Container } from "../../Modal.styled";
import LeadsAssignedList from "./LeadsAssignedList";
import { theme } from "../../../../../style/Theme";
import ModalSkillList from "../../ModalSkillList";
import { Text } from "../../../text/Text.styled";
import Wrapper from "../../../wrapper/Wrapper";
import React, { useState } from "react";
import axios from "axios";
import AddSkills from "./AddSkills";
import { removeSkillFromUser } from "../../../../../services/EmployeeServices";
import { useQuery } from "@tanstack/react-query";

const Info = ({ id, skills, projects, services }) => {
  const [isAddSkillsOpened, setIsAddSkillsOpened] = useState(false);
  const [skillId, setSkillId] = useState();
  const [levelValue, setLevelValue] = useState(3);
  const [saveIsClicked, setSaveIsClicked] = useState(false);
  const [projectId, setProjectId] = useState();
  const [saveIsEditClicked, setSaveEditIsClicked] = useState(false);
  const [projectBody, setProjectBody] = useState({});
  const [isRemoveClicked, setRemoveClicked] = useState(false);

  const { position, percentage, start_date, end_date } = projectBody;

  const { isLoading } = useQuery(
    ["removeSkill"],
    () => removeSkillFromUser(id, skillId),
    { enabled: isRemoveClicked }
  );

  const addSkillToEmployee = () => {
    setIsAddSkillsOpened(true);
  };

  if (saveIsClicked) {
    axios.post(`https://stg-coding-stones-api.zendev.se/users/${id}/skill`, {
      skill_id: skillId,
      level: parseInt(levelValue),
    });
  }

  if (saveIsEditClicked) {
    axios.put(
      `https://stg-coding-stones-api.zendev.se/users/${id}/projects/${projectId}`,
      {
        position,
        percentage,
        start_date,
        end_date,
      }
    );
  }

  return (
    <>
      <Body>
        <Container padding="2rem 6rem">
          <Wrapper border="1px solid #F1F1F1" className="pb-10">
            <Wrapper display="flex">
              <Text
                size="20px"
                weight="bold"
                color={theme.colors.black}
                className="mr-2 mb-4"
              >
                Skills
              </Text>
              <Add style={{ cursor: "pointer" }} onClick={addSkillToEmployee} />
            </Wrapper>
            {!isAddSkillsOpened && (
              <Wrapper
                display="grid"
                gridTemplateColumns="repeat(5,1fr)"
                justify="space-between"
                width="100%"
                gap="0.4rem"
              >
                <ModalSkillList
                  skills={skills}
                  setSkillId={setSkillId}
                  setRemoveClicked={setRemoveClicked}
                />
              </Wrapper>
            )}
            {isAddSkillsOpened && (
              <AddSkills
                setIsAddSkillsOpened={setIsAddSkillsOpened}
                setSkillId={setSkillId}
                setLevelValue={setLevelValue}
                setSaveIsClicked={setSaveIsClicked}
              />
            )}
          </Wrapper>
          <Wrapper border="1px solid #F1F1F1" className="pt-10 pb-10">
            <Text
              size="20px"
              weight="bold"
              color={theme.colors.black}
              className="mb-4"
            >
              Current projects
            </Text>
            <Wrapper>
              <CurrentProjectsList
                projects={projects}
                setProjectId={setProjectId}
                setSaveEditIsClicked={setSaveEditIsClicked}
                setProjectBody={setProjectBody}
              />
            </Wrapper>
          </Wrapper>
          <Wrapper border="1px solid #F1F1F1" className="pt-10 pb-10">
            <Text
              size="20px"
              weight="bold"
              color={theme.colors.black}
              className="mb-2"
            >
              Leads assigned
            </Text>
            <Wrapper display="flex" direction="column" justify="space-between">
              <LeadsAssignedList services={services} />
            </Wrapper>
          </Wrapper>
          <Text
            size="20px"
            weight="bold"
            color={theme.colors.black}
            className="pt-10"
          >
            Remaining/Used vacation days
          </Text>
        </Container>
      </Body>
    </>
  );
};

export default Info;
