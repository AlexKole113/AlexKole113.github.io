import totalInCartCss from './styles/index.scss';
import useTotalPriceCart from "@/hooks/useTotalPriceCart";
import useMultiLanguage from "@/hooks/useMultiLanguage";

const TotalInCart = () => {

  const __translate = useMultiLanguage();
  const {cart} = useTotalPriceCart();
  return (
      <section className={totalInCartCss['total-in-cart']}>
        <span className={totalInCartCss['total-in-cart__text']}>
          {__translate('Total')}:
        </span>
        <span className={totalInCartCss['total-in-cart__value']}>
          <span data-test={'total-in-cart'} className={totalInCartCss['total-in-cart__value_number']}>
            { cart.total > 0 && cart.total.toFixed(2)}
          </span>
          <span className={totalInCartCss['total-in-cart__value_currency']}>
            {cart.currency}
          </span>
        </span>
      </section>
  );
}

export default TotalInCart;
