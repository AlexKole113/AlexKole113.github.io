import React from "react";
import cssShopAnimation from '@/styles/shop-animation.scss';
import productCardCss from './styles/index.scss';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';
import AddToFavoritesButton from "@/components/AddToFavoritesButton";
import AddToCartButton from "@/components/AddToCartButton";
import LoadableProductCardImage from "@/components/ProductCard/components/ProductCardImage";
import useMultiLanguage from "@/hooks/useMultiLanguage";


const ProductCard = ({ product }:{product:IFakeProductItem}) => {
  const __translate = useMultiLanguage();
  const {
    title, image, data, price, currency, stock, id
  } = product;
    const params = data.map((item:{[key:string]:string|number}) => {
    const param = Object.keys(item)[0];
    return (
      <span key={param}>
        <span className={productCardCss['product-card__info-params-name']}>
          {__translate(param)}
          :
        </span>
        <span className={productCardCss['product-card__info-params-value']}>{item[param]}</span>
      </span>
    );
  });

  return (
    <div data-test={`product-card`} className={`${productCardCss['product-card']} ${cssShopAnimation['product-card']}`}>
      <div className={productCardCss['product-card__buttons']}>
        <AddToFavoritesButton id={id} />
        <AddToCartButton id={id} />
      </div>
      <LoadableProductCardImage src={image} title={title} />
      <div className={productCardCss['product-card__info']}>
        <span className={productCardCss['product-card__info-title']}>{__translate(title)}</span>
        <span className={productCardCss['product-card__info-params']}>
          {params}
        </span>
        <span className={productCardCss['product-card__info-price']}>
          <span className={productCardCss['product-card__info-price-currency']}>{currency}</span>
          <span className={productCardCss['product-card__info-price-value']}>{price}</span>
        </span>
      </div>
      <div className={productCardCss['product-card__additional-info']}>
        <span className={productCardCss['product-card__params']}>
          <span className={productCardCss['product-card__params-name']}>{__translate('In Stock')}</span>
          <span className={productCardCss['product-card__params-value']}>{stock}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
