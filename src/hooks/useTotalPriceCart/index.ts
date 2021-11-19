import {useSelector} from "react-redux";
import {cartStateSelector} from "@/selectors/cart";
import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";

const useTotalPriceCart = () => {
    const {data:cart} = useSelector(cartStateSelector);
    const [totalCart, setTotalCart] = useState({
        cart: {
            total: 0,
            currency: null
        },
        loading: false
    });


    useEffect(() => {
        setTotalCart(()=>({
            cart: {
                total: 0,
                currency: null
            },
            loading: true
        }))
        let allRequests = []
        for( const id in cart ) {
            allRequests.push(
                APIService.getProductByID(id)
                    // @ts-ignore
                    .then(({price, currency}) => [price * cart[id], currency])
            )

        }
        Promise.all(allRequests)
            .then((allresponces) => {

                let total = 0;
                let currency = '';

                allresponces.forEach(([priceTotalItem,curencyItem], index) => {
                    total += priceTotalItem;
                    if( index === 0 ){
                        currency = curencyItem;
                    } else {
                        if(currency !== curencyItem) {
                            throw new Error('Products has different currency')
                        }
                    }
                })

                // @ts-ignore
                setTotalCart(()=>({
                    cart: {
                        total,
                        currency
                    },
                    loading: true
                }))

            })

    }, [cart] )


    return totalCart;
}

export default useTotalPriceCart;
