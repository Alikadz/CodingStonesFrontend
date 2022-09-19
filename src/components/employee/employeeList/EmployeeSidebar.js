import { UOList, Item } from "../../common/UI/Filters.styled";
import { Title } from "../../common/text/Title.styled";
import { Text } from "../../common/text/Text.styled";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../style/Theme";
import React from "react";

const EmployeeSidebar = ({ setIsFilterClicked, filter, subfilter, name }) => {
  const navigate = useNavigate();

  const employeeFilter = (filter, subfilter) => {
    navigate({
      pathname: "/employees",
      search: `?search=${name}&filter=${filter}&subfilter=${subfilter}`,
    });
    setIsFilterClicked(true);
  };
  console.log(name)

  return (
    <>
      <UOList className="pb-8 pt-10 pr-7 pl-7" borderBottom="1px solid #F0F0F0">
        <Text
          size="20px"
          color={theme.colors.black}
          weight="bold"
          className="mb-4"
        >
          Level
        </Text>
        <Item
          onClick={() => {
            employeeFilter("all_roles", subfilter);
          }}
          active={filter === "all_roles"}
          className={'text-lg'}
        >
            All roles
        </Item>
        <Item
          onClick={() => {
            employeeFilter("business_manager", subfilter);
          }}
          active={filter === "business_manager"}
          className={'text-lg'}
        >
            Business Manager
        </Item>
        <Item
          onClick={() => {
            employeeFilter("product_owner", subfilter);
          }}
          active={filter === "product_owner"}
          className={'text-lg'}
        >
            Product Owner
        </Item>
        <Item
          onClick={() => {
            employeeFilter("project_manager", subfilter);
          }}
          active={filter === "project_manager"}
          className={'text-lg'}
        >
            Project Manager
        </Item>
        <Item
          onClick={() => {
            employeeFilter("ui_ux_designer", subfilter);
          }}
          active={filter === "ui_ux_designer"}
          className={'text-lg'}
        >
            UI/UX Designer
        </Item>
        <Item
          onClick={() => {
            employeeFilter("programmer", subfilter);
          }}
          active={filter === "programmer"}
          className={'text-lg'}
        >
            Developer
        </Item>
        <Item
          onClick={() => {
            employeeFilter("qa", subfilter);
          }}
          active={filter === "qa"}
          className={'text-lg'}
        >
          QA
        </Item>
        <Item
          onClick={() => {
            employeeFilter("marketing", subfilter);
          }}
          active={filter === "marketing"}
          className={'text-lg'}
        >
            Marketing
        </Item>
      </UOList>

      <UOList className="pt-8 pl-7 pr-7">
        <Text
          size="20px"
          color={theme.colors.black}
          weight="bold"
          className="mb-4"
        >
          Availability
        </Text>
        <Item
          onClick={() => {
            employeeFilter(filter, "all");
          }}
          active={subfilter === "all"}
          className={'text-lg'}
        >
            All
        </Item>
        <Item
          onClick={() => {
            employeeFilter(filter, "available");
          }}
          active={subfilter === "available"}
          className={'text-lg'}
        >
            Available
        </Item>
        <Item
          onClick={() => {
            employeeFilter(filter, "ongoing");
          }}
          active={subfilter === "ongoing"}
          className={'text-lg'}
        >
            Ongoing
        </Item>
        <Item
          onClick={() => {
            employeeFilter(filter, "ending_soon");
          }}
          active={subfilter === "ending_soon"}
          className={'text-lg'}
        >
            Ending Soon
        </Item>
      </UOList>
    </>
  );
};

export default EmployeeSidebar;
