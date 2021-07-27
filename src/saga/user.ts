import { takeLatestRequest } from '@/utils/redux/sagas';
import {
  userInfoAction,
} from '@/actions/user';

export function* userSaga() {
  yield takeLatestRequest(userInfoAction, '');
}
