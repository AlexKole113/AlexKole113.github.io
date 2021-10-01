import cssShopAnimation from '@/styles/shop-animation.scss';
import InputWithButton from '@/components/InputWithButton';
import searchCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';
import SearchList from "@/components/SearchList";
import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";
import FastResultItem from "@/components/SearchList/components/FastResultItem";


const Search = ({ styling }:{styling:string}) =>{

    const [state,setState] = useState({
        hasResults: false,
        requestProcessing: false,
        searchText: '',
    })

    const [fastResults,setFastResults] = useState<[string,string,{title:string}][]>([]);

    useEffect(() => {
        if( state.searchText.length < 2) {
            setState((prevState)=>({
                ...prevState,
                hasResults: false
            }))
            return;
        }

        if( state.requestProcessing ) return;
             setState((prevState)=>({
            ...prevState,
            requestProcessing: true,
        }));

        APIService.searchInProducts(state.searchText , 2)
            .then((response) => {
                if( Array.isArray(response) && response.length ){
                    setFastResults(() => [...response] )
                    setState((prevState) => {
                       if(prevState.searchText.length >= 2) {
                           return {
                               ...prevState,
                               requestProcessing: false,
                               hasResults: true
                           }
                       }
                       return  {
                           ...prevState,
                           requestProcessing: false,
                           hasResults: false
                       }
                    })
                } else {
                    setState((prevState)=>({
                        ...prevState,
                        requestProcessing: false,
                        hasResults: false
                    }))
                }
            })

    },[ state.searchText ] )

    const getSearchResults = (searchText:string) => {
        console.log(searchText)
    }

    const getPopularSearchRequests = (searchText:string) => {
        setState((prevState) => ({
            ...prevState,
            searchText
        }))
    }

    return(
        <section className={`${searchCss.search} ${cssShopAnimation.search}`}>
            <div className={mainCss.container}>
              <InputWithButton hasResults={state.hasResults} onClickHandler={getSearchResults} onChangeHandler={getPopularSearchRequests} styling={`search-input ${styling}`} />
              <SearchList isActive={state.hasResults} >
                  {fastResults.map(([keyword,whereFound,{title}], num) => <FastResultItem key={num} keyword={keyword} whereFound={whereFound} productName={title} />)}
              </SearchList>
            </div>
        </section>
    )
};

export default Search;
