import { IUser } from '@/user/IUser';

const testUser:IUser = {
  id: '1',
  profile: {
    profile: {
      name: 'John Doe',
      phone: '1234567',
      email: 'john@doe.com',
    },
    payments: {
      cards: [{
        number: '1234-5678-9012-3456',
        date: '09/28',
        name: 'JOHN DOE',
        cvv: '123',
      }],
    },
    address: {
      streetHouse: 'Lenina, 1',
      countyCity: 'USA, Los-Angeles',
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

const getTestUser = (id:string) => (
  {
    ...testUser,
    id,
  }
);

export default getTestUser;
