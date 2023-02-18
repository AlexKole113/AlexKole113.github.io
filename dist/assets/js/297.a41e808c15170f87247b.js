(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[297],{

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"search":"zLWWZPNYUbUvvoLuu72wYw==","no-content":"_6Ji8NTo15ZL5E1YK1pogsw==","no-content__go-back":"MeY1FPN8bIDtBizUlwKhaw=="});

/***/ }),

/***/ 2708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => /* binding */ components_InputWithButton
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/InputWithButton/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"input-with-btn":"_9mKiU59IH5pQmAjbo6rnkQ==","input-with-btn_input-btn":"QnWk9QHz7n68N7LdjQ+O+A==","input-control__placeholder":"qu9Hs3QjtcQiDhVSpDj5ag==","open-list":"wBTYHG9eRLOiLshG6Q-VGg==","profile-input":"V7-HYrsof3+EU8jVaIZc6Q==","cart-input":"rIUalz3shojLrUDWb1GnzA==","state-loading":"hEeIn8NgbTCYmRxFUoYyiQ==","input-with-btn_input_btn":"AmlvUHMuXJutNc-QSlXBQQ==","with-placeholder-movement":"a-FqGjdT3rLZAzYGRqf1-Q==","search-input":"Bk-V-SOK5f90UOx9YZo42A==","input-control":"QTi15xttxg-1iJ479MyL2g==","input-control__input":"_14kmKM5Dl78lBiFADM-Nfw==","field-has-content":"lUbbipFpAxqvig6s0JrHGw==","input-control__state":"-ImjUsfd+6GvYDjhqetEQg==","success-check":"YjzBhU1I6vYEj98ZZ2kF3g==","state-invalid":"F4naHWpcvgY-Cu0Ya6I5yg==","shadow-pink":"-xBRwwkyE+1950NOnIPlUw==","shadow-green":"lgnxkArd9c0aXIbJWjeJiA==","shadow-blue":"Mnoi8Ic51jJwrBNo6riofQ==","shadow-violet":"yxGdcZ+cz5a-AFyF8h9M8g==","shadow-theme":"M7GaVdqSJZMv85xMFR945A=="});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/components/InputWithButton/index.tsx




const InputWithButton = ({ placeholder, onClickHandler, onChangeHandler, hasResults, startValue, children }) => {
    var _a;
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const [value, setValue] = (0,react.useState)(startValue !== null && startValue !== void 0 ? startValue : '');
    const formSumbitHandler = (e) => {
        e.preventDefault();
        onClickHandler(value);
    };
    const onType = (value) => {
        setValue(value);
        if (onChangeHandler)
            onChangeHandler(value);
    };
    return ((0,jsx_runtime.jsxs)("form", Object.assign({ onSubmit: formSumbitHandler, className: `${styles["input-with-btn"]}  ${hasResults ? styles["open-list"] : ''} ` }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: `${styles["input-control"]} ${styles["search-input"]} ${styles["state-loading"]}` }, { children: (0,jsx_runtime.jsx)("input", { value: value, onChange: (e) => { onType(e.target.value); }, className: styles["input-control__input"], type: "text", placeholder: (_a = __translate(placeholder)) !== null && _a !== void 0 ? _a : __translate('Search') }, void 0) }), void 0),
            (0,jsx_runtime.jsx)("button", Object.assign({ type: 'submit', className: styles["input-with-btn_input-btn"] }, { children: children }), void 0)] }), void 0));
};
/* harmony default export */ const components_InputWithButton = (InputWithButton);


/***/ }),

