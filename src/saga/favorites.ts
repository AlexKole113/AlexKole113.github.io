import { takeLatestRequest } from '@/utils/redux/sagas';
import {
    favoritesInfoAction,
    favoritesAddAction,
    favoritesDeleteAction,
} from '@/actions/favorites';
import Favorites from "@/favorites/Favorites";

export function* favoritesSaga() {
    yield takeLatestRequest(favoritesInfoAction, () => { Favorites.getAllFavorites() } );
    yield takeLatestRequest(favoritesAddAction, (data:{data:number}) => { Favorites.addToFavorites(data) });
    yield takeLatestRequest(favoritesDeleteAction, (data:{data:number}) => { Favorites.removeFromFavorites(data) });
}
