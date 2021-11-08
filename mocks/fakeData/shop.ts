interface IFakeShopCategory {
  id: number,
  active?: string,
  [key:string]:any
}
interface IFakeShopCategories extends Array<IFakeShopCategory>{}
interface IFakeProductItem {
  id: number|string,
  sku: number,
  title: string,
  image: string,
  data: { [key:string]: string}[],
  price: number,
  currency: string,
  stock:number
}
interface IFakeProducts {
  id: number,
  items: IFakeProductItem[]
}

const fakeCategories = [
  {
    id: 1, value: 'Flowers', icon: 'flower', styling: 'shadow-pink', active: 'active',
  },
  {
    id: 2, value: 'Plants', icon: 'plant', styling: 'shadow-green',
  },
  {
    id: 3, value: 'Trees', icon: 'tree', styling: 'shadow-blue',
  },
  {
    id: 4, value: 'Popular', icon: 'pepper', styling: 'shadow-violet',
  },
];
const fakeProductsFlowers:IFakeProducts = {
  id: 1,
  items: [
    {
      id: 211, sku: 211, title: 'Flowers 1', image: 'https://assets.codepen.io/2736535/flowers-1.jpeg', data: [{ length: '10cm' }], price: 9.15, currency: '$', stock: 2,
    },
    {
      id: 212, sku: 212, title: 'Flowers 2', image: 'https://assets.codepen.io/2736535/flowers-2.jpeg', data: [{ length: '20cm' }], price: 9.25, currency: '$', stock: 1,
    },
    {
      id: 213, sku: 213, title: 'Flowers 3', image: 'https://assets.codepen.io/2736535/flowers-3.jpeg', data: [{ length: '30cm' }], price: 9.35, currency: '$', stock: 2,
    },
    {
      id: 214, sku: 214, title: 'Flowers 4', image: 'https://assets.codepen.io/2736535/flowers-4.jpg', data: [{ length: '40cm' }], price: 9.45, currency: '$', stock: 3,
    },
    {
      id: 215, sku: 215, title: 'Flowers 5', image: 'https://assets.codepen.io/2736535/flowers-5.jpeg', data: [{ length: '40cm' }], price: 3.13, currency: '$', stock: 2,
    },
    {
      id: 216, sku: 216, title: 'Flowers 6', image: 'https://assets.codepen.io/2736535/flowers-6.jpeg', data: [{ length: '40cm' }], price: 8.15, currency: '$', stock: 5,
    },
    {
      id: 217, sku: 217, title: 'Flowers 7', image: 'https://assets.codepen.io/2736535/flowers-7.jpeg', data: [{ length: '40cm' }], price: 9.05, currency: '$', stock: 5,
    },
    {
      id: 218, sku: 218, title: 'Flowers 8', image: 'https://assets.codepen.io/2736535/flowers-8.jpeg', data: [{ length: '40cm' }], price: 9.99, currency: '$', stock: 7,
    },
    {
      id: 219, sku: 219, title: 'Flowers 9', image: 'https://assets.codepen.io/2736535/flowers-9.jpeg', data: [{ length: '40cm' }], price: 9.99, currency: '$', stock: 10,
    },
    {
      id: 220, sku: 220, title: 'Flowers 10', image: 'https://assets.codepen.io/2736535/flowers-10.jpeg', data: [{ length: '40cm' }], price: 10.25, currency: '$', stock: 6,
    },
    {
      id: 221, sku: 221, title: 'Flowers 11', image: 'https://assets.codepen.io/2736535/flowers-11.jpeg', data: [{ length: '40cm' }], price: 10.25, currency: '$', stock: 3,
    },
    {
      id: 222, sku: 222, title: 'Flowers 12', image: 'https://assets.codepen.io/2736535/flowers-12.jpeg', data: [{ length: '40cm' }], price: 10.25, currency: '$', stock: 3,
    },
  ],
};
const fakeProductsPlants:IFakeProducts = {
  id: 2,
  items: [
    {
      id: 21,
      sku: 21,
      title: 'Plant 1',
      image: 'https://assets.codepen.io/2736535/plant-1.jpeg',
      data: [{ length: '200cm' }],
      price: 9.15,
      currency: '$',
      stock: 3,
    },
    {
      id: 22,
      sku: 22,
      title: 'Plant 2',
      image: 'https://assets.codepen.io/2736535/plant-2.jpeg',
      data: [{ length: '30cm' }],
      price: 9.25,
      currency: '$',
      stock: 3,
    },
    {
      id: 23,
      sku: 23,
      title: 'Plant 3',
      image: 'https://assets.codepen.io/2736535/plant-3.jpeg',
      data: [{ length: '40cm' }],
      price: 9.35,
      currency: '$',
      stock: 3,
    },
    {
      id: 24,
      sku: 24,
      title: 'Plant 4',
      image: 'https://assets.codepen.io/2736535/plant-4.jpeg',
      data: [{ length: '50cm' }],
      price: 9.45,
      currency: '$',
      stock: 4,
    },
    {
      id: 25,
      sku: 25,
      title: 'Plant 5',
      image: 'https://assets.codepen.io/2736535/plants-5.jpeg',
      data: [{ length: '50cm' }],
      price: 8.45,
      currency: '$',
      stock: 4,
    },
    {
      id: 26,
      sku: 26,
      title: 'Plant 6',
      image: 'https://assets.codepen.io/2736535/plants-6.jpeg',
      data: [{ length: '20cm' }],
      price: 10.45,
      currency: '$',
      stock: 2,
    },
    {
      id: 27,
      sku: 27,
      title: 'Plant 7',
      image: 'https://assets.codepen.io/2736535/plants-7.jpeg',
      data: [{ length: '20cm' }],
      price: 9.99,
      currency: '$',
      stock: 2,
    },
    {
      id: 28,
      sku: 28,
      title: 'Plant 8',
      image: 'https://assets.codepen.io/2736535/plants-8.png',
      data: [{ length: '20cm' }],
      price: 9.99,
      currency: '$',
      stock: 2,
    },
    {
      id: 29,
      sku: 29,
      title: 'Plant 9',
      image: 'https://assets.codepen.io/2736535/plants-9.jpeg',
      data: [{ length: '40cm' }],
      price: 1.31,
      currency: '$',
      stock: 2,
    },
    {
      id: 30,
      sku: 30,
      title: 'Plant 10',
      image: 'https://assets.codepen.io/2736535/plants-10.jpeg',
      data: [{ length: '40cm' }],
      price: 3.33,
      currency: '$',
      stock: 2,
    },
    {
      id: 31,
      sku: 31,
      title: 'Plant 11',
      image: 'https://assets.codepen.io/2736535/plants-11.png',
      data: [{ length: '40cm' }],
      price: 2.00,
      currency: '$',
      stock: 2,
    },
    {
      id: 32,
      sku: 32,
      title: 'Plant 12',
      image: 'https://assets.codepen.io/2736535/plants-12.jpeg',
      data: [{ length: '40cm' }],
      price: 1.25,
      currency: '$',
      stock: 2,
    },
  ],
};
const fakeProductsTrees:IFakeProducts = {
  id: 3,
  items: [
    {
      id: 131, sku: 131, title: 'Tree 1', image: 'https://assets.codepen.io/2736535/trees-1.jpeg', data: [{ length: '50cm' }], price: 100, currency: '$', stock: 5,
    },
    {
      id: 132, sku: 132, title: 'Tree 2', image: 'https://assets.codepen.io/2736535/trees-2.jpeg', data: [{ length: '50cm' }], price: 302.99, currency: '$', stock: 7,
    },
    {
      id: 133, sku: 133, title: 'Tree 3', image: 'https://assets.codepen.io/2736535/trees-3.jpeg', data: [{ length: '50cm' }], price: 303.99, currency: '$', stock: 8,
    },
    {
      id: 134, sku: 134, title: 'Tree 4', image: 'https://assets.codepen.io/2736535/trees-4.jpeg', data: [{ length: '50cm' }], price: 304.99, currency: '$', stock: 10,
    },

    {
      id: 135, sku: 135, title: 'Tree 5', image: 'https://assets.codepen.io/2736535/trees-5.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 3,
    },
    {
      id: 136, sku: 136, title: 'Tree 6', image: 'https://assets.codepen.io/2736535/trees-6.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 4,
    },
    {
      id: 137, sku: 137, title: 'Tree 7', image: 'https://assets.codepen.io/2736535/trees-7.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 5,
    },
    {
      id: 138, sku: 138, title: 'Tree 8', image: 'https://assets.codepen.io/2736535/trees-8.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 5,
    },
    {
      id: 139, sku: 139, title: 'Tree 9', image: 'https://assets.codepen.io/2736535/trees-9.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 3,
    },
    {
      id: 140, sku: 140, title: 'Tree 10', image: 'https://assets.codepen.io/2736535/trees-10.jpeg', data: [{ length: '50cm' }], price: 305.99, currency: '$', stock: 3,
    },

  ],
};
const fakeProductsPopular:IFakeProducts = (() => ({
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
}))();
const allProductsGroups = new Map([
  ['1', fakeProductsFlowers],
  ['2', fakeProductsPlants],
  ['3', fakeProductsTrees],
  ['4', fakeProductsPopular],
]);

