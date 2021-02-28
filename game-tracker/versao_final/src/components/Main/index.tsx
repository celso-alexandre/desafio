import React from 'react';
import Card from '../Card';

import { Container } from './styles';
import ImgRage2 from '../../assets/rage2.jpg';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Ofertas</h1>
      <Card
        image={(<img src={ImgRage2} alt="Rage2" />)}
        title="RAGE 2"
        originalPrice={199}
        actualPrice={0}
      />
    </Container>
  );
};

export default Main;
