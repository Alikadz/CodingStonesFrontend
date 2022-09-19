import styled from "styled-components";

export const StyledSkill = styled.div`
  border-radius: 4px;
  padding: 0.2rem 1.5rem;
  display: flex;
  justify-content: center;
  ${({ justify }) => 'center' && `justify-content: ${justify};`}

  align-items: center;
  ${({ background }) => background && `background-color: ${background};`}
  margin: 0.3rem 0.3rem 0 0;
`;

export const SkillsEmployeeWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-flow: column wrap;
  }
`;

export const StyledMoreSkills = styled.div`
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem 0 0 0;
  position: relative;
`;

export const StyledMoreSkillsPopup = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
  border-radius: 8px;
  position: absolute;
  left: 5rem;
  top: 0.1rem;
  z-index: 1;

  @media (max-width: 700px) {
    left: -1.5rem;
    top: 2rem;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
