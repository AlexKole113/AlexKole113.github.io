export const sendDataFromInput = ( value:string ) => new Promise(( resolve, reject ) => {
    const success = ( Math.random() > .98 ) ? false : true;
    setTimeout(()=>{
        if( success ){
            resolve( value )
        } else {
            reject('BackEnd error')
        }
    }, (Math.random() * (500 - 200) + 200 ) )
})
