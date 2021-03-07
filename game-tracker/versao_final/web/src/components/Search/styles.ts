import styled from 'styled-components';
import ReactSearchBox from 'react-search-box';
import { FaSearch } from 'react-icons/fa';

export const SearchIcon = styled(FaSearch)`
   position: absolute;
   margin: 0.9% 0 0 0.9%;
   font-size: 20px;
`;

export const SearchBox = styled(ReactSearchBox)`
`;

export const Container = styled.div`
   width: 20%;
`;
