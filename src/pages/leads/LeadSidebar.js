import React from "react";
import { UOList, Item } from "../../components/common/UI/Filters.styled";
import { Text } from "../../components/common/text/Text.styled";
import { useNavigate } from "react-router-dom";
import { theme } from "../../style/Theme";

const LeadSidebar = ({
  filter,
  subfilter,
  setIsFilterClicked,
  searchParams,
  search,
}) => {
  const navigate = useNavigate();

    const leadFilter = (filter, subfilter) => {
    navigate({
      pathname: "/leads",
      search: `?name=${search}&filter=${filter}&subfilter=${subfilter}`,
    });
    setIsFilterClicked(true);
  };
  return (
    <>
      <UOList className="pb-8 pt-10 pr-7 pl-7" borderBottom="1px solid #F0F0F0">
        <Text
          size="1.2rem"
          weight="bold"
          color={theme.colors.black}
          className="pb-10"
        >
          Lead status
        </Text>
        <Item
          onClick={() => {
            leadFilter("all",subfilter)
          }}
          active={searchParams.get("filter") === "all"}
          className={"text-lg"}
        >
          All leads
        </Item>
        <Item
          onClick={() => {
            leadFilter("hot",subfilter)
            setIsFilterClicked(true);
          }}
          active={searchParams.get("filter") === "hot"}
          className={"text-lg"}
        >
          Hot leads
        </Item>
        <Item
          onClick={() => {
            leadFilter("mild",subfilter)
            setIsFilterClicked(true);
          }}
          active={searchParams.get("filter") === "mild"}
          className={"text-lg"}
        >
          Mild leads
        </Item>
        <Item
          onClick={() => {
            leadFilter("cold",subfilter)
            setIsFilterClicked(true);
          }}
          active={searchParams.get("filter") === "cold"}
          className={"text-lg"}
        >
          Cold leads
        </Item>
      </UOList>
      <UOList className="pt-8 pl-7 pr-7">
        <Text
          size="1.2rem"
          weight="bold"
          color={theme.colors.black}
          className="pb-10"
        >
          Number of positions
        </Text>
        <Item
          onClick={() => {
            leadFilter(filter,"all")
          }}
          active={searchParams.get("subfilter") === "all"}
          className={"text-lg"}
        >
          All
        </Item>
        <Item
          onClick={() => {
            leadFilter(filter,"one_to_three")
          }}
          active={searchParams.get("subfilter") === "one_to_three"}
          className={"text-lg"}
        >
          1-3 persons
        </Item>
        <Item
          onClick={() => {
            leadFilter(filter,"three_to_five")
          }}
          active={searchParams.get("subfilter") === "three_to_five"}
          className={"text-lg"}
        >
          3-5 persons
        </Item>
        <Item
          onClick={() => {
            leadFilter(filter,"five_plus")
          }}
          active={searchParams.get("subfilter") === "five_plus"}
          className={"text-lg"}
        >
          5+ persons
        </Item>
      </UOList>
    </>
  );
};

export default LeadSidebar;