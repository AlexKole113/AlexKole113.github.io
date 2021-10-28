import { combineReducers } from 'redux';
import {
    createAsyncReducer,
    getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
    cartInfoAction,
    cartAddAction,
    cartDeleteAction
} from '@/actions/cart';

const cartInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartInfoAction);
const cartAdd = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartAddAction);
const cartDelete = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartDeleteAction);

const cart = combineReducers({
    cartInfo,
    cartAdd,
    cartDelete
});

export default cart;
