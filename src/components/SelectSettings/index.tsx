import selectSettingsCss from './styles/index.scss'


const SelectSettings = () => (
    <select tabIndex={1} className={`${selectSettingsCss['select-control']} ${selectSettingsCss['settings-select']}`} name="" id="language">
        <option value="eng">&#127468;&#127463;</option>
        <option value="fr">&#127464;&#127477;</option>
        <option value="de">&#127465;&#127466;</option>
        <option value="pirat">&#127988;&#8205;&#9760;&#65039;</option>
    </select>
)

export default SelectSettings;
