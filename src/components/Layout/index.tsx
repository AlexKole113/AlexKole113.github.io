import {ReactNode, useContext} from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Preloader from "@/components/Preloader";
import themesCss from '@/styles/_themes.scss'
import codePenDemoCss from '@/styles/_for-code-pen-demonstartion.scss'
import menuStyles from  "@/components/Menu/styles/index.scss";
import commonStyles from '@/styles/index.scss';
import {LayoutContext} from "@/components/App";


interface LayoutProps {
    children:ReactNode,
    toggleMenuCallback: () => void
}

console.log(commonStyles)

const Layout = ({ children, toggleMenuCallback }: LayoutProps) => {
    const { theme, menuOpened } = useContext( LayoutContext )

    return(
        <main className={themesCss[theme]}>
            <div className={codePenDemoCss['demo-preloader']}>
                <div className={codePenDemoCss['demo-preloader__1']}>
                    <span className={codePenDemoCss['demo-preloader__1_top']}></span>
                </div>
            </div>
            <section className={`${codePenDemoCss['mobile-wrapper']} ${(menuOpened) ? menuStyles['menu-opened'] : ''}`}>

                <Preloader/>

                <Header>
                    <Menu toggleMenuCallback={toggleMenuCallback} />
                </Header>

                <section className={codePenDemoCss.content}>
                    {children}
                </section>

                <Footer/>

            </section>
        </main>
    );
};

export default Layout;
