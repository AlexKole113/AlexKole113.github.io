import { IUser } from '@/user/IUser';

const testUser:IUser = {
  id: '1',
  profile: {
    name: 'John Doe',
    phone: '',
    email: 'john@doe.com',
  },
  payments: {
    cards: 'use protected gateway',
  },
  address: {
    streetHouse: 'Somewhere, 1',
    countyCity: 'USA, Los-Angeles',
  },
};

const getTestUser = (id:string) => ({
  ...testUser,
  id,
});

export default getTestUser;
