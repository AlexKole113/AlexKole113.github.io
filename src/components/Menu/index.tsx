import commonStyles from '@/styles/index.scss';
import MainMenuItem from '@/components/Menu/components/MainMenuItem';
import AdditionalMenuItem from '@/components/Menu/components/AdditionalMenuItem';
import PageTitle from '@/components/PageTitle';
import Hamburger from './components/Hamburger';
import menuStyles from './styles/index.scss';

const Menu = ({ toggleMenuCallback }:{toggleMenuCallback: () => void }) => {
  const menu = [
    { title: 'profile', path: '/profile' },
    { title: 'explore', path: '/shop' },
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
              <PageTitle value="explore" />
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
          <AdditionalMenuItem value="favorites" amount={3} />

        </ul>
      </nav>
    </>
  );
};

export default Menu;
