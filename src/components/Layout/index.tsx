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
import { getThemeByPath } from '../../../mocks/fakeData/themes';

interface LayoutProps {
  children:ReactNode,
  toggleMenuCallback: () => void
}

const Layout = ({ children, toggleMenuCallback }: LayoutProps) => {
  const { menuOpened } = useContext(LayoutContext);
  const [pageThemeID, setPageThemeID] = useState('1');

  // TODO: ThemeMap there
  useEffect(() => {
    getThemeByPath(getPath()).then((theme) => {
      if (theme && typeof theme === 'string') {
        setPageThemeID(theme);
      }
    });
  }, []);

  const theme = themesCss[`cat-${pageThemeID}`] ?? themesCss[pageThemeID ?? ''];

  return (
    <main className={theme}>
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
