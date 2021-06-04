import groupedCardsCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import ProductCard from "@/components/ProductCard";

const GroupedCards = () => {
    return (
        <section className={groupedCardsCss['shop-grouped']}>
            <div className={mainCss['container']} >
                <div className={groupedCardsCss['shop-grouped__collection']}>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        </section>
)

}

export default GroupedCards;
