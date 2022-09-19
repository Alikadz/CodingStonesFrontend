import {
  MainContent,
  Manipulation,
  PageWrapper,
  SearchInput,
  SortAdd,
  Sort,
  Option,
} from "../../components/common/UI/PageLayout.styled";
import { Button } from "../../components/common/button/Button.styled";
import { Filters } from "../../components/common/UI/Filters.styled";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { theme } from "../../style/Theme";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getAllProjects,
  getFilteredProjects,
} from "../../services/ProjectServices";
import { useSearchParams } from "react-router-dom";
import ProjectSidebar from "./ProjectSidebar";
import ProjectsList from "./ProjectsList";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const subfilter = searchParams.get("subfilter");
  const search = searchParams.get("name");
  const [text, setText] = useState("");
  const [project, setProject] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery(
    ["projects"],
    getAllProjects
  );

  const { data: filteredProjects } = useQuery(
    ["filteredProjects", filter, subfilter, search],
    getFilteredProjects
  );

  const setInputText = (e) => {
    setText(e.target.value);
  };

  const searchHandler = async () => {
    setSearchParams(`?name=${text}&filter=${filter}&subfilter=${subfilter}`);
  };

  useEffect(() => {
    searchHandler();
  }, [text]);

  if (isLoadingProjects) {
    return <p>Loading ...</p>;
  }

  return (
    <PageWrapper>
      <Filters>
        <ProjectSidebar
          searchParams={searchParams}
          setIsFilterClicked={setIsFilterClicked}
          filter={filter}
          subfilter={subfilter}
          search={search}
        />
      </Filters>

      <MainContent>
        <Manipulation>
          <SearchInput
            placeholder="Search"
            type="text"
            width="49.5%"
            onChange={setInputText}
          />
          <SortAdd>
            <Sort>
              <Option> Sort by </Option>
            </Sort>
            <Button
              padding="1rem 2.5rem"
              color={theme.colors.white}
              backgroundColor={theme.colors.green}
              borderRadius="5px"
            >
              Add new
              <Add className="ml-2" />
            </Button>
          </SortAdd>
        </Manipulation>
        <ProjectsList
          data={dataProjects}
          filteredProjects={filteredProjects}
          setIsFilterClicked={setIsFilterClicked}
          setProject={setProject}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {isOpen && (
        <ProjectModal
          project={project}
          close={(e) => {setIsOpen(false); e.stopPropagation()}}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      </MainContent>
    </PageWrapper>
  );
};

export default Projects;
