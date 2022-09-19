import styled from "styled-components";

export const StyledProjectsPopup = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
  border-radius: 8px;
  position: absolute;
  top: 1.5rem;
  right: 0rem;
  width: 18rem;
  z-index: 2;
`;
