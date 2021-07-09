import cssShopAnimation from '@/styles/shop-animation.scss';
import Search from '@/components/Search';
import GroupedCards from '@/components/GroupedCards';
import useShopAnimation from '@/hooks/useShopAnimation';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';

const ShopGroup = ({
  products, showAnimation, shopStateUpdate, actualCat, catId,
}:{ products:IFakeProductItem[], showAnimation:string, shopStateUpdate:CallableFunction, actualCat:number, catId:number }) => {
  const animationClassName = useShopAnimation(shopStateUpdate, showAnimation);
  return (
    <section
      className={`${cssShopAnimation['shop-group-transition-group']} ${cssShopAnimation[animationClassName ?? 'shop-group-hidden']} ${cssShopAnimation[`cat-${catId}`]}`}
    >
      <Search styling="shadow-theme" />
      <GroupedCards products={products} actualCat={actualCat} catId={catId} />
    </section>
  );
};

export default ShopGroup;
