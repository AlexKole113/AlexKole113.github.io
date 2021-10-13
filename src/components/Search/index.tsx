import cssShopAnimation from '@/styles/shop-animation.scss';
import InputWithButton from '@/components/InputWithButton';
import searchCss from './styles/index.scss';
import mainCss from '../../styles/index.scss';
import SearchList from "@/components/SearchList";
import {useEffect, useState} from "react";
import APIService from "../../../mocks/APIService";
import FastResultItem from "@/components/SearchList/components/FastResultItem";
import { Redirect } from 'react-router-dom'


const Search = ({ styling }:{styling:string}) => {

    const {search} = new URL(`${window.location}`);
    const searchParam = search.split('=')[0].slice(1);
    const searchValue = search.split('=')[1];

    const [state,setState] = useState({
        initial: true,
        hasResults: false,
        requestProcessing: false,
        redirect: false,
        searchText: ( searchParam === 'keyword') ? searchValue : '',
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

        return () => {
            setState((prevState)=>({...prevState}))
        }

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
            initial: false,
            searchText
        }))
    }

    return(
        <section className={`${searchCss.search} ${cssShopAnimation.search}`}>
            {needRedirect()}
            <div data-search={'product'} className={mainCss.container}>
                <InputWithButton hasResults={state.hasResults && !state.initial} onClickHandler={getSearchResults} onChangeHandler={getPopularSearchRequests} styling={`search-input ${styling}`} startValue={state.searchText} />
                <SearchList isActive={state.hasResults && !state.initial} >
                    {fastResults.map(([keyword,whereFound,{title,id}],num) => <FastResultItem key={`${id}-${num}`} id={id} keyword={keyword} whereFound={whereFound} productName={title} />)}
                </SearchList>
            </div>
        </section>
    )
};

export default Search;
