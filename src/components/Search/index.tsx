import searchCss from './styles/index.scss'
import mainCss from '../../styles/index.scss'
import InputWithButton from "@/components/InputWithButton";


const Search = ({styling}:{styling:string}) =>
    (
        <section className={searchCss['search']}>
            <div className={mainCss['container']}>

                <InputWithButton styling={`search-input ${styling}`} />

            </div>
        </section>
    );



export default Search;
