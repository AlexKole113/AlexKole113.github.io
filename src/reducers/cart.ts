import { combineReducers } from 'redux';
import {
    createAsyncReducer,
    getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
    cartInfoAction,
    cartAddAction,
    cartDeleteAction,
    cartDeleteAllAction,
} from '@/actions/cart';

const cartInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartInfoAction);
const cartAdd = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartAddAction);
const cartDelete = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartDeleteAction);
const cartDeleteAll = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), cartDeleteAllAction);

const cart = combineReducers({
    cartInfo,
    cartAdd,
    cartDelete,
    cartDeleteAll
});

export default cart;
