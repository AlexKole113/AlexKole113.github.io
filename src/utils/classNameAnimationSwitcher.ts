import profileCss from "@/pages/Profile/styles/index.scss";

const showGroup = ( target:Element|null, updatePageState:any, state:{[key:string]:any}, showGroupClasses:string[], delay:number ) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss[showGroupClasses[0]] );
            target?.classList.add( profileCss[showGroupClasses[1]] );
            res(1)
        }, 0 )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss[showGroupClasses[1]] );
            target?.classList.add( profileCss[showGroupClasses[2]] );
            updatePageState( state )
        }, delay )
    })
}

const hideGroup = ( target:Element|null, hideGroupClasses:string[], delay:number ) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss[ hideGroupClasses[0] ] );
            target?.classList.add( profileCss[ hideGroupClasses[1] ] );
            res(1)
        }, 0 )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss[ hideGroupClasses[1] ] );
            target?.classList.add( profileCss[ hideGroupClasses[2] ] );
        }, delay )
    })
}

const validate = ( selector:string, updatePageState:CallableFunction, classNamesChain:{ showGroupClasses:string[], hideGroupClasses:string[] } ) => {

    if ( classNamesChain.showGroupClasses.length !== 3 || classNamesChain.hideGroupClasses.length !== 3 ){
        throw new Error('there should be 3 animation classes');
    }
    if (!selector || !updatePageState ){
        throw new Error('no selector or updatePageState');
    }
}

const classNameAnimationSwitcher = ( selector:string, active:string, updatePageState:CallableFunction ) => {
    const target = document.querySelector( selector );
    return ( classNamesChain:{ showGroupClasses:string[], hideGroupClasses:string[] },   state:{[key:string]:any}, delay:number = 1000) => {
        validate( selector, updatePageState, classNamesChain );
        const { showGroupClasses, hideGroupClasses } = classNamesChain;
        if( active === 'active' ){
            showGroup( target, updatePageState, state, showGroupClasses, delay );
        } else {
            hideGroup( target, hideGroupClasses, delay );
        }
    }
}


export { classNameAnimationSwitcher }


