import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import categories from '@/reducers/categories';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { History } from 'history';

const rootReducer = (history: History) => combineReducers({
  categories,
  router: connectRouter(history),
});

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
export default rootReducer;
