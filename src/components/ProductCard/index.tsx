import cssShopAnimation from '@/styles/shop-animation.scss';
import productCardCss from './styles/index.scss';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';
import AddToFavoritesButton from "@/components/AddToFavoritesButton";
import AddToCartButton from "@/components/AddToCartButton";

const ProductCard = ({ product }:{product:IFakeProductItem}) => {
  const {
    title, image, data, price, currency, stock, id
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

        <AddToFavoritesButton id={id} />
        <AddToCartButton id={id} />

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
