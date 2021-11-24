import setupData from './setupData/setupData';
import ActionTo from './components/ActionTo';
import SetActions from "./components/SetActions";

const {host} = setupData;
const action = new ActionTo(setupData);
const setActions = new SetActions(setupData);

describe('Test Pages v2.0', () => {
  it('Profile page surf', () => {
    action.init({host, setScreenSize: 'xl'});
    setActions.useMainMenuAndGoTo('profile')

    setActions.openProfileTabAddress();
    setActions.openProfileTabPayments();

    setActions.openProfileTabProfile();
    setActions.fillProfileProfileForm();

    setActions.openProfileTabAddress();
    setActions.fillProfileAddressForm();

    setActions.openProfileTabPayments();
    setActions.fillProfilePaymentForm();

    setActions.checkAllProfileInputs()

    // check background
    setActions.checkTheme(' --background-theme: linear-gradient(180deg, rgb(162,204,114) 20%, rgb(70,130,27) 80%);\n' +
        '        --mobile-wrapper-menu-theme:linear-gradient(135deg, rgb(162,204,114), rgb(70,130,27));\n' +
        '        --color-theme: rgb(162,204,114);\n' +
        '        ');

    //  mainMenu surf
    setActions.mainMenuSurf({startFrom: 'profile',endTo:'profile'});

    //footer menu surf
    setActions.footerMenuSurf({startFrom: 'profile',endTo:'profile'})
  });

  it('Shop page surf', ()=>{
    action.init({host, setScreenSize: 'xl'});
    setActions.useSearchProducts('tree');
  });

  it('Search Products', ()=>{
    action.init({host, setScreenSize: 'xl'});
    setActions.useSearchProducts('tree');
  });

  it('Favorites', ()=>{
    action.init({host, setScreenSize: 'xl'});
    setActions.useFavorites();
  });

  it('Cart', () => {
    action.init({host, setScreenSize: 'xl'});
    setActions.useCart();
  })

  it('Settings', () => {
    action.init({host, setScreenSize: 'xl'});
    setActions.useSettings();
  })
});
