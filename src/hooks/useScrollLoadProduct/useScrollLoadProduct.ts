import { useEffect, useState } from 'react';
import getCatProductsSlice from '@/utils/getCatProductsSlice';
import addPreloadingData from '@/utils/addPreloadingData';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';

const useScrollLoadProduct = (
  actualCat:number,
  currentIndex = 4,
  sliceSize = 2,
) :[IFakeProductItem[], boolean] => {
  const [state, setState] = useState<{actualCat:number, currentIndex:number, loading:boolean, done:boolean, [key:string]:any}>({
    actualCat, currentIndex, prods: [], loading: false, error: false, success: false, done: false,
  });
  const isNeedStartLoadingOnScroll = (triggeredHeight?:number,
    totalHeight?:number) => ((triggeredHeight && totalHeight) && triggeredHeight < totalHeight);
  const screenElm:HTMLElement|null = document.querySelector('#content-group');
  let triggerElm:HTMLElement|null = null;
  const getProdsOnScroll = (containElm:HTMLElement|null) => {
    if (isNeedStartLoadingOnScroll(triggerElm?.getBoundingClientRect()?.top,
      containElm?.offsetHeight)) {
      if (state.loading) return;
      setState((prevState) => ({ ...prevState, loading: true }));
    }
  };

  useEffect(() => {
    const addr = new URL(window.location.href);
    const footer:HTMLElement|null = document.querySelector('#footer');
    if (!footer) return;
    if( addr.pathname === '/shop' ||  addr.pathname === '/' ) {
      if (state.done) {
        footer.style.display = 'flex';
      } else {
        footer.style.display = 'none';
      }
    } else {
      footer.style.display = 'flex';
    }
    return ()=>{
      footer.style.display = 'flex';
    }
  }, [state.done]);

  useEffect(() => {
    if (!state.loading || state.done) return;
    setState((prevState) => ({
      ...prevState,
      currentIndex: prevState.currentIndex + sliceSize,
      prods: [...addPreloadingData(prevState.prods, sliceSize)],
    }));

    getCatProductsSlice(actualCat, state.currentIndex, state.currentIndex + sliceSize)
      .then((prods) => {
        if (!prods) return;
        if (prods.done || prods?.items?.length < 1) {
          setState((prevState) => ({
            ...prevState,
            prods: [...state.prods.filter(({ id }:{id:number|string}) => (typeof id !== 'string' || !id?.startsWith('loading')))],
            done: true,
            success: true,
            loading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            prods: [...state.prods, ...prods.items],
            success: true,
            loading: false,
          }));
        }
      });
  }, [state.loading]);

  useEffect(() => {
    triggerElm = document.querySelector(`[data-cat="${actualCat}"]`);
    const scrollHandler = () => { getProdsOnScroll(screenElm); };
    screenElm?.addEventListener('scroll', scrollHandler);
    return () => screenElm?.removeEventListener('scroll', scrollHandler);
  }, []);

  return [state.prods, state.done];
};

export default useScrollLoadProduct;
