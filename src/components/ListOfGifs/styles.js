import styled from '@emotion/styled'

const grid = {
    column:{
        sm:"180px",
        md:"250px",
        lg:"300",
    },
    rows:{
        sm:"200px",
        md:"250px",
        lg:"210px",
    },
    gap:"6px",
} 

export const GifsContainer = styled.div`
    display: grid;
    min-height: 100vh;
    place-content:center;
    grid-template-columns: repeat(auto-fit, ${grid.column.md});
    grid-auto-rows: ${grid.rows.md};
    grid-template-rows:masonry;
    grid-auto-flow: row dense;
    grid-gap: ${grid.gap};
    gap: ${grid.gap};
    align-items: center;
    width:100%;
    @media ${props => props.theme.breakpoints.lg}{
        grid-template-columns:repeat(auto-fit, ${grid.column.lg});
        grid-auto-rows: ${grid.rows.lg}
    }
    @media ${props => props.theme.breakpoints.sm}{
        grid-template-columns:repeat(auto-fit, ${grid.column.sm});
        grid-auto-rows: ${grid.rows.sm}
    }
`
export const GifsWrapper = styled.div`
    margin:2rem 0 0 0;
    width:100%;
    heigth:100%;
`