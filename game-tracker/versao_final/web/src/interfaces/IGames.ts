export default interface IGame {
   gameID: string;
   steamAppID: string;
   title: string;
   internalName: string;
   normalPrice: string;
   salePrice: string;
   normalPriceFloat: number;
   salePriceFloat: number;
   disccount: number;
   isOnSale: '0' | '1';
   dealRating: string;
   thumb: string;
   thumbs: string[];
};
