export interface IUser {
  id: string|number,
  profile: {
    name: string,
    phone: string,
    email: string,
  },
  payments: {
    cards: [{
      number: string,
      date: string,
      name: string,
      cvv: string,
    }],
  },
  address: {
    streetHouse:string,
    countyCity: string,
  },
}
