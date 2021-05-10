//@ts-nocheck
import settingsCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'




//temporary
import themes from '@/styles/_themes.scss';
import InputControl from "@/components/InputControl";
import Switcher from "@/components/Switcher";
import SettingsControl from "@/components/SettingsControl";
import SelectSettings from "@/components/SelectSettings";
window.onload = () => {
    document?.querySelector('html')?.classList.add(themes['settings-theme'])
    document?.querySelector('.menu-top__hum')?.addEventListener('click', ()=>{
        document.querySelector('html').classList.toggle('menu-opened');
        document.querySelector('.menu').classList.toggle('menu-opened');
        document.querySelector('.mobile-wrapper').classList.toggle('menu-opened');
    })

    // category transition
    document?.querySelector('.app-btn.shadow-green')?.addEventListener('click', ()=> {
        document.querySelector('html').classList.toggle('flowers-theme');
        document.querySelector('html').classList.toggle('plants-theme');

        document.querySelectorAll('.shop-group-transition-group').forEach((item)=>{
            if( item.classList.contains('shop-group-hidden') ) {
                item.classList.toggle('shop-group-hidden')
                item.classList.toggle('shop-group-transition-start')
            }
            if( item.classList.contains('shop-group-current') ) {
                item.classList.toggle('shop-group-current')
                item.classList.toggle('shop-group-transition-end')
            }
        })

    })

    //preloader
    window.addEventListener('load',() => {
        document.querySelector('#preloader').remove();
        document.body.classList.remove('state-loading');
        document.querySelector('.mobile-wrapper').classList.remove('state-loading');
    })
}

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
