import {useEffect, useState} from "react";
import getCatProductsSlice from "@/utils/getCatProductsSlice";
import {IFakeProductItem} from "../../../mocks/fakeData/shop";
import addPreloadingData from "@/utils/addPreloadingData";


const useScrollLoadProduct = ( actualCat:number, currentIndex = 4, sliceSize = 2 ) :[IFakeProductItem[],boolean] => {
    const [state,setState] = useState<{actualCat:number, currentIndex:number, loading:boolean, done:boolean, [key:string]:any}>({ actualCat, currentIndex, prods:[], loading:false, error:false, success:false, done:false });
    const isNeedStartLoadingOnScroll = (triggerElm:Element, screenElm:HTMLElement) => (triggerElm?.getBoundingClientRect()?.top < screenElm?.offsetHeight)

    const getProdsOnScroll = ( screenElm:HTMLElement|null ) => {
        const triggerElm = document.querySelector(`[data-cat="${actualCat}"]`);
        if( !triggerElm || !screenElm ) return;

        if( isNeedStartLoadingOnScroll( triggerElm, screenElm ) ){
            if( state.loading ) return;
            setState((prevState) => ({ ...prevState, loading:true }));
        }
    }


    useEffect(() => {
        if(!state.loading || state.done ) return;
        setState((prevState) => ({
            ...prevState,
            currentIndex: prevState.currentIndex + sliceSize,
            prods:  [...addPreloadingData( prevState.prods , sliceSize )]
        }))

        getCatProductsSlice(actualCat, state.currentIndex, state.currentIndex + sliceSize )
            .then((prods) => {
                if ( !prods ) return;

                if ( prods.done || prods?.items?.length < 1 ) {
                    setState((prevState) => ({
                        ...prevState,
                        prods: [...state.prods.filter(({id}:{id:number|string}) => ( typeof id !== 'string' || !id?.startsWith('loading') ) )],
                        done: true,
                        success: true,
                        loading: false
                    }))
                } else {
                    setState((prevState) => ({
                        ...prevState,
                        prods: [...state.prods, ...prods.items ],
                        success: true,
                        loading: false
                    }))
                }
            })
    },[ state.loading ] )


    useEffect(() => {
        const screenElm:HTMLElement|null = document.querySelector(`#content-group`);
        const scrollHandler = () => { getProdsOnScroll( screenElm ) }
        screenElm?.addEventListener( 'scroll', scrollHandler );
        return () => screenElm?.removeEventListener('scroll', scrollHandler ) ;
    },[]);


    return [ state.prods, state.done ];
}

export default useScrollLoadProduct;
