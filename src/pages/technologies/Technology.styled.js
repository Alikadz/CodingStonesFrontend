import styled from "styled-components";

export const TechCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:1rem;
    justify-content: space-between;

    @media (max-width:1040px){
        grid-template-columns: 1fr;
    }

`