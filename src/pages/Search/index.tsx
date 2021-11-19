import cssShopAnimation from '@/styles/shop-animation.scss';
import searchStyles from '@/components/Search/styles/index.scss';
import { useState } from 'react';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import useSearchInProducts from "@/hooks/useSearchInProducts";
import ShopGroup from "@/components/ShopGroup";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import {Link} from "react-router-dom";
import useMultiLanguage from "@/hooks/useMultiLanguage";

const Search = () => {
  const __translate = useMultiLanguage();
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
            (!state.searchResult.length && state.loading === false) ? <div className={searchStyles['no-content']}><p data-test={`message-not-found`}>{__translate('No results')}</p><Link className={searchStyles['no-content__go-back']} to={'/shop'}>{__translate(`Back to Shop`)}</Link></div>: ''
        }
      </section>
    </div>
  );
};

export default Search;
