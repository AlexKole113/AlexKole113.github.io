import { fork } from 'redux-saga/effects';
import { categoriesSaga } from '@/saga/categories';
import { userSaga } from '@/saga/user';

export default function* rootSaga() {
  yield fork(categoriesSaga);
  yield fork(userSaga);
}
