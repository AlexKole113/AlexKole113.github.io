import cssShopAnimation from '@/styles/shop-animation.scss';
import InputWithButton from '@/components/InputWithButton';
import searchCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';

const Search = ({ styling }:{styling:string}) =>{

    const searchHandler = (searchText:string) => {

        console.log(searchText)

    }


    return(
        <section className={`${searchCss.search} ${cssShopAnimation.search}`}>
        <div className={mainCss.container}>
          <InputWithButton onClickHandler={searchHandler} styling={`search-input ${styling}`} />
        </div>
  </section>
    )
};

export default Search;
