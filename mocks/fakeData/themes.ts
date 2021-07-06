const getThemeByID = (id:number|string|null = 1, delay = 200) => {
    const themes = new Map([
        ['1', [[238,196,153],[255,102,163]]],
        ['2', [[162,204,114],[70,130,27]]],
        ['3', [[183,248,219],[80,167,194]]],
        ['4', [[255,88,88],[240,152,25]]],
        ['favorites-theme', [[255,88,88],[240,152,25]]],
        ['cart-theme', [[207,218,255],[183,219,250]]],
        ['contact-theme', [[253,87,96],[253,87,96]]],
        ['profile-theme', [[162,204,114],[70,130,27]]],
        ['profile-theme', [[80,142,255],[189,148,251]]],
    ])
    return new Promise(( res, rej ) => {
        const randomNetworkError = ( Math.random() > .9999 ) ? true : false;
        setTimeout(()=>{
            if( !randomNetworkError ){
                res( themes.get(`${id}`) )
            } else {
                rej('Surprise :) It was randomNetworkError')
            }
        }, delay )

    })
}

export default getThemeByID;
