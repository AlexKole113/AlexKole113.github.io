import profileCss from "@/pages/Profile/styles/index.scss";

const showGroup = ( target:Element|null, updatePageState:any, delay:number) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-hidden'] );
            target?.classList.add( profileCss['profile-group-transition-start'] );
            res(1)
        }, 0 )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-transition-start'] );
            target?.classList.add( profileCss['profile-group-current'] );
            updatePageState({
                error:false,
                loading:false
            })
        }, delay )
    })
}

const hideGroup = ( target:Element|null, delay:number ) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-current'] );
            target?.classList.add( profileCss['profile-group-transition-end'] );
            res(1)
        }, 0 )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-transition-end'] );
            target?.classList.add( profileCss['profile-group-hidden'] );
        }, delay )
    })
}

const classNameAnimationSwitcher = ( name:string, active:string, updatePageState:CallableFunction, delay:number = 1000 ) => {
    const target = document.querySelector(`[data-fields-group='${name}']`);

    if( active === 'active' ){
        showGroup(target,updatePageState,delay);
    } else {
        hideGroup(target,delay);
    }
}


export { classNameAnimationSwitcher }


