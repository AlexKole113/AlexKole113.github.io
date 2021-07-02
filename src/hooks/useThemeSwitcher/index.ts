import {useContext, useEffect} from "react";
import getThemeByID from "../../../mocks/fakeData/themes";
import {LayoutContext} from "@/components/App";

const useThemeSwitcher = ( id:number|string ) => {
    const context = useContext( LayoutContext );
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
