import styled from "styled-components";

export const Text = styled.p`
  ${({ size }) => size && `font-size: ${size};`}
  ${({ weight }) => weight && `font-weight: ${weight};`} 
  ${({ color }) => color && `color: ${color};`}
  ${({ opacity }) => opacity && `opacity:${opacity};`}
`;
