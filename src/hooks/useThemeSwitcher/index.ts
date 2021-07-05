import {useContext, useEffect} from "react";
import getThemeByID from "../../../mocks/fakeData/themes";
import {LayoutContext} from "@/components/App";

const useThemeSwitcher = ( id:number|string ) => {
    const context = useContext( LayoutContext );

    //TODO:
    // 1.add useState with current theme state
    // 2. add function which changing rgb theme color through raf or setInterval
    // 3. update getThemeByID to function which get rgba colors
    // 4. add --theme-result-color to root element (<main>)


    useEffect(()=>{
        getThemeByID(id)
            .then(( themeName ) => {
                if(themeName && typeof themeName === 'string'){
                    context.setTheme(themeName)
                }
            })
            .catch( e =>{
                throw new Error('theme error: ' + e)
            })
    },[id])
}

export default useThemeSwitcher;
