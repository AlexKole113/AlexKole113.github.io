import { combineReducers } from 'redux';
import {
    createAsyncReducer,
    getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
    favoritesInfoAction,
    favoritesAddAction,
    favoritesDeleteAction
} from '@/actions/favorites';

const favoritesInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), favoritesInfoAction);
const favoritesAdd = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), favoritesAddAction);
const favoritesDelete = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), favoritesDeleteAction);

const favorites = combineReducers({
    favoritesInfo,
    favoritesAdd,
    favoritesDelete
});

export default favorites;
