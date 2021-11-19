import APIService from '../../mocks/APIService';

const withAPIService = (Component:(props:any) => JSX.Element) => (props:any) => <Component {...props} apiService={APIService} />;
export default withAPIService;
