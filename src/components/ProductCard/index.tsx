import cssShopAnimation from '@/styles/shop-animation.scss';
import productCardCss from './styles/index.scss';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';

const ProductCard = ({ product }:{product:IFakeProductItem}) => {
  const {
    title, image, data, price, currency, stock,
  } = product;
  const params = data.map((item:{[key:string]:string|number}) => {
    const param = Object.keys(item)[0];
    return (
      <span key={param}>
        <span className={productCardCss['product-card__info_params-name']}>
          {param}
          :
        </span>
        <span className={productCardCss['product-card__info_params-value']}>{item[param]}</span>
      </span>
    );
  });

  return (
    <div data-test={`product-card`} className={`${productCardCss['product-card']} ${cssShopAnimation['product-card']}`}>
      <div className={productCardCss['product-card__buttons']}>
        <a href="" className={`${productCardCss['product-card__buttons_item']} ${productCardCss['add-to-fav']}`}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            className="svg-inline--fa fa-heart fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            />
          </svg>
        </a>
        <a href="" className={`${productCardCss['product-card__buttons_item']} ${productCardCss['add-to-cart']}`}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-categories"
            className="svg-inline--fa fa-shopping-cart fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            />
          </svg>
        </a>
      </div>
      <div className={productCardCss['product-card__image']}>
        <img
          className={productCardCss['product-card__image_img']}
          src={image}
          alt={title}
          title={title}
        />
      </div>
      <div className={productCardCss['product-card__info']}>
        <span className={productCardCss['product-card__info_title']}>{title}</span>
        <span className={productCardCss['product-card__info_params']}>
          {params}
        </span>
        <span className={productCardCss['product-card__info_price']}>
          <span className={productCardCss['product-card__info_price-currency']}>{currency}</span>
          <span className={productCardCss['product-card__info_price-value']}>{price}</span>
        </span>
      </div>
      <div className={productCardCss['product-card__additional-info']}>
        <span className={productCardCss['product-card__additional-info_params']}>
          <span className={productCardCss['product-card__additional-info_params-name']}>Bunch of</span>
          <span className={productCardCss['product-card__additional-info_params-value']}>{stock}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
