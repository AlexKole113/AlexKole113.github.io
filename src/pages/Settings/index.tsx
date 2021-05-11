//@ts-nocheck
import Switcher from "@/components/Switcher";
import SettingsControl from "@/components/SettingsControl";
import SelectSettings from "@/components/SelectSettings";
import settingsCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'



const Settings = () => {

    return (
        <>
            <section class={settingsCss['settings-group']} >
            <div class={commonCss['container']} >
                <div class={settingsCss['settings-group__group']}>
                    <section class={settingsCss['settings-group__title-block']} >
                        <h3 class={settingsCss['settings-group__title-block_title']}>
                            App settings
                        </h3>
                    </section>
                    <section className={settingsCss['settings-group__settings-collection']}>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                            <Switcher />
                        </SettingsControl>

                        <SettingsControl>
                           <SelectSettings />
                        </SettingsControl>

                    </section>
                </div>
            </div>
        </section>
            <section className={settingsCss['settings-group']}>
                <div className={commonCss['container']}>
                    <div className={settingsCss['settings-group__group']}>
                        <section className={settingsCss['settings-group__title-block']}>
                            <h3 className={settingsCss['settings-group__title-block_title']}>
                                App settings
                            </h3>
                        </section>
                        <section className={settingsCss['settings-group__settings-collection']}>

                            <SettingsControl>
                                <Switcher/>
                            </SettingsControl>

                            <SettingsControl>
                                <Switcher/>
                            </SettingsControl>

                            <SettingsControl>
                                <Switcher/>
                            </SettingsControl>

                            <SettingsControl>
                                <SelectSettings/>
                            </SettingsControl>

                        </section>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Settings;
