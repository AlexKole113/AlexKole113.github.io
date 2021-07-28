import setNextUserID from '@/utils/user/setNextUserID';
import getDataFromStorage from '@/utils/storage/getDataFromStorage';

class User {
  userData:Record<string, any>;

  static defaultUserData:Record<string, any> = {
    id: setNextUserID(),
    profile: {
      name: '',
      phone: '',
      email: '',
    },
    payments: {
      cards: [{
        number: '',
        date: '',
        name: '',
        cvv: '',
      }],
    },
    address: {
      streetHouse: '',
      countyCity: '',
    },
  };

  static wasRegistered = () => getDataFromStorage('userID');

  constructor(data = User.defaultUserData) {
    this.userData = data;
  }

  setProfileFieldData = (section: string, field:string, data:string) => {
    if (section === 'payments') return false;
    if (typeof this.userData[section][field] !== 'undefined') {
      this.userData[section][field] = data;
      return true;
    }
    return false;
  };

  setPaymentCardFieldData = (field:string, data:string) => {
    if (typeof this.userData.payments.cards[0][field] !== 'undefined') {
      this.userData.payments.cards[0][field] = data;
      return true;
    }
    return false;
  };

  // // Shop Updates
  // addToCart = (productID:string|number) => {};
  //
  // getCart = () => {};
  //
  // addToFavorites = (productID:string|number) => {};
  //
  // getFavorites = () => {};
  //
  // // Settings Updates
  // setSettingsFieldData = (field:string, data:boolean) => {
  //   if (typeof this.userData.settings[field] !== 'undefined') {
  //     this.userData.settings[field] = data;
  //     return true;
  //   }
  //   return false;
  // };
}

export default User;
