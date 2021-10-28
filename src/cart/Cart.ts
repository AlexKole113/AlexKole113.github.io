import getParseJSONFromStorage from "@/utils/storage/getParseJSONFromStorage";
import saveJSONInStorage from "@/utils/storage/saveJSONInStorage";
import getDataFromStorage from "@/utils/storage/getDataFromStorage";

class Cart {
    static storageKey = 'cart';

    static addToCart = ({data:id}:{data:number}) => {
        let userCart = Cart.getAllCart();
        if( userCart === null ) userCart = [];
        if( userCart.indexOf(id) === -1 ) {
            saveJSONInStorage(Cart.storageKey, [...userCart, id] )
        }
    }

    static removeFromCart = ({data:id}:{data:number}) => {
        const userCart = Cart.getAllCart();
        if( userCart.indexOf(id) !== -1 ) {
            saveJSONInStorage(Cart.storageKey, userCart.filter((cartID:number) => `${cartID}` !== `${id}` ) )
        }

    }

    static _createFavorites = ({data:id}:{data?:number}) => {
        if( !getDataFromStorage(Cart.storageKey) ){
            if(id){
                saveJSONInStorage(Cart.storageKey, [id])
            } else {
                saveJSONInStorage(Cart.storageKey, [])
            }
        }
    }

    static isProductInCart = ({data:id}:{data:number}) => {
        const userCart = Cart.getAllCart();
        if( !Array.isArray( userCart ) || userCart.indexOf(id) === -1 ) {
            return false;
        }
        return true
    }

    static getAllCart = () => getParseJSONFromStorage(Cart.storageKey)
}

export default Cart;
