import styled from 'styled-components';

export const Container = styled.div`
   --primario: #0b1641;
   --secundario: #c70160;
   --sucesso: #16857b;
   --texto: #ffffff;
  
   height: 93vh;
   padding-left: 10vw;

   background: linear-gradient(
      45deg,
      var(--primario) 0%,
      var(--secundario) 100%
   );
   background-attachment: fixed;
   color: var(--texto);

   h1 {
      font-size: 1.5em;
      color: #FFF;
      font-weight: 500;
      padding-top: 4vh;
   }
`;
