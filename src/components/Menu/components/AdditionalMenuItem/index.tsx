import { Link } from "react-router-dom";
import CartIcon from "@/components/Menu/components/AdditionalMenuItem/components/CartIcon";
import FavoritesIcon from "@/components/Menu/components/AdditionalMenuItem/components/FavoritesIcon";
import menuStyles from "@/components/Menu/styles/index.scss";


const AdditionalMenuItem = ({value, amount }:{value:string, amount?:number}) => {

    const iconsCollection = new Map([
        ['favorites', <FavoritesIcon />],
        ['cart', <CartIcon />],
    ])


    const linksCollection = new Map([
        ['favorites', '/favorites' ],
        ['cart', '/cart' ],

    ])

    const image = ( !value ) ? '' : iconsCollection.get(`${value}`) ?? '' ;
    const link  = ( !value ) ? '' : linksCollection.get(`${value}`) ?? '' ;

    return(
        <li className={menuStyles['additional-menu__items_item']}>
            <Link className={`${menuStyles['additional-menu__link']} ${menuStyles[`link-${value}`]}`} to={ ( amount && amount > 0) ? link : '#' }>
                {image}
                {( amount && amount > 0) ? <span className={menuStyles['amount-now']}> { amount } </span> : '' }
            </Link>
        </li>
    )
}

export default AdditionalMenuItem;
