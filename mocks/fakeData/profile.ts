interface IFakeProfileCategory {
    id: number,
    active?: string,
    [key:string]:any
}
interface IFakeProfileCategories extends Array<IFakeProfileCategory>{};

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
    {id: 1, value:'Profile', icon:'plant', styling: 'shadow-pink' , active: 'active' },
    {id: 3, value:'Payments', icon:'plant', styling: 'shadow-green' },
    {id: 4, value:'Address', icon:'plant', styling: 'shadow-blue' },
];

const fakeProfileFields:IFakeProfileFields = {
    Profile: {
        id: 1,
        fields: [
            {name: 'name', type: 'text', placeholder: 'Name and Surname'},
            {name: 'phone', type: 'number', placeholder: 'Phone'},
            {name: 'email', type: 'email', placeholder: 'Email'},
        ],
    },
    Payments: {
        id: 3,
        fields: [
            {name: 'card_number', type: 'number', placeholder: 'Card number'},
            {name: 'card_date', type: 'text', placeholder: 'Card Date'},
            {name: 'card_name_surname', type: 'text', placeholder: 'Name Surname'},
            {name: 'card_cvv', type: 'password', placeholder: 'Card CVV'},
        ],
    },
    Address: {
        id: 4,
        fields: [
            {name: 'address_str_house', type: 'text', placeholder: 'Street, house'},
            {name: 'address_country_city', type: 'text', placeholder: 'Country, City'},
            //{name: 'address_zip_code', type: 'number', placeholder: 'Zip Code'},
        ],
    },
}
export { fakeProfileCategories, fakeProfileFields, IFakeProfileFields, IFakeProfileCategories, IFakeProfileCategory }
