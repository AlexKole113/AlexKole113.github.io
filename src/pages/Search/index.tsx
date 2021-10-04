import cssShopAnimation from '@/styles/shop-animation.scss';
import { useState } from 'react';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import useSearchInProducts from "@/hooks/useSearchInProducts";
import ShopGroup from "@/components/ShopGroup";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";

const Search = () => {

  const [state, updateState] = useState<{loading:boolean, error:boolean, init:boolean, searchResult: IFakeProductItem[] }>({
    loading: false, error: false, init: true, searchResult: []
  });

  useSearchInProducts( updateState );
  useThemeSwitcher(`1` );

  return (
    <div className={cssShopAnimation['shop-group']}>
      <section className={cssShopAnimation['shop-group-transition']}>
        <ShopGroup catId={0} products={state.searchResult} showAnimation={'showFromTop'} shopStateUpdate={()=>{}} actualCat={0} />
      </section>
    </div>
  );
};

export default Search;
