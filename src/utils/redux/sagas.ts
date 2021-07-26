import {
  call, put, fork, take, cancel,
} from 'redux-saga/effects';
import { AsyncActionCreator, AsyncRequestPayload } from '@/utils/redux/actions';
import { PayloadAction } from '@reduxjs/toolkit';

type Notifications = {
  error?: string;
  success?: string;
};

// eslint-disable-next-line import/prefer-default-export
export function* loadData(
  creator: AsyncActionCreator,
  api: any,
  action: PayloadAction<AsyncRequestPayload>,
  notifications?: Notifications,
) {
  try {
    const response = yield call(api, action.payload?.params);
    yield put(creator.success({ status: response.status, data: response }));
    if (notifications?.success !== undefined) {
      console.log(notifications.success);
    }
  } catch (error) {
    const { response } = error;
    yield put(creator.error({
      status: response?.status,
      data: response?.data || {},
      error: error.toString(),
    }));
    if (notifications?.error !== undefined) {
      console.log(notifications.error);
    }
  } finally {
    //
  }
}

export const takeLatestRequest = (
  type: AsyncActionCreator,
  api: any,
  notifications?: Notifications,
) => fork(function* load() {
  let lastTask;
  while (true) {
    const action = yield take(type.request.toString());
    if (lastTask) {
      yield cancel(lastTask);
    }
    lastTask = yield fork(loadData, type, api, action, notifications);
  }
});

export const takeEveryRequest = (type: AsyncActionCreator, api: any) => fork(function* load() {
  while (true) {
    const action = yield take(type.request.toString());
    yield fork(loadData, type, api, action);
  }
});
