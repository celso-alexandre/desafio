import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 80vw;
   border-radius: 10px;
   background-color: #0a143e;

   img {
      border-radius: 10px 10px 0 0;
   }
   
   h2 {
      font-weight: 500;
      padding: .4em .6em 0 .6em;
   }   
`;

export const CardFooter = styled.div`
   display: grid;
   grid-template-columns: 35vw auto;
   margin: .7em 0 1em 0;

   & > div:first-child {
      margin-left: 1em;
   }

   & > div:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto;
   }
`;

export const DetailsButton = styled.button`
   border: none;
   cursor: pointer;
   min-width: 100px;
   border-radius: 5px;
   height: 2.5em;
   color: #FFF;
   background-color: #bb315e;
`;

export const PriceContainer = styled.div`
   
`;

export const OriginalPrice = styled.span``;

export const DisccountPercentage = styled.span`
   display: flex;
   align-items:center;
   margin-right: 1em;
   justify-content: center;
   border-radius: 5px;
   height: 2em;
   color: #FFF;
   background-color: #448d78;
`;
