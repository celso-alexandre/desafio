import React, { useEffect, useState } from 'react';
import ReactImageFallback from 'react-image-fallback';

import Card from '../Card';

import { Container, CardContainer } from './styles';
import api from '../../utils/api';

import ImgPlaceholder from '../../assets/steam.svg';
import IGame from '../../interfaces/IGames';
import Search from '../Search';
import ISearchData from '../../interfaces/ISearchData';
import IOption from '../../interfaces/IOption';
import Select from '../Select';

const Main: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);
  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderOptions, setOrderOptions] = useState<IOption[]>([
    {
      value: 'desconto',
      text: '% de desconto',
    },
    {
      value: 'maior-preco',
      text: 'Maior preço',
    },
    {
      value: 'menor-preco',
      text: 'Menor preço',
    },
    {
      value: 'titulo',
      text: 'Título',
    },
  ]);

  useEffect(() => {
    let gamesResponse = [] as unknown as IGame[];
    api.get('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=50&storeID=1&onSale=1&AAA=1')
      .then((response) => {
        gamesResponse = response?.data;

        if (gamesResponse) {
          const updatedGames = gamesResponse.map((gameResponse) => {
            const { steamAppID } = gameResponse;

            if (!steamAppID) {
              return {
                ...gameResponse,
                thumbs: [],
              };
            }

            const [, tValue] = gameResponse.thumb?.split('?t=');
            const bundleThumb = `https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header.jpg?t=${tValue}`;

            const betterThumb = `https://cdn.akamai.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;

            return {
              ...gameResponse,
              thumbs: [
                betterThumb,
                bundleThumb,
              ],
            };
          });

          setGames(updatedGames);
          setFilteredGames(games);

          const searchdata = games.map((game) => {
            return {
              key: game.gameID,
              value: game.title,
            };
          });
          setSearchData(searchdata);
        }
      });
  }, []);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredGames(games);
      return;
    }

    const regex = new RegExp(searchTerm, 'i');
    const updatedFilteredGames = games.filter((game) => {
      return regex.test(game.title);
    });

    setFilteredGames(updatedFilteredGames);
  }, [games, searchTerm]);

  useEffect(() => {
    console.log(orderOptions);
    const selectedOption = orderOptions.filter((option) => option.selected);

    if (selectedOption.length === 0) {
      return;
    }

    const selected = selectedOption[0];

    const newFilteredGames = filteredGames.sort((a, b) => {
      if (selected.value === 'desconto') {
        try {
          return (
            1 - (parseFloat(a.salePrice) - parseFloat(a.salePrice))
          ) - (
            1 - (parseFloat(b.salePrice) / parseFloat(b.salePrice))
          );
        } catch (_err) {
          return -1;
        }
      }
      if (selected.value === 'maior-preco') {
        try {
          return parseFloat(b.salePrice) - parseFloat(a.salePrice);
        } catch (_err) {
          return -1;
        } finally {
          //
        }
      }
      if (selected.value === 'menor-preco') {
        try {
          return parseFloat(a.salePrice) - parseFloat(b.salePrice);
        } catch (_err) {
          return -1;
        } finally {
          //
        }
      }

      if (a.title > b.title) {
        return 1;
      }

      if (a.title < b.title) {
        return -1;
      }

      return 0;
    });

    setFilteredGames(newFilteredGames);
  }, [orderOptions]);

  return (
    <Container>
      <Search
        data={searchData}
        term={searchTerm}
        setTerm={setSearchTerm}
      />
      <Select options={orderOptions} setOptions={setOrderOptions} />
      <CardContainer>
        {filteredGames?.map((game_) => {
          const [firstImage, ...fallbackImages] = game_.thumbs;

          return (
            <Card
              key={game_?.gameID}
              image={(
                <ReactImageFallback
                  src={firstImage}
                  fallbackImage={[...fallbackImages, ImgPlaceholder]}
                  alt="thumbnail"
                />
              )}
              title={game_?.title}
              originalPrice={parseFloat(game_?.normalPrice)}
              actualPrice={parseFloat(game_?.salePrice)}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Main;
