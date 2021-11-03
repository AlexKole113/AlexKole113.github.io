import inputWithBtnCss from './styles/index.scss';
import {FormEvent, useState} from "react";

const InputWithButton = ({ placeholder, onClickHandler, onChangeHandler, hasResults , startValue, children }:{children: JSX.Element, onClickHandler: (val:string)=>void, onChangeHandler?: (val:string)=>void, value?:string, icon?:string, styling?:string, statement?:string, placeholder?:any, hasResults?:boolean, startValue?:string }) => {

    const[value, setValue] = useState(  startValue ?? '' );
    const formSumbitHandler = (e:FormEvent) => {
        e.preventDefault();
        onClickHandler(value);
    }
    const onType = (value:string) => {
        setValue(value);
        if(onChangeHandler) onChangeHandler(value);

    }

    return(
        <form onSubmit={formSumbitHandler} className={`${inputWithBtnCss['input-with-btn']}  ${ hasResults ? inputWithBtnCss['open-list'] : '' } `}>
            <div className={`${inputWithBtnCss['input-control']} ${inputWithBtnCss['search-input']} ${inputWithBtnCss['state-loading']}`}>
              <input value={value} onChange={ (e) => {onType(e.target.value)} } className={inputWithBtnCss['input-control__input']} type="text" placeholder={placeholder ?? 'Search'} />
            </div>
            <button type={'submit'} className={inputWithBtnCss['input-with-btn_input-btn']}>
                {children}
            </button>
        </form>
    )
};

export default InputWithButton;
