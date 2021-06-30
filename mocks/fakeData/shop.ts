interface IFakeShopCategory {
    id: number,
    active?: string,
    [key:string]:any
}
interface IFakeShopCategories extends Array<IFakeShopCategory>{};
interface IFakeProductItem {
    id: number|string,
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
       { id: 211, sku: 211, title: 'Flowers 1', image: 'https://assets.codepen.io/2736535/flowers-1.jpeg', data: [ { length: '10cm' } ], price: 9.15, currency: '$', stock: 10  },
       { id: 212, sku: 212, title: 'Flowers 2', image: 'https://assets.codepen.io/2736535/flowers-2.jpeg', data: [ { length: '20cm' } ], price: 9.25, currency: '$', stock: 20  },
       { id: 213, sku: 213, title: 'Flowers 3', image: 'https://assets.codepen.io/2736535/flowers-3.jpeg', data: [ { length: '30cm' } ], price: 9.35, currency: '$', stock: 30  },
       { id: 214, sku: 214, title: 'Flowers 4', image: 'https://assets.codepen.io/2736535/flowers-4.jpg', data: [ { length: '40cm' } ], price: 9.45, currency: '$', stock: 40   },
       { id: 215, sku: 215, title: 'Flowers 5', image: 'https://assets.codepen.io/2736535/flowers-5.jpeg', data: [ { length: '40cm' } ], price: 3.13, currency: '$', stock: 40  },
       { id: 216, sku: 216, title: 'Flowers 6', image: 'https://assets.codepen.io/2736535/flowers-6.jpeg', data: [ { length: '40cm' } ], price: 8.15, currency: '$', stock: 40  },
       { id: 217, sku: 217, title: 'Flowers 7', image: 'https://assets.codepen.io/2736535/flowers-7.jpeg', data: [ { length: '40cm' } ], price: 9.05, currency: '$', stock: 40  },
       { id: 218, sku: 218, title: 'Flowers 8', image: 'https://assets.codepen.io/2736535/flowers-8.jpeg', data: [ { length: '40cm' } ], price: 9.99, currency: '$', stock: 40 },
       { id: 219, sku: 219, title: 'Flowers 9', image: 'https://assets.codepen.io/2736535/flowers-9.jpeg', data: [ { length: '40cm' } ], price: 9.99, currency: '$', stock: 40 },
       { id: 220, sku: 220, title: 'Flowers 10', image: 'https://assets.codepen.io/2736535/flowers-10.jpeg', data: [ { length: '40cm' } ], price: 10.25, currency: '$', stock: 40  },
       { id: 221, sku: 221, title: 'Flowers 11', image: 'https://assets.codepen.io/2736535/flowers-11.jpeg', data: [ { length: '40cm' } ], price: 10.25, currency: '$', stock: 40  },
       { id: 222, sku: 222, title: 'Flowers 12', image: 'https://assets.codepen.io/2736535/flowers-12.jpeg', data: [ { length: '40cm' } ], price: 10.25, currency: '$', stock: 40  },
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
        {
            id: 25,
            sku: 25,
            title: 'Plant 5',
            image:  'https://assets.codepen.io/2736535/plants-5.jpeg',
            data: [{length: '50cm'}],
            price: 8.45,
            currency: '$',
            stock: 40
        },
        {
            id: 26,
            sku: 26,
            title: 'Plant 6',
            image:  'https://assets.codepen.io/2736535/plants-6.jpeg',
            data: [{length: '20cm'}],
            price: 10.45,
            currency: '$',
            stock: 5
        },
        {
            id: 27,
            sku: 27,
            title: 'Plant 7',
            image:  'https://assets.codepen.io/2736535/plants-7.jpeg',
            data: [{length: '20cm'}],
            price: 9.99,
            currency: '$',
            stock: 15
        },
        {
            id: 28,
            sku: 28,
            title: 'Plant 8',
            image:  'https://assets.codepen.io/2736535/plants-8.png',
            data: [{length: '20cm'}],
            price: 9.99,
            currency: '$',
            stock: 15
        },
        {
            id: 29,
            sku: 29,
            title: 'Plant 9',
            image:  'https://assets.codepen.io/2736535/plants-9.jpeg',
            data: [{length: '40cm'}],
            price: 1.31,
            currency: '$',
            stock: 50
        },
        {
            id: 30,
            sku: 30,
            title: 'Plant 10',
            image:  'https://assets.codepen.io/2736535/plants-10.jpeg',
            data: [{length: '40cm'}],
            price: 3.33,
            currency: '$',
            stock: 50
        },
        {
            id: 31,
            sku: 31,
            title: 'Plant 11',
            image:  'https://assets.codepen.io/2736535/plants-11.png',
            data: [{length: '40cm'}],
            price: 2.00,
            currency: '$',
            stock: 50
        },
        {
            id: 32,
            sku: 32,
            title: 'Plant 12',
            image:  'https://assets.codepen.io/2736535/plants-12.jpeg',
            data: [{length: '40cm'}],
            price: 1.25,
            currency: '$',
            stock: 50
        },
    ],
};
const fakeProductsTrees:IFakeProducts = {
    id: 3,
    items:[
        { id: 131, sku: 131, title: 'Trees 1', image: 'https://assets.codepen.io/2736535/trees-1.jpeg', data: [ { length: '50cm' } ], price: 301.99, currency: '$', stock: 20  },
        { id: 132, sku: 132, title: 'Trees 2', image: 'https://assets.codepen.io/2736535/trees-2.jpeg', data: [ { length: '50cm' } ], price: 302.99, currency: '$', stock: 20  },
        { id: 133, sku: 133, title: 'Trees 3', image: 'https://assets.codepen.io/2736535/trees-3.jpeg', data: [ { length: '50cm' } ], price: 303.99, currency: '$', stock: 20  },
        { id: 134, sku: 134, title: 'Trees 4', image: 'https://assets.codepen.io/2736535/trees-4.jpeg', data: [ { length: '50cm' } ], price: 304.99, currency: '$', stock: 20  },

        { id: 135, sku: 135, title: 'Trees 5', image: 'https://assets.codepen.io/2736535/trees-5.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },
        { id: 136, sku: 136, title: 'Trees 6', image: 'https://assets.codepen.io/2736535/trees-6.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },
        { id: 137, sku: 137, title: 'Trees 7', image: 'https://assets.codepen.io/2736535/trees-7.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },
        { id: 138, sku: 138, title: 'Trees 8', image: 'https://assets.codepen.io/2736535/trees-8.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },
        { id: 139, sku: 139, title: 'Trees 9', image: 'https://assets.codepen.io/2736535/trees-9.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },
        { id: 140, sku: 140, title: 'Trees 10',image: 'https://assets.codepen.io/2736535/trees-10.jpeg', data: [ { length: '50cm' } ], price: 305.99, currency: '$', stock: 20  },

    ],
};
const fakeProductsPopular:IFakeProducts = (()=> {
    return {
        id: 4,
        items: [
            fakeProductsFlowers.items[0],
            fakeProductsPlants.items[1],
            fakeProductsTrees.items[2],
            fakeProductsFlowers.items[3],
            fakeProductsFlowers.items[4],
            fakeProductsFlowers.items[5],
            fakeProductsPlants.items[6],
            fakeProductsTrees.items[7],
            fakeProductsFlowers.items[8],
            fakeProductsPlants.items[9],
            fakeProductsFlowers.items[10],
            fakeProductsFlowers.items[11],
        ],
    }
} )();

const getProductsByCategoryID = (id:number|null = 1, delay = 200 ):Promise<IFakeProducts|undefined> => {
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
        },delay )

    })
}

export { getProductsByCategoryID, fakeCategories, fakeProductsFlowers, fakeProductsPlants, fakeProductsTrees, fakeProductsPopular, IFakeShopCategories, IFakeProductItem, IFakeProducts }
