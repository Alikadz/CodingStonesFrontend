import styled from "styled-components";

export const StyledEmployee = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  /* max-width: 520px; */
  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0.3rem;
  }
`;

export const StyledEmployeeWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-flow: column wrap;
  }
`;
