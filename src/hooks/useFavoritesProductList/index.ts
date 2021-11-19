import {useSelector} from "react-redux";
import {favoritesStateSelector} from "@/selectors/favorites";
import {useEffect, useState} from "react";
import FavoritesUtil from "@/favorites/Favorites";
import APIService from "../../../mocks/APIService";

const useFavoritesProductList = () => {

    let {data:favoritesIDs} = useSelector(favoritesStateSelector);
    let [products, setProducts] = useState([])

    useEffect(() => {
        if( !favoritesIDs || !Object.keys(favoritesIDs).length ) {
            favoritesIDs = FavoritesUtil.getAllFavorites();
        }
        if( favoritesIDs.length ) {
            favoritesIDs.forEach( (id:string) => {
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


export default useFavoritesProductList;
