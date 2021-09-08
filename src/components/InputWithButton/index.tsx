import Magnifier from '@/components/InputWithButton/components/magnifier';
import inputWithBtnCss from './styles/index.scss';
import {FormEvent, useState} from "react";

const InputWithButton = ({ placeholder, onClickHandler }:{onClickHandler: (val:string)=>void, value?:string, icon?:string, styling?:string, statement?:string, placeholder?:any}) => {

    const[value, setValue] = useState('')

    const formSumbitHandler = (e:FormEvent) => {
        e.preventDefault();
        onClickHandler(value);
    }

    return(
        <form onSubmit={formSumbitHandler} className={`${inputWithBtnCss['input-with-btn']} ${inputWithBtnCss['with-placeholder-movement']}`}>
            <div className={`${inputWithBtnCss['input-control']} ${inputWithBtnCss['search-input']} ${inputWithBtnCss['state-loading']}`}>
              <input value={value} onChange={ (e) => setValue(e.target.value)} className={inputWithBtnCss['input-control__input']} type="text" placeholder={placeholder ?? 'Search'} />
            </div>
            <button type={'submit'} className={inputWithBtnCss['input-with-btn_input_btn']}>
              <Magnifier />
            </button>
        </form>
    )
};

export default InputWithButton;
