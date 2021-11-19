import { combineReducers } from 'redux';
import {
    createAsyncReducer,
    getInitialAsyncStateNoLoad,
} from '@/utils/redux/reducers';
import {
   settingsInfoAction,
    settingsUpdateAction
} from '@/actions/settings';

const settingsInfo = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), settingsInfoAction);
const settingsUpdate = createAsyncReducer<any>(getInitialAsyncStateNoLoad({}), settingsUpdateAction);


const settings = combineReducers({
    settingsInfo,
    settingsUpdate
});

export default settings;
