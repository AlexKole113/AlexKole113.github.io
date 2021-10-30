import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";
import {useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";

const useCartProductList = () => {

    let {data:cart} = useSelector(cartStateSelector);
    let [products, setProducts] = useState([])
    useEffect(() => {
        if(cart && Object.keys(cart).length ) {
            setProducts(() => [])
            for( const id in cart ){
                APIService.getProductByID( `${id}` )
                    .then((product) => {
                        if(product && Object.keys(product).length ){
                            // @ts-ignore
                            setProducts((prevProducts) => [...prevProducts, {...product, inCart: cart[id] }])
                        }
                    })
            }
        }
    },[Object.keys(cart).length])
    return products;
}


export default useCartProductList;
