import footerAppMenuCss from './styles/index.scss'

const FooterMenu = () => (
    <nav className={footerAppMenuCss['footer-app-menu']} >
        <ul className={footerAppMenuCss['footer-app-menu__list']}>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <a className={footerAppMenuCss['footer-app-menu__list_item_link']} href="profile.html">
                    profile
                </a>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <a className={footerAppMenuCss['footer-app-menu__list_item_link']} href="profile.html">
                    explore
                </a>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <a className={footerAppMenuCss['footer-app-menu__list_item_link']} href="profile.html">
                    settings
                </a>
            </li>
            <li className={footerAppMenuCss['footer-app-menu__list_item']}>
                <a className={footerAppMenuCss['footer-app-menu__list_item_link']} href="profile.html">
                    contact
                </a>
            </li>
        </ul>
    </nav>
)

export default FooterMenu;
