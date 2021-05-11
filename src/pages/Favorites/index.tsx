//@ts-nocheck
import Search from "@/components/Search";
import GroupedCards from "@/components/GroupedCards";
import favoritesCss from './styles/index.scss';




const Favorites = () => {

    return (
        <div className={favoritesCss['shop-group']}>

            <section className={favoritesCss['shop-group-transition']}>
                <section
                    className={`${favoritesCss['shop-group-transition-group']}  ${favoritesCss['shop-group-hidden']}`}>

                    <Search/>
                    <GroupedCards/>

                </section>
                <section
                    className={`${favoritesCss['shop-group-transition-group']} ${favoritesCss['shop-group-current']}`}>

                    <Search/>
                    <GroupedCards/>

                </section>
            </section>
        </div>
    );

}

export default Favorites;
