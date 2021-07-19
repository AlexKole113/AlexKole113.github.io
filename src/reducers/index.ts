import { IFakeProductItem } from '../../mocks/fakeData/shop';

const initialState:{products:IFakeProductItem[], favorites:IFakeProductItem[], cart:IFakeProductItem[]} = {
  products: [],
  favorites: [],
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_LOADED':
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
