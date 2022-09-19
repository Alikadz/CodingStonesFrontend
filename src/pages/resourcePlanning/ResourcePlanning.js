import React, { useEffect } from "react";
import {
  StyledResourcePlanning,
  Divider,
  ResourceWrapper,
} from "./ResourcePlanning.styled";
import { getAllServices } from "../../services/ServiceServices";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../components/leads/ServiceCard";
import { LeadCards } from "../leads/Leads.styled";
import {
  getUsersForService,
  getServicesForUser,
} from "../../services/ResourcePlanningServices";
import { getAllEmployees } from "../../services/EmployeeServices";
import { StyledEmployeeList } from "../../components/employee/employeeList/EmployeeList.styled";
import Employee from "../../components/employee/employeeCard/EmployeeCard";
import { useSelector } from "react-redux/es/exports";
import ResourcePlanningModal from "./ResourcePlanningModal";
import { Text } from "../../components/common/text/Text.styled";
import { theme } from "../../style/Theme";
import {
  Manipulation,
  SortAdd,
  SearchInput,
  Sort,
  Option,
} from "../../components/common/UI/PageLayout.styled";
import { useDispatch } from "react-redux/es/exports";
import { resourcePlanningActions } from "../../store/ResourcePlanning-Slice";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import EmployeeModal from "../employees/EmployeeModal";

const ResourcePlanning = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector((state) => state.assigning.isModalOpened);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  const isServiceClicked = useSelector(
    (state) => state.resourcePlanning.isServiceClicked
  );
  const serviceId = useSelector((state) => state.resourcePlanning.serviceId);

  const isEmployeeClicked = useSelector(
    (state) => state.resourcePlanning.isEmployeeClicked
  );
  const employeeId = useSelector((state) => state.resourcePlanning.employeeId);

  const { data: dataServices, isLoading: isLoadingLeads } = useQuery(
    ["services"],
    getAllServices
  );

  const { data: dataEmployees, isLoading: isLoadingEmployees } = useQuery(
    ["employees"],
    getAllEmployees
  );

  const { data: dataEmployeesSorted } = useQuery(
    ["employeesSorted", serviceId],
    () => getUsersForService(serviceId),
    { enabled: isServiceClicked }
  );

  const { data: dataServicesSorted } = useQuery(
    ["servicesSorted", employeeId],
    () => getServicesForUser(employeeId),
    { enabled: isEmployeeClicked }
  );

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const employeeParam = searchParams.get("employee");
    if (serviceParam) {
      dispatch(
        resourcePlanningActions.matchEmployees({
          serviceId: parseInt(serviceParam),
        })
      );
    }
    if (employeeParam) {
      dispatch(
        resourcePlanningActions.matchServices({
          employeeId: parseInt(employeeParam),
        })
      );
    }
  }, []);

  if (isLoadingLeads) {
    return <p>Loading...</p>;
  }

  if (isLoadingEmployees) {
    return <p>Loading ... </p>;
  }
  return (
    <StyledResourcePlanning>
      <ResourceWrapper>
        <Text size="20px" weight="bold" color={theme.colors.black}>
          Lead positions
        </Text>
        <Manipulation className="mt-4">
          <SearchInput
            placeholder="Search lead positions"
            type="text"
            style={{ padding: "1.2rem" }}
          />
          <Sort>
            <Option> Sort by </Option>
          </Sort>
        </Manipulation>
        {!isEmployeeClicked ? (
          <LeadCards className="mt-5" columns="1fr">
            {dataServices?.map((service) => {
              return (
                <ServiceCard
                  boxShadow="0px 0px 0px rgba(0,0,0,0)"
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
                  user={service.user}
                  start_date={service.start_date}
                />
              );
            })}
          </LeadCards>
        ) : (
          <LeadCards className="mt-5" columns="1fr">
            {dataServicesSorted?.map((service) => {
              return (
                <ServiceCard
                  boxShadow="0px 0px 0px rgba(0,0,0,0)"
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
                  user={service.user}
                  start_date={service.start_date}
                />
              );
            })}
          </LeadCards>
        )}
      </ResourceWrapper>
      <Divider />
      <ResourceWrapper>
        <Text size="20px" weight="bold" color={theme.colors.black}>
          Resources
        </Text>
        <Manipulation className="mt-4">
          <SearchInput
            placeholder="Search resources"
            type="text"
            style={{ padding: "1.2rem" }}
          />
          <Sort>
            <Option> Sort by </Option>
          </Sort>
        </Manipulation>
        {!isServiceClicked ? (
          <StyledEmployeeList className="mt-5" columns="1fr">
            {dataEmployees?.map((empData) => (
              <Employee
                key={empData.id}
                user={empData}
                showCircle
                setIsOpen={setIsOpen}
                setUser={setUser}
              />
            ))}
          </StyledEmployeeList>
        ) : (
          <StyledEmployeeList
            style={{ display: "flex", flexDirection: "column" }}
            className="mt-5"
            columns="1fr"
          >
            {dataEmployeesSorted?.map((empData) => (
              <Employee
                key={empData.id}
                user={empData}
                showCircle
                setIsOpen={setIsOpen}
                setUser={setUser}
              />
            ))}
          </StyledEmployeeList>
        )}
      </ResourceWrapper>
      {isModalOpened && <ResourcePlanningModal align="center" />}
      {isOpen && (
        <EmployeeModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          close={() => setIsOpen(false)}
          user={user}
        />
      )}
    </StyledResourcePlanning>
  );
};

export default ResourcePlanning;
