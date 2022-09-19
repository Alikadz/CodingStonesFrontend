import React, { useState } from "react";
import Modal from "../../components/common/modal/Modal";
import { Title } from "../../components/common/text/Title.styled";
import { Label, Form, Input, Buttons } from "./TechnologyModal.styled";
import { Button } from "../../components/common/button/Button.styled";
import { theme } from "../../style/Theme";
import axios from "axios";
import { Content } from "../../components/common/modal/Modal.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";

const TechnologyModal = ({ closeModal, align }) => {
  const [name, setName] = useState("");

  const addSkill = (event) => {
    event.preventDefault();
    axios.post("https://stg-coding-stones-api.zendev.se/skills/", {
      name,
    });
    closeModal(false);
  };

  return (
    <Modal align={align}>
      <Content padding="3rem 11rem" background={theme.colors.white}>
        <Wrapper display="flex" justify="center">
          <Title
            size="20px"
            weight="bold"
            color={theme.colors.black}
            className="pb-8"
          >
            Add new technology
          </Title>
        </Wrapper>

        <Form>
          <Label htmlFor="name">Title</Label>
          <Input
            type="text"
            id="name"
            placeholder="Technology name"
            onChange={(e) => setName(e.target.value)}
          />

          <Buttons>
            <Button
              type="submit"
              backgroundColor={theme.colors.green}
              color={theme.colors.white}
              onClick={addSkill}
              borderRadius="4px"
            >
              Add
            </Button>
            <Button
              backgroundColor={theme.colors.white200}
              color={theme.colors.black}
              onClick={() => closeModal(false)}
              borderRadius="4px"
            >
              Cancel
            </Button>
          </Buttons>
        </Form>
      </Content>
    </Modal>
  );
};

export default TechnologyModal;
