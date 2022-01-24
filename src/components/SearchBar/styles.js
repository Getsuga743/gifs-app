import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
    margin:1rem;
    > form  {
        background-color:white;
        border-radius:5px;
        overflow:hidden;
    > label{
        display: flex;
        flex-direction: row-reverse;
        min-height:3rem;
        width:100%;
            > input{
                width: 75%;
                padding: 1rem;
            }
            > button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color:${(props) => props.theme.colors.button};
                border:none;
                cursor: pointer;
                color:white;
                width:25%;
            }
            > button:hover{
                filter: brightness(1.2);
            }
        }
    }
`;
