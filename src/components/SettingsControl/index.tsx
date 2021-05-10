import settingsControlCss from './styles/index.scss'

const SettingsControl = ({children}:any) => (
    <div className={settingsControlCss['settings-control']} >
        <div className={settingsControlCss['settings-control__input']}>

            {children}

        </div>
        <div className={settingsControlCss['settings-control__caption']}>
            <span className={settingsControlCss['settings-control__caption_text']}>Push Notifications</span>
        </div>
    </div>
)


export default SettingsControl;
