import cartItemCss from './styles/index.scss'
import {cartAddAction, cartDeleteAction, cartDeleteAllAction, cartInfoAction} from "@/actions/cart";
import {useDispatch} from "react-redux";
import useProductDataByID from "@/hooks/useProductDataByID";

const CartItem = ({id,amount}:{id:number|string, amount:number}) => {

    const { product } = useProductDataByID(id)

    console.log(product)

    const dispatch = useDispatch();
    const addItemProduct = () => {
        dispatch(cartAddAction.request({ params: { data: id } }));
        dispatch(cartInfoAction.request());
    }
    const removeItemProduct = () => {
        dispatch(cartDeleteAction.request({ params: { data: id } }));
        dispatch(cartInfoAction.request());
    }
    const removeProduct = () => {
        dispatch(cartDeleteAllAction.request({ params: { data: id } }));
        dispatch(cartInfoAction.request());
    }

    if(amount < 1 ) return null;
    if(product === null) return null;

    return (
        <div className={cartItemCss['cart-item']}>
            <div className={cartItemCss['cart-item__img']}>
                <img className={cartItemCss['cart-item__img_img']} src={product.image} alt={product?.title} />
            </div>
            <div className={cartItemCss['cart-item__price-amount-group']} >
                <div className={cartItemCss['cart-item__title']} >
                    <span className={cartItemCss['cart-item__title_title']} > {product?.title}
                        {amount > product.stock && <span className={cartItemCss['cart-item__stock-alert']}>Available in stock now: {product.stock} </span> }
                    </span>
                </div>
                <div className={cartItemCss['cart-item__amount']} >
                    <a href="#" onClick={(e) => { e.preventDefault(); removeItemProduct();  } } className={cartItemCss['cart-item__amount_minus']} >-</a>
                    <input type="text" className={cartItemCss['cart-item__amount_current']} value={amount} onChange={()=>{}} />
                    <a href="#" onClick={(e) => { e.preventDefault(); addItemProduct(); } } className={cartItemCss['cart-item__amount_plus']} >+</a>
                </div>
                <div className={cartItemCss['cart-item__total']} >
                <span className={cartItemCss['cart-item__total_total']} >
                    { (product?.price * amount).toFixed(2) }
                </span>
                    <span className={cartItemCss['cart-item__total_currency']} >
                    {product?.currency}
                </span>
                </div>
            </div>
            <a href="#" onClick={(e)=> {e.preventDefault(); removeProduct()} } className={cartItemCss['cart-item__del']} >
            <span  className={cartItemCss['cart-item__del_del']} >
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                     className="svg-inline--fa fa-times fa-w-11" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <path fill="currentColor"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
            </span>
            </a>
        </div>
    )


}

export default CartItem;
