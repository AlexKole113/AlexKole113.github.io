import { ReactNode, useContext } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Preloader from '@/components/Preloader';
import themesCss from '@/styles/_themes.scss';
import codePenDemoCss from '@/styles/_for-code-pen-demonstartion.scss';
import menuStyles from '@/components/Menu/styles/index.scss';
import { LayoutContext } from '@/components/App';

interface LayoutProps {
  children:ReactNode,
  toggleMenuCallback: () => void
}

const Layout = ({ children, toggleMenuCallback }: LayoutProps) => {
  const { themeID, menuOpened } = useContext(LayoutContext);

  const theme = themesCss[`cat-${themeID}`] ?? themesCss[themeID ?? 'flowers-theme'];

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
