import styled from "styled-components";

const StyledAvatarImage = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: ${({ margin }) => margin};
  border-radius: 50%;
`;

export const Avatars = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  @media (max-width: 1500px) {
    display: none;
  }

  @media (max-width: 1040px) {
    display: block;
  }

  @media (max-width: 810px) {
    display: none;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const AvatarImage = ({ children, img, size, margin }) => {
  return (
    <AvatarWrapper>
      <StyledAvatarImage src={img} size={size} margin={margin} />
      {children}
    </AvatarWrapper>
  );
};

export default AvatarImage;
