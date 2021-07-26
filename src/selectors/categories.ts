import { RootState } from '@/reducers';

export const categoriesStateSelector = (state:RootState) => state.categories.categoriesInfo.data;
