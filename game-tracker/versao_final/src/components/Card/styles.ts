import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 28%;
   min-width: 370px;
   border-radius: 10px;
   background-color: #0a143e;
   color: #FFF; 
   margin-left:3%;
   margin-right: 1%;
   margin-bottom: 3%;

   img {
      border-radius: 10px 10px 0 0;
   }
   
   & > h2 {
      font-size: 1.2em;
      font-weight: 500;
      padding: .6em .6em 0 1em;
   }   
`;

export const CardFooter = styled.div`
   display: grid;
   grid-template-columns: 33% auto;
   margin: .7em 0 1em 0; 

   & > div:first-child {
      margin-left: 1em;
   }

   & > div:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto;
   }

   & > div:nth-child(2) div:first-child {
      text-align: right;
      margin-right: 15px;
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
   text-decoration: line-through;
   display: inline;
   font-size: .85em;
`;

export const DisccountPercentage = styled.span`
   display: flex;
   align-items:center;
   justify-content: center;
   margin-right: 1em;
   border-radius: 5px;
   height: 2.5em;
   color: #FFF;
   font-weight: 700;
   background-color: #448d78;
`;
