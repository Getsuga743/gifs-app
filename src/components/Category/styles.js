/* eslint-disable no-tabs */
import styled from '@emotion/styled';
import { Link } from 'wouter';
import getItemColors from '../../styles/utils/getItemColors';

export const CategoryTitle = styled.h3`
    font-weight:bold;
    margin-bottom:0.7rem;
    margin-top:0.6rem;
    text-align:left;
    font-size:4rem;
`;
export const CategoryList = styled.ul`
    list-style-position:inside;
    display:flex;
    flex-wrap:wrap;
    padding:0;
    margin:0;
    justify-content:flex-end;
     @media ${(props) => props.theme.breakpoints.lg} {
        justify-content:flex-start;
    }
`;

export const CategoryListItem = styled.li`
	list-style: none;
  margin:0;
  padding: 1rem;
  text-align:left;
  border-radius:5px;
  font-weight:bold;
  text-transform:capitalize;
  background-color: ${(props) => getItemColors(props.theme.colors.itemColors)};
  margin:0.5rem;
  transition:all 10ms;
  &:hover{
    cursor: pointer;
    color:${(props) => props.theme.colors.background1}
  }
`;

export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`;
