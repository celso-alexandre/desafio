import React from 'react';

import {
  Container, DetailsButton, OriginalPrice, DisccountPercentage, CardFooter,
} from './styles';

interface ICardProps {
   title: string;
   image: any;
   originalPrice?: number;
   actualPrice: number
   disccount: number;
}

const Card: React.FC<ICardProps> = ({
  title,
  image,
  actualPrice,
  originalPrice = actualPrice,
  disccount,
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
                {' '}
                {originalPrice.toFixed(2).replace('.', ',')}
              </OriginalPrice>
            </>
            )}
            <br />
            <span>
              $
              {' '}
              {actualPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <div>
            <DisccountPercentage>
              {actualPrice === 0 ? 'GRÁTIS' : `${disccount.toFixed(0)}%`}
            </DisccountPercentage>
          </div>
        </div>
      </CardFooter>
    </Container>
  );
};

export default Card;
