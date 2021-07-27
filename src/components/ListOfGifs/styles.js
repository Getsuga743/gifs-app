import styled from '@emotion/styled'

export const GifsContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
    grid-gap: 2rem;
    margin: auto;
    max-width: 1000px;
    @media ${props => props.theme.breakpoints.lg}{
        grid-template-columns: repeat(2,1fr);
        max-width: 700px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        grid-template-columns: 1fr;
        max-width: 500px;
    }
`
