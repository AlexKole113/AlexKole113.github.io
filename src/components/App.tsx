import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from "@/components/Layout";
//import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";


export default () => {

  return (
    <ErrorBoundary>
      <Layout>


        {/*<Shop />*/}
        <Profile />


      </Layout>
    </ErrorBoundary>
  );
};
