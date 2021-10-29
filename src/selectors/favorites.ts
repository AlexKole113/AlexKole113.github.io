import { RootState } from '@/reducers';

export const favoritesStateSelector = (state:RootState) => state.favorites.favoritesInfo;
