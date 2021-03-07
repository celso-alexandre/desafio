import axios, { AxiosError } from 'axios';
import express from 'express';
import cors from 'cors';

interface IGame {
   internalName: string;
   title: string;
   gameID: string;
   normalPrice: string;
   salePrice: string;
   disccount: number;
   isOnSale: '0' | '1';
   dealRating: string;
   steamAppID?: string;
   thumb: string;
   thumbs: string[];
}

interface IQueryParams {
   pageNumber?: string; 
   pageSize?: string; 
   sorting?: 'disccount' | 'minor_price' | 'greater_price' | 'title';
   searchTerm?: string;
}

const server = express();
server.use(express.json());

server.use(cors());

server.get('/deals', async (request, response) => {
   const {pageNumber, pageSize, sorting, searchTerm} = request.query as unknown as IQueryParams;

   try {
      const dealsResponse = await axios.get<IGame[]>(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber || 0}&pageSize=${pageSize || 10}&storeID=1&onSale=1&AAA=1`);

      let deals = dealsResponse.data.map(game => {
         const {
            gameID,
            steamAppID,
            title,
            normalPrice,
            salePrice,
            isOnSale,
            dealRating,
            thumb,
            internalName,
         } = game;

         let normalPriceFloat = parseFloat(normalPrice)
         let salePriceFloat = parseFloat(salePrice)

         normalPriceFloat = (isNaN(normalPriceFloat) ? 0 : normalPriceFloat);
         salePriceFloat = (isNaN(salePriceFloat) ? 0 : salePriceFloat);

         let disccount = (1 - (salePriceFloat / normalPriceFloat)) * 100;
         disccount = parseFloat(disccount.toFixed(0));

         const [, tValue] = thumb?.split('?t=');
         const bundleThumb = `https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header.jpg?t=${tValue}`;
         const betterThumb = `https://cdn.akamai.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;

         const thumbs = (
            steamAppID ?
               [
                  betterThumb,
                  bundleThumb,
               ]
               : []
         )

         return {
            gameID,
            steamAppID,
            title,
            internalName,
            normalPrice,
            salePrice,
            normalPriceFloat,
            salePriceFloat,
            disccount,
            isOnSale,
            dealRating,
            thumb,
            thumbs,
         }
      })

      if (searchTerm && searchTerm.length > 0) {
         const regex = new RegExp(searchTerm, 'i');
         deals = deals.filter(game => regex.test(game.title));
      }

      if (sorting) {
         if (sorting === 'disccount') {
            deals = deals.sort((a, b) => {
               return b.disccount - a.disccount
            });
         }

         if (sorting === 'greater_price') {
            deals = deals.sort((a, b) => {
               return b.salePriceFloat - a.salePriceFloat
            });
         }

         if (sorting === 'minor_price') {
            deals = deals.sort((a, b) => {
               return a.salePriceFloat - b.salePriceFloat
            });
         }

         if (sorting === 'title') {
            deals = deals.sort((a, b) => {
               if(a.title < b.title) { return -1; }
               if(a.title > b.title) { return 1; }
               return 0;
            });
         }
      }      

      response.json(deals);
   } catch (err) {
      return response.status(500).json({error: 'Ocorreu um erro ao listar. Tente novamente'})
   }
})

server.listen(3333, () => console.log('Listening at http://localhost:3333'));
