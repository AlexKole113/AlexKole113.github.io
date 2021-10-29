import commonStyles from '@/styles/index.scss';
import MainMenuItem from '@/components/Menu/components/MainMenuItem';
import PageTitle from '@/components/PageTitle';
import Hamburger from './components/Hamburger';
import menuStyles from './styles/index.scss';
import AdditionalCartLink from "@/components/Menu/components/AdditionalCartLink";
import AdditionalFavoritesLink from "@/components/Menu/components/AdditionalFavoritesLink";

const Menu = ({ toggleMenuCallback }:{toggleMenuCallback: () => void }) => {
  const menu = [
    { title: 'profile', path: '/profile' },
    { title: 'shop', path: '/shop' },
    { title: 'settings', path: '/settings' },
    { title: 'contact', path: '/contacts' },
  ];

  return (
    <>
      <section className={menuStyles.menu}>
        <div className={commonStyles.container}>
          <div className={menuStyles['menu-top']}>
            <div onClick={toggleMenuCallback} className={menuStyles['menu-top__hum']}>
              <Hamburger />
            </div>
            <div className={menuStyles['menu-top__page-title']}>
              <PageTitle />
            </div>
          </div>
          <div className={menuStyles['menu-main-group']}>
            <nav className={menuStyles['main-menu']}>
              <ul className={menuStyles['main-menu__items']}>
                {menu.map(({ title, path }) => <MainMenuItem key={path} value={title} path={path} />)}
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <nav className={menuStyles['additional-menu']}>
        <ul className={menuStyles['additional-menu__items']}>

          <AdditionalCartLink  />
          <AdditionalFavoritesLink  />

        </ul>
      </nav>
    </>
  );
};
export default Menu;
