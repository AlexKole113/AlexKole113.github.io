import CategoryList from "@/components/CategoryList";
import cssShopAnimation from './styles/index.scss';
import { fakeCategories as categories, getProductsByCategoryID } from "../../../mocks/fakeData/shop";
import {useEffect, useState} from "react";
import {IShopState} from "@/pages/Shop/interface";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import ShopGroup from "@/components/ShopGroup";

const Shop = () => {
    const[ actualCategories, updateActualCategories] = useState( categories );
    const[ actualProducts, updateActualProducts ] = useState<IFakeProductItem[]>([])
    const[ state, setState ] = useState<IShopState>( { loading: false, error: false, init: true, actualID: 1 } );
    useEffect(() => {
        setState((prevState)=>({...prevState, loading: true}));
        getProductsByCategoryID( state.actualID )
        .then( ( responseFromServer ) => {
            if( typeof responseFromServer === 'object' && responseFromServer?.hasOwnProperty('items' ) && responseFromServer.items?.length ){
               const { items } = responseFromServer;
               setState(( prevState)=>({...prevState, loading: false, error: false, init:false }))

               updateActualProducts( items  )
            }
        })
        .catch(()=>{
            setState((prevState)=>({...prevState, loading: false, error: true, init:false }))
        })
    },[ state.actualID ] );

    //const getActiveID = ( categories ) => categories.filter(({ active }) => active && active === 'active' )[0].id

    const setActive = ( id:number ) => {
        if( state.loading ) return;
        const currentActualID = actualCategories.filter(({active}) => active === 'active' )[0].id;
        if( id === currentActualID ) return;

        setState({
            ...state,
            init: false,
            loading: true,
            actualID: id
        } )

        const updState = actualCategories.map( ( item) => {
            item.active = undefined;
            if(item.id === id) item.active = 'active'
            return item;
        })

        updateActualCategories( updState )
    }


    return (
        <div className={cssShopAnimation['shop-group']}>

            <CategoryList categories={categories} updateActiveItem={setActive} pageState={state} />

            <section className={cssShopAnimation['shop-group-transition']}>

                <ShopGroup pageState={state} products={actualProducts} typeOfGroup={'shop-group-hidden'} />
                <ShopGroup pageState={state} products={actualProducts} typeOfGroup={'shop-group-current'} />

            </section>
        </div>
    );

}

export default Shop;
