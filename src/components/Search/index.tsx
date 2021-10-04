import cssShopAnimation from '@/styles/shop-animation.scss';
import InputWithButton from '@/components/InputWithButton';
import searchCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';
import SearchList from "@/components/SearchList";
import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";
import FastResultItem from "@/components/SearchList/components/FastResultItem";
import { Redirect } from 'react-router-dom'


const Search = ({ styling }:{styling:string}) =>{

    const [state,setState] = useState({
        hasResults: false,
        requestProcessing: false,
        redirect: false,
        searchText: '',
    })

    const [fastResults,setFastResults] = useState<[string,string,{title:string, id:number}][]>([]);

    const needRedirect = () => (state.redirect) ? <Redirect to={{ pathname: "/search",search: `?keyword=${state.searchText}`}} /> : null

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

        APIService.fastSearchInProducts(state.searchText , 2)
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
       setState( (prevState) => ({
           ...prevState,
           searchText,
           redirect: true
       }) )

    }

    const getPopularSearchRequests = (searchText:string) => {
        setState((prevState) => ({
            ...prevState,
            searchText
        }))
    }

    return(
        <section className={`${searchCss.search} ${cssShopAnimation.search}`}>
            {needRedirect()}
            <div className={mainCss.container}>
              <InputWithButton hasResults={state.hasResults} onClickHandler={getSearchResults} onChangeHandler={getPopularSearchRequests} styling={`search-input ${styling}`} />
              <SearchList isActive={state.hasResults} >
                  {fastResults.map(([keyword,whereFound,{title,id}],num) => <FastResultItem key={`${id}-${num}`} id={id} keyword={keyword} whereFound={whereFound} productName={title} />)}
              </SearchList>
            </div>
        </section>
    )
};

export default Search;
