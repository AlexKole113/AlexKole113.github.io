import inputWithBtnCss from './styles/index.scss'
import Magnifier from "@/components/InputWithButton/components/magnifier";


const InputWithButton = ( { placeholder, styling }:{value?:string, icon?:string, styling?:string, statement?:string, placeholder?:any} ) => {

   const getStylingClasses = ( styles:string ) => {
       let classNames = '';
        styles.split(' ').map(( className:string ) => inputWithBtnCss[className] ).forEach((name)=>{
            classNames += name + ' ';
        })
       return classNames;
   }

   const stylingCssClassArray   = ( styling ) ? getStylingClasses(styling) : '';

   return (<div className={`${inputWithBtnCss['input-with-btn']} ${inputWithBtnCss['with-placeholder-movement']} ${(stylingCssClassArray)}`}>
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
