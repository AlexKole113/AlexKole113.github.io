import commonStyles from '@/styles/index.scss';
import MainMenuItem from '@/components/Menu/components/MainMenuItem';
import AdditionalMenuItem from '@/components/Menu/components/AdditionalMenuItem';
import PageTitle from '@/components/PageTitle';
import Hamburger from './components/Hamburger';
import menuStyles from './styles/index.scss';
import {useEffect, useState} from "react";
import Favorites from "@/favorites/Favorites";
import {useSelector} from "react-redux";
import {favoritesStateSelector} from "@/selectors/favorites";

const Menu = ({ toggleMenuCallback }:{toggleMenuCallback: () => void }) => {
  const menu = [
    { title: 'profile', path: '/profile' },
    { title: 'shop', path: '/shop' },
    { title: 'settings', path: '/settings' },
    { title: 'contact', path: '/contacts' },
  ];
  const favoritesStore = useSelector(favoritesStateSelector);
  const [state, setState] = useState({
    favoritesLength: 0
  })
  useEffect(()=>{
    const favorites = Favorites.getAllFavorites();
    setState(( prevState) => ({
      ...prevState,
      favoritesLength: (Array.isArray(favorites)) ? favorites.length : 0
    }))
  },[favoritesStore])
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

          <AdditionalMenuItem value="cart" amount={5} />
          <AdditionalMenuItem value="favorites" amount={state.favoritesLength} />

        </ul>
      </nav>
    </>
  );
};
export default Menu;
