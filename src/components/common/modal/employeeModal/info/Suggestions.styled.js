import styled from "styled-components";
import { theme } from "../../../../../style/Theme";

export const StyledSuggestions = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  width: 12rem;
  position: absolute;
  top: 1.6rem;
  background-color: white;
`;

export const StyledSuggestionsOption = styled.div`
  &:hover {
    background-color: ${theme.colors.green};
  }
`;
