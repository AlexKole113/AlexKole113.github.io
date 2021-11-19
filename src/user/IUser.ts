export interface IUser {
  id: string|number,
  profile: {
    name: string,
    phone: string,
    email: string,
  },
  payments: {
    cards: string,
  },
  address: {
    streetHouse:string,
    countyCity: string,
  },
}
