import styled from '@emotion/styled'

export const GifWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin:1rem auto;
    flex-wrap: nowrap;
    text-align: center;
    background-color:${props => props.theme.colors.background2};
    border-radius:5px;
    > h2 {
        display:block;
        flex:2;
        min-height: 5rem;
        width: 100%;
        margin: auto;
        vertical-align: center;
        font-size:0.8rem;
    }
    > div {
        flex:1;
        overflow:hidden;
        border-radius:5px 5px 0 0;
        display: flex;
        width: 100%;
        height: 90%;
    }
    > div > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
