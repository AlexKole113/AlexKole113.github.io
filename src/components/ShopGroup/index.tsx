import cssShopAnimation from "@/styles/shop-animation.scss";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import useShopAnimation from "@/hooks/useShopAnimation";


const ShopGroup = ( { products , showAnimation, shopStateUpdate, actualCat }:{ products:IFakeProductItem[], showAnimation:string, shopStateUpdate:CallableFunction, actualCat:number } ) => {

    const animationClassName = useShopAnimation( shopStateUpdate, showAnimation );


    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']} ${cssShopAnimation[animationClassName ?? 'shop-group-hidden']}`}>
            <Search styling={'shadow-theme'} />
            <GroupedCards products={ products } actualCat={actualCat} />
        </section>
    );
}

export default ShopGroup;
