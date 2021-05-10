import { ReactNode } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";


//import '@/styles/index.scss';

import '@/styles/partials/_mixins.scss'

//import "@/components/Menu/styles/index.scss";
import "@/components/CategoryList/styles/index.scss";
import "@/components/Button/styles/index.scss";
import "@/components/Search/styles/index.scss";
import "@/components/ProductCard/styles/index.scss";
//import "@/components/Preloader/styles/index.scss";
//import "@/components/Footer/styles/index.scss";

import "@/pages/Settings/styles/index.scss";
import "@/pages/Profile/styles/index.scss";
import "@/pages/Contact/styles/index.scss";
//import "@/pages/Shop/styles/index.scss";
import "@/pages/Cart/styles/index.scss";

import "@/components/SettingsControl/styles/index.scss";
//import "@/components/Select/styles/index.scss";
import "@/components/Switcher/styles/index.scss";
//import "@/components/Input/styles/index.scss";
import "@/components/InputWithButton/styles/index.scss";
import "@/components/ContactItem/styles/index.scss";
import "@/components/CartItem/styles/index.scss";
import "@/components/FavoritesItem/styles/index.scss";
import "@/components/TotalInCart/styles/index.scss";

//import '@/pages/Shop/styles/partials/_groupped-cards.scss';
import '@/pages/Shop/styles/partials/_animation-transition.scss';


// ---
//import styles from '@/styles/index.scss';
import codePenDemoCss from '@/styles/_for-code-pen-demonstartion.scss'
import Menu from "@/components/Menu";
import Preloader from "@/components/Preloader";


interface DefaultLayoutProps {
    children:ReactNode
}

const Layout = ({ children }: DefaultLayoutProps) => (
   <main>
        <div className={codePenDemoCss['demo-preloader']}>
            <div className={codePenDemoCss['demo-preloader__1']}>
                <span className={codePenDemoCss['demo-preloader__1_top']}></span>
            </div>
        </div>

        <section className={codePenDemoCss['mobile-wrapper']}>

            <Preloader />

            <Header>
                <Menu />
            </Header>

            <section className={codePenDemoCss.content}>
                { children }
            </section>

          <Footer />

        </section>
   </main>
);

export default Layout;
