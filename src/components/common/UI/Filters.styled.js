import styled from "styled-components";

export const Filters = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  position: fixed;
  /* padding: 2rem 1.5rem ; */
  height: 85%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1040px) {
    position: sticky;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;
    width: 80%;
  }

  @media (max-width: 612px) {
    grid-template-columns: 1fr;
  }
`;

export const UOList = styled.ul`
  ${({ display }) => display && `display:${display};`};
  list-style: none;
  ${({ borderBottom }) => borderBottom && `border-bottom:${borderBottom};`};
`;

export const Item = styled.li`
  padding: 0.8rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey400};
    color: ${({ theme }) => theme.colors.green};
  }

  background-color: ${({ active }) =>
    active ? ({ theme }) => theme.colors.grey400 : "none"};

  color: ${({ active }) =>
    active ? ({ theme }) => theme.colors.green : "none"};
`;
