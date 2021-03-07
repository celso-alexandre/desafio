import React from 'react';
import ReactSearchBox from 'react-search-box';
import { Container } from '../Card/styles';
import IGame from '../../interfaces/IGames';
import ISearchData from '../../interfaces/ISearchData';

interface IProps {
   data: ISearchData[];
   term: string;
   setTerm(term: string): any;
}

const Search: React.FC<IProps> = ({ data, term, setTerm }: IProps) => {
  return (
    <ReactSearchBox
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
  );
};

export default Search;
