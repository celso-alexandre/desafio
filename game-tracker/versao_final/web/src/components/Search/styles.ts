import styled from 'styled-components';
import ReactSearchBox from 'react-search-box';
import { FiSearch } from 'react-icons/fi';

export const SearchIcon = styled(FiSearch)`
   position: absolute;
   margin: 0.30% 0 0 0.4%;
   color: #FFF;
   font-size: 1.2em;
   text-align: center;
`;

export const Container = styled.div`
   display: flex;
   margin: 0.4% 0 0 3%;   

   input[type="text"] {
      border: none;
      color: #8ea6be;
      background-color : #0a143e;
      height: 35px;
      min-width: 100px;
      padding: 0 0 0 32px;
      outline: none;
   }

   button {
      cursor: pointer;
      border: none;
      color: #FFF;
      background-color: #0a143e;
      margin-left: -10px;
      outline: none;

      &:active {
         border-style: none;
      }
   }
`;
