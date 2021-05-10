import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from "@/components/Layout";
import Cart from "@/pages/Cart";
//import CheckOut from "@/pages/CheckOut";
//import Contact from "@/pages/Contact";
//import Favorites from "@/pages/Favorites";
//import Settings from "@/pages/Settings";
//import Shop from "@/pages/Shop";
//import Profile from "@/pages/Profile";


export default () => {

  return (
    <ErrorBoundary>
      <Layout>


        <Cart />
        {/*<CheckOut />*/}
        {/*<Contact />*/}
        {/*<Favorites />*/}
        {/*<Shop />*/}
        {/*<Profile />*/}
        {/*<Settings />*/}
        {/* Thank U page */}



      </Layout>
    </ErrorBoundary>
  );
};
