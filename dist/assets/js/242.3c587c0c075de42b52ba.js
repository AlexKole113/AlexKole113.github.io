(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[242],{

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_Favorites
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/GroupedCards/index.tsx + 17 modules
var GroupedCards = __webpack_require__(2483);
// EXTERNAL MODULE: ./src/hooks/useThemeSwitcher/index.ts + 1 modules
var useThemeSwitcher = __webpack_require__(7276);
;// CONCATENATED MODULE: ./src/pages/Favorites/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"shop-group-transition":"gltsrOO7mSBFpKCuAISt8A==","shop-group-transition-group":"_208toJzlICOllOu13RINkg==","shop-group-hidden":"FLBRUj0OYVhOuqK1h6jGNA==","product-card":"ipuctJHoNqik3xFh1qvAow==","search":"ksZ4vkWg841g37msOQvncQ==","shop-group-current":"dUBHHrC0tVJDC28ooqw7TQ==","shop-group-transition-start":"_2lwu4y0G-mhNiq3A6CzZ9w==","shop-group-transition-end":"CVFMFg97KFT7Z10YGBjtpw=="});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(8048);
// EXTERNAL MODULE: ./src/selectors/favorites.ts
var favorites = __webpack_require__(1169);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/favorites/Favorites.ts
var Favorites = __webpack_require__(9660);
// EXTERNAL MODULE: ./mocks/APIService.ts + 3 modules
var APIService = __webpack_require__(1915);
;// CONCATENATED MODULE: ./src/hooks/useFavoritesProductList/index.ts





const useFavoritesProductList = () => {
    let { data: favoritesIDs } = (0,es/* useSelector */.v9)(favorites/* favoritesStateSelector */._);
    let [products, setProducts] = (0,react.useState)([]);
    (0,react.useEffect)(() => {
        if (!favoritesIDs || !Object.keys(favoritesIDs).length) {
            favoritesIDs = Favorites/* default.getAllFavorites */.Z.getAllFavorites();
        }
        if (favoritesIDs.length) {
            favoritesIDs.forEach((id) => {
                APIService/* default.getProductByID */.Z.getProductByID(`${id}`)
                    .then((product) => {
                    if (product && Object.keys(product).length) {
                        // @ts-ignore
                        setProducts((prevProducts) => [...prevProducts, product]);
                    }
                });
            });
        }
    }, []);
    return products;
};
/* harmony default export */ const hooks_useFavoritesProductList = (useFavoritesProductList);

;// CONCATENATED MODULE: ./src/pages/Favorites/index.tsx





const Favorites_Favorites = () => {
    const products = hooks_useFavoritesProductList();
    (0,useThemeSwitcher/* default */.Z)('favorites-theme');
    return ((0,jsx_runtime.jsx)("div", Object.assign({ className: styles["shop-group"] }, { children: (0,jsx_runtime.jsx)(GroupedCards/* default */.Z, { products: products, actualCat: -1, catId: 0 }, void 0) }), void 0));
};
/* harmony default export */ const pages_Favorites = (Favorites_Favorites);


/***/ })

}]);