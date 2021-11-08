import footerAppMenuCss from './styles/index.scss'
import {
    Link
} from 'react-router-dom';
import useMultiLanguage from "@/hooks/useMultiLanguage";

const FooterMenu = () => {

    const __translate = useMultiLanguage();
    return (
        <nav data-test={`footer-menu`} className={footerAppMenuCss['footer-app-menu']} >
            <ul className={footerAppMenuCss['footer-app-menu__list']}>
                <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                    <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/profile'}>
                        {__translate('profile')}
                    </Link>
                </li>
                <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                    <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/shop'}>
                        {__translate('shop')}
                    </Link>
                </li>
                <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                    <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/settings'} >
                        {__translate('settings')}
                    </Link>
                </li>
                <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                    <Link className={footerAppMenuCss['footer-app-menu__list_item_link']} to={'/contacts'} >
                        {__translate('contact')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default FooterMenu;
