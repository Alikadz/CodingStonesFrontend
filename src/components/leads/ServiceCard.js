import React from "react";
import { StyledCard } from "../common/UI/Card.styled";
import Wrapper from "../common/wrapper/Wrapper";
import { Text } from "../common/text/Text.styled";
import { theme } from "../../style/Theme";
import { ReactComponent as Hot } from "../../assets/icons/Hot.svg";
import { ReactComponent as Mild } from "../../assets/icons/Mild.svg";
import { ReactComponent as Cold } from "../../assets/icons/Cold.svg";
import { ProjectName, Description } from "../../pages/leads/Leads.styled";
import AvatarImage from "../common/avatar/AvatarImage";
import SkillList from "../common/skill/SkillList";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { resourcePlanningActions } from "../../store/ResourcePlanning-Slice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button/Button.styled";
import { DateInput } from "../common/UI/FormParts.styled";
import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editServices } from "../../services/ServiceServices";
import { useEffect } from "react";

const ServiceCard = ({
  boxShadow,
  currency,
  data,
  description,
  hourly_rate,
  id,
  lead_name,
  probability,
  quantity,
  service_name,
  skills,
  start_date,
  end_date,
  user,
  insideModal = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [serviceClickable, setServiceClickable] = useState(true);
  const [cursor, setCursor] = useState("context-menu");
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [newStartDate, setNewStartDate] = useState(start_date);
  const [newEndDate, setNewEndDate] = useState(end_date);

  const serviceIdRedux = useSelector(
    (state) => state.resourcePlanning.serviceId
  );

  const isServiceClicked = useSelector(
    (state) => state.resourcePlanning.isServiceClicked
  );
  const isEmployeeClicked = useSelector(
    (state) => state.resourcePlanning.isEmployeeClicked
  );

  const [matched, setMatched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const matchEmployeesHandler = (serviceId) => {
    if (serviceClickable) {
      if (window.location.pathname === "/resource-planning") {
        dispatch(resourcePlanningActions.matchEmployees({ serviceId }));
        navigate({
          pathname: "/resource-planning",
          search: !isServiceClicked ? `service=${serviceId}` : "",
        });
        if (data?.find((service) => service.id == serviceId)) {
          setIsClicked(!isClicked);
          setMatched(!matched);
        }
      }
    }
  };

  /* const mutation = useMutation(
    axios.put(`https://stg-coding-stones-api.zendev.se/services/${id}`, {
      start_date: newStartDate,
      end_date: newEndDate,
    }),
    {
      onSuccess: () => {
        console.log("ado konj");
        queryClient.invalidateQueries(["leads"]);
        queryClient.invalidateQueries(["fiteredLeads"]);
      },
    }
  ); */

  const { mutateAsync: updateService } = useMutation((data) => {
    return editServices(id, { start_date: newStartDate, end_date: newEndDate });
  });

  const saveEditedService = () => {
    setIsEditClicked(false);
    updateService(newStartDate, newEndDate, {
      onSuccess: () => {
        queryClient.invalidateQueries(["leads"]);
        queryClient.invalidateQueries(["fiteredLeads"]);
      },
    });
    /* axios.put(`https://stg-coding-stones-api.zendev.se/services/${id}`, {
      start_date: newStartDate,
      end_date: newEndDate,
    }); */
  };

  useEffect(() => {
    if (isEmployeeClicked) {
      setServiceClickable(false);
      setCursor("context-menu");
    } else if (!isEmployeeClicked) {
      setServiceClickable(true);
      setCursor("pointer");
    }
  }, [isEmployeeClicked]);

  return (
    <>
      <StyledCard
        boxShadow={boxShadow}
        onClick={() => {
          matchEmployeesHandler(id);
        }}
        isClicked={isServiceClicked}
        matched={serviceIdRedux === id}
        cursor={cursor}
      >
        <Wrapper display="flex" justify="space-between">
          <Text size="20px" weight="bold" color={theme.colors.black}>
            {service_name}
          </Text>
          {!insideModal && probability === "Hot" ? (
            <Hot />
          ) : probability === "Mild" ? (
            <Mild />
          ) : probability === "Cold" ? (
            <Cold />
          ) : null}
          {insideModal && !isEditClicked && (
            <Button
              fontSize="14px"
              color={theme.colors.black}
              border="1px solid #C6C6C6"
              borderRadius="4px"
              onClick={() => setIsEditClicked(true)}
            >
              Edit
            </Button>
          )}
          {insideModal && isEditClicked && (
            <Wrapper display="flex">
              <Button
                fontSize="14px"
                color={theme.colors.black}
                border="1px solid #C6C6C6"
                borderRadius="4px"
                className="mr-2"
                onClick={() => setIsEditClicked(false)}
              >
                Cancel
              </Button>
              <Button
                fontSize="14px"
                color={theme.colors.black}
                border="1px solid #C6C6C6"
                borderRadius="4px"
                onClick={saveEditedService}
              >
                Save
              </Button>
            </Wrapper>
          )}
        </Wrapper>
        <ProjectName>{lead_name}</ProjectName>
        <Wrapper display="flex" justify="space-between" className="mt-3 mb-3">
          <SkillList skills={skills} />
          <Wrapper>
            <Text size="20px" color={theme.colors.black} weight="bold">
              {currency === "USD" ? "$" : "EUR"}
              {quantity}/hr
            </Text>
            <Text size="14px" color={theme.colors.grey800}>
              {hourly_rate}hrs
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper>
          {!insideModal && (
            <Description className="mb-3">{description}</Description>
          )}
        </Wrapper>
        <Wrapper display="flex" justify="space-between">
          {user === null ? (
            <Text size="17px" color={theme.colors.grey800}>
              No resources assigned
            </Text>
          ) : (
            <AvatarImage
              img={"https://stg-coding-stones-api.zendev.se/" + user.image_url}
              size="44px"
              className="mt-10"
            />
          )}
          <Wrapper>
            {!isEditClicked && (
              <Text size="17px" color={theme.colors.grey800}>
                {start_date}
              </Text>
            )}
            {isEditClicked && (
              <Wrapper display="flex">
                <Wrapper display="flex" flow="column wrap" className="mr-5">
                  <Text size="1rem" color={theme.colors.grey800}>
                    Start date
                  </Text>
                  <DateInput
                    type="date"
                    defaultValue={newStartDate}
                    onChange={(event) => setNewStartDate(event.target.value)}
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
                    onChange={(event) => setNewEndDate(event.target.value)}
                    style={{ padding: "0.3rem 0.5rem" }}
                  />
                </Wrapper>
              </Wrapper>
            )}
          </Wrapper>
        </Wrapper>
      </StyledCard>
    </>
  );
};

export default ServiceCard;
