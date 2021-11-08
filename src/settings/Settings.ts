import getParseJSONFromStorage from "@/utils/storage/getParseJSONFromStorage";
import saveJSONInStorage from "@/utils/storage/saveJSONInStorage";

class Settings {
    static storageKey = 'settings';

    static changeSettings = ( settingsWithValue:{[settingsName:string]: string|boolean}) => {
        const allSettings = {...Settings.getAllSettings(), ...settingsWithValue }
        saveJSONInStorage(Settings.storageKey, {...allSettings} )
    }

    static getAllSettings = () => getParseJSONFromStorage(Settings.storageKey);
}

export default Settings;
