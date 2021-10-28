import {useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";
import {useEffect, useState} from "react";
import Cart from "@/cart/Cart";
import APIService from "../../../mocks/APIService";

const useCartProductList = () => {

    let {cartInfo: {data:cartIDs}} = useSelector(cartStateSelector);
    let [products, setProducts] = useState([])

    useEffect(() => {
        if( !cartIDs || !Object.keys(cartIDs).length ) {
            cartIDs = Cart.getAllFavorites();
        }
        if( cartIDs.length ) {
            cartIDs.forEach( (id:string) => {
                APIService.getProductByID( `${id}` )
                    .then((product) => {
                        if(product && Object.keys(product).length ){
                            // @ts-ignore
                            setProducts((prevProducts) => [...prevProducts, product])
                        }
                    })
            })
        }
    },[])


    return products;
}


export default useCartProductList;
