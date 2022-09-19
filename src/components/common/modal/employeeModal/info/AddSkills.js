import React, { useEffect } from "react";
import Wrapper from "../../../wrapper/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { StyledInput, StyledSelect } from "../../../UI/FormParts.styled";
import { getAllSkills } from "../../../../../services/TechnologyServices";
import {
  StyledSuggestions,
  StyledSuggestionsOption,
} from "./Suggestions.styled";
import { Title } from "../../../text/Title.styled";
import { theme } from "../../../../../style/Theme";

const AddSkills = ({
  setIsAddSkillsOpened,
  setSkillId,
  setLevelValue,
  setSaveIsClicked,
}) => {
  const [skills, setSkills] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { data: dataSkills } = useQuery(["skills"], getAllSkills);

  useEffect(() => {
    setSkills(dataSkills);
  }, [dataSkills]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = skills?.filter((skill) => {
        const regex = new RegExp(`${text}`, "gi");
        return skill.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text, id) => {
    setText(text);
    setSuggestions([]);
    setSkillId(id);
  };

  const getSelectedLevel = (value) => {
    setLevelValue(value);
  };

  const saveAddingSkill = () => {
    setText("");
    setSaveIsClicked(true);
    setIsAddSkillsOpened(false);
  };

  const cancelAddingSkill = () => {
    setText("");
    setIsAddSkillsOpened(false);
  };

  return (
    <Wrapper display="flex" align="center">
      <Wrapper style={{ position: "relative" }}>
        <StyledInput
          type="text"
          value={text}
          width="12rem"
          onChange={(event) => onChangeHandler(event.target.value)}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 300);
          }}
          className="mr-3"
        />
        {suggestions.length > 0 && (
          <StyledSuggestions>
            {suggestions.map((suggestion) => (
              <StyledSuggestionsOption
                key={suggestion.id}
                onClick={() => onSuggestHandler(suggestion.name, suggestion.id)}
              >
                {suggestion.name}
              </StyledSuggestionsOption>
            ))}
          </StyledSuggestions>
        )}
      </Wrapper>
      <StyledSelect
        width="12rem"
        height="1.6rem"
        onChange={(event) => getSelectedLevel(event.target.value)}
      >
        <option value="3">High</option>
        <option value="2">Mid</option>
        <option value="1">Low</option>
      </StyledSelect>
      <Title
        size="1rem"
        color={theme.colors.green}
        className="ml-4 mr-4"
        onClick={saveAddingSkill}
      >
        Save
      </Title>
      <Title
        size="1rem"
        color={theme.colors.grey100}
        onClick={cancelAddingSkill}
      >
        Cancel
      </Title>
    </Wrapper>
  );
};

export default AddSkills;
