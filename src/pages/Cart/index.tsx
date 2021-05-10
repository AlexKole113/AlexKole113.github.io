import cartCss from './styles/index.scss'
import commonCss from '@/styles/_common.scss'


//temporary
import themes from '@/styles/_themes.scss';
import CartItem from "@/components/CartItem";
import InputWithButton from "@/components/InputWithButton";
import TotalInCart from "@/components/TotalInCart";
import btnCss from "@/components/Button/styles/index.scss";
window.onload = () => document?.querySelector('html')?.classList.add(themes['cart-theme'])

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

                <a href="check-out.html" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}>
                    Next
                </a>

            </div>
        </div>
    </section>
)

export default Cart;
