import PL from "@/hooks/useMultiLanguage/lang/pl";
import RU from "@/hooks/useMultiLanguage/lang/ru";
import DE from "@/hooks/useMultiLanguage/lang/de";
import {useSelector} from "react-redux";
import {settingsStateSelector} from "@/selectors/settings";


const useMultiLanguage = () => {
    const { data:settings } = useSelector( settingsStateSelector );
    const langs = new Map([
        ['pl', PL],
        ['ru', RU],
        ['de', DE]
    ])

    return (originText:string) => {
        if(!settings?.language) return originText;
        if(typeof originText !== 'string') return originText;

        const translatedText = langs.get(settings.language)?.get(originText);
        if(!translatedText) return originText;
        return translatedText
    }
}

export default useMultiLanguage;
