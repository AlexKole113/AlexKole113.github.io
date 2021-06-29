import {getProductsByCategoryID, IFakeProductItem } from "../../mocks/fakeData/shop";

const getCatProductsSlice = ( cat:number, sliceFrom:number = 0, sliceSize:number = 7 ) :Promise< {items:IFakeProductItem[], done: boolean} | undefined > => {
    return getProductsByCategoryID( cat, 500 )
            .then((prods) => {
                if(!prods?.items) return;
                if( sliceFrom >= prods.items.length ) return { done:true, items: [] };
                let newProds = [ ...prods.items ];
                newProds = newProds.slice( sliceFrom, sliceSize );
                return {items:newProds, done:false };
            })
}


export default getCatProductsSlice;
