import React, {useState, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from "@/components/Layout";
import Cart from "@/pages/Cart";
import CheckOut from "@/pages/CheckOut";
import Contact from "@/pages/Contact";
import Favorites from "@/pages/Favorites";
import Settings from "@/pages/Settings";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import Preloader from "@/components/Preloader";



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


      <LayoutContext.Provider value={themeAndMenu}>
              <Router>
                  <Layout toggleMenuCallback={toggleMenu} >
                      <ErrorBoundary>
                          <Suspense fallback={<Preloader/>}>
                            <Switch>

                              <Route path={'/'} component={Shop} exact />
                              <Route path={'/check-out'} component={CheckOut} />
                              {/* Thank U page */}
                              <Route path={'/cart'} component={Cart} />
                              <Route path={'/favorites'} component={Favorites} />
                              <Route path={'/profile'} component={Profile} />
                              <Route path={'/shop'} component={Shop} />
                              <Route path={'/settings'} component={Settings} />
                              <Route path={'/contacts'} component={Contact} />

                              <Redirect to={'/404'} />
                              {/* 404 page */}


                            </Switch>
                          </Suspense>
                      </ErrorBoundary>
                  </Layout>
              </Router>
      </LayoutContext.Provider>




  );
};