import {getProductsByCategoryID, IFakeProductItem } from "../../mocks/fakeData/shop";

const getCatProductsSlice = ( cat:number, sliceFrom:number = 0, sliceSize:number = 7 ) :Promise< IFakeProductItem[] | undefined > => {
    return getProductsByCategoryID( cat )
            .then((prods) => {
                if(!prods?.items) return
                let newProds = [...prods.items]
                newProds = newProds.slice(sliceFrom, sliceSize);
                return newProds;
            })
}


export default getCatProductsSlice;
