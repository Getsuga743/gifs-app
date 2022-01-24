import styled from '@emotion/styled';
import getItemColors from '../../styles/utils/getItemColors';

export const GifWrapper = styled.div`
    position:relative;
    align-items: center;
    width: 100%;
    height: 100%;
    margin:1rem auto;
    flex-wrap: nowrap;
    text-align: center;
    background-color:${(props) => props.theme.colors.background2};
    border-radius:5px;
    border:5px solid transparent;
    > h3 {
        display:flex;
        position:absolute;
        bottom:0;
        flex:2;
        min-height: 3rem;
        width: 100%;
        margin: auto;
        vertical-align: center;
        font-size:2rem;
        padding:0.5rem 1rem;
        overflow:hidden;
        background-color:rgba(0,0,0,0.5);
    }
    > div {
        flex:1;
        overflow:hidden;
        border-radius:5px;
        display: flex;
        width: 100%;
        height: 100%;
    }
    > div > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    &:hover{
        cursor: pointer;
        border-radius:10px;
        z-index:2;
        border:5px solid ${(props) => getItemColors(props.theme.colors.itemColors)};
        overflow:hidden;
   }
`;
