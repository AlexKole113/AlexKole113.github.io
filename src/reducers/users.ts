import { combineReducers } from 'redux';
import {
  createAsyncReducer,
  getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
  userInfoAction,
} from '@/actions/user';

const userInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), userInfoAction);

const user = combineReducers({
  userInfo,
});

export default user;
