import { createStore } from 'redux';
import shopReducer from '@/reducers';

const store = createStore(shopReducer);

export default store;
