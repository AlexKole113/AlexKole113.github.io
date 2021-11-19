import {useEffect} from "react";
import {fakeProductsFlowers} from "../../../mocks/fakeData/shop";
import APIService from "../../../mocks/APIService";


const useSearchInProducts = (updateState:CallableFunction) => {
    const {search} = new URL(`${window.location}`);
    const searchParam = search.split('=')[0].slice(1);
    const searchValue = search.split('=')[1];

    useEffect(() => {
        if( searchParam === 'id' && searchValue ){
            updateState((prevState:{loading:boolean}) => ({
                ...prevState,
                loading: true
            }))
            APIService.getProductByID( searchValue )
                .then((response)=>{
                    updateState((prevState:{searchResult:[]}) => ({
                      ...prevState,
                      loading: false,
                      searchResult: [response]
                    }))
                })
        }
        if( searchParam === 'keyword' && searchValue ) {
            updateState((prevState:{loading:boolean}) => ({
                ...prevState,
                loading: true
            }))
            APIService.searchByKeywordInFields(searchValue, ['title'])
                .then((response)=>{
                    updateState((prevState:{searchResult:[]}) => ({
                        ...prevState,
                        loading: false,
                        searchResult: [...response]
                    }))
                })
        }
    }, [searchParam, searchValue])

    return fakeProductsFlowers.items;
}

export default useSearchInProducts;
