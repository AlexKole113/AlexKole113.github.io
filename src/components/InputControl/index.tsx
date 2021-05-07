import inputCss from './styles/index.scss'
import buttonSpinner from './assets/preloader-for-btn.gif'
import ClearIcon from "@/components/InputControl/components/ClearIcon";
import SuccessIcon from "@/components/InputControl/components/SuccessIcon";


const InputControl = ({state}:{state:any}) => {

    const cssStateClass = inputCss[`state-${state}`] ?? '' ;

    const iconsCollection = new Map([
        ['received', <ClearIcon />],
        ['success', <SuccessIcon />],
        ['loading', <img src={buttonSpinner} alt={'loader'} />]
    ])

    const icon = iconsCollection.get(state) ?? '';

    return (
        <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${cssStateClass}`} >
            <input className={inputCss['input-control__input']}  type="text" />
            <span className={inputCss['input-control__placeholder']}>Name Surname</span>
            <span className={inputCss['input-control__state']} >
                {icon}
            </span>
        </label>
    )
}

export default InputControl;
