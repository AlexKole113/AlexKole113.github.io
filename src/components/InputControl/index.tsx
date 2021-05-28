import inputCss from './styles/index.scss'
import buttonSpinner from './assets/preloader-for-btn.gif'
import ClearIcon from "@/components/InputControl/components/ClearIcon";
import SuccessIcon from "@/components/InputControl/components/SuccessIcon";
import profileCss from "@/pages/Profile/styles/index.scss";

const InputControl = ({name,type,placeholder, state = 'recieved' }:{name:string,type:string,placeholder:string, state?:string }) => {

    const iconsCollection = new Map([
        ['received', <ClearIcon />],
        ['success', <SuccessIcon />],
        ['loading', <img src={buttonSpinner} alt={'loader'} />]
    ]);

    const icon = iconsCollection.get( state ) ?? '';
    const cssStateClass = inputCss[`state-${state}`] ?? '' ;

    return (
        <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`} >
            <input name={name} className={inputCss['input-control__input']}  type={type} />
            <span className={inputCss['input-control__placeholder']}>{placeholder}</span>
            <span className={inputCss['input-control__state']} >
                {icon}
            </span>
        </label>
    )
}

export default InputControl;
