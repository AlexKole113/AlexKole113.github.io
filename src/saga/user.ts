import { takeLatestRequest } from '@/utils/redux/sagas';
import {
  userInfoAction,
  userCreateAction,
} from '@/actions/user';
import getUserDataFromServer from '@/utils/user/getUserDataFromServer';
import getNewUser from '@/utils/user/getNewUser';

export function* userSaga() {
  yield takeLatestRequest(userInfoAction, getUserDataFromServer);
  yield takeLatestRequest(userCreateAction, getNewUser);
}
