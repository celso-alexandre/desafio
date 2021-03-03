import React, { useEffect, useState } from 'react';
import Card from '../Card';

import { Container, CardContainer } from './styles';
import api from '../../utils/api';

interface IGame {
   internalName: string;
   title: string;
   gameID: string;
   normalPrice: string;
   salePrice: string;
   isOnSale: '0' | '1';
   dealRating: string;
   steamAppID: string;
   thumb: string;
   betterThumb?: string;
}

const Main: React.FC = () => {
   const [games, setGames] = useState<IGame[]>([]);

   useEffect(() => {
      let gamesResponse = [] as unknown as IGame[];
      api.get('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=15&storeID=1&onSale=1&AAA=1')
         .then((response) => {
            gamesResponse = response?.data;

            if (gamesResponse) {
               const updatedGames = gamesResponse.map((gameResponse) => {
                  return {
                     betterThumb: `https://cdn.akamai.steamstatic.com/steam/apps/${gameResponse?.steamAppID}/header.jpg`,
                     ...gameResponse,
                  };
               });

               setGames(updatedGames);
            }
         });
   }, []);

   return (
      <Container>
         <CardContainer>
            {games?.map((game_) => {
               return (
                  <Card
                     image={(<img src={game_?.betterThumb} alt="thumbnail" />)}
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
