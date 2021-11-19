import css from './styles/index.scss';
import buttonSpinner from './assets/preloader-for-btn.gif'
import PlantIcon from "@/components/Button/components/PlantIcon";
import ProfileIcon from "@/components/Button/components/ProfileIcon";
import AddressIcon from "@/components/Button/components/AddressIcon";
import CreditCardIcon from "@/components/Button/components/CreditCardIcon";
import TreeIcon from "@/components/Button/components/TreeIcon";
import FlowerIcon from "@/components/Button/components/FlowerIcon";
import PepperIcon from "@/components/Button/components/PepperIcon";
import useMultiLanguage from "@/hooks/useMultiLanguage";

const Button = ( { value, icon, styling, statement, updateActiveItem }:{value:string, icon:string, styling?:string, statement?:string, updateActiveItem: ()=> void } ) => {

    const __translate = useMultiLanguage();
    const iconsCollection = new Map([
        ['plant', <PlantIcon />],
        ['profile', <ProfileIcon />],
        ['address', <AddressIcon />],
        ['payments', <CreditCardIcon />],
        ['tree', <TreeIcon />],
        ['flower', <FlowerIcon />],
        ['pepper', <PepperIcon />],
    ])

    const stylingCssClass   = ( styling ) ? css[styling] : '';
    const statementCssClass = ( statement ) ? css[`state-${statement}`] : '';
    const image             = ( !icon ) ? '' : iconsCollection.get(icon) ?? '' ;

    return(
        <a data-test={`button`} onClick={()=>{updateActiveItem()}} href="#" className={`${css['app-btn']} ${stylingCssClass} ${statementCssClass}`} >
            <span className={css['app-btn__icon']}>
                { statement === 'loading' ? <img src={buttonSpinner} /> : image }
            </span>
            <span className={css['app-btn__text']}>
                {__translate(value)}
            </span>
        </a>
    );
};

export default Button;
