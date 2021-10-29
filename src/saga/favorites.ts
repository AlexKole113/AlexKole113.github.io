import { takeLatestRequest } from '@/utils/redux/sagas';
import {
    favoritesInfoAction,
    favoritesAddAction,
    favoritesDeleteAction,
} from '@/actions/favorites';
import Favorites from "@/favorites/Favorites";

export function* favoritesSaga() {
    yield takeLatestRequest(favoritesInfoAction, Favorites.getAllFavorites);
    yield takeLatestRequest(favoritesAddAction,  Favorites.addToFavorites);
    yield takeLatestRequest(favoritesDeleteAction, Favorites.removeFromFavorites);
}

