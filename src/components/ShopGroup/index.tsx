import cssShopAnimation from "./styles/index.scss";
import Search from "@/components/Search";
import Preloader from "@/components/Preloader";
import ErrorAlert from "@/components/ErrorAlert";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";

const ShopGroup = ( { pageState, products, typeOfGroup }:{ pageState:{init:boolean,error:boolean, [key:string]: any}, products:IFakeProductItem[],typeOfGroup:string } ) => {

    const { init, error }  = pageState;

    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation[ typeOfGroup ]}`}>
            <Search styling={'shadow-theme'} />
            { init && <Preloader /> }
            { error ? <ErrorAlert text={'Something went wrong...'} /> : <GroupedCards products={ products } /> }
        </section>
    );
}

export default ShopGroup;
