import styled from 'styled-components';

export const Container = styled.div`
   width: 99%;
   color: #FFF;

   div {
      width: 100%;
      display: flex;
      flex-direction: row;

      select {
         border: none;
         width: 10%;
         min-width: 80px;
         height: 35px;
         background: #0a143e;
         color: #8ea6be;
         padding: 0 0 0 0.4%;
         font-size: 14px;

         option {
            color: #FFF;
            display: flex;
            white-space: pre;
            min-height: 20px;
            padding: 0px 0.4% 0.4%;
         }
      }
   }

   h1 {
      padding: 3% 0 0 3%;
      font-size: 1.5em;
      color: #FFF;
      font-weight: 700;
   }
`;

export const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`;
