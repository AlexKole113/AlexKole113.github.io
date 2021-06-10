import cssShopAnimation from "@/styles/shop-animation.scss";
import Search from "@/components/Search";
import Preloader from "@/components/Preloader";
import ErrorAlert from "@/components/ErrorAlert";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import {useEffect, useState} from "react";

const ShopGroupPrimary = ( { pageState, products }:{ pageState:{init:boolean,error:boolean, [key:string]: any}, products:IFakeProductItem[] } ) => {

    const { init, error }  = pageState;
    const { actualID } = pageState;


    // ANIMATION LOGIC useAnimationStates()
    const [ state, setState ] = useState({ animationStep: 0 })
    useEffect(()=>{
        setState((prevState) => ({...prevState, animationStep: 0 }))
        new Promise(( res ) => {
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
                },1500)
            })
        })


    }, [ actualID ] )

    let cssAnimationCalssName = ''
    switch ( state.animationStep ) {
        case 0:
            cssAnimationCalssName = 'shop-group-transition-end';
            break;
        case 1:
            cssAnimationCalssName = 'shop-group-current'
            break
    }





    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation[ cssAnimationCalssName ]}`}>
            <Search styling={'shadow-theme'} />
            { init && <Preloader /> }
            { error ? <ErrorAlert text={'Something went wrong...'} /> : <GroupedCards products={ products } /> }
        </section>
    );
}

export default ShopGroupPrimary;
