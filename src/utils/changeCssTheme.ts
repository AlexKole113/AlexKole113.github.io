const round = Math.round;

const checkAndUpdateColorHelper = (gradient:number[], result:number[], step:number) => {
    for(let i = 0; i < gradient.length; i++){
        if( round( result[i] ) === gradient[i] ) continue;
        if( round( result[i] ) < gradient[i] ) result[i] += step;
        if( round( result[i] ) > gradient[i] ) result[i] -= step;
    }
    return result;
}



const changeCssTheme = ( lastTheme:number[][] , newTheme:number[][], rootElement:HTMLElement|null, step:number = .035 ) => {

    if( lastTheme.length !== newTheme.length ) throw new Error('lastTheme.length !== newTheme.length');
    if( !rootElement ) throw new Error('no root element for themes');

    const resultGradient = lastTheme;


    const smoothThemeUpdate = () => {
        const [ gradient1, gradient2 ] = newTheme;

        resultGradient[0] = checkAndUpdateColorHelper(gradient1, resultGradient[0], step);
        resultGradient[1] = checkAndUpdateColorHelper(gradient2, resultGradient[1], step);

        for( let i = 0; i < resultGradient.length; i++ ){
             for( let j = 0; j < resultGradient[i].length; j++ ){
                if( round( resultGradient[i][j] ) !== round( newTheme[i][j])  ){
                    window.requestAnimationFrame( smoothThemeUpdate )
                }
             }
         }

        rootElement.setAttribute('style',` --background-theme: linear-gradient(180deg, rgb(${[ ...resultGradient[0].map(item => round(item) ) ]}) 20%, rgb(${[ ...resultGradient[1].map(item => round(item) ) ]}) 80%);--mobile-wrapper-menu-theme:linear-gradient(135deg, rgb(${[ ...resultGradient[0].map(item => round(item) ) ]}), rgb(${[ ...resultGradient[1].map(item => round(item) ) ]}));`);
    }

    window.requestAnimationFrame( smoothThemeUpdate );
}


export default changeCssTheme;
