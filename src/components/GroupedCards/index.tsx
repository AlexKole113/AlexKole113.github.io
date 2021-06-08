import groupedCardsCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import ProductCard from "@/components/ProductCard";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";

const GroupedCards = ({products}:{products:IFakeProductItem[]}) => {

    const productsCollection = products.map( (item) => <ProductCard key={item.id} product={item} /> )

    return (
        <section className={groupedCardsCss['shop-grouped']}>
            <div className={mainCss['container']} >
                <div className={groupedCardsCss['shop-grouped__collection']}>
                    {productsCollection}
                </div>
            </div>
        </section>
)

}

export default GroupedCards;
