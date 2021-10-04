import ProductCard from '@/components/ProductCard';
import ProductItemSlice from '@/components/ProductItemSlice';
import groupedCardsCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';
import { IFakeProductItem } from '../../../mocks/fakeData/shop';

const GroupedCards = ({ products, actualCat, catId }:{products:IFakeProductItem[], actualCat:number, catId:number}) => {
  const productsCollection = products.map((item,num) => <ProductCard key={`${item.id}-${num}`} product={item} />);

  return (
    <section className={groupedCardsCss['shop-grouped']}>
      <div className={mainCss.container}>
        <div data-test={`products-${catId}`} className={groupedCardsCss['shop-grouped__collection']}>
          { productsCollection }
          { (catId === actualCat) ? <ProductItemSlice actualCat={actualCat} /> : ''}
        </div>
      </div>
    </section>
  );
};

export default GroupedCards;
