import cssShopAnimation from '@/styles/shop-animation.scss';
import InputWithButton from '@/components/InputWithButton';
import searchCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';
import SearchList from "@/components/SearchList";
import {useState} from "react";

const Search = ({ styling }:{styling:string}) =>{

    const [state,setState] = useState({
        hasResults: false
    })

    const getSearchResults = (searchText:string) => {
        console.log(searchText)
    }

    const getPopularSearchRequests = (searchText:string) => {
        if( !searchText) {
            setState((prevState)=>({
                ...prevState,
                hasResults: false
            }))
            return;
        }

        console.log(searchText)


        setState((prevState)=>({
            ...prevState,
            hasResults: true
        }))
    }



    console.log(state.hasResults)
    return(
        <section className={`${searchCss.search} ${cssShopAnimation.search}`}>
        <div className={mainCss.container}>
          <InputWithButton hasResults={state.hasResults} onClickHandler={getSearchResults} onChangeHandler={getPopularSearchRequests} styling={`search-input ${styling}`} />
          <SearchList isActive={state.hasResults} searchResult={['Tree','Tree 2', 'Tree of Kind']} />
        </div>
  </section>
    )
};

export default Search;