/***/ 7093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => /* binding */ components_ShopGroup
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/shop-animation.scss
var shop_animation = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/components/InputWithButton/index.tsx + 1 modules
var InputWithButton = __webpack_require__(2708);
// EXTERNAL MODULE: ./src/components/Search/styles/index.scss
var styles = __webpack_require__(6911);
// EXTERNAL MODULE: ./src/styles/index.scss
var src_styles = __webpack_require__(2714);
;// CONCATENATED MODULE: ./src/components/SearchList/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchList_styles = ({"list-container":"QRwxYWceuIFHlOeOoJ55lQ==","active":"lM9fdJybaxYFR3VcnMy52w==","list-container__list":"acLG1f8qiM419veVnlZPtA=="});
;// CONCATENATED MODULE: ./src/components/SearchList/index.tsx


const SearchList = ({ isActive, children }) => {
    return ((0,jsx_runtime.jsx)("div", Object.assign({ className: `${SearchList_styles["list-container"]} ${isActive ? SearchList_styles.active : ''} ` }, { children: (0,jsx_runtime.jsx)("ul", Object.assign({ className: SearchList_styles["list-container__list"] }, { children: children }), void 0) }), void 0));
};
/* harmony default export */ const components_SearchList = (SearchList);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./mocks/APIService.ts + 3 modules
var APIService = __webpack_require__(1915);
// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/components/SearchList/components/FastResultItem/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const FastResultItem_styles = ({"keyword":"AIsquHpx4WKwNocg508OTg==","whereFound":"GjiMONGp+BiBoT+5gxLa-w==","productName":"r4tKPY1Tp761Y1v4VjsGig==","item":"_6VMol4rlleC4YPwD8as1Sg==","link":"aKzdi0RpBNmU4Os49N-FgA=="});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
;// CONCATENATED MODULE: ./src/components/SearchList/components/FastResultItem/index.tsx




const Index = ({ keyword, id, whereFound, productName }) => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    return ((0,jsx_runtime.jsx)("li", Object.assign({ className: FastResultItem_styles.item }, { children: (0,jsx_runtime.jsxs)(react_router_dom/* Link */.rU, Object.assign({ to: {
                pathname: "/search",
                search: `?id=${id}`,
            }, className: FastResultItem_styles.link }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: FastResultItem_styles.keyword }, { children: keyword }), void 0), __translate(`in`), (0,jsx_runtime.jsx)("span", Object.assign({ className: FastResultItem_styles.whereFound }, { children: __translate(whereFound) }), void 0), __translate(`of`), (0,jsx_runtime.jsx)("span", Object.assign({ className: FastResultItem_styles.productName }, { children: `"${productName}"` }), void 0)] }), void 0) }), void 0));
};
/* harmony default export */ const FastResultItem = (Index);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./src/components/InputWithButton/components/magnifier.tsx

