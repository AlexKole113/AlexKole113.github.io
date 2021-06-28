import {useEffect, useState} from "react";
import getCatProductsSlice from "@/utils/getCatProductsSlice";


const useScrollLoadProduct = ( actualCat:number, currentIndex = 4, sliceSize = 2 ) => {
    const [state,setState] = useState({ actualCat, currentIndex, prods:[], loading:false, error:false, success:false});

    const getProdsOnScroll = ( screenElm:HTMLElement|null ) => {
        const triggerElm = document.querySelector(`[data-cat="${actualCat}"]`);
        if( !triggerElm || !screenElm ) return;

        if( triggerElm?.getBoundingClientRect()?.top < screenElm?.offsetHeight ){
            if( state.loading ) return;
            setState((prevState) => ({ ...prevState, loading:true }));
        }
    }


    useEffect(() => {
        if(!state.loading) return;
        setState((prevState) => ({
            ...prevState,
            currentIndex: prevState.currentIndex + sliceSize,
        }))

        getCatProductsSlice(actualCat, state.currentIndex, state.currentIndex + sliceSize )
            .then((prods) => {
                const updatedProds = [];
                state.prods.forEach(( item ) => {
                    updatedProds.push( item )
                })
                prods?.forEach(( item ) => {
                    updatedProds.push( item )
                })

                setState((prevState) => ({
                    ...prevState,
                    prods: updatedProds,
                    success: true,
                    loading: false
                }))
            })
    },[ state.loading ] )


    useEffect(() => {
        const screenElm:HTMLElement|null = document.querySelector(`#content-group`);
        const scrollHandler = () => { getProdsOnScroll( screenElm ) }
        screenElm?.addEventListener( 'scroll', scrollHandler );
        return () => screenElm?.removeEventListener('scroll', scrollHandler ) ;
    },[]);


    console.log( state.prods, state.currentIndex )
    return state.prods;
}

export default useScrollLoadProduct;
