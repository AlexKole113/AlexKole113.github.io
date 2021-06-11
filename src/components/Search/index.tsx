import searchCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import cssShopAnimation from "@/styles/shop-animation.scss";

import InputWithButton from "@/components/InputWithButton";


const Search = ({styling}:{styling:string}) =>
    (
        <section className={`${searchCss['search']} ${cssShopAnimation['search']}`}>
            <div className={mainCss['container']}>

                <InputWithButton styling={`search-input ${styling}`} />

            </div>
        </section>
    );



export default Search;
