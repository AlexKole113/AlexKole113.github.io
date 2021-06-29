import productCardCss from './styles/index.scss';
import loadingCss from './styles/loading.scss'

const ProductCardLoading = () => (
        <div className={`${productCardCss['product-card']} ${loadingCss.loadingItemBlock}`}>
            <div className={productCardCss['product-card__buttons'] }>
                <a href="" className={ `${productCardCss['product-card__buttons_item']} ${productCardCss['add-to-fav']} ${loadingCss.loadingItem}`}></a>
                <a href="" className={`${productCardCss['product-card__buttons_item']} ${productCardCss['add-to-cart']} ${loadingCss.loadingItem}`}></a>
            </div>
            <div className={productCardCss['product-card__image']} ></div>
            <div className={productCardCss['product-card__info']}></div>
            <div className={productCardCss['product-card__additional-info']} ></div>
        </div>
)

export default ProductCardLoading;
