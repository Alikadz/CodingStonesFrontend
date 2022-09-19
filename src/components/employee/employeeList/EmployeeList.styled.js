import styled from "styled-components";

export const StyledEmployeeList = styled.div`
  display: grid;
  ${({ columns }) =>
    columns
      ? `grid-template-columns: ${columns};`
      : `grid-template-columns: 1fr 1fr;`}
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1430px) {
    grid-template-columns: 1fr;
  }
`;
