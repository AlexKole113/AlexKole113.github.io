import useScrollLoadProduct from "@/hooks/useScrollLoadProduct/useScrollLoadProduct";
import ProductCard from "@/components/ProductCard";


const ProductItemSlice = ({actualCat}:{actualCat:number}) => {
    //TODO:
    // add hook useScrollLoadProducts() V
    // add CardWithLoading component

    const products = useScrollLoadProduct( actualCat );


    return(
        <>
            {products.map( (item) => <ProductCard key={ item.id } product={item} /> )}
            <span data-cat={actualCat}></span>
        </>
    );
}

export default ProductItemSlice;
