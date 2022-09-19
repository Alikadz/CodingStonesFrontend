import { ReactComponent as Calendar } from "../../assets/icons/Calendar.svg";
import { ReactComponent as Cold } from "../../assets/icons/Cold.svg";
import { ReactComponent as Mild } from "../../assets/icons/Mild.svg";
import { ReactComponent as Hot } from "../../assets/icons/Hot.svg";
import { StyledCard } from "../common/UI/Card.styled";
import { Title } from "../common/text/Title.styled";
import { Text } from "../common/text/Text.styled";
import Wrapper from "../common/wrapper/Wrapper";
import { theme } from "../../style/Theme";
import { useState } from "react";
import React from "react";
import LeadModal from "../../pages/leads/LeadModal";

const LeadCard = ({
  id,
  name,
  count,
  description,
  probability,
  start_date,
  company_name,
  total_hours,
  openLead,
  setOpenLead,
  setLead
}) => {
  return (
    <>
      <StyledCard>
        <Wrapper display="flex" justify="space-between">
          <Title
            size="20px"
            weight="bold"
            color={theme.colors.black}
            onClick={() => {
              setOpenLead(true);
              setLead({id, name, count, description, probability, start_date, company_name, total_hours});
            }}
          >
            {name}
          </Title>
          {probability === "Hot" ? (
            <Hot />
          ) : probability === "Mild" ? (
            <Mild />
          ) : probability === "Cold" ? (
            <Cold />
          ) : null}
        </Wrapper>
        <Wrapper display="flex" justify="space-between" className="pb-5">
          <Text size="17px" color={theme.colors.grey800}>
            {count} positions
          </Text>
          <Text size="14px" color={theme.colors.grey800}>
            {total_hours} hrs
          </Text>
        </Wrapper>

        <Wrapper>
          <Text size="17px" color={theme.colors.black}>
            {description}
          </Text>
        </Wrapper>

        <Wrapper
          display="flex"
          justify="flex-end"
          align="center"
          className="pt-5"
        >
          <Calendar className="mr-2" />
          <Text size="17px" color={theme.colors.grey800}>
            {start_date}
          </Text>
        </Wrapper>
      </StyledCard>
    </>
  );
};

export default LeadCard;
