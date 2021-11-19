import { IFakeShopCategories } from '../../mocks/fakeData/shop';

const getActualIDFromCategories = (categories:IFakeShopCategories|[]) => categories.filter(({ active }) => active === 'active')[0].id;
export default getActualIDFromCategories;
