export interface IUser {
  id: string|number,
  profile: {
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
  },
  shop: {
    cart: string|number[]|[],
    favorites: string|number[]|[],
  },
  settings: {
    notifications: boolean,
  },
  [key:string]:any
}
