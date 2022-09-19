import React from "react";
import { UOList, Item } from "../../components/common/UI/Filters.styled";
import { theme } from "../../style/Theme";
import { Text } from "../../components/common/text/Text.styled";
import { useNavigate } from "react-router-dom";

const ProjectSidebar = ({
  searchParams,
  setIsFilterClicked,
  filter,
  subfilter,
  search
}) => {
  const navigate = useNavigate();

  const projectFilter = (filter, subfilter) => {
    navigate({
      pathname: "/projects",
      search: `?name=${search}&filter=${filter}&subfilter=${subfilter}`,
    });
    setIsFilterClicked(true);
  };

  return (
    <>
      <UOList className="pb-8 pt-10 pr-7 pl-7" borderBottom="1px solid #F0F0F0">
        <Text
          size="20px"
          weight="bold"
          color={theme.colors.black}
          className="pb-10"
        >
          Projects
        </Text>
        <Item
          onClick={() => {
            projectFilter("all", subfilter);
          }}
          active={filter === "all"}
          className={'text-lg'}
        >
            All projects
        </Item>
        <Item
          onClick={() => {
            projectFilter("internal", subfilter);
          }}
          active={searchParams.get("filter") === "internal"}
          className={'text-lg'}
        >
            Internal projects
        </Item>
        <Item
          onClick={() => {
            projectFilter("external", subfilter);
          }}
          active={searchParams.get("filter") === "external"}
          className={'text-lg'}
        >
            External project
        </Item>
      </UOList>
      <UOList className="pt-8 pl-7 pr-7">
        <Text
          size="20px"
          weight="bold"
          color={theme.colors.black}
          className="pb-10"
        >
          Duration
        </Text>
        <Item
          onClick={() => {
            projectFilter(filter, "all");
          }}
          active={searchParams.get("subfilter") === "all"}
          className={'text-lg'}
        >
            All
        </Item>
        <Item
          onClick={() => {
            projectFilter(filter, "fin_soon");
          }}
          active={searchParams.get("subfilter") === "fin_soon"}
          className={'text-lg'}
        >
            Finishing soon
        </Item>
        <Item
          onClick={() => {
            projectFilter(filter, "ongoing");
          }}
          active={searchParams.get("subfilter") === "ongoing"}
          className={'text-lg'}
        >
            Ongoing
        </Item>
        <Item
          onClick={() => {
            projectFilter(filter, "finished");
          }}
          active={searchParams.get("subfilter") === "finished"}
          className={'text-lg'}
        >
            Finished
        </Item>
      </UOList>
    </>
  );
};

export default ProjectSidebar;
