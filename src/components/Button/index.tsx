import css from './styles/index.scss';
import buttonSpinner from './assets/preloader-for-btn.gif'
import Plant from "@/components/Button/components/plant";


const Button = ( { value, icon, styling, statement, updateActiveItem }:{value:string, icon:string, styling?:string, statement?:string, updateActiveItem: ()=> void } ) => {

    const iconsCollection = new Map([
        ['plant', <Plant />]
    ])

    const stylingCssClass   = ( styling ) ? css[styling] : '';
    const statementCssClass = ( statement ) ? css[`state-${statement}`] : '';
    const image             = ( !icon ) ? '' : iconsCollection.get(icon) ?? '' ;

    return(
        <a onClick={()=>{updateActiveItem()}} href="#" className={`${css['app-btn']} ${stylingCssClass} ${statementCssClass}`} >
            <span className={css['app-btn__icon']}>
                { statement === 'loading' ? <img src={buttonSpinner} /> : image }
            </span>
            <span className={css['app-btn__text']}>
                {value}
            </span>
        </a>

    );
};

export default Button;
