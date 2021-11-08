//@ts-nocheck
import Switcher from "@/components/Switcher";
import SettingsControl from "@/components/SettingsControl";
import SelectSettings from "@/components/SelectSettings";
import settingsCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {settingsStateSelector} from "@/selectors/settings";
import {settingsInfoAction, settingsUpdateAction} from "@/actions/settings";
import useMultiLanguage from "@/hooks/useMultiLanguage";


const Settings = () => {
    useThemeSwitcher('settings-theme' );
    const settingsWithDefaultValues = {
        language: {
            defaultValue: 'en',
            label: 'Language',
            options: [{value:'en', label: '🇬🇧'},{value:'pl', label: '🇵🇱'},{value:'de', label: '🇩🇪'},{value:'ru', label: '🇷🇺'}]
        },
        pushNotification: {
            defaultValue: true,
            label: 'Push notifications',
            options: [true, false]
        }
    }
    const { data:settings } = useSelector( settingsStateSelector );
    const dispatch = useDispatch();
    const __translate = useMultiLanguage();

    const selectHandler = (key, value) => {
        dispatch(settingsUpdateAction.request({ params: { data: {[key]:value} } }))
        dispatch(settingsInfoAction.request())
    }
    const switcherHandler = (key, value) => {
        dispatch(settingsUpdateAction.request({ params: { data: {[key]:!value} } }))
        dispatch(settingsInfoAction.request())
    }

    let controls = [];
    for(const key in settingsWithDefaultValues) {
        const {defaultValue,label,options} = settingsWithDefaultValues[key];
        if( options.length > 2) {
            controls = [...controls, <SettingsControl key={key} label={__translate(label)}><SelectSettings value={ settings[key] ?? defaultValue} options={options} onSelect={(v)=>{selectHandler(key,v)}} /></SettingsControl> ]
        } else {
            controls = [...controls, <SettingsControl key={key} label={ __translate('Push notifications')}><Switcher value={ settings[key] ?? defaultValue} options={options} onToggle={(v)=>{switcherHandler(key,v)}} /></SettingsControl> ]
        }
    }
    return (
        <section className={settingsCss['settings-group']} >
            <div className={commonCss['container']} >
                <div className={settingsCss['settings-group__group']}>
                    <section className={settingsCss['settings-group__title-block']} >
                        <h3 className={settingsCss['settings-group__title-block_title']}>
                            { __translate('App settings') }
                        </h3>
                    </section>
                    <section className={settingsCss['settings-group__settings-collection']}>
                        {controls}
                    </section>
                </div>
            </div>
        </section>
    );

}

export default Settings;
