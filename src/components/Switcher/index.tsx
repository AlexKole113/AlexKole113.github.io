import switcherCss from './styles/index.scss'


const Switcher = () => (
    <label tabIndex={1} className={`${switcherCss['switch-control']} ${switcherCss['settings-switch']}`}>
        <input type="checkbox" checked/>
        <span className={`${switcherCss['slider']} ${switcherCss['round']}`}></span>
    </label>
)

export default Switcher;
