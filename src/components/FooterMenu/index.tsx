import footerAppMenuCss from './styles/index.scss'
import {
    Link
} from 'react-router-dom';

const FooterMenu = () => (
    <nav data-test={`footer-menu`} className={footerAppMenuCss['footer-app-menu']} >
        <ul className={footerAppMenuCss['footer-app-menu__list']}>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/profile'}>
                    profile
                </Link>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/shop'}>
                     explore
                </Link>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/settings'} >
                    settings
                </Link>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/contacts'} >
                    contact
                </Link>
            </li>
        </ul>
    </nav>
)

export default FooterMenu;
