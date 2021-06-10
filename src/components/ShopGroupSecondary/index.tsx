import cssShopAnimation from "@/styles/shop-animation.scss";
import Search from "@/components/Search";
import Preloader from "@/components/Preloader";
import ErrorAlert from "@/components/ErrorAlert";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import {useCallback, useEffect, useState} from "react";

const ShopGroupSecondary = ( { pageState, products }:{ pageState:{init:boolean,error:boolean, [key:string]: any}, products:IFakeProductItem[] } ) => {

    const { init, error }  = pageState;
    const { actualID } = pageState;
    let cssAnimationCalssName = ''

    // ANIMATION LOGIC useAnimationStates()
    const [ state, setState ] = useState({ animationStep: 0 })
    const useAnimationStates = useCallback(() => {
        new Promise(( res ) => {
            setState((prevState) => ({...prevState, animationStep: 0 }))
            setTimeout(()=>{
                res(1) // end
            },1400 )
        })
            .then( animationStep => {
                // @ts-ignore
                setState((prevState) => ({...prevState, animationStep }))
                return new Promise(( res ) => {
                    setTimeout(()=>{
                        res(2) // current
                    },800)
                })
            })


    },[]);
    useEffect( useAnimationStates, [ actualID ] )


    switch ( state.animationStep ) {
        case 0:
            cssAnimationCalssName = 'shop-group-transition-start';
            break;
        case 1:
            cssAnimationCalssName = 'shop-group-hidden'
            break
    }


    console.log(cssAnimationCalssName)

    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation[ cssAnimationCalssName ]}`}>
            <Search styling={'shadow-theme'} />
            { init && <Preloader /> }
            { error ? <ErrorAlert text={'Something went wrong...'} /> : <GroupedCards products={ products } /> }
        </section>
    );
}

export default ShopGroupSecondary;
