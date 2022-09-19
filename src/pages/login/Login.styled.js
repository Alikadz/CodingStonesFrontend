import styled from "styled-components";
import RightImage from '../../assets/RightImage.jpg'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
`

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightSide = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;

    &::before{
        content: "";
        background:url(${RightImage});
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(30%);
    }

    & svg{
        position: relative;
    }
`