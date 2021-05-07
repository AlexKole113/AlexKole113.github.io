import inputWithBtnCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import Magnifier from "@/components/InputWithButton/components/magnifier";


const InputWithButton = ( { placeholder }:{value?:string, icon?:string, styling?:string, statement?:string, placeholder?:any} ) => {


   return (<div className={`${inputWithBtnCss['input-with-btn']} ${mainCss['shadow-theme']} `}>
                <div className={`${inputWithBtnCss['input-control']} ${inputWithBtnCss['search-input']} ${inputWithBtnCss['state-loading']}`}>
                    <input className={inputWithBtnCss['input-control__input']} type="text" placeholder={placeholder ?? 'Search'} />
                </div>
                <a className={inputWithBtnCss['input-with-btn_input_btn']} href="#">
                    <Magnifier />
                </a>
            </div>
    )
}

export default InputWithButton;
