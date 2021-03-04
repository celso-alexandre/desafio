import React, { useEffect, useState } from 'react';
import ReactImageFallback from 'react-image-fallback';

import Card from '../Card';

import { Container, CardContainer } from './styles';
import api from '../../utils/api';

import ImgPlaceholder from '../../assets/steam.svg';

interface IGame {
   internalName: string;
   title: string;
   gameID: string;
   normalPrice: string;
   salePrice: string;
   isOnSale: '0' | '1';
   dealRating: string;
   steamAppID?: string;
   thumb: string;
   thumbs: string[];
}

const Main: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    let gamesResponse = [] as unknown as IGame[];
    api.get('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=50&storeID=1&onSale=1&AAA=1')
      .then((response) => {
        gamesResponse = response?.data;

        if (gamesResponse) {
          const updatedGames = gamesResponse.map((gameResponse) => {
            const { steamAppID, thumb } = gameResponse;

            if (!steamAppID) {
              return {
                ...gameResponse,
                thumbs: [
                  // thumb,
                ],
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
                // thumb,
              ],
            };
          });

          setGames(updatedGames);
        }
      });
  }, []);

  return (
    <Container>
      <CardContainer>
        {games?.map((game_, gameIndex) => {
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
