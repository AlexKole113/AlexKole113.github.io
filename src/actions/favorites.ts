import {createAsyncActions} from "@/utils/redux/actions";

export const favoritesInfoAction = createAsyncActions('FAVORITES_INFO');
export const favoritesAddAction = createAsyncActions('FAVORITES_ADD');
export const favoritesDeleteAction = createAsyncActions('FAVORITES_DELETE');
