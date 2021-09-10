import { useEffect, useState } from 'react';
import ShopGroup from '@/components/ShopGroup';
import { IFakeShopCategories, IFakeProducts } from '../../../mocks/fakeData/shop';
import APIService from "../../../mocks/APIService";

const ProductGroupSlice = ({
  cats, show, hide, shopStateUpdate,
}:{cats:IFakeShopCategories, show:number, hide:number|null, shopStateUpdate: CallableFunction}) => {
  const [state, setState] = useState<{ loading:boolean, success:boolean, error: boolean, items?:IFakeProducts[] }>({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    APIService.getAllProductsSlice(cats)
      .then((response) => {
        const productsSlice:IFakeProducts[] = response.filter((item):item is IFakeProducts => !!item);
        setState((prevState) => ({
          ...prevState, loading: false, success: true, error: false, items: productsSlice,
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState, loading: false, success: false, error: true,
        }));
      });
  }, []);

  return (
    <>
      { (state.items) ? state.items.map(({ items, id }) => {
        // eslint-disable-next-line no-nested-ternary
        const showAnimation = (id === show) ? 'showFromTop' : (id === hide) ? 'hideToBottom' : '';
        return (<ShopGroup key={id} catId={id} products={items} showAnimation={showAnimation} shopStateUpdate={shopStateUpdate} actualCat={show} />);
      }) : '' }
    </>
  );
};

export default ProductGroupSlice;
