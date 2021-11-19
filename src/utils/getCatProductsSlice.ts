import { getProductsByCategoryID, IFakeProductItem } from '../../mocks/fakeData/shop';

const getCatProductsSlice = (cat:number, sliceFrom:number = 0, sliceSize:number = 7)
:Promise< {items:IFakeProductItem[], done: boolean} | undefined > => getProductsByCategoryID(cat, 300)
  .then((prods) => {
    if (!prods?.items) return;
    // eslint-disable-next-line consistent-return
    if (sliceFrom >= prods.items.length) return { done: true, items: [] };
    let newProds = [...prods.items];
    newProds = newProds.slice(sliceFrom, sliceSize);
    // eslint-disable-next-line consistent-return
    return { items: newProds, done: false };
  });

export default getCatProductsSlice;
