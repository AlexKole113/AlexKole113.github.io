import { takeLatestRequest } from '@/utils/redux/sagas';
import {
    settingsUpdateAction,
    settingsInfoAction,
} from '@/actions/settings';
import Settings from "@/settings/Settings";

export function* settingsSaga() {
    yield takeLatestRequest(settingsInfoAction, Settings.getAllSettings);
    yield takeLatestRequest(settingsUpdateAction, ({data}:{data:any}) => { Settings.changeSettings(data) });
}
