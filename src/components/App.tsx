import React, {useState} from "react";
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from "@/components/Layout";
import Cart from "@/pages/Cart";
//import CheckOut from "@/pages/CheckOut";
//import Contact from "@/pages/Contact";
//import Favorites from "@/pages/Favorites";
//import Settings from "@/pages/Settings";
//import Shop from "@/pages/Shop";
//import Profile from "@/pages/Profile";

const themeAndMenuStatusDefault = {theme: 'flowers-theme', menuOpened: false }
export const LayoutContext = React.createContext( themeAndMenuStatusDefault )

export default () => {

    const [ themeAndMenu, setMenuAndTheme ] = useState( themeAndMenuStatusDefault )

    const toggleMenu = () => {
        setMenuAndTheme({
            ...themeAndMenu,
            menuOpened: !themeAndMenu.menuOpened
        })
    }


  return (
    <ErrorBoundary>

      <LayoutContext.Provider value={themeAndMenu}>
          <Layout toggleMenuCallback={toggleMenu} >


              <Cart />
              {/*<CheckOut />*/}
              {/*<Contact />*/}
              {/*<Favorites />*/}
              {/*<Shop />*/}
              {/*<Profile />*/}
              {/*<Settings />*/}
              {/* Thank U page */}


          </Layout>
      </LayoutContext.Provider>



    </ErrorBoundary>
  );
};
