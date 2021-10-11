import cssShopAnimation from '@/styles/shop-animation.scss';
import { useState } from 'react';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import useSearchInProducts from "@/hooks/useSearchInProducts";
import ShopGroup from "@/components/ShopGroup";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";

const Search = () => {

  const [state, updateState] = useState<{loading:boolean|null, error:boolean, init:boolean, searchResult: IFakeProductItem[] }>({
    loading: null, error: false, init: true, searchResult: []
  });

  useSearchInProducts( updateState );
  useThemeSwitcher(`1` );

  return (
    <div className={cssShopAnimation['shop-group']}>
      <section className={cssShopAnimation['shop-group-transition']}>
        {
          (state.searchResult.length && state.loading === false) ? <ShopGroup catId={0} products={state.searchResult} showAnimation={'showFromTop'} shopStateUpdate={()=>{}} actualCat={-1} /> : ''
        }
        {
          (!state.searchResult.length && state.loading === false) ? <p style={{marginTop: '3rem', textAlign: 'center'}}>No results</p> : ''
        }
      </section>
    </div>
  );
};

export default Search;
