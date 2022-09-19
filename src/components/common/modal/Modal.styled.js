import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(7, 7, 7, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${({ align }) => align && `align-items:${align};`}
  z-index: 2;
`;

export const Content = styled.div`
  ${({ padding }) => padding && `padding:${padding};`}
  ${({ background }) => background && `background:${background};`}
  ${({ width }) => width && `width:${width};`}
  ${({ height }) => height && `height:${height};`}

  border-radius: 8px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
    background-color: ${({ theme }) => theme.colors.grey400};
    border-radius: 8px 8px 0 0;
`

export const Exit = styled.div`
    padding: 1rem 1rem;
`

export const Container = styled.div`
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ background }) => background && `background-color: ${background};`}
`

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius:0 0 8px 8px;
`