const Magnifier = () => (0,jsx_runtime.jsx)("svg", Object.assign({ "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "search", className: "svg-inline--fa fa-search fa-w-16", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, { children: (0,jsx_runtime.jsx)("path", { fill: "currentColor", d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, void 0) }), void 0);
/* harmony default export */ const magnifier = (Magnifier);

;// CONCATENATED MODULE: ./src/components/Search/index.tsx











const Search = ({ styling }) => {
    const { search } = new URL(`${window.location}`);
    const searchParam = search.split('=')[0].slice(1);
    const searchValue = search.split('=')[1];
    const [state, setState] = (0,react.useState)({
        initial: true,
        hasResults: false,
        requestProcessing: false,
        redirect: false,
        searchText: (searchParam === 'keyword') ? searchValue : '',
    });
    const [fastResults, setFastResults] = (0,react.useState)([]);
    const needRedirect = () => (state.redirect) ? (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, { to: { pathname: "/search", search: `?keyword=${state.searchText}` } }, void 0) : null;
    (0,react.useEffect)(() => {
        if (state.searchText.length < 2) {
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { hasResults: false })));
            return;
        }
        if (state.requestProcessing)
            return;
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { requestProcessing: true })));
        APIService/* default.fastSearchInProducts */.Z.fastSearchInProducts(state.searchText, 2)
            .then((response) => {
            if (Array.isArray(response) && response.length) {
                setFastResults(() => [...response]);
                setState((prevState) => {
                    if (prevState.searchText.length >= 2) {
                        return Object.assign(Object.assign({}, prevState), { requestProcessing: false, hasResults: true });
                    }
                    return Object.assign(Object.assign({}, prevState), { requestProcessing: false, hasResults: false });
                });
            }
            else {
                setState((prevState) => (Object.assign(Object.assign({}, prevState), { requestProcessing: false, hasResults: false })));
            }
        });
        return () => {
            setState((prevState) => (Object.assign({}, prevState)));
        };
    }, [state.searchText]);
    const getSearchResults = (searchText) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { searchText, redirect: true })));
    };
    const getPopularSearchRequests = (searchText) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { initial: false, searchText })));
    };
    return ((0,jsx_runtime.jsxs)("section", Object.assign({ className: `${styles/* default.search */.Z.search} ${shop_animation/* default.search */.Z.search}` }, { children: [needRedirect(), (0,jsx_runtime.jsxs)("div", Object.assign({ "data-search": 'product', className: src_styles/* default.container */.Z.container }, { children: [(0,jsx_runtime.jsx)(InputWithButton/* default */.Z, Object.assign({ hasResults: state.hasResults && !state.initial, onClickHandler: getSearchResults, onChangeHandler: getPopularSearchRequests, styling: `search-input ${styling}`, startValue: state.searchText }, { children: (0,jsx_runtime.jsx)(magnifier, {}, void 0) }), void 0),
                    (0,jsx_runtime.jsx)(components_SearchList, Object.assign({ isActive: state.hasResults && !state.initial }, { children: fastResults.map(([keyword, whereFound, { title, id }], num) => (0,jsx_runtime.jsx)(FastResultItem, { id: id, keyword: keyword, whereFound: whereFound, productName: title }, `${id}-${num}`)) }), void 0)] }), void 0)] }), void 0));
};
/* harmony default export */ const components_Search = (Search);

// EXTERNAL MODULE: ./src/components/GroupedCards/index.tsx + 17 modules
var GroupedCards = __webpack_require__(2483);
;// CONCATENATED MODULE: ./src/hooks/useShopAnimation/index.ts

const useShopAnimation = (shopStateUpdate, showAnimation, delays = [800, 800]) => {
    const [animationClassName, setAnimationClassName] = (0,react.useState)('shop-group-hidden');
    const showFromTop = (setAnimationClassName, steps) => {
        new Promise((res) => {
            setTimeout(() => {
                setAnimationClassName('shop-group-transition-start');
                res(null);
            }, steps[0]);
        })
            .then(() => {
            setTimeout(() => {
                setAnimationClassName('shop-group-current');
                shopStateUpdate((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false })));
            }, steps[1]);
        });
    };
    const hideToBottom = (setAnimationClassName, steps) => {
        new Promise((res) => {
            setTimeout(() => {
                setAnimationClassName('shop-group-transition-end');
                res(null);
            }, steps[0]);
        })
            .then(() => {
            setTimeout(() => {
                setAnimationClassName('shop-group-hidden');
            }, steps[1]);
        });
    };
    (0,react.useEffect)(() => {
        switch (showAnimation) {
            case 'showFromTop':
                showFromTop(setAnimationClassName, delays);
                break;
            case 'hideToBottom':
                hideToBottom(setAnimationClassName, delays);
                break;
        }
    }, [showAnimation]);
    return animationClassName;
};
/* harmony default export */ const hooks_useShopAnimation = (useShopAnimation);

;// CONCATENATED MODULE: ./src/components/ShopGroup/index.tsx





