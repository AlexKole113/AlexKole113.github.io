import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";

const useProductDataByID = (id:string|number) => {
    let [state, setProducts] = useState<{product:null|{[key:string]:any}, loading:boolean}>({product:null, loading: false})
    useEffect(() => {
        if( id ) {
            setProducts(() => ({product:null, loading: true}))
            APIService.getProductByID( `${id}` )
                .then((product) => {
                    if( product && Object.keys(product).length ){
                        // @ts-ignore
                        setProducts((prevProducts) => ( { product, loading:false }) )
                    }
                })
        }
    },[id])

    return state;
}

export default useProductDataByID;
