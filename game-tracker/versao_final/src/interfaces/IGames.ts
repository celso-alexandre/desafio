export default interface IGame {
   internalName: string;
   title: string;
   gameID: string;
   normalPrice: string;
   salePrice: string;
   isOnSale: '0' | '1';
   dealRating: string;
   steamAppID?: string;
   thumb: string;
   thumbs: string[];
};
