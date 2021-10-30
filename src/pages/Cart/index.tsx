import { Link } from 'react-router-dom';
import CartItem from '@/components/CartItem';
import InputWithButton from '@/components/InputWithButton';
import TotalInCart from '@/components/TotalInCart';
import btnCss from '@/components/Button/styles/index.scss';
import commonCss from '@/styles/_common.scss';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import cartCss from './styles/index.scss';
import useCartProductList from "@/hooks/useCartProductList";
import {cartAddAction, cartDeleteAction, cartDeleteAllAction, cartInfoAction} from "@/actions/cart";
import {useDispatch} from "react-redux";


const Cart = () => {

  const products = useCartProductList();

  const dispatch = useDispatch();
  const addItemProduct = (id:number|string) => {
    dispatch(cartAddAction.request({ params: { data: id } }));
    dispatch(cartInfoAction.request());
  }
  const removeItemProduct = (id:number|string) => {
    dispatch(cartDeleteAction.request({ params: { data: id } }));
    dispatch(cartInfoAction.request());
  }
  const removeProduct = (id:number|string) => {
    dispatch(cartDeleteAllAction.request({ params: { data: id } }));
    dispatch(cartInfoAction.request());
  }

  useThemeSwitcher('cart-theme');

  console.log(products)
  return (
    <section className={cartCss['cart-group']}>
      <div className={commonCss.container}>
        <div className={cartCss['cart-group__group']}>

          <section className={cartCss['cart-group__title-block']}>
            <h3 className={cartCss['cart-group__title-block_title']}>
              Your order
            </h3>
          </section>

          <section className={cartCss['cart-group__collection']}>
            { products.map(({title,image,price,currency,id,inCart},key) => <CartItem inCart={inCart} addItemProduct={()=>{addItemProduct(id)}} removeItemProduct={()=>{removeItemProduct(id)} } removeProduct={()=>{removeProduct(id)}}  key={key} title={title} image={image} price={price} currency={currency} />)}
          </section>

          <section className={cartCss['promocode-group']}>
            <InputWithButton styling="categories-input" onClickHandler={()=>{ console.log('btn pressed') }}  />
          </section>

          <TotalInCart />

          <Link to="/check-out" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}> Next </Link>

        </div>
      </div>
    </section>
  );
};

export default Cart;
