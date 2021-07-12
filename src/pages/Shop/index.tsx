import CategoryList from '@/components/CategoryList';
import cssShopAnimation from '@/styles/shop-animation.scss';
import { useState } from 'react';
import { IShopState } from '@/pages/Shop/interface';
import ProductGroupSlice from '@/components/ProductGroupSlice';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { fakeCategories as categories } from '../../../mocks/fakeData/shop';

const Shop = () => {
  const [actualCategories, updateActualCategories] = useState(categories);
  const setActive = (id:number) => {
    if (state.loading) return;
    const currentActualID = actualCategories.filter(({ active }) => active === 'active')[0].id;
    if (id === currentActualID) return;

    setState((prevState) => ({
      ...prevState,
      init: false,
      loading: true,
      lastActualID: prevState.actualID,
      actualID: id,
    }));

    const updState = actualCategories.map((item) => {
      item.active = undefined;
      if (item.id === id) item.active = 'active';
      return item;
    });

    updateActualCategories(() => updState);
  };
  const [state, setState] = useState<IShopState>({
    loading: false, error: false, init: true, actualID: actualCategories.filter(({ active }) => active === 'active')[0].id, lastActualID: null,
  });

  useThemeSwitcher(`${state.actualID}`);
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
