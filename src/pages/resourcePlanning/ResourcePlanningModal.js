import React from "react";
import Modal from "../../components/common/modal/Modal";
import { Title } from "../../components/common/text/Title.styled";
import {
  Form,
  Input,
  Buttons,
  Span,
} from "../technologies/TechnologyModal.styled";
import { Button } from "../../components/common/button/Button.styled";
import { theme } from "../../style/Theme";
import { Content } from "../../components/common/modal/Modal.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import { Text } from "../../components/common/text/Text.styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { assigningActions } from "../../store/Assigning-Slice";
import axios from "axios";

const ResourcePlanningModal = ({ align }) => {
  let employeeId = useSelector((state) => state.assigning.employeeId);
  let percentage = useSelector((state) => state.assigning.percentage);
  const serviceId = useSelector((state) => state.resourcePlanning.serviceId);
  const dispatch = useDispatch();

  const url = `https://stg-coding-stones-api.zendev.se/services/${serviceId}/user`;

  const assignUserToService = async (event) => {
    event.preventDefault();
    try {
      await axios.put(url, {
        user_id: employeeId,
        percentage: percentage,
      });
    } catch (error) {
      alert(error.message);
    }
    dispatch(assigningActions.closeModal());
    dispatch(assigningActions.setIsAssigned());
  };

  const changePercentage = (event) => {
    percentage = event.target.value;
    dispatch(assigningActions.setPercentage({ percentage }));
  };

  return (
    <Modal align={align}>
      <Content padding="3rem 8rem" background={theme.colors.white}>
        <Wrapper
          display="flex"
          flow="column wrap"
          align="center"
          className="mb-16"
        >
          <Title size="20px" weight="bold" color={theme.colors.black}>
            Assign employee to lead
          </Title>
          <Text>Please select the hour percentage for this lead</Text>
        </Wrapper>

        <Form align="center" position="relative">
          <Wrapper display="flex" align="center" width="30%">
            <Input
              type="text"
              id="percentage"
              value={percentage}
              onInput={changePercentage}
            />
            <Span>%</Span>
          </Wrapper>
          <Buttons>
            <Button
              type="submit"
              backgroundColor={theme.colors.green}
              color={theme.colors.white}
              borderRadius="4px"
              onClick={assignUserToService}
            >
              Assign
            </Button>
            <Button
              backgroundColor={theme.colors.white200}
              color={theme.colors.black}
              onClick={() => dispatch(assigningActions.closeModal())}
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

export default ResourcePlanningModal;
