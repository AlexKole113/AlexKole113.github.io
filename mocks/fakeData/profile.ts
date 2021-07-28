interface IFakeProfileCategory {
  id: number,
  active?: string,
  [key:string]:any
}
interface IFakeProfileCategories extends Array<IFakeProfileCategory>{}
interface IFakeProfileField {
  name: string,
  type: string,
  placeholder: string,
  [key:string]: any
}
interface IFakeProfileFields {
  [key: string]: {
    id: number,
    fields: Array<IFakeProfileField>
  }
}

const fakeProfileCategories:IFakeProfileCategories = [
  {
    id: 1, value: 'Profile', icon: 'plant', styling: 'shadow-pink', active: 'active',
  },
  {
    id: 3, value: 'Payments', icon: 'plant', styling: 'shadow-green',
  },
  {
    id: 4, value: 'Address', icon: 'plant', styling: 'shadow-blue',
  },
];

const fakeProfileFields:IFakeProfileFields = {
  profile: {
    id: 1,
    fields: [
      { name: 'name', type: 'text', placeholder: 'Name and Surname' },
      { name: 'phone', type: 'number', placeholder: 'Phone' },
      { name: 'email', type: 'email', placeholder: 'Email' },
    ],
  },
  payments: {
    id: 3,
    fields: [
      { name: 'number', type: 'tel', placeholder: 'Card number' },
      { name: 'date', type: 'text', placeholder: 'Card Date' },
      { name: 'name', type: 'text', placeholder: 'Name Surname' },
      { name: 'cvv', type: 'password', placeholder: 'Card CVV' },
    ],
  },
  address: {
    id: 4,
    fields: [
      { name: 'streetHouse', type: 'text', placeholder: 'Street, house' },
      { name: 'countyCity', type: 'text', placeholder: 'Country, City' },
    ],
  },
};
export {
  fakeProfileCategories, fakeProfileFields, IFakeProfileFields, IFakeProfileCategories, IFakeProfileCategory,
};
