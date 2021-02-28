import React from 'react';

import {
  Container, DetailsButton, OriginalPrice, DisccountPercentage, CardFooter,
} from './styles';

interface ICardProps {
  title: string;
  image: any;
  originalPrice?: number;
  actualPrice: number
}

const Card: React.FC<ICardProps> = ({
  title,
  image,
  actualPrice,
  originalPrice = actualPrice,
}: ICardProps) => {
  return (
    <Container>
      {image}
      <h2>{title}</h2>

      <CardFooter>
        <div>
          <DetailsButton>DETALHES</DetailsButton>
        </div>

        <div>
          <div>
            {originalPrice && originalPrice !== actualPrice && (
            <>
              <OriginalPrice>
                $
                {originalPrice}
              </OriginalPrice>
              <br />
            </>
            )}
            <span>
              $
              {actualPrice}
            </span>
          </div>

          <div>
            <DisccountPercentage>
              {actualPrice === 0 ? 'GRÁTIS' : (1 - (actualPrice / originalPrice)).toFixed(2)}
            </DisccountPercentage>
          </div>
        </div>
      </CardFooter>
    </Container>
  );
};

export default Card;
