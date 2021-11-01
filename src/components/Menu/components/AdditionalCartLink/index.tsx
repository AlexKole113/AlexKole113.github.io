import { Link } from "react-router-dom";
import CartIcon from "@/components/Menu/components/AdditionalCartLink/components/CartIcon";
import menuStyles from "@/components/Menu/styles/index.scss";
import {useDispatch, useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";
import {useEffect} from "react";
import {cartInfoAction} from "@/actions/cart";


const AdditionalCartLink = () => {

    const dispatch = useDispatch();
    const {data} = useSelector(cartStateSelector);

    useEffect(()=>{
        dispatch(cartInfoAction.request())
    },[])

    return(
        <li className={menuStyles['additional-menu__items_item']}>
            <Link className={`${menuStyles['additional-menu__link']} ${menuStyles[`link-cart`]}`} to={ Object.keys(data).length ? '/cart' : '#' }>
                <CartIcon />
                { Object.keys(data).length ? <span className={menuStyles['amount-now']}> { Object.keys(data).length } </span> : '' }
            </Link>
        </li>
    )
}

export default AdditionalCartLink;
