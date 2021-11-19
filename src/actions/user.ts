import { createAsyncActions } from '@/utils/redux/actions';

export const userInfoAction = createAsyncActions('USER_INFO');
export const userCreateAction = createAsyncActions('USER_CREATE');
export const userUpdateAction = createAsyncActions('USER_UPDATE');
