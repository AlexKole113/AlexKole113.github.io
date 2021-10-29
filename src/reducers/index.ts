import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import categories from '@/reducers/categories';
import user from '@/reducers/users';
import favorites from '@/reducers/favorites';
import cart from "@/reducers/cart";
import type { History } from 'history';

const rootReducer = (history: History) => combineReducers({
  categories,
  user,
  favorites,
  cart,
  router: connectRouter(history),
});

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
export default rootReducer;
