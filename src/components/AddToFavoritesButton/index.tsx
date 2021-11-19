import style from '@/components/AddToFavoritesButton/styles/index.scss';
import {favoritesAddAction, favoritesDeleteAction, favoritesInfoAction} from "@/actions/favorites";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import Favorites from "@/favorites/Favorites";

const AddToFavoritesButton = ({id}:{id:number|string}) => {

    const dispatch = useDispatch();

    const [state, setState ] = useState<{inFavorites: null|boolean, loading: boolean}>({inFavorites: null, loading: false})

    useEffect(() => {
        if( Favorites.isProductInFavorites({data: parseFloat(`${id}`) }) ){
            setState((prevState)=>({
                ...prevState,
                loading: false,
                inFavorites: true
            }))
        } else {
            setState((prevState)=>({
                ...prevState,
                loading: false,
                inFavorites: false
            }))
        }

    },[state.inFavorites, state.loading]);

    const onClickHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
             loading: true
        }))
        if( state.inFavorites ) {
            dispatch(favoritesDeleteAction.request({ params: { data: id } }));
        } else {
            dispatch(favoritesAddAction.request({ params: { data: id } }));
        }
        dispatch(favoritesInfoAction.request())
    }

    if(state.inFavorites === null ) return null;

    return(<a href="" onClick={onClickHandler} className={`${style['product-card__buttons-item']} ${style['add-to-fav']} ${ (state.inFavorites) ? style['state-in-favorites'] : '' }`}>
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            className="svg-inline--fa fa-heart fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            />
        </svg>
    </a>);
}

export default AddToFavoritesButton;

