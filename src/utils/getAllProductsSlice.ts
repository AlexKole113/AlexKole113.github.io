import {getProductsByCategoryID, IFakeProducts, IFakeShopCategories} from "../../mocks/fakeData/shop";

const getAllProductsSlice = ( cats:IFakeShopCategories ) :Promise<(IFakeProducts|undefined)[]> => {
    const allPromises = cats
        .map(({id}) => id )
        .map((id) => getProductsByCategoryID( id ) )

    return Promise.all( allPromises ).then( items => items );
}


export default getAllProductsSlice;
