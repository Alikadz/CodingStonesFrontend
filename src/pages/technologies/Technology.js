import React, { useState } from "react";
import {
  SearchInput,
  SortAdd,
  Sort,
  Option,
} from "../../components/common/UI/PageLayout.styled";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { Button } from "../../components/common/button/Button.styled";
import { theme } from "../../style/Theme";
import { useQuery } from "@tanstack/react-query";
import { getAllSkillsUsers } from "../../services/TechnologyServices";
import Wrapper from "../../components/common/wrapper/Wrapper";
import TechnologyModal from "./TechnologyModal";
import TechnologyList from "../../components/technologies/TechnologyList";
import SkillModal from "./SkillModal";

const Technology = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [skill, setSkill] = useState({});

  console.log(openSkill);

  const { data, isError, isLoading } = useQuery(
    ["skillsUsers"],
    getAllSkillsUsers
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Wrapper padding="2rem 1rem 1rem 7rem">
      <Wrapper display="flex" justify="space-between">
        <SearchInput placeholder="Search" type="text" width="40%" />
        <SortAdd>
          <Sort>
            <Option>Sort by</Option>
          </Sort>
          <Button
            padding="1rem 2.5rem"
            color={theme.colors.white}
            backgroundColor={theme.colors.green}
            onClick={() => setOpenModal(true)}
          >
            Add new
            <Add className="ml-2" />
          </Button>
        </SortAdd>
      </Wrapper>
      <Wrapper flex="1">
        <TechnologyList
          data={data}
          setOpenSkill={setOpenSkill}
          setSkill={setSkill}
        />
      </Wrapper>
      {openModal && (
        <TechnologyModal closeModal={setOpenModal} align="center" />
      )}
      {openSkill && (
        <SkillModal
          setOpenSkill={setOpenSkill}
          close={(e) => {setOpenSkill(false); e.stopPropagation()}}
          openSkill={openSkill}
          skill={skill}
          users={skill.users}
          subskills={skill.subskills}
        />
      )}
    </Wrapper>
  );
};

export default Technology;
