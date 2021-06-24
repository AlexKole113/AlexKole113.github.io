import useScrollLoadProduct from "@/hooks/useScrollLoadProduct/useScrollLoadProduct";


const ProductItemSlice = ({actualCat}:{actualCat:number}) => {
    //TODO:
    // add hook useScrollLoadProducts() V
    // add CardWithLoading component

    useScrollLoadProduct( actualCat );


    return(<span data-cat={actualCat}></span>);
}

export default ProductItemSlice;
