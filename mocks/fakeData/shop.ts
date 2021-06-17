interface IFakeShopCategory {
    id: number,
    active?: string,
    [key:string]:any
}
interface IFakeShopCategories extends Array<IFakeShopCategory>{};
interface IFakeProductItem {
    id: number,
    sku: number,
    title: string,
    image: string,
    data: { [key:string]: string}[],
    price: number,
    currency: '$' | '€',
    stock:number
}
interface IFakeProducts {
    id: number,
    items: IFakeProductItem[]
}

const fakeCategories = [
    {id: 1, value:'Flowers', icon:'plant', styling: 'shadow-pink', active: 'active' },
    {id: 2, value:'Plants', icon:'plant', styling: 'shadow-green'},
    {id: 3, value:'Trees', icon:'plant', styling: 'shadow-blue'},
    {id: 4, value:'Popular', icon:'plant', styling: 'shadow-violet'},
];
const fakeProductsFlowers:IFakeProducts = {
   id: 1,
   items:[
       { id: 11, sku: 11, title: 'Red Rose 1', image: 'https://assets.codepen.io/2736535/flowers-1.jpeg', data: [ { length: '10cm' } ], price: 9.15, currency: '$', stock: 10  },
       { id: 12, sku: 12, title: 'Red Rose 2', image: 'https://assets.codepen.io/2736535/flowers-2.jpeg', data: [ { length: '20cm' } ], price: 9.25, currency: '$', stock: 20  },
       { id: 13, sku: 13, title: 'Red Rose 3', image: 'https://assets.codepen.io/2736535/flowers-3.jpeg', data: [ { length: '30cm' } ], price: 9.35, currency: '$', stock: 30  },
       { id: 14, sku: 14, title: 'Red Rose 4', image: 'https://assets.codepen.io/2736535/flowers-4.jpg', data: [ { length: '40cm' } ], price: 9.45, currency: '$', stock: 40  },
   ]
};
const fakeProductsPlants:IFakeProducts = {
    id: 2,
    items: [
        {
            id: 21,
            sku: 21,
            title: 'Plant 1',
            image: 'https://assets.codepen.io/2736535/plant-1.jpeg',
            data: [{length: '200cm'}],
            price: 9.15,
            currency: '$',
            stock: 10
        },
        {
            id: 22,
            sku: 22,
            title: 'Plant 2',
            image:  'https://assets.codepen.io/2736535/plant-2.jpeg',
            data: [{length: '30cm'}],
            price: 9.25,
            currency: '$',
            stock: 20
        },
        {
            id: 23,
            sku: 23,
            title: 'Plant 3',
            image:  'https://assets.codepen.io/2736535/plant-3.jpeg',
            data: [{length: '40cm'}],
            price: 9.35,
            currency: '$',
            stock: 30
        },
        {
            id: 24,
            sku: 24,
            title: 'Plant 4',
            image:  'https://assets.codepen.io/2736535/plant-4.jpeg',
            data: [{length: '50cm'}],
            price: 9.45,
            currency: '$',
            stock: 40
        },
    ],
};
const fakeProductsTrees:IFakeProducts = {
    id: 3,
    items:[
        { id: 31, sku: 31, title: 'Trees 1', image: 'https://assets.codepen.io/2736535/trees-1.jpeg', data: [ { length: '50cm' } ], price: 9.05, currency: '$', stock: 20  },
        { id: 32, sku: 32, title: 'Trees 2', image: 'https://assets.codepen.io/2736535/trees-2.jpeg', data: [ { length: '50cm' } ], price: 9.05, currency: '$', stock: 20  },
        { id: 33, sku: 33, title: 'Trees 3', image: 'https://assets.codepen.io/2736535/trees-3.jpeg', data: [ { length: '50cm' } ], price: 9.05, currency: '$', stock: 20  },
        { id: 34, sku: 34, title: 'Trees 4', image: 'https://assets.codepen.io/2736535/trees-4.jpeg', data: [ { length: '50cm' } ], price: 9.05, currency: '$', stock: 20  },
    ],
};
const fakeProductsPopular:IFakeProducts = (()=> {
    return { id: 4, items: [fakeProductsFlowers.items[0],fakeProductsPlants.items[1],fakeProductsTrees.items[2],fakeProductsFlowers.items[3]],}
} )();


const getProductsByCategoryID = (id:number|null = 1):Promise<IFakeProducts|undefined> => {
    const allProductsGroups = new Map([
        ['1', fakeProductsFlowers],
        ['2', fakeProductsPlants],
        ['3', fakeProductsTrees],
        ['4', fakeProductsPopular],
        ]
    )

    return new Promise(( res, rej ) => {
        const randomNetworkError = ( Math.random() > .9999 ) ? true : false;
        setTimeout(()=>{
            if( !randomNetworkError ){
                res( allProductsGroups.get(`${id}`) )
            } else {
                rej('Surprise :) It was randomNetworkError')
            }
        },300 )

    })
}

export { getProductsByCategoryID, fakeCategories, fakeProductsFlowers, fakeProductsPlants, fakeProductsTrees, fakeProductsPopular, IFakeShopCategories, IFakeProductItem, IFakeProducts }
