import totalInCartCss from './styles/index.scss'

const TotalInCart = () => (
    <section className={totalInCartCss['total-in-cart']} >
       <span className={totalInCartCss['total-in-cart__text']} >
           Total:
       </span>
        <span className={totalInCartCss['total-in-cart__value']} >
           <span className={totalInCartCss['total-in-cart__value_number']} >
                124,00.50
           </span>
           <span className={totalInCartCss['total-in-cart__value_currency']} >
                $
           </span>
       </span>

    </section>
)

export default TotalInCart;
