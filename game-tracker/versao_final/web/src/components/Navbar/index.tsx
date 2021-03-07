import React from 'react';

import { Container } from './styles';

import ImgLogo from '../../assets/logo-horizontal.svg';

const Main: React.FC = () => {
  return (
    <Container>
      <img src={ImgLogo} alt="logomarca" />
    </Container>
  );
};

export default Main;
