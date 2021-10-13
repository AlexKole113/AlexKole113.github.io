import cartItemCss from './styles/index.scss'

const CartItem = () => (
    <div className={cartItemCss['cart-item']}>
        <div className={cartItemCss['cart-item__img']}>
            <img className={cartItemCss['cart-item__img_img']}
                 src="https://source.unsplash.com/user/erondu/300x300"
                 alt="" />
        </div>
        <div className={cartItemCss['cart-item__price-amount-group']} >
            <div className={cartItemCss['cart-item__title']} >
                <span className={cartItemCss['cart-item__title_title']} >
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, distinctio, quo. Beatae corporis deserunt ducimus ex id iste nemo nulla obcaecati odio, possimus quasi quibusdam ratione repellat veritatis voluptatem voluptatibus.
                </span>
            </div>
            <div className={cartItemCss['cart-item__amount']} >
                <span className={cartItemCss['cart-item__amount_minus']} >-</span>
                <input type="text" className={cartItemCss['cart-item__amount_current']} value="1" />
                    <span className={cartItemCss['cart-item__amount_plus']} >+</span>
            </div>
            <div className={cartItemCss['cart-item__total']} >
                <span className={cartItemCss['cart-item__total_total']} >
                    100
                </span>
                <span className={cartItemCss['cart-item__total_currency']} >
                    $
                </span>
            </div>
        </div>

        <div className={cartItemCss['cart-item__del']} >
            <a href="#" className={cartItemCss['cart-item__del_del']} >
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                     className="svg-inline--fa fa-times fa-w-11" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <path fill="currentColor"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
            </a>
        </div>
    </div>
)

export default CartItem;