const ShopGroup = ({ products, showAnimation, shopStateUpdate, actualCat, catId, }) => {
    const animationClassName = hooks_useShopAnimation(shopStateUpdate, showAnimation);
    return ((0,jsx_runtime.jsxs)("section", Object.assign({ className: `${shop_animation/* default.shop-group-transition-group */.Z["shop-group-transition-group"]} ${shop_animation/* default */.Z[animationClassName !== null && animationClassName !== void 0 ? animationClassName : 'shop-group-hidden']} ${shop_animation/* default */.Z[`cat-${catId}`]}` }, { children: [(0,jsx_runtime.jsx)(components_Search, { styling: "shadow-theme" }, void 0),
            (0,jsx_runtime.jsx)(GroupedCards/* default */.Z, { products: products, actualCat: actualCat, catId: catId }, void 0)] }), void 0));
};
/* harmony default export */ const components_ShopGroup = (ShopGroup);


/***/ }),

/***/ 5694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_Search
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/shop-animation.scss
var shop_animation = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/components/Search/styles/index.scss
var styles = __webpack_require__(6911);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/hooks/useThemeSwitcher/index.ts + 1 modules
var useThemeSwitcher = __webpack_require__(7276);
// EXTERNAL MODULE: ./mocks/fakeData/shop.ts
var shop = __webpack_require__(9410);
// EXTERNAL MODULE: ./mocks/APIService.ts + 3 modules
var APIService = __webpack_require__(1915);
;// CONCATENATED MODULE: ./src/hooks/useSearchInProducts/index.ts



const useSearchInProducts = (updateState) => {
    const { search } = new URL(`${window.location}`);
    const searchParam = search.split('=')[0].slice(1);
    const searchValue = search.split('=')[1];
    (0,react.useEffect)(() => {
        if (searchParam === 'id' && searchValue) {
            updateState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: true })));
            APIService/* default.getProductByID */.Z.getProductByID(searchValue)
                .then((response) => {
                updateState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, searchResult: [response] })));
            });
        }
        if (searchParam === 'keyword' && searchValue) {
            updateState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: true })));
            APIService/* default.searchByKeywordInFields */.Z.searchByKeywordInFields(searchValue, ['title'])
                .then((response) => {
                updateState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, searchResult: [...response] })));
            });
        }
    }, [searchParam, searchValue]);
    return shop/* fakeProductsFlowers.items */.id.items;
};
/* harmony default export */ const hooks_useSearchInProducts = (useSearchInProducts);

// EXTERNAL MODULE: ./src/components/ShopGroup/index.tsx + 7 modules
var ShopGroup = __webpack_require__(7093);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/pages/Search/index.tsx









const Search = () => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const [state, updateState] = (0,react.useState)({
        loading: null, error: false, init: true, searchResult: []
    });
    hooks_useSearchInProducts(updateState);
    (0,useThemeSwitcher/* default */.Z)(`1`);
    return ((0,jsx_runtime.jsx)("div", Object.assign({ className: shop_animation/* default.shop-group */.Z["shop-group"] }, { children: (0,jsx_runtime.jsxs)("section", Object.assign({ className: shop_animation/* default.shop-group-transition */.Z["shop-group-transition"] }, { children: [(state.searchResult.length && state.loading === false) ? (0,jsx_runtime.jsx)(ShopGroup/* default */.Z, { catId: 0, products: state.searchResult, showAnimation: 'showFromTop', shopStateUpdate: () => { }, actualCat: -1 }, void 0) : '',
                (!state.searchResult.length && state.loading === false) ? (0,jsx_runtime.jsxs)("div", Object.assign({ className: styles/* default.no-content */.Z["no-content"] }, { children: [(0,jsx_runtime.jsx)("p", Object.assign({ "data-test": `message-not-found` }, { children: __translate('No results') }), void 0), (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, Object.assign({ className: styles/* default.no-content__go-back */.Z["no-content__go-back"], to: '/shop' }, { children: __translate(`Back to Shop`) }), void 0)] }), void 0) : ''] }), void 0) }), void 0));
};
/* harmony default export */ const pages_Search = (Search);


/***/ })

}]);