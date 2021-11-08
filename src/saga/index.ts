import { fork } from 'redux-saga/effects';
import { categoriesSaga } from '@/saga/categories';
import { userSaga } from '@/saga/user';
import { favoritesSaga } from '@/saga/favorites';
import { cartSaga } from "@/saga/cart";
import {settingsSaga} from "@/saga/settings";

export default function* rootSaga() {
  yield fork(categoriesSaga);
  yield fork(userSaga);
  yield fork(favoritesSaga);
  yield fork(cartSaga);
  yield fork(settingsSaga);
}
