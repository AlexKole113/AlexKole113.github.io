import getParseJSONFromStorage from "@/utils/storage/getParseJSONFromStorage";
import saveJSONInStorage from "@/utils/storage/saveJSONInStorage";
import getDataFromStorage from "@/utils/storage/getDataFromStorage";

class Favorites {
    static storageKey = 'favorites';

    static addToFavorites = ({data:id}:{data:number}) => {
        let userFavorites = Favorites.getAllFavorites();
        if( userFavorites === null ) userFavorites = [];
        if( userFavorites.indexOf(id) === -1 ) {
            saveJSONInStorage(Favorites.storageKey, [...userFavorites, id] )
        }

        return Favorites.getAllFavorites();
    }

    static removeFromFavorites = ({data:id}:{data:number}) => {
        const userFavorites = Favorites.getAllFavorites();
        if( userFavorites.indexOf(id) !== -1 ) {
            saveJSONInStorage(Favorites.storageKey, userFavorites.filter((favoritesID:number) => `${favoritesID}` !== `${id}` ) )
        }

        return Favorites.getAllFavorites();
    }

    static _createFavorites = ({data:id}:{data?:number}) => {
        if( !getDataFromStorage(Favorites.storageKey) ){
            if(id){
                saveJSONInStorage(Favorites.storageKey, [id])
            } else {
                saveJSONInStorage(Favorites.storageKey, [])
            }
        }

        return Favorites.getAllFavorites();
    }

    static isProductInFavorites = ({data:id}:{data:number}) => {
        const userFavorites = Favorites.getAllFavorites();
        if( !Array.isArray( userFavorites ) || userFavorites.indexOf(id) === -1 ) {
            return false;
        }
        return true
    }

    static getAllFavorites = () => getParseJSONFromStorage(Favorites.storageKey)
}

export default Favorites;
