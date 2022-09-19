import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  ${({ columns }) =>
    columns
      ? `grid-template-columns: ${columns};`
      : `grid-template-columns:  repeat(2, 1fr);`}
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;