import { combineReducers } from 'redux';
import {
  createAsyncReducer,
  getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
  userInfoAction,
  userCreateAction,
} from '@/actions/user';

const userInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), userInfoAction);
const userCreate = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), userCreateAction);

const user = combineReducers({
  userInfo,
  userCreate,
});

export default user;
