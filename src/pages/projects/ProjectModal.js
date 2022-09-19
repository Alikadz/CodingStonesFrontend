import {
  Header,
  Exit,
  Container,
  Body,
} from "../../components/common/modal/Modal.styled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { ReactComponent as Calendar } from "../../assets/icons/Calendar.svg";
import { Button } from "../../components/common/button/Button.styled";
import { Content } from "../../components/common/modal/Modal.styled";
import { Text } from "../../components/common/text/Text.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import Modal from "../../components/common/modal/Modal";
import { theme } from "../../style/Theme";
import React from "react";
import ModalSkillList from "../../components/common/modal/ModalSkillList";
import Employee from "../../components/employee/employeeCard/EmployeeCard";
import { useState } from "react";
import { DateInput } from "../../components/common/UI/FormParts.styled";
import { ReactComponent as Add } from "../../assets/icons/Add1.svg";
import { Title } from "../../components/common/text/Title.styled";
import { StyledTextarea } from "../../components/common/UI/Textarea.styled";
import axios from "axios";
import AddSkills from "../../components/common/modal/employeeModal/info/AddSkills";
import { useEffect } from "react";

const ProjectModal = ({
  project, setIsOpen, close, isOpen
}) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isAddSkillsOpened, setIsAddSkillsOpened] = useState(false);
  const [skillId, setSkillId] = useState();
  const [levelValue, setLevelValue] = useState(3);
  const [saveIsEditClicked, setSaveEditIsClicked] = useState(false);
  const [saveIsClicked, setSaveIsClicked] = useState(false);
  const [newStartDate, setNewStartDate] = useState(project.start_date);
  const [newEndDate, setNewEndDate] = useState(project.end_date);
  const [newDes, setNewDesc] = useState(project.description);

  const handleBlur = (e) => {
    close();
  }

  const editProject = () => {
    setIsEditClicked(true);
  };

  if (saveIsClicked) {
    axios.post(`https://stg-coding-stones-api.zendev.se/projects/${project.id}/skill`, {
      skill_id: skillId,
      level: parseInt(levelValue),
    });
  }

  const saveEditedProject = () => {
    setIsEditClicked(false);
    axios.put(`https://stg-coding-stones-api.zendev.se/projects/${project.id}`, {
      description: newDes,
      start_date: newStartDate,
      end_date: newEndDate,
    });
  };

  return (
    <Modal align='flex-end' onBlur={(e)=>handleBlur(e)}>
      <Content width="50%" height="89%" background={theme.colors.white}>
        <Header>
          <Exit>
            <ArrowLeft cursor="pointer" onClick={() => setIsOpen(false)} />
          </Exit>
          <Container padding="0 4rem 2rem 4rem ">
            <Wrapper display="flex" justify="space-between">
              <Wrapper>
                <Wrapper>
                  <Text size="24px" weight="bold" color={theme.colors.black}>
                    {project.name}
                  </Text>
                  <Text size="17px" color={theme.colors.green}>
                    Mendy
                  </Text>
                  <Text size="17px" color={theme.colors.grey600}>
                    {project.type === 1 ? "Internal project" : "External project"}
                  </Text>
                  {!isEditClicked && (
                    <Wrapper display="flex" align="center">
                      <Calendar className="mt-2 mr-1" />
                      <Text
                        size="17px"
                        color={theme.colors.black}
                        className="mt-3"
                      >
                        Finished - {project.start_date} - {project.end_date}
                      </Text>
                    </Wrapper>
                  )}
                  {isEditClicked && (
                    <Wrapper display="flex" align="center" className="mt-4">
                      <Wrapper
                        display="flex"
                        flow="column wrap"
                        className="mr-5"
                      >
                        <Text size="1rem" color={theme.colors.grey800}>
                          Start date
                        </Text>
                        <DateInput
                          type="date"
                          defaultValue={newStartDate}
                          onChange={(event) =>
                            setNewStartDate(event.target.value)
                          }
                          style={{ padding: "0.3rem 0.5rem" }}
                        />
                      </Wrapper>
                      <Wrapper display="flex" flow="column wrap">
                        <Text size="1rem" color={theme.colors.grey800}>
                          End date
                        </Text>
                        <DateInput
                          type="date"
                          defaultValue={newEndDate}
                          onChange={(event) =>
                            setNewEndDate(event.target.value)
                          }
                          style={{ padding: "0.3rem 0.5rem" }}
                        />
                      </Wrapper>
                    </Wrapper>
                  )}
                </Wrapper>
              </Wrapper>

              <Wrapper
                display="flex"
                direction="column"
                justify="space-between"
                width="7rem"
                height="5.5rem"
              >
                {!isEditClicked && (
                  <Button
                    border="1px solid #C6C6C6"
                    borderRadius="4px"
                    onClick={editProject}
                  >
                    <Text size="14px" color={theme.colors.black}>
                      Edit
                    </Text>
                  </Button>
                )}
                {isEditClicked && (
                  <Button
                    border="1px solid #C6C6C6"
                    borderRadius="4px"
                    onClick={saveEditedProject}
                  >
                    <Text size="14px" color={theme.colors.black}>
                      Save
                    </Text>
                  </Button>
                )}
                <Button border="1px solid #FE2727" borderRadius="4px">
                  <Text size="14px" color={theme.colors.red}>
                    Delete project
                  </Text>
                </Button>
              </Wrapper>
            </Wrapper>
          </Container>
        </Header>

        <Body>
          <Container padding="2rem 0">
            <Wrapper border="1px solid #F1F1F1">
              <Container padding="0 4rem 3rem 4rem">
                <Wrapper display="flex">
                  <Text
                    size="20px"
                    weight="bold"
                    color={theme.colors.black}
                    className="mb-3"
                  >
                    Technologies
                  </Text>
                  <Add
                    style={{ cursor: "pointer" }}
                    className="ml-2"
                    onClick={() => setIsAddSkillsOpened(true)}
                  />
                </Wrapper>
                {!isAddSkillsOpened && (
                  <Wrapper>
                    <Wrapper
                      display="grid"
                      gridTemplateColumns="repeat(5,1fr)"
                      justify="space-between"
                      width="100%"
                      gap="0.4rem"
                    >
                      <ModalSkillList skills={project.skills} />
                    </Wrapper>
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
              </Container>
            </Wrapper>

            <Wrapper border="1px solid #F1F1F1">
              <Container padding="2rem 4rem 4rem 4rem">
                <Wrapper>
                  <Title
                    size="20px"
                    weight="bold"
                    color={theme.colors.black}
                    className="pb-4"
                  >
                    Description
                  </Title>
                  {!isEditClicked && (
                    <Text
                      size="17px"
                      color={theme.colors.black}
                      className="mt-4"
                    >
                      {project.description}
                    </Text>
                  )}
                  {isEditClicked && (
                    <StyledTextarea
                      value={newDes}
                      style={{ height: "10rem" }}
                      onChange={(event) => setNewDesc(event.target.value)}
                    ></StyledTextarea>
                  )}
                </Wrapper>
              </Container>
            </Wrapper>

            <Wrapper>
              <Container padding="2rem 4rem">
                <Text
                  size="20px"
                  weight="bold"
                  color={theme.colors.black}
                  className="pb-5"
                >
                  People
                </Text>

                <Wrapper
                  display="flex"
                  direction="column"
                  style={{ gap: "1.5rem" }}
                >
                  {project.users?.map((employee) => {
                    return (
                      <Employee
                        key={employee.user.id}
                        user={employee.user}
                        boxShadow="0px 4px 13px rgba(0,0,0,0.20)"
                      />
                    );
                  })}
                </Wrapper>
              </Container>
            </Wrapper>
          </Container>
        </Body>
      </Content>
    </Modal>
  );
};

export default ProjectModal;
