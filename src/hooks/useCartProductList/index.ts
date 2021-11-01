import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";
import {useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";

const useCartProductList = () => {
    let {data:cart} = useSelector(cartStateSelector);
    let [products, setProducts] = useState({products:[], loading: false})
    useEffect(() => {
        if( cart ) {
            setProducts((prevState) => ({ ...prevState, products:[] }))
            for( const id in cart ){
                setProducts((prevState) => ({...prevState, loading: true}))
                APIService.getProductByID( `${id}` )
                    .then((product) => {
                        if(product && Object.keys(product).length ){
                            // @ts-ignore
                            setProducts((prevProducts) => ( { products: [...prevProducts.products, {...product, inCart: cart[id]}], loading:false }) )
                        }
                    })
            }
        }
    },[cart])
    return products;
}


export default useCartProductList;