const getProductsByCategoryID = (id:number|null = 1, delay = 200):Promise<IFakeProducts|undefined> => {
  return new Promise((res, rej) => {
    const randomNetworkError = (Math.random() > 0.9999);
    setTimeout(() => {
      if (!randomNetworkError) {
        res(allProductsGroups.get(`${id}`));
      } else {
        rej('Surprise :) It was randomNetworkError');
      }
    }, delay);
  });
};

const getCategories = (delay = 200) :Promise<IFakeShopCategory[]|undefined> => new Promise((res, rej) => {
  const randomNetworkError = (Math.random() > 0.9999);
  setTimeout(() => {
    if (!randomNetworkError) {
      res(fakeCategories);
    } else {
      rej('Surprise :) It was randomNetworkError');
    }
  }, delay);
});

const searchInProducts = (text:string, limit:number = 9,  delay:number = 300) => {
  let response:[string, string, IFakeProducts][] = [];
  let limitReached = false;
  const isFound = (value:string) => ((`${value}`).toLowerCase().indexOf(text.toLowerCase()) !== -1);
  const excludeCurrentField = (key:string) => ( ['image','stock','currency'].findIndex( (item) => item === key) !== -1 )


  for(const productGroup of allProductsGroups){
    // @ts-ignore
    const [,{items}] = Array.from(productGroup);
    for(let productItem of items) {
      if(limitReached) break;
      for(let key in productItem){
        if ( excludeCurrentField(key) ) continue;
        if (key === 'data') {
           for( const dataItem of productItem[key]) {
             for( const dataItemName in dataItem){
               if(isFound(dataItem[dataItemName])){
                 if( response.length > limit ) {
                   limitReached = true
                   break;
                 }
                 response.push( [dataItem[dataItemName], dataItemName , productItem]);
               }
             }
           }
        } else if( isFound(productItem[key]) ){
          if( response.length > limit ) {
            limitReached = true
            break;
          }
          response.push( [productItem[key], key , productItem]);
        }
      }
    }
  }

  return new Promise((resolve => {
    setTimeout(()=>{
      resolve(response)
    },delay)
  }))
}

