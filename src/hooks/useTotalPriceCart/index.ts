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
                    .then(({price, currency}) => {
                        setTotalCart(( prevState) => {
                            return {
                                ...prevState,
                                cart: {
                                    total: prevState.cart.total + (price * cart[id]),
                                    currency
                                },
                            }
                        })
                    })
            )

        }
        Promise.all(allRequests)
            .then(() => {
                setTotalCart((prevState) => ({
                    ...prevState,
                    loading:false
                }))
            })

    }, [cart] )


    return totalCart;
}

export default useTotalPriceCart;
