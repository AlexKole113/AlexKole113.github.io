import switcherCss from './styles/index.scss'



const Switcher = ({value, onToggle}:{value:boolean, onToggle:(value:boolean)=>{}}) => {
    return (
        <label  tabIndex={1} className={`${switcherCss['switch-control']} ${switcherCss['settings-switch']}`}>
            <input onChange={() => {onToggle(value)}} type="checkbox"  checked={value} />
            <span className={`${switcherCss['slider']} ${switcherCss['round']}`}></span>
        </label>
    );
}

export default Switcher;
