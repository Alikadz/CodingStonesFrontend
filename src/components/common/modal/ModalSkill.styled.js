import styled from "styled-components";

export const StyledModalSkill = styled.div`
  ${({ background }) => background && `background-color: ${background};`}
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  align-items: center;
`;
