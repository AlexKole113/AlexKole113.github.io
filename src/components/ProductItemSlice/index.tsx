import useScrollLoadProduct from "@/hooks/useScrollLoadProduct/useScrollLoadProduct";
import ProductCard from "@/components/ProductCard";
import ProductCardLoading from "@/components/ProductCartLoading";

import styles from './styles/index.scss'

const ProductItemSlice = ({actualCat}:{actualCat:number}) => {
    const [products, done] = useScrollLoadProduct( actualCat );
    return(
        <>
            {products.map( item => ( typeof item.id === 'string' && item.id.startsWith('loading') ) ? <ProductCardLoading key={ item.id } /> : <ProductCard key={ item.id } product={item} /> )}
            {
                done ? <span className={styles.noProductsToDisplay}>These are all products</span> :  <span style={{width:'1px',height:'1px', display: 'block', marginTop:'-2rem'}}data-cat={actualCat}></span>
            }
        </>
    );
}

export default ProductItemSlice;
