import cssShopAnimation from "@/styles/shop-animation.scss";
import Search from "@/components/Search";
import Preloader from "@/components/Preloader";
import ErrorAlert from "@/components/ErrorAlert";
import GroupedCards from "@/components/GroupedCards";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import {useEffect, useState} from "react";

const ShopGroupPrimary = ( { pageState, products, animationSteps }:{ pageState:{init:boolean, error:boolean, [key:string]: any}, products:IFakeProductItem[], animationSteps:number[] } ) => {

    const { init, error }  = pageState;
    const { actualID } = pageState;

    // ANIMATION LOGIC useAnimationStates()
    const [ state, setState ] = useState({ animationStep: 0 });

    useEffect(() => {
        new Promise(( res ) => {
            setTimeout(()=>{
                setState((prevState) => ({...prevState, animationStep: 0 }))
                res(1) // end
            }, animationSteps[0] )
        })
            .then( animationStep => {

                return new Promise(( res ) => {
                    setTimeout(()=>{
                        // @ts-ignore
                        setState((prevState) => ({...prevState, animationStep }))
                        res(2) // current
                    }, animationSteps[1] )
                })
            })
            .then( animationStep => {
                // @ts-ignore
                setTimeout(() => {
                    // @ts-ignore
                    setState((prevState) => ({...prevState, animationStep }))
                },animationSteps[2])
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
        case 2:
            cssAnimationCalssName = 'shop-group-transition-end'
            break
    }
    // -


    return(
        <section className={`${cssShopAnimation['shop-group-transition-group']}  ${cssShopAnimation[ cssAnimationCalssName ]}`}>
            <Search styling={'shadow-theme'} />
            { init && <Preloader /> }
            { error ? <ErrorAlert text={'Something went wrong...'} /> : <GroupedCards products={ products } /> }
        </section>
    );
}

export default ShopGroupPrimary;
