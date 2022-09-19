import styled from "styled-components";

export const Title = styled.h1`
    ${({size}) => size && `font-size:${size};`}
    ${({weight}) => weight && `font-weight:${weight};`}
    ${({color}) => color && `color:${color};`}

    &:hover{
        color:${({theme}) => theme.colors.green};
        cursor:pointer;
    }
`