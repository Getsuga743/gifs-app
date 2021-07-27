import styled from '@emotion/styled'

export const GifWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    margin:1rem auto;
    flex-wrap: nowrap;
    text-align: center;
    > h2 {
        height: 5rem;
        width: 100%;
        height: 20%;
        margin: auto;
        vertical-align: center;
    }
    > div {
        display: flex;
        width: 100%;
        height: 80%;
    }
    > div > img {
        border-radius: 5px;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`
