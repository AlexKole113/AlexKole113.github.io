import getParseJSONFromStorage from "@/utils/storage/getParseJSONFromStorage";
import saveJSONInStorage from "@/utils/storage/saveJSONInStorage";

class Cart {
    static storageKey = 'cart';

    static addToCart = ({data:id}:{data:number}) => {
        let userCart = Cart.getAllCart();
        if( userCart === null ) userCart = {};
        if( typeof userCart[`${id}`] !== 'undefined' ) {
            userCart[`${id}`] += 1;
        } else {
            userCart[`${id}`] = 1;
        }
        saveJSONInStorage(Cart.storageKey, {...userCart} )
    }

    static removeFromCart = ({data:id}:{data:number}) => {
        const userCart = Cart.getAllCart();
        if( typeof userCart[`${id}`] !== 'undefined' ) {
            userCart[`${id}`] -= 1;
            if( userCart[`${id}`] < 1 ){
                delete userCart[`${id}`];
            }
        }
        saveJSONInStorage(Cart.storageKey, {...userCart} )
    }

    static removeIDFromCart =  ({data:id}:{data:number}) => {
        const userCart = Cart.getAllCart();
        if( typeof userCart[`${id}`] !== 'undefined' ) {
            delete userCart[`${id}`];
        }
        saveJSONInStorage(Cart.storageKey, {...userCart} )
    }

    static isProductInCart = ({data:id}:{data:number}) => {
        const userCart = Cart.getAllCart();
        if( !userCart || Object.keys(userCart).indexOf(`${id}`) === -1 ) {
            return false;
        }
        return true
    }

    static getAllCart = () => getParseJSONFromStorage(Cart.storageKey)
}

export default Cart;
