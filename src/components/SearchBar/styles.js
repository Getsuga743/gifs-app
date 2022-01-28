import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
    display:flex;
    margin:2rem 0;
    > form  {
        background-color:white;
        border-radius:5px;
        overflow:hidden;
        width:100%;
    > label{
        display: flex;
        flex-direction: row-reverse;
        min-height:3rem;
        width:100%;
            > input{
                width: 100%;
                padding: 1rem;
            }
            > button {
                justify-self:start;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color:${(props) => props.theme.colors.button};
                border:none;
                cursor: pointer;
                color:white;
                width:10rem;
            }
            > button:hover{
                filter: brightness(1.2);
            }
        }
    }
`;
