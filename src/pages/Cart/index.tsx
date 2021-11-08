import { Link } from 'react-router-dom';
import InputWithButton from '@/components/InputWithButton';
import TotalInCart from '@/components/TotalInCart';
import btnCss from '@/components/Button/styles/index.scss';
import commonCss from '@/styles/_common.scss';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import cartCss from './styles/index.scss';
import {useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";
import React from "react";
import Arrow from "@/components/InputWithButton/components/arrow";
import useMultiLanguage from "@/hooks/useMultiLanguage";

const CartItem = React.lazy(() => import('@/components/CartItem') );

const Cart = () => {
  const __translate = useMultiLanguage();
  const {data:cart} = useSelector(cartStateSelector)
  useThemeSwitcher('cart-theme');
  let itemsArray:[number|string,number][] = []
  for( const id in cart ) itemsArray = [...itemsArray,[id,cart[id]]];
  return (
    <section className={cartCss['cart-group']}>
      <div className={commonCss.container}>
        <div className={cartCss['cart-group__group']}>
          <section className={cartCss['cart-group__title-block']}>
            <h3 className={cartCss['cart-group__title-block_title']}>
              {__translate('Your order')}
            </h3>
          </section>
          <section className={cartCss['cart-group__collection']}>
            <React.Suspense fallback={<p className={cartCss['cart-group__loader']}>Loading...</p>} >
              { itemsArray.map(([id,amount]) => <CartItem key={id} id={id} amount={amount} />) }
            </React.Suspense>
          </section>

          {
            itemsArray.length ? <section className={cartCss['promocode-group']}>
              <InputWithButton styling="categories-input" onClickHandler={()=>{ console.log('btn pressed') }} placeholder={'Enter promo code'} >
                <Arrow />
              </InputWithButton>
            </section> : null
          }
          {
            itemsArray.length ? <TotalInCart /> : null
          }
          {
            itemsArray.length ? <Link to="/check-out" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}>{__translate('Next')}</Link> : null
          }
        </div>
      </div>
    </section>
  );
};

export default Cart;
