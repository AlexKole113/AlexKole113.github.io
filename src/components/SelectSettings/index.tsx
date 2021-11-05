import React from "react";
import selectSettingsCss from './styles/index.scss'



const SelectSettings = ({value,options,onSelect}:{value:string, options:{value:string,label:string}[], onSelect:(newValue:string)=>{}}) => {
    const onChangeHandler = (e:React.FormEvent) => [
        onSelect((e.target as HTMLSelectElement).value)
    ]
    return (
        <select onChange={onChangeHandler} value={value} tabIndex={1} className={`${selectSettingsCss['select-control']} ${selectSettingsCss['settings-select']}`} name="" id="language">
            {options.map( ({value:val,label}) =>  <option key={val} value={val}>{label}</option>)}
        </select>
    );
}

export default SelectSettings;
