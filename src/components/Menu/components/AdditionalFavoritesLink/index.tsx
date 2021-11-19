import { Link } from "react-router-dom";

import FavoritesIcon from "@/components/Menu/components/AdditionalFavoritesLink/components/FavoritesIcon";
import menuStyles from "@/components/Menu/styles/index.scss";
import {useDispatch, useSelector} from "react-redux";
import {favoritesStateSelector} from "@/selectors/favorites";
import {useEffect} from "react";
import {favoritesInfoAction} from "@/actions/favorites";


const AdditionalFavoritesLink = () => {

    const dispatch = useDispatch();
    const {data} = useSelector(favoritesStateSelector);

    useEffect(()=>{
        dispatch(favoritesInfoAction.request())
    },[])

    return(
        <li className={menuStyles['additional-menu__items_item']}>
            <Link className={`${menuStyles['additional-menu__link']} ${menuStyles[`link-favorites`]}`} to={ data.length ? '/favorites' : '#' }>
                <FavoritesIcon />
                { data.length ? <span className={menuStyles['amount-now']}> { data.length } </span> : '' }
            </Link>
        </li>
    )
}

export default AdditionalFavoritesLink;
