import CategoryList from '@/components/CategoryList';
import cssShopAnimation from '@/styles/shop-animation.scss';
import { useEffect, useState } from 'react';
import { IShopState } from '@/pages/Shop/interface';
import ProductGroupSlice from '@/components/ProductGroupSlice';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { categoriesInfoAction } from '@/actions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStateSelector } from '@/selectors/categories';
import getActualIDFromCategories from '@/utils/getActualIDFromCategories';
import setActualIDInCategory from '@/utils/setActualIDInCategorie';
import { IFakeShopCategories } from '../../../mocks/fakeData/shop';

const Shop = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(categoriesStateSelector);
  const [categories, updateCategories] = useState<IFakeShopCategories|[]>([]);
  const [state, setState] = useState<IShopState>({
    loading: false, error: false, init: true, actualID: 1, lastActualID: null,
  });

  useEffect(() => {
    dispatch(categoriesInfoAction.request());
  }, []);

  useEffect(() => {
    if (!allCategories.length) return;
    updateCategories(() => allCategories);
    setState((prevState) => ({
      ...prevState,
      actualID: getActualIDFromCategories(allCategories),
    }));
  }, [allCategories]);

  const setActive = (id:number) => {
    if (state.loading || !categories.length) return;
    const currentActualID = getActualIDFromCategories(categories);

    if (id === currentActualID) return;

    setState((prevState) => ({
      ...prevState,
      init: false,
      loading: true,
      lastActualID: prevState.actualID,
      actualID: id,
    }));
    updateCategories(() => setActualIDInCategory(categories, id));
  };

  useThemeSwitcher(`${state.actualID}`);

  if (!categories.length) return null;
  return (
    <div className={cssShopAnimation['shop-group']}>
      <CategoryList categories={categories} updateActiveItem={setActive} pageState={state} />
      <section className={cssShopAnimation['shop-group-transition']}>
        <ProductGroupSlice
          cats={categories}
          show={state.actualID}
          hide={state.lastActualID}
          shopStateUpdate={setState}
        />
      </section>
    </div>
  );
};

export default Shop;
