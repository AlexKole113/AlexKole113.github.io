//@ts-nocheck
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
import cssShopAnimation from './styles/index.scss';


const Shop = () => {

    return (
    <div className={cssShopAnimation['shop-group']}>

        <CategoryList/>

        <section className={cssShopAnimation['shop-group-transition']}>
            <section
                className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation['shop-group-hidden']}`}>

                <Search/>
                <GroupedCards/>

            </section>
            <section
                className={`${cssShopAnimation['shop-group-transition-group']} ${cssShopAnimation['shop-group-current']}`}>

                <Search/>
                <GroupedCards/>

            </section>
        </section>
    </div>
    );

}

export default Shop;
