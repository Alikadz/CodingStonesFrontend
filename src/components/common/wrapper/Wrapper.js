import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ display }) => display && `display:${display};`}
  ${({ gridTemplateColumns }) => gridTemplateColumns && `grid-template-columns:${gridTemplateColumns};`}
  ${({ direction }) => direction && `flex-direction:${direction};`}
  ${({ align }) => align && `align-items:${align};`}
  ${({ justify }) => justify && `justify-content:${justify};`}
  ${({ flow }) => flow && `flex-flow:${flow};`}
  ${({ width }) => width && `width:${width};`}
  ${({ height }) => height && `height:${height};`}
  ${({ background }) => background && `background-color:${background};`}
  ${({ border }) => border && `border-bottom:${border};`}
  ${({ flex }) => flex && `flex:${flex};`}
  ${({ gap }) => gap && `gap:${gap};`}
  ${({ padding }) => padding && `padding:${padding};`}
  ${({ marginTop }) => marginTop && `margin-top:${marginTop};`}



  list-style: none;
`;

export default Wrapper;
