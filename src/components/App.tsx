import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/components/Layout';
//import Preloader from "@/components/Preloader";

const Shop = React.lazy(() => import('@/pages/Shop'));
const CheckOut = React.lazy(() => import('@/pages/CheckOut'));
const Cart = React.lazy(() => import('@/pages/Cart'));
const Favorites = React.lazy(() => import('@/pages/Favorites'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const Settings = React.lazy(() => import('@/pages/Settings'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Search = React.lazy(() => import('@/pages/Search'));
const Page404 = React.lazy(() => import('@/pages/Page404'));

const themeAndMenuStatusDefault:{themeID:string|null, pageID:string|null, menuOpened:boolean, [key:string]:any} = {
  themeID: null, pageID: null, menuOpened: false,
};
export const LayoutContext = React.createContext(themeAndMenuStatusDefault);

export default () => {
  const [themeAndMenu, setMenuAndTheme] = useState({
    ...themeAndMenuStatusDefault,
    setThemeID: (themeID:string|null) => {
      setMenuAndTheme((prevState) => ({
        ...prevState,
        themeID,
      }));
      return themeID;
    },
    toggleMenu: () => {
      setMenuAndTheme((prevState) => {

        if( prevState.menuOpened ) {
          document.body.style.overflowX = 'hidden';
        } else {
          document.body.style.overflow = 'hidden';
        }

         return {
        ...prevState,
        menuOpened: !prevState.menuOpened,
      }
      });
    },
    setPageID: (pageID:string) => {
      setMenuAndTheme((prevState) => ({
        ...prevState,
        pageID,
      }));
    },
  });
  return (
    <LayoutContext.Provider value={themeAndMenu}>
      <Router>
        <Layout toggleMenuCallback={themeAndMenu.toggleMenu}>
          <ErrorBoundary>
            <React.Suspense fallback={null}>
              <Switch>
                  <Route path="/" component={Shop} exact />
                  <Route path="/check-out" component={CheckOut} />
                  {/* Thank U page */}
                  <Route path="/cart" component={Cart} />
                  <Route path="/favorites" component={Favorites} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/search" component={Search} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/contacts" component={Contact} />
                  <Route path="*" component={Page404} />
                  {/* 404 page */}
              </Switch>
            </React.Suspense>
          </ErrorBoundary>
        </Layout>
      </Router>
    </LayoutContext.Provider>

  );
};
