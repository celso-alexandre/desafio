import styled from 'styled-components';

export const Container = styled.div`
   margin: 1.5% 0 0 3%;
   background: #0a143e;
   width: 30% !important;
   min-width: 350px;
   flex-wrap: wrap;

   h2 {
      color: #FFF;
      padding: 2% 2% 0 2%;
   }

   img {
      width: 100%;
   }
`;

export const CardFooter = styled.div`
   display: grid;
   grid-template-columns: 33% auto;
   margin: .7em 0 1em 0; 
   height: 100%;
   align-items: end;

   & > div:first-child {
      margin-left: 10px;
   }

   & > div:nth-child(2) {
      margin-right: 10px;
   }

   & > div:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto;
   }

   & > div:nth-child(2) div:first-child {
      text-align: right;
      display: block;
      padding-right: 10px;
   }

   & > div:nth-child(2) div:first-child span {
      text-align: right;
      display: block;
   }
`;

export const DetailsButton = styled.button`
   border: none;
   cursor: pointer;
   min-width: 100px;
   border-radius: 5px;
   height: 2.5em;
   color: #FFF;
   font-weight: 700;
   font-size: 1em;
   background-color: #bb315e;
`;

export const OriginalPrice = styled.p`
   display: inline;
   text-decoration: line-through;
   font-size: .85em;
`;

export const DisccountPercentage = styled.span`
   display: flex;
   align-items:center;
   justify-content: center;
   border-radius: 5px;
   color: #FFF;
   font-weight: 700;
   background-color: #448d78;
   width: 100%;
   min-width: 100px;
   padding-right: 10px;
`;
