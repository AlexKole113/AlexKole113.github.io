import { IFakeProductItem } from '../../mocks/fakeData/shop';

const productsLoaded = (products:IFakeProductItem[]) => ({
  type: 'PRODUCTS_LOADED',
  payload: products,
});

export { productsLoaded };
