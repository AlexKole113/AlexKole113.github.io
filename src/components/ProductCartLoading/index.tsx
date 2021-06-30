import productCardCss from './styles/index.scss';

const ProductCardLoading = () => (
        <div className={productCardCss['product-card']}>
            <div className={productCardCss['product-card__buttons'] }>
                <span className={productCardCss['product-card__buttons_item']}></span>
                <span className={productCardCss['product-card__buttons_item']}></span>
            </div>
            <div className={productCardCss['product-card__image']} ></div>
            <div className={productCardCss['product-card__info']}></div>
            <div className={productCardCss['product-card__additional-info']} ></div>
        </div>
)

export default ProductCardLoading;
