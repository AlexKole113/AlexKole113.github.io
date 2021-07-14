import {
  ReactNode, useContext, useEffect, useState,
} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Preloader from '@/components/Preloader';
import themesCss from '@/styles/_themes.scss';
import codePenDemoCss from '@/styles/_for-code-pen-demonstartion.scss';
import menuStyles from '@/components/Menu/styles/index.scss';
import { LayoutContext } from '@/components/App';
import getPath from '@/utils/getPath';

interface LayoutProps {
  children:ReactNode,
  toggleMenuCallback: () => void
}

const Layout = ({ children, toggleMenuCallback }: LayoutProps) => {
  const { menuOpened } = useContext(LayoutContext);
  const [pageThemeID, setPageThemeID] = useState('1');

  const pathThemesMap = new Map([
    ['shop', '1'],
    ['profile', 'profile-theme'],
    ['contacts', 'contact-theme'],
    ['settings', 'settings-theme'],
    ['cart', 'cart-theme'],
  ]);

  useEffect(() => {
    const path = getPath();
    const themeID = pathThemesMap.get(`${path}`);
    if (themeID && typeof themeID === 'string') {
      setPageThemeID(() => themeID);
    }
  }, []);

  return (
    <main className={themesCss[`cat-${pageThemeID}`] ?? themesCss[pageThemeID ?? '']}>
      <section className={`${codePenDemoCss['mobile-wrapper']} ${(menuOpened) ? menuStyles['menu-opened'] : ''}`} id="content-group">
        <Preloader />
        <Header>
          <Menu toggleMenuCallback={toggleMenuCallback} />
        </Header>
        <section className={codePenDemoCss.content}>
          {children}
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
