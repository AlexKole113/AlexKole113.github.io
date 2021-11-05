import getParseJSONFromStorage from "@/utils/storage/getParseJSONFromStorage";
import saveJSONInStorage from "@/utils/storage/saveJSONInStorage";

class Settings {
    static storageKey = 'settings';

    static changeSettings = (settingsName:string, value:string|boolean) => {
        const allSettings = Settings.getAllSettings()
        allSettings[settingsName] = value;
        saveJSONInStorage(Settings.storageKey, {...allSettings} )
    }

    static getAllSettings = () => getParseJSONFromStorage(Settings.storageKey)
}

export default Settings;
