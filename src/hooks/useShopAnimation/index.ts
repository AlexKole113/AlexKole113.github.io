import { useEffect, useMemo, useState } from "react";
import { getProductsByCategoryID, IFakeProductItem } from "../../../mocks/fakeData/shop";


const useShopAnimation = ( setState:CallableFunction , state:{[key:string]:any} ) => {

    const[ actualProducts, updateActualProducts ] = useState<IFakeProductItem[]>([]);
    let oldItems:IFakeProductItem[]|[] = useMemo(() => actualProducts , [ state.actualID ] );

    useEffect(() => {
        setState((prevState:{[key:string]:any})=>({...prevState, loading: true}));

        getProductsByCategoryID( state.actualID )
            .then( ( responseFromServer ) => {
                if( typeof responseFromServer === 'object' && responseFromServer?.hasOwnProperty( 'items' ) && responseFromServer.items?.length ){
                    const { items } = responseFromServer;
                    updateActualProducts( items )
                    setState(( prevState:{ [key:string]:any } ) => ({...prevState, loading: false, error: false, init:false }))
                }
            })
            .catch(()=>{
                setState(( prevState:{[key:string]:any} ) => ({...prevState, loading: false, error: true, init:false }))
            })

    },[ state.actualID ] );


    return { oldItems, actualProducts , state }
}

export default useShopAnimation;
