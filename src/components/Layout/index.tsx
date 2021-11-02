import {
  ReactNode, useContext, useEffect, useState,
} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
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
      <div className={codePenDemoCss['tech-stack']}>
        <h1 className={codePenDemoCss['tech-stack__title']}>Stack</h1>
        <ul className={codePenDemoCss['tech-stack__list']}>
          <li className={codePenDemoCss['tech-stack__item']}>Typescript</li>
          <li className={codePenDemoCss['tech-stack__item']}>React, Redux, Saga</li>
          <li className={codePenDemoCss['tech-stack__item']}>SCSS + Style modules</li>
          <li className={codePenDemoCss['tech-stack__item']}>Cypres</li>
          <li className={codePenDemoCss['tech-stack__item']}>PWA, localstorage</li>
          <li className={codePenDemoCss['tech-stack__item']}>React lazyload</li>
        </ul>
      </div>
      <section className={codePenDemoCss['mobile-frame']}>
        <section className={`${codePenDemoCss['mobile-wrapper']} ${(menuOpened) ? menuStyles['menu-opened'] : ''}`} id="content-group">
          <Header>
            <Menu toggleMenuCallback={toggleMenuCallback} />
          </Header>
          <section className={codePenDemoCss.content}>
            {children}
          </section>
          <Footer />
        </section>
      </section>
    </main>
  );
};

export default Layout;
