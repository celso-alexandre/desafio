import React, { useEffect, useState } from 'react';
import Card from '../Card';

import { Container, CardContainer } from './styles';
import ImgRage2 from '../../assets/rage2.jpg';
import api from '../../utils/api';

interface IGame {
  internalName: string;
  title: string;
  gameID: string;
  normalPrice: string;
  salePrice: string;
  isOnSale: '0' | '1',
  thumb: string,
  dealRating: string,
}

const Main: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    api.get('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=99&storeID=1&onSale=1&AAA=1')
      .then((response) => { return setGames(response?.data); });
  }, []);

  return (
    <Container>
      <CardContainer>
        {games?.map((game_) => {
          return (
            <Card
              image={(<img src={game_?.thumb} alt="thumbnail" />)}
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
