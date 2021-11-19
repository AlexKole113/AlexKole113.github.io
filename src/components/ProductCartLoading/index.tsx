import productCardCss from './styles/index.scss';

const ProductCardLoading = () => (
  <div className={productCardCss['product-card']}>
    <div className={productCardCss['product-card__buttons']}>
      <span className={productCardCss['product-card__buttons_item']} />
      <span className={productCardCss['product-card__buttons_item']} />
    </div>
    <div className={productCardCss['product-card__image']} />
    <div className={productCardCss['product-card__info']} />
    <div className={productCardCss['product-card__additional-info']} />
  </div>
);

export default ProductCardLoading;