const getProductByID = (id:string|null,  delay:number = 180):Promise<{[key:string]:any}[]|{}> => {
  let response = {};

  if( !id )  {
    return new Promise((res)=>{
      setTimeout(()=>{
        res(response)
      },delay)
    })
  }

  for(const [,{items:products}] of allProductsGroups){
      for( const product of products ) {
         if( `${product.id}` === id ) {
           response = product;
         }
      }
  }

  return new Promise((res)=>{
    setTimeout(()=>{
      res(response)
    },delay)
  })
}

const searchByKeywordInFields = (keyword:string, fields: string[], delay:number = 300):Promise<{}[]> => {

  let response:{}[] = []

  if(!fields.length || !keyword) {
    return new Promise((res)=>{
      setTimeout(()=>{
        res( response)
      },delay)
    })
  }



  for(const [,{items:products}] of allProductsGroups){
    for( const product of products ) {
      for(const field of fields) {
        // @ts-ignore
        if( ( `${product[field]}` ).toLowerCase().includes( (keyword).toLowerCase() ) ) {
          response = [...response, product];
          break;
        }
      }
    }
  }
  return new Promise((res)=>{
    setTimeout(()=>{
      res(response)
    },delay)
  })

}

export {
  getProductsByCategoryID, getCategories, searchInProducts, getProductByID, searchByKeywordInFields, fakeCategories, fakeProductsFlowers, fakeProductsPlants, fakeProductsTrees, fakeProductsPopular, IFakeShopCategories, IFakeShopCategory, IFakeProductItem, IFakeProducts,
};
