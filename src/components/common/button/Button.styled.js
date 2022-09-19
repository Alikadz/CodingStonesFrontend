import styled from "styled-components";

export const Button = styled.button`
  ${({ padding }) =>
    padding !== undefined ? `padding:${padding}` : `padding: 0.5rem 2rem`};
  ${({ backgroundColor }) =>
    backgroundColor !== undefined
      ? `background-color:${backgroundColor}`
      : `background-color: ${({ theme }) => theme.colors.green}`};
  ${({ fontSize }) =>
    fontSize !== undefined ? `font-size: ${fontSize}` : `font-size:17px`};
  ${({ color }) =>
    color !== undefined
      ? `color: ${color}`
      : `color:${({ theme }) => theme.colors.white}`};
  ${({ border }) => border && `border:${border};`}
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
