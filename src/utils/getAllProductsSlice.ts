import {getProductsByCategoryID, IFakeProducts, IFakeShopCategories} from "../../mocks/fakeData/shop";

const getAllProductsSlice = ( cats:IFakeShopCategories, sliceSize:number = 4 ) :Promise<(IFakeProducts|undefined)[]> => {
    const allPromises = cats
        .map(({id}) => id )
        .map((id) => getProductsByCategoryID( id ) )

    return Promise.all( allPromises ).then( items => {
        const  response  = [...items];
        return response.map(( cat) => {
            if(cat) {
                const sliceCat = {...cat};
                sliceCat.items = sliceCat?.items.slice(0,sliceSize);
                return sliceCat;
            }
        })
    } );
}


export default getAllProductsSlice;
