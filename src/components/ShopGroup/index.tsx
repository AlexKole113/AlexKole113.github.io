import cssShopAnimation from "@/styles/shop-animation.scss";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";


const ShopGroup = ( { products }:{ products:IFakeProductItem[] } ) => {

    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']}`}>
            <Search styling={'shadow-theme'} />
            <GroupedCards products={ products } />
        </section>
    );
}

export default ShopGroup;
