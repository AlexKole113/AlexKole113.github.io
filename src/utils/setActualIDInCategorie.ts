import { IFakeShopCategory } from '../../mocks/fakeData/shop';

const setActualIDInCategory = (categories:IFakeShopCategory[], id:number) => {
  const checkCategoriesArray = Array.from(categories).reduce((array:IFakeShopCategory[], item:IFakeShopCategory) => {
    array.push({ ...item });
    return array;
  }, []);
  const updState = checkCategoriesArray.map((item:IFakeShopCategory) => {
    // eslint-disable-next-line no-param-reassign
    item.active = undefined;
    // eslint-disable-next-line no-param-reassign
    if (item.id === id) item.active = 'active';
    return item;
  });

  return updState;
};

export default setActualIDInCategory;
