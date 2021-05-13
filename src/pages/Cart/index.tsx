import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem";
import InputWithButton from "@/components/InputWithButton";
import TotalInCart from "@/components/TotalInCart";
import btnCss from "@/components/Button/styles/index.scss";
import cartCss from './styles/index.scss'
import commonCss from '@/styles/_common.scss'


const Cart = () => (
    <section className={cartCss['cart-group']}>
        <div className={commonCss['container']}>
            <div className={cartCss['cart-group__group']}>
                <section className={cartCss['cart-group__title-block']}>
                    <h3 className={cartCss['cart-group__title-block_title']}>
                        Your order
                    </h3>
                </section>
                <section className={cartCss['cart-group__collection']}>

                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />

                </section>
                <section className={cartCss['promocode-group']} >

                    <InputWithButton  styling={'cart-input'}/>

                </section>

                <TotalInCart />

                <Link to="/check-out" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}>
                    Next
                </Link>

            </div>
        </div>
    </section>
)

export default Cart;
