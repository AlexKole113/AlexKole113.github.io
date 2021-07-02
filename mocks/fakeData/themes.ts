const getThemeByID = (id:number|string|null = 1, delay = 200) => {
    const allThemesCollection = new Map([
            ['1', 'flowers-theme'],
            ['2', 'plants-theme'],
            ['3', 'trees-theme'],
            ['4', 'popular-theme'],
            ['settings-theme','settings-theme'],
            ['profile-theme','profile-theme'],
            ['contact-theme','contact-theme'],
            ['cart-theme','cart-theme'],
            ['favorites-theme','favorites-theme'],
        ]
    )
    return new Promise(( res, rej ) => {
        const randomNetworkError = ( Math.random() > .9999 ) ? true : false;
        setTimeout(()=>{
            if( !randomNetworkError ){
                res( allThemesCollection.get(`${id}`) )
            } else {
                rej('Surprise :) It was randomNetworkError')
            }
        }, delay )

    })
}

export default getThemeByID;
