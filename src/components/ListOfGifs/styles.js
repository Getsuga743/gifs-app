import styled from '@emotion/styled';

const grid = {
  column: {
    sm: '180px',
    md: '250px',
    lg: '300',
  },
  rows: {
    sm: '200px',
    md: '250px',
    lg: '210px',
  },
  gap: '0',
};

export const GifsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${grid.column.md},1fr));
    grid-auto-rows: ${grid.rows.md};
    grid-template-rows: masonry;
    justify-content:center;
    grid-auto-flow: row dense;
    grid-gap: ${grid.gap};
    gap: ${grid.gap};
    width:100%;
    min-height: auto;
    align-items: center;
    margin:2rem 0;
    @media ${(props) => props.theme.breakpoints.lg}{
        grid-template-columns:repeat(auto-fit, ${grid.column.lg});
        grid-auto-rows: ${grid.rows.lg}
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        grid-template-columns:repeat(auto-fit, 1fr);
        grid-auto-rows: ${grid.rows.sm}
    }
`;
