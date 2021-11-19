import settingsControlCss from './styles/index.scss'

const SettingsControl = ({children, label}:{children:JSX.Element,label?:string}) => (
    <div className={settingsControlCss['settings-control']} >
        <div className={settingsControlCss['settings-control__input']}>
            {children}
        </div>
        <div className={settingsControlCss['settings-control__caption']}>
            <span className={settingsControlCss['settings-control__caption_text']}>{label}</span>
        </div>
    </div>
)


export default SettingsControl;
