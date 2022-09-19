import styled from "styled-components";

export const StyledAvatarCirclePopup = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.29);
  border-radius: 8px;
  position: absolute;
  left: 3rem;
  top: 0.1rem;
  z-index: 999;
  width: 200px;
`;
