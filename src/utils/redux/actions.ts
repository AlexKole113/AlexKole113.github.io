import {
  createAction,
  PayloadActionCreator,
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';

export type AsyncRequestPayload = { params: any };
export type AsyncSuccessPayload<T = {}> = {
  data: T,
  status: number,
};
export type AsyncErrorPayload = {
  data?: any,
  status?: number,
  error: string,
};

export type AsyncActionCreator<T = any> = {
  request: ActionCreatorWithOptionalPayload<any>,
  success: PayloadActionCreator<AsyncSuccessPayload<T>>,
  error: PayloadActionCreator<AsyncErrorPayload>,
  clear: ActionCreatorWithoutPayload,
};

// eslint-disable-next-line import/prefer-default-export
export function createAsyncActions<T>(type: string): AsyncActionCreator<T> {
  return {
    request: createAction(`${type}_REQUEST`),
    success: createAction<AsyncSuccessPayload<T>>(`${type}_SUCCESS`),
    error: createAction<AsyncErrorPayload>(`${type}_ERROR`),
    clear: createAction(`${type}_CLEAR`),
  };
}
