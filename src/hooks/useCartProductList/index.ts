import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";

const useCartProductList = (cart:[]) => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        if(cart && cart.length ) {
            setProducts(() => [])
            cart.forEach( (id:string) => {
                APIService.getProductByID( `${id}` )
                    .then((product) => {
                        if(product && Object.keys(product).length ){
                            // @ts-ignore
                            setProducts((prevProducts) => [...prevProducts, product])
                        }
                    })
            })
        }
    },[cart])
    return products;
}


export default useCartProductList;
