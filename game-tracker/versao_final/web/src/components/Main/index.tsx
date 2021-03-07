import React, {
  ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState,
} from 'react';
import ReactImageFallback from 'react-image-fallback';
import { AxiosResponse } from 'axios';

import Card from '../Card';

import { Container, CardContainer } from './styles';
import api from '../../utils/api';

import ImgPlaceholder from '../../assets/steam.svg';
import IGame from '../../interfaces/IGames';
import Search from '../Search';
import ISearchData from '../../interfaces/ISearchData';
import IOption from '../../interfaces/IOption';
import Select from '../Select';

interface IQueryParams {
  pageNumber?: string;
  pageSize?: string;
  sorting?: 'disccount' | 'minor_price' | 'greater_price' | 'title';
}

const Main: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('minor_price');

  const loadGames = () => {
    const url = 'http://localhost:3333/deals';
    api.get<IGame[]>(url, {
      params: {
        pageNumber: 0,
        pageSize: 30,
        sorting: selectedOrder,
        searchTerm,
      },
    })
      .then((response) => {
        setGames(response.data);
        const test = games.map((game) => game.salePrice);
      });
  };

  useEffect(() => {
    loadGames();
  }, [selectedOrder]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadGames();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSelectedOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(e.target.value);
  };

  return (
    <Container>
      <Search
        data={games.map((game) => {
          return {
            key: game.gameID,
            value: game.title,
          };
        })}
        term={searchTerm}
        setTerm={setSearchTerm}
      />

      <select value={selectedOrder} onChange={handleSelectedOrder}>
        <option value="disccount">% Desconto</option>
        <option value="minor_price">Menor Preco</option>
        <option value="greater_price">Maior Preco</option>
        <option value="title">Título</option>
      </select>

      {games?.map((game) => {
        return (
          <div key={game.gameID}>
            <h1>{game.title}</h1>
            <p>{game.salePrice}</p>
            <p>
              {game.disccount}
              %
            </p>
          </div>
        );
      })}
    </Container>
  );
};

export default Main;
