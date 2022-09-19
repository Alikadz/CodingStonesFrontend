import styled from "styled-components";

export const StyledResourcePlanning = styled.div`
  width: 100%;
  padding: 2rem 4rem 1rem 10rem;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  justify-items: center;
  align-items: start;
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.grey900};
  opacity: 0.2;
  width: 1px;
  height: 100%;
`;

export const ResourceWrapper = styled.div`
  max-width: 520px;
  width: 100%;
  height: 87vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
