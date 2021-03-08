import React from 'react';
import { FaSearch } from 'react-icons/fa';
import IGame from '../../interfaces/IGames';
import ISearchData from '../../interfaces/ISearchData';
import { Container, SearchIcon } from './styles';

interface IProps {
   data: ISearchData[];
   term: string;
   setTerm(term: string): any;
}

const Search: React.FC<IProps> = ({ data, term, setTerm }: IProps) => {
  return (
    <Container>
      <SearchIcon />
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <button type="button" onClick={() => setTerm('')}>x</button>
    </Container>
  );
};

export default Search;
