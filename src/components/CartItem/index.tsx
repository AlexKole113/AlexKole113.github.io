import cartItemCss from './styles/index.scss'
import {useState} from "react";

const CartItem = ({title, image, price, currency, addItemProduct, removeItemProduct, removeProduct, inCart }:{title:string,image:string, price:number, currency: string, inCart:number, addItemProduct: () => void ,removeItemProduct:() => void, removeProduct:() => void  }) => {

    const [state,setState] = useState(inCart);
    const increase = () => {
        setState((prevState) => prevState += 1 )
    }
    const decrease = () => {
        setState((prevState) => prevState -= 1 )
    }
    const addItemHandler = () => {
        addItemProduct();
        increase();
    }
    const removeItemHandler = () => {
        removeItemProduct();
        decrease()
    }

    return (
        <div className={cartItemCss['cart-item']}>
            <div className={cartItemCss['cart-item__img']}>
                <img className={cartItemCss['cart-item__img_img']} src={image} alt={title} />
            </div>
            <div className={cartItemCss['cart-item__price-amount-group']} >
                <div className={cartItemCss['cart-item__title']} >
                    <span className={cartItemCss['cart-item__title_title']} > {title} </span>
                </div>
                <div className={cartItemCss['cart-item__amount']} >
                    <a href="#" onClick={(e) => { e.preventDefault(); removeItemHandler();  } } className={cartItemCss['cart-item__amount_minus']} >-</a>
                    <input type="text" className={cartItemCss['cart-item__amount_current']} value={state} onChange={()=>{}} />
                    <a href="#" onClick={(e) => { e.preventDefault(); addItemHandler(); } } className={cartItemCss['cart-item__amount_plus']} >+</a>
                </div>
                <div className={cartItemCss['cart-item__total']} >
                <span className={cartItemCss['cart-item__total_total']} >
                    {price}
                </span>
                    <span className={cartItemCss['cart-item__total_currency']} >
                    {currency}
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
