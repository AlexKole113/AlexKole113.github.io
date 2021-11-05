//@ts-nocheck
import Switcher from "@/components/Switcher";
import SettingsControl from "@/components/SettingsControl";
import SelectSettings from "@/components/SelectSettings";
import settingsCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'
import useThemeSwitcher from "@/hooks/useThemeSwitcher";



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

    const selectHandler = (key, value) => {
        console.log(key, value)
    }
    const switcherHandler = (key, value) => {
        console.log(key, !value)
    }

    let controls = [];
    for(const key in settingsWithDefaultValues) {
        const {defaultValue,label,options} = settingsWithDefaultValues[key];
        if( options.length > 2) {
            controls = [...controls, <SettingsControl key={key} label={label}><SelectSettings value={defaultValue} options={options} onSelect={(v)=>{selectHandler(key,v)}} /></SettingsControl> ]
        } else {
            controls = [...controls, <SettingsControl key={key} label={'Push notifications'}><Switcher value={defaultValue} options={options} onToggle={(v)=>{switcherHandler(key,v)}} /></SettingsControl> ]
        }
    }
    return (
        <section className={settingsCss['settings-group']} >
            <div className={commonCss['container']} >
                <div className={settingsCss['settings-group__group']}>
                    <section className={settingsCss['settings-group__title-block']} >
                        <h3 className={settingsCss['settings-group__title-block_title']}>
                            App settings
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
