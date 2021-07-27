// @ts-nocheck
import setNextUserID from '@/utils/user/setNextUserID';
import { IUser } from '@/user/IUser';
import getDataFromStorage from '@/utils/storage/getDataFromStorage';

class User {
  userData:IUser;

  static defaultUserData:IUser = {
    id: setNextUserID(),
    profile: {
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
    },
    shop: {
      cart: [],
      favorites: [],
    },
    settings: {
      notifications: true,
    },
  };

  static checkUser = () => getDataFromStorage('userID');

  constructor(data = User.defaultUserData) {
    this.userData = data;
  }

  // Profile Updates
  setProfileFieldData = (section: string, field:string, data:string) => {
    if (typeof this.userData.profile[section][field] !== 'undefined') {
      this.userData.profile[section][field] = data;
      return true;
    }
    return false;
  };

  setPaymentFieldData = (section: string, field:string, data:string) => {
    if (typeof this.userData.profile.payments[section][0][field] !== 'undefined') {
      this.userData.profile.payments[section][0][field] = data;
      return true;
    }
    return false;
  };

  // Shop Updates
  addToCart = (productID:string|number) => {};

  getCart = () => {};

  addToFavorites = (productID:string|number) => {};

  getFavorites = () => {};

  // Settings Updates
  setSettingsFieldData = (field:string, data:boolean) => {
    if (typeof this.userData.settings[field] !== 'undefined') {
      this.userData.settings[field] = data;
      return true;
    }
    return false;
  };
}

export default User;
