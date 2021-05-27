import profileCss from "@/pages/Profile/styles/index.scss";


const showGroup = ( target:Element|null, delay:number) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-hidden'] );
            target?.classList.add( profileCss['profile-group-transition-start'] );
            res(1)
        }, delay )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-transition-start'] );
            target?.classList.add( profileCss['profile-group-current'] );
        }, delay )
    })
}


const hideGroup = ( target:Element|null, delay:number ) => {
    new Promise(( res ) => {
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-current'] );
            target?.classList.add( profileCss['profile-group-transition-end'] );
            res(1)
        }, delay )
    }).then(()=>{
        setTimeout(() => {
            target?.classList.remove( profileCss['profile-group-transition-end'] );
            target?.classList.add( profileCss['profile-group-hidden'] );
        }, delay )
    })
}




const classNameAnimationSwitcher = ( name:string,active?:string, delay:number = 1000 ) => {
    const target = document.querySelector(`[data-fields-group='${name}']`)

    if( active === 'active' ){
        if( !target?.classList.contains( profileCss['profile-group-current'] ) ) showGroup(target,delay);
    } else {
        if( target?.classList.contains( profileCss['profile-group-current'] ) ) hideGroup(target,delay);
    }
}


export { classNameAnimationSwitcher }


