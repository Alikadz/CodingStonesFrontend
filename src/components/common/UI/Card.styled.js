import styled from "styled-components";
import { theme } from "../../../style/Theme";

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  padding: 1.7rem;
  position: relative;

  ${({ isClicked, matched }) => {
    if (!isClicked && !matched) {
      return `background-color: white; pointer-events: auto`;
    } else if (isClicked && matched) {
      return `background-color: white;
              pointer-events: auto;
              &::after {
                content: "";
                background-color: ${theme.colors.green};
                border-radius: 0px 0 4px 4px;
                width: 100%;
                height: 10px;
                position: absolute;
                bottom: 0rem;
                animation: bottomSlider 0.5s linear forwards;

              }

              @keyframes bottomSlider {
                from {
                  left: -33rem;
                }
                to {
                  left: 0rem;
                }
              }
              `;
    } else if (!isClicked && matched) {
      return `background-color: white; pointer-events: auto`;
    } else if (isClicked && !matched) {
      return `background-color: white; 
              opacity: 0.5;
              pointer-events: none
             `;
    }
  }}
`;
