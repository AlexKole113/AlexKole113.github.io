//@ts-nocheck
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
import cssShopAnimation from './styles/index.scss';


const Shop = () => {

    const categories = [
        {id: 1, value:'Flowers', icon:'plant', styling: 'shadow-pink'},
        {id: 2, value:'Plants', icon:'plant', styling: 'shadow-green'},
        {id: 3, value:'Trees', icon:'plant', styling: 'shadow-blue'},
        {id: 4, value:'Popular', icon:'plant', styling: 'shadow-violet'},
    ];

    return (
        <div className={cssShopAnimation['shop-group']}>

            <CategoryList categories={categories} />

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
