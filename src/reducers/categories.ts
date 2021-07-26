import { combineReducers } from 'redux';
import {
  createAsyncReducer,
  getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
  categoriesInfoAction,
} from '@/actions/categories';

const categoriesInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), categoriesInfoAction);

const categories = combineReducers({
  categoriesInfo,
});

export default categories;
