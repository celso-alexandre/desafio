import React from 'react';
import { FaSearch } from 'react-icons/fa';
import IGame from '../../interfaces/IGames';
import ISearchData from '../../interfaces/ISearchData';
import { Container, SearchBox, SearchIcon } from './styles';

interface IProps {
   data: ISearchData[];
   term: string;
   setTerm(term: string): any;
}

const Search: React.FC<IProps> = ({ data, term, setTerm }: IProps) => {
  return (
    <Container>
      <SearchIcon />
      <SearchBox
        placeholder="Pesquisar"
        data={data}
      // onSelect={(record: any) => console.log(record)}
      /* onFocus={() => {
        console.log('This function is called when is focussed');
      }} */
        onChange={(value: string) => setTerm(value)}
        fuseConfigs={{
          threshold: 0.05,
        }}
        value={term}
      />
    </Container>
  );
};

export default Search;
