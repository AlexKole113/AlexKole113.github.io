import { takeLatestRequest } from '@/utils/redux/sagas';
import {
  categoriesInfoAction,
} from '@/actions/categories';
import APIService from '../../mocks/APIService';

export function* categoriesSaga() {
  yield takeLatestRequest(categoriesInfoAction, APIService.getCategories);
}
