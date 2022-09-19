import {
  Container,
  Header,
  Content,
  Exit,
} from "../../components/common/modal/Modal.styled";
import ModalSubskillList from "../../components/common/modal/ModalSubskillList";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import Employee from "../../components/employee/employeeCard/EmployeeCard";
import { Button } from "../../components/common/button/Button.styled";
import { Text } from "../../components/common/text/Text.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import Modal from "../../components/common/modal/Modal";
import ScrollDisabler from "../../style/Global";
import { theme } from "../../style/Theme";
import React, { useState } from "react";
import { Form, Input } from "./TechnologyModal.styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSkill } from "../../services/TechnologyServices";
import ReactDOM from "react-dom";

const SkillModal = ({ close, skill, users, subskills }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState({ ...skill });
  const queryClient = useQueryClient();
  const portalRoot = document.getElementById("portal");

  const { isLoading, mutate } = useMutation(updateSkill, {
    onSuccess: (data) => {
      queryClient.setQueryData(["skill", skill.id], data);
      setIsEdit(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const editHandler = (event) => {
    event.preventDefault();
    mutate(fields);
  };
  const handleBlur = (e) => {
    close();
  };
  if (isLoading) {
    return "Saving your changes";
  }
  return ReactDOM.createPortal(
    <Modal align="flex-end" onBlur={(e) => handleBlur(e)}>
      <Content width="54%" height="89%">
        {!isEdit && (
          <Header>
            <Exit>
              <ArrowLeft onClick={close} cursor="pointer" />
            </Exit>
            <Container padding="0 3rem 3rem 5rem">
              <Wrapper display="flex" justify="space-between" align="center">
                <Text size="1.5rem" weight="bold" color={theme.colors.black}>
                  {skill.name}
                </Text>
                <Wrapper display="grid" gap=".5rem">
                  <Button
                    fontSize="0.875rem"
                    padding=".5rem 1rem"
                    border="1px solid #C6C6C6"
                    color={theme.colors.black}
                    onClick={() => setIsEdit(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    fontSize="0.875rem"
                    padding=".5rem 1rem"
                    border="1px solid #FF7474"
                    color={theme.colors.red}
                  >
                    Delete tech
                  </Button>
                </Wrapper>
              </Wrapper>
            </Container>
          </Header>
        )}
        {isEdit && (
          <Header>
            <Exit>
              <ArrowLeft onClick={close} cursor="pointer" />
            </Exit>
            <Container padding="0 3rem 3rem 5rem">
              <Wrapper display="flex" justify="space-between" align="center">
                <Wrapper flex="1">
                  <Form width="50%">
                    <Text size="1rem" color={theme.colors.grey800}>
                      Technology name:
                    </Text>
                    <Input
                      type="text"
                      defaultValue={skill.name}
                      onChange={handleChange}
                    />
                  </Form>
                </Wrapper>
                <Wrapper display="grid" gap=".5rem">
                  <Button
                    fontSize="0.875rem"
                    padding=".5rem 1rem"
                    border="1px solid #C6C6C6"
                    color={theme.colors.black}
                    onClick={editHandler}
                  >
                    Save
                  </Button>
                  <Button
                    fontSize="0.875rem"
                    padding=".5rem 1rem"
                    border="1px solid #FF7474"
                    color={theme.colors.red}
                  >
                    Delete tech
                  </Button>
                </Wrapper>
              </Wrapper>
            </Container>
          </Header>
        )}
        <Wrapper
          padding="0 3rem 2rem 5rem"
          background={theme.colors.white}
          border="1px solid #F1F1F1"
        >
          <Wrapper padding="2rem 0 1rem 0">
            <Text
              size="1.25rem"
              weight="bold"
              color={theme.colors.black}
              className="pb-5"
            >
              Subtechnologies
            </Text>
            {subskills.length > 0 ? (
              <Wrapper
                display="grid"
                gridTemplateColumns="repeat(5,1fr)"
                gap=".4rem"
              >
                <ModalSubskillList subskills={subskills} />
              </Wrapper>
            ) : (
              <Text size="1rem" weight="regular" color={theme.colors.black}>
                No subtechnologies
              </Text>
            )}
          </Wrapper>
        </Wrapper>
        <Container
          padding="2rem 3rem 3rem 5rem"
          background={theme.colors.white}
        >
          <Text
            size="1.25rem"
            weight="bold"
            color={theme.colors.black}
            className="pb-4"
          >
            People
          </Text>
          <Wrapper display="flex" direction="column" gap="1.5rem">
            {users?.map((user) => (
              <Employee
                key={user.user.id}
                user={user.user}
                subskills={subskills}
                boxShadow="0px 4px 13px rgba(0,0,0,0.29)"
              />
            ))}
          </Wrapper>
        </Container>
      </Content>
      <ScrollDisabler />
    </Modal>,
    portalRoot
  );
};

export default SkillModal;
