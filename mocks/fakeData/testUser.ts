import { IUser } from '@/user/IUser';

const testUser:IUser = {
  id: '1',
  profile: {
    name: 'John Doe',
    phone: '',
    email: 'john@doe.com',
  },
  payments: {
    cards: [{
      number: '1234567890123456',
      date: '09/28',
      name: 'JOHN DOE',
      cvv: '123',
    }],
  },
  address: {
    streetHouse: 'Lenina, 1',
    countyCity: 'USA, Los-Angeles',
  },
};

const getTestUser = (id:string) => ({
  ...testUser,
  id,
});

export default getTestUser;
