import {useEffect} from "react";

const useScrollLoadProduct = ( actualCat:number ) => {

    const getProdsOnScroll = ( cat:number, screenElm:HTMLElement|null) => {
        const triggerElm = document.querySelector(`[data-cat="${cat}"]`);
        if( !triggerElm || !screenElm ) return;

        if(triggerElm?.getBoundingClientRect()?.top < screenElm?.offsetHeight ){
            console.log(cat)
        }
    }

    useEffect(() => {
        const screenElm:HTMLElement|null = document.querySelector(`#content-group`);
        const scrollHandler = () => { getProdsOnScroll( actualCat, screenElm ) }
        screenElm?.addEventListener('scroll', scrollHandler );
        return () => screenElm?.removeEventListener('scroll', scrollHandler ) ;
    },[ actualCat ]);
}

export default useScrollLoadProduct;
