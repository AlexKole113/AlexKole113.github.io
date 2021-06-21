import {getProductsByCategoryID, IFakeProducts, IFakeShopCategories} from "../../mocks/fakeData/shop";

const getAllProductsSlice = ( cats:IFakeShopCategories ) :Promise<(IFakeProducts|undefined)[]> => {
    const sliceSize = 4;
    const allPromises = cats
        .map(({id}) => id )
        .map((id) => getProductsByCategoryID( id ) )

    return Promise.all( allPromises ).then( items => {
        items.map(( cat) => {
            if(cat) {
                cat.items = cat?.items.slice(0,sliceSize);
                return cat;
            }
        })
       return items;
    } );
}


export default getAllProductsSlice;
