import styled from "styled-components";

export const ProjectName = styled.p`
  color: ${({ theme }) => theme.colors.grey800};
  font: normal normal normal 17px/20px Inter;
`;

export const LeadCards = styled.div`
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

export const Hours = styled.h2`
  font: normal normal bold 20px/24px Inter;
  letter-spacing: 0px;
  color: #4d5058;
  opacity: 1;
`;

export const Description = styled.p`
  font: normal normal normal 17px/24px Inter;
`;
