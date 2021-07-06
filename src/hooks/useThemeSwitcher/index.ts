import {useEffect, useState} from "react";
import getThemeByID from "../../../mocks/fakeData/themes";
import changeCssTheme from "@/utils/changeCssTheme";

const useThemeSwitcher = ( id:number|string ) => {

    const [ currentTheme, setTheme ] = useState<number[][]>([[238,196,153],[255,102,163]]);

    useEffect(()=>{
        getThemeByID(id)
            .then(( themeColorsArray ) => {
                if( Array.isArray(themeColorsArray) ){
                    changeCssTheme( currentTheme, themeColorsArray, document.querySelector('main'));
                    setTheme( themeColorsArray )
                }
            })
            .catch( e =>{
                throw new Error('theme error: ' + e)
            })
    },[id])
}

export default useThemeSwitcher;
