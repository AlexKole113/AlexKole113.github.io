import useScrollLoadProduct from '@/hooks/useScrollLoadProduct/useScrollLoadProduct';
import ProductCard from '@/components/ProductCard';
import ProductCardLoading from '@/components/ProductCartLoading';
import useMultiLanguage from "@/hooks/useMultiLanguage";
import styles from './styles/index.scss';

const ProductItemSlice = ({ actualCat }:{actualCat:number}) => {
  const __translate = useMultiLanguage();
  const [products, done] = useScrollLoadProduct(actualCat);
  return (
    <>
      {products.map((item) => ((
        typeof item.id === 'string'
          && actualCat !== -1
          && item.id.startsWith('loading')) ? <ProductCardLoading key={item.id} /> : <ProductCard key={item.id} product={item} />))}
      {
          // eslint-disable-next-line max-len
                done ? <span className={styles.noProductsToDisplay}>{__translate('These are all products')}</span> : (
                  <span
                    style={{
                      width: '1px', height: '1px', display: 'block', marginTop: '-2rem',
                    }}
                    data-cat={actualCat}
                  />
                )
            }
    </>
  );
};

export default ProductItemSlice;
