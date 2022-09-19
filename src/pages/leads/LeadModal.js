import {
  Header,
  Exit,
  Body,
  Container,
} from "../../components/common/modal/Modal.styled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { Button } from "../../components/common/button/Button.styled";
import { Content } from "../../components/common/modal/Modal.styled";
import { ReactComponent as Mild } from "../../assets/icons/Mild.svg";
import { ReactComponent as Cold } from "../../assets/icons/Cold.svg";
import { ReactComponent as Add } from "../../assets/icons/Add1.svg";
import { ReactComponent as Hot } from "../../assets/icons/Hot.svg";
import { Title } from "../../components/common/text/Title.styled";
import { getAllServices } from "../../services/ServiceServices";
import { Text } from "../../components/common/text/Text.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import ServiceCard from "../../components/leads/ServiceCard";
import Modal from "../../components/common/modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { theme } from "../../style/Theme";
import React from "react";
import { useState } from "react";
import { StyledTextarea } from "../../components/common/UI/Textarea.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LeadModal = ({
  lead,
  close,
  openLead,
  setOpenLead,
  align
}) => {
  const navigate = useNavigate();

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [newDes, setNewDesc] = useState(lead.description);

  const {
    data: dataServices,
    isError,
    isLoading,
  } = useQuery(["services"], getAllServices);

  const editLead = () => {
    setIsEditClicked(!isEditClicked);
  };

  const saveEditedLead = () => {
    axios.patch(`https://stg-coding-stones-api.zendev.se/leads/${lead.id}`, {
      description: newDes,
    });
    setIsEditClicked(false);
  };

  const handleBlur = (e) =>{
    close();
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (isError) {
    return <p>Error ...</p>;
  }
  return (
    <Modal align={align} onBlur={(e)=> handleBlur(e)}>
      <Content background={theme.colors.white} width="50%" height="90%">
        <Header>
          <Exit>
            <ArrowLeft
              onClick={() => {
                setOpenLead(false);
              }}
              cursor="pointer"
            />
          </Exit>

          <Container padding="0 4rem 2rem 4rem">
            <Wrapper display="flex" justify="space-between">
              <Wrapper>
                <Wrapper className="pb-3">
                  {lead.probability === "Hot" ? (
                    <Hot />
                  ) : lead.probability === "Mild" ? (
                    <Mild />
                  ) : lead.probability === "Cold" ? (
                    <Cold />
                  ) : null}
                </Wrapper>
                <Wrapper>
                  <Title size="24px" color={theme.colors.black} weight="bold">
                    {lead.name}
                  </Title>
                  <Text size="17px" color={theme.colors.green}>
                    {lead.company_name}
                  </Text>
                </Wrapper>
              </Wrapper>

              <Wrapper>
                <Wrapper display="grid">
                  {!isEditClicked ? (
                    <Button
                      fontSize="14px"
                      color={theme.colors.black}
                      border="1px solid #C6C6C6"
                      borderRadius="4px"
                      className="mb-2"
                      onClick={editLead}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      fontSize="14px"
                      color={theme.colors.black}
                      border="1px solid #C6C6C6"
                      borderRadius="4px"
                      className="mb-2"
                      onClick={saveEditedLead}
                    >
                      Save
                    </Button>
                  )}

                  <Button
                    fontSize="14px"
                    color={theme.colors.red}
                    border="1px solid #FF7474"
                    borderRadius="4px"
                  >
                    Archive lead
                  </Button>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </Header>

        <Body>
          <Container padding="2rem 0">
            <Wrapper border="1px solid #F1F1F1" className="pb-5">
              <Container padding="0 4rem 1rem 4rem">
                <Title
                  size="20px"
                  weight="bold"
                  color={theme.colors.black}
                  className="pb-4"
                >
                  Description
                </Title>
                {!isEditClicked && (
                  <Text size="17px" color={theme.colors.black}>
                    {lead.description}
                  </Text>
                )}
                {isEditClicked && (
                  <StyledTextarea
                    value={newDes}
                    onChange={(event) => setNewDesc(event.target.value)}
                  ></StyledTextarea>
                )}
              </Container>
            </Wrapper>

            <Wrapper border="1px solid #F1F1F1">
              <Container padding="1rem 4rem 1rem 4rem">
                <Title
                  size="20px"
                  weight="bold"
                  color={theme.colors.black}
                  className="pb-2"
                >
                  Source
                </Title>
                <Text size="17px" color={theme.colors.black}>
                  Michael Brown - mendy.se
                </Text>
              </Container>
            </Wrapper>

            <Wrapper border="1px solid #F1F1F1">
              <Container padding="1rem 4rem 1rem 4rem">
                <Wrapper className="pb-4">
                  <Title
                    size="20px"
                    weight="bold"
                    color={theme.colors.black}
                    className="pb-2"
                  >
                    Contact
                  </Title>
                  <Text size="17px" color={theme.colors.black}>
                    Michael Brown | email@email.com
                  </Text>
                </Wrapper>

                <Wrapper>
                  <Title
                    size="20px"
                    weight="bold"
                    color={theme.colors.black}
                    className="pb-2"
                  >
                    Our Contact
                  </Title>
                  <Text size="17px" color={theme.colors.black}>
                    Mirko Zovko
                  </Text>
                </Wrapper>
              </Container>
            </Wrapper>

            <Wrapper border="1px solid #F1F1F1">
              <Container padding="1rem 4rem 1rem 4rem">
                <Wrapper display="flex" className="pb-2">
                  <Title size="20px" weight="bold" color={theme.colors.black}>
                    Documents
                  </Title>
                  <Add className="ml-2" />
                </Wrapper>
                <Text size="17px" color={theme.colors.black}>
                  Mendy_mobile_briefing.PDF
                </Text>
              </Container>
            </Wrapper>

            <Wrapper border="1px solid #F1F1F1">
              <Container padding="1rem 4rem 1rem 4rem">
                <Wrapper display="flex" justify="space-between">
                  <Wrapper display="flex">
                    <Title size="20px" weight="bold" color={theme.colors.black}>
                      Positions
                    </Title>
                    <Add className="ml-2" />
                  </Wrapper>
                  <Button
                    backgroundColor={theme.colors.green}
                    color={theme.colors.white}
                    borderRadius="4px"
                    onClick={() => {
                      navigate({
                        pathname: "/resource-planning",
                      });
                    }}
                  >
                    Assign resources
                  </Button>
                </Wrapper>

                <Wrapper
                  display="grid"
                  gridTemplateColumns="1fr"
                  style={{ gap: "1.5rem" }}
                  className="mt-5"
                >
                  {dataServices?.map((service) => {
                    return lead.id === service.lead.id ? (
                      <ServiceCard
                        boxShadow="0px 4px 13px rgba(0,0,0,0.2)"
                        key={service.id}
                        id={service.id}
                        service_name={service.name}
                        lead_name={service.lead.name}
                        skills={service.skills}
                        currency={service.currency}
                        quantity={service.quantity}
                        hourly_rate={service.hourly_rate}
                        description={service.lead.description}
                        probability={service.lead_probability}
                        start_date={service.start_date}
                        end_date={service.end_date}
                        user={service.user}
                        insideModal
                        className="mt-4"
                      />
                    ) : (
                      ""
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

export default LeadModal;
