import { takeLatestRequest } from '@/utils/redux/sagas';
import {
  userInfoAction,
  userCreateAction,
  userUpdateAction,
} from '@/actions/user';
import getUserDataFromServer from '@/utils/user/getUserDataFromServer';
import getNewUser from '@/utils/user/getNewUser';
import APIService from '../../mocks/APIService';

export function* userSaga() {
  yield takeLatestRequest(userInfoAction, getUserDataFromServer);
  yield takeLatestRequest(userCreateAction, getNewUser);
  yield takeLatestRequest(userUpdateAction, APIService.sendDataFromInput);
}
