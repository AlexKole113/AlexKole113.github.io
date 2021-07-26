import { fork } from 'redux-saga/effects';
import { categoriesSaga } from '@/saga/categories';

export default function* rootSaga() {
  yield fork(categoriesSaga);
}
