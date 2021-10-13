class Favorites {

    static addToFavorites = ({data:id}:{data:number}) => {
        console.log('addToFavorites', id)
    }

    static removeFromFavorites = ({data:id}:{data:number}) => {
        console.log('removeFromFavorites', id)
    }

    static _createFavorites = ({data:id}:{data:number}) => {
        console.log('_createFavorites', id)
    }

    static isProductInFavorites = ({data:id}:{data:number}) => {
        console.log('checkProductInFavorites', id)
    }

    static getAllFavorites = () => {
        console.log('getAllFavorites')
    }

}

export default Favorites;
