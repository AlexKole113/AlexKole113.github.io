import CategoryList from "@/components/CategoryList";
import cssShopAnimation from "@/styles/shop-animation.scss";
import { fakeCategories as categories } from "../../../mocks/fakeData/shop";
import { useState } from "react";
import {IShopState} from "@/pages/Shop/interface";
import ShopGroupPrimary from "@/components/ShopGroupPrimary";
import ShopGroupSecondary from "@/components/ShopGroupSecondary";
import useShopAnimation from "@/hooks/useShopAnimation";
import ProductGroupSlice from "@/components/ProductGroupSlice";

const Shop = () => {

    const[ state, setState ] = useState<IShopState>( { loading: false, error: false, init: true, actualID: 1 } );
    const[ actualCategories, updateActualCategories ] = useState( categories );
    const{ oldItems, actualProducts } = useShopAnimation( setState, state );


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

                <ProductGroupSlice cats={categories} />

                <ShopGroupSecondary pageState={ state } products={ actualProducts } animationSteps={[0,150,500]} />
                <ShopGroupPrimary pageState={ state } products={ oldItems } animationSteps={[0,150,500]} />

            </section>

        </div>
    );

}

export default Shop;
