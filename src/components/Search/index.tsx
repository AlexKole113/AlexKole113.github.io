import searchCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import InputWithButton from "@/components/InputWithButton";


const Search = () =>
    (
        <section className={searchCss['search']}>
            <div className={mainCss['container']}>

                <InputWithButton styling={'search-input'} />

            </div>
        </section>
    );



export default Search;
