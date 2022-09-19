import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSidebar = styled.div`
    position: fixed;
    height: 100%;
    width: 4.375rem;
    transition: width 1s ease;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 12px #00000014;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-bottom:5%;

    &:hover{
        width: 18.25rem;
        transition: 0.3s ease-in-out;
    }

    &:hover span{
        display: block;
        animation-name: moveInLeft;
        animation-duration: 1s;
    }

    &:hover div{
        display: block;
        transition: .3s ease-out;
    }
`

export const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;    
    
`

export const ListItem = styled.li`
    width: 100%;
    height:  4.125rem;
    ${({ height }) => height !== undefined ? `height:${height};` : `height:4.125rem;`}
    white-space: nowrap;
    text-align: left;
    font: normal normal normal 18px/21px Inter;
    padding-left: 1.625rem;

    &:hover{
        background-color: ${({ theme }) => theme.colors.white100};
    }
`

export const StyledNavLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3.7rem;
    width: 100%;
    text-decoration:none;

    &.active{

        &:after{
        content: "";
        position: absolute;
        background: ${({ theme }) => theme.colors.green};
        width: 13px;
        height: 4px;
        bottom: 5px;
        left: 5px;
        border-radius: 4px;
        display: block;
        }
    }

    &:hover{
        filter: invert(60%) sepia(7%) saturate(3102%) hue-rotate(108deg) brightness(105%) contrast(116%);
    }

    @keyframes moveInLeft{
        0%{
            opacity: 0;
            transform: translateX(0px);
        }

        100%{
            opacity: 1;
            transform: translate(0px);
        }
    }

`

export const Switch = styled.div`
    height: 2.06rem;
    width: 6rem;
    border-radius: 1.87rem;
    background: ${({ theme }) => theme.colors.grey};
    display: inline-block;
    align-items: center;
    justify-content: center;
    display: none;
    margin-left: 5px;

    &::before {
    content: "";
    position: absolute;
    left: 2.25rem;
    width: 2.5rem;
    height: 1.37rem;
    margin-top: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 187.5rem;
    transition: 1s;
    transform: ${(props) =>
        props.isClicked ? "translateX(2.8rem)" : "translateX(0.1rem)"};
}
`

export const Toggle = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.375rem;

    .svgIcon{
        z-index: 1;
    }
`

export const RouteTitle = styled.span`
        display: none;
        margin-left:1rem;
        width: 3.125rem;
        height: 1.3125rem;
        text-align: left;
        font-family: 'Inter', sans-serif;
        font: normal normal normal 18px/21px;
        color: ${({ theme }) => theme.colors.black};
`