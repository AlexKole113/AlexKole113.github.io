import { Link } from "react-router-dom";
import ListIcon from "@/components/Menu/components/MainMenuItem/components/ListIcon";
import UserIcon from "@/components/Menu/components/MainMenuItem/components/UserIcon";
import CogIcon from "@/components/Menu/components/MainMenuItem/components/CogIcon";
import PhoneIcon from "@/components/Menu/components/MainMenuItem/components/PhoneIcon";
import menuStyles from "@/components/Menu/styles/index.scss";


const MainMenuItem = ({value, active }:{value:string, active?:string}) => {

    const iconsCollection = new Map([
        ['explore', <ListIcon />],
        ['profile', <UserIcon />],
        ['settings',<CogIcon />],
        ['contact', <PhoneIcon />]

    ])


    const linksCollection = new Map([
        ['explore', 'shop' ],
        ['profile', 'profile' ],
        ['settings','settings'],
        ['contact', 'contacts']
    ])



    const image = ( !value ) ? '' : iconsCollection.get(`${value}`) ?? '' ;
    const link  = ( !value ) ? '' : linksCollection.get(`${value}`) ?? '' ;


    return(
        <li className={` ${menuStyles['main-menu__items_item']} ${ (active === 'active') ? menuStyles['active-menu-item'] : ''}`}>
            <Link className={menuStyles['main-menu__link']} to={`/${link}`}>
                <span className={menuStyles['main-menu__link-icon']}>
                    {image}
                </span>
                <span className={menuStyles['main-menu__link-text']}>
                    {value}
                </span>
                <span className={menuStyles['main-menu__link-extra']}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                         data-icon="arrow-right"
                         className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                </span>
            </Link>
        </li>
    )
}

export default MainMenuItem;
