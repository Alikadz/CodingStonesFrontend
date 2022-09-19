import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem 1rem 1rem 7rem;
  min-height: 30rem;
  max-width: 100%;
  display: flex;

  @media (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Filter = styled.div`
  position: fixed;
  padding: 0 2rem;
  height: 80%;
  border-radius: 0.5rem;
  display: grid;
  grid-column: repeat(2, 1fr);
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

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

export const MainContent = styled.div`
  width: 79%;
  margin-left: 21rem;

  @media (max-width: 1040px) {
    margin-left: 0;
  }
`;

export const Manipulation = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 815px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 49%;
  padding: 0.7rem;
  border-radius: 5px;
  font: normal normal normal 17px/20px Inter;
  outline: none;

  @media (max-width: 1230px) {
    width: 30%;
  }

  @media (max-width: 815px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const SortAdd = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 815px) {
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Sort = styled.select`
  padding: 0.7rem 3rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grey300};

  @media (max-width: 550px) {
    padding: 0.7rem 0.5rem;
  }
`;

export const Option = styled.option``;
