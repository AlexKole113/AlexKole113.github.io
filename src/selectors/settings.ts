import { RootState } from '@/reducers';

export const settingsStateSelector = (state:RootState) => state.settings.settingsInfo;
