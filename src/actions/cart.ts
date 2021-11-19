import {createAsyncActions} from "@/utils/redux/actions";

export const cartInfoAction = createAsyncActions('CART_INFO');
export const cartAddAction = createAsyncActions('CART_ADD');
export const cartDeleteAction = createAsyncActions('CART_DELETE');
export const cartDeleteAllAction = createAsyncActions('CART_DELETE_All');
