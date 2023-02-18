(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[695],{

/***/ 6477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"shop-group-transition":"yf71pJAHIyN3IfAopk8ywQ==","shop-group-transition-group":"Os1A9iaQJyhgbAd+qbkYGg==","shop-group-hidden":"Ps6gYSODV0aU-6-HzK5Xqw==","product-card":"TapiK8YSScGvhkhZW36QNA==","search":"-1sClO0PJAfIiPO86FMZDw==","shop-group-current":"rQcA3ZtMLmhxiYCsp3ylXw==","shop-group-transition-start":"fRWWlDHrGrXzYWR3CZUImw==","shop-group-transition-end":"Y6eaeAY+XTwYP8LrGjkc3A=="});

/***/ }),

/***/ 2483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => /* binding */ components_GroupedCards
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/shop-animation.scss
var shop_animation = __webpack_require__(6477);
;// CONCATENATED MODULE: ./src/components/ProductCard/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"product-card":"IM0eVN4FaSuyDbJXSD3AGg==","product-card__buttons":"A-i1NBkJNsraIU7R3a5xOg==","product-card__buttons_item":"zGfecg1mLI+4d86MvWxYdw==","add-to-fav":"NfIXvOqsVYOoIb4qIPiF0Q==","state-in-favorites":"hS35X5z0lqC0xmTVL5sGrw==","add-to-cart":"Y+baN8d1PnTC8cxAZxPxtw==","state-in-cart":"E-895MELjIM2hXs2F7uBXw==","product-card__image":"_7BNsKkAnUH0g6S-Iq+jcag==","product-card__image-img":"ztlQ0Y2lmpkt0WQ9X16rfA==","loaded":"vksdfWVzky3w7yq-4XqMGQ==","product-card__info":"_9T7YbEjovQ0tMYFnBcKb7Q==","product-card__info-title":"frKjDdXH9ZZ3Fm4BLTVj+g==","product-card__info-params":"p1r5wpXB0OMImmTmLcEBuQ==","product-card__info-params-name":"NAxxkKBvAfklKT-7GFARnw==","product-card__info-price":"WYdla4XYitF-fMCNKSezPg==","product-card__params-name":"Fr-dcWUxrSjUUoIK+LiqAw==","product-card__additional-info":"pBhGsMJ8T66lNgF4iRBIvQ==","in-cart-option":"_5gAh+0Cj5v8fEODPyAOk4w==","in-cart-option__minus":"_0aztx49eRAwKizQx5HQnmw==","in-cart-option__now":"XLpnrm3Ds4j45CLvqPgqmA==","in-cart-option__plus":"MzPpkC7+1e3EHEAV6TQxYw=="});
;// CONCATENATED MODULE: ./src/components/AddToFavoritesButton/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const AddToFavoritesButton_styles = ({"product-card__buttons":"_6GZKiouJxjj65vJT+c4mzg==","product-card__buttons-item":"+7IpBkxKUav20K371eXobA==","add-to-fav":"kArOGUYZ9zvaYJGbgpmtoA==","state-in-favorites":"-2O01v+MwKBeaqQfDx6vpQ==","add-to-cart":"xhBaPdRm6K5Ybyl9cvSOaA==","state-in-cart":"j2QIhh-tP0gXStiVo6PycQ=="});
// EXTERNAL MODULE: ./src/actions/favorites.ts
var favorites = __webpack_require__(8576);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(8048);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/favorites/Favorites.ts
var Favorites = __webpack_require__(9660);
;// CONCATENATED MODULE: ./src/components/AddToFavoritesButton/index.tsx






const AddToFavoritesButton = ({ id }) => {
    const dispatch = (0,es/* useDispatch */.I0)();
    const [state, setState] = (0,react.useState)({ inFavorites: null, loading: false });
    (0,react.useEffect)(() => {
        if (Favorites/* default.isProductInFavorites */.Z.isProductInFavorites({ data: parseFloat(`${id}`) })) {
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, inFavorites: true })));
        }
        else {
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, inFavorites: false })));
        }
    }, [state.inFavorites, state.loading]);
    const onClickHandler = (e) => {
        e.preventDefault();
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: true })));
        if (state.inFavorites) {
            dispatch(favorites/* favoritesDeleteAction.request */.pg.request({ params: { data: id } }));
        }
        else {
            dispatch(favorites/* favoritesAddAction.request */.b6.request({ params: { data: id } }));
        }
        dispatch(favorites/* favoritesInfoAction.request */.jA.request());
    };
    if (state.inFavorites === null)
        return null;
    return ((0,jsx_runtime.jsx)("a", Object.assign({ href: "", onClick: onClickHandler, className: `${AddToFavoritesButton_styles["product-card__buttons-item"]} ${AddToFavoritesButton_styles["add-to-fav"]} ${(state.inFavorites) ? AddToFavoritesButton_styles["state-in-favorites"] : ''}` }, { children: (0,jsx_runtime.jsx)("svg", Object.assign({ "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "heart", className: "svg-inline--fa fa-heart fa-w-16", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, { children: (0,jsx_runtime.jsx)("path", { fill: "currentColor", d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" }, void 0) }), void 0) }), void 0));
};
/* harmony default export */ const components_AddToFavoritesButton = (AddToFavoritesButton);

;// CONCATENATED MODULE: ./src/components/AddToCartButton/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const AddToCartButton_styles = ({"product-card__buttons":"E8sjnMq4p7UBWnzlmRhA-A==","product-card__buttons-item":"NGhVS9vbyWB1PYdv5ZE2fg==","add-to-fav":"H+o7K82Xma68DPEY7OE70g==","state-in-favorites":"uhnI8myXdx7lWtn+GaCkUw==","add-to-cart":"CytnTjZdjSVVm3Fk401vvQ==","state-in-cart":"kvPBWx3J2lxuRQg5QDzYjg=="});
// EXTERNAL MODULE: ./src/actions/cart.ts
var cart = __webpack_require__(7319);
// EXTERNAL MODULE: ./src/cart/Cart.ts
var Cart = __webpack_require__(4857);
;// CONCATENATED MODULE: ./src/components/AddToCartButton/index.tsx






const AddToCartButton = ({ id }) => {
    const dispatch = (0,es/* useDispatch */.I0)();
    const [state, setState] = (0,react.useState)({ inCart: null, loading: false });
    (0,react.useEffect)(() => {
        if (Cart/* default.isProductInCart */.Z.isProductInCart({ data: parseFloat(`${id}`) })) {
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, inCart: true })));
        }
        else {
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: false, inCart: false })));
        }
    }, [state.inCart, state.loading]);
    const onClickHandler = (e) => {
        e.preventDefault();
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: true })));
        if (state.inCart) {
            dispatch(cart/* cartDeleteAction.request */.r6.request({ params: { data: id } }));
        }
        else {
            dispatch(cart/* cartAddAction.request */.HA.request({ params: { data: id } }));
        }
        dispatch(cart/* cartInfoAction.request */.sQ.request());
    };
    if (state.inCart === null)
        return null;
    return ((0,jsx_runtime.jsx)("a", Object.assign({ href: "", onClick: onClickHandler, className: `${AddToCartButton_styles["product-card__buttons-item"]} ${AddToCartButton_styles["add-to-cart"]} ${(state.inCart) ? AddToCartButton_styles["state-in-cart"] : ''}` }, { children: (0,jsx_runtime.jsx)("svg", Object.assign({ "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "shopping-categories", className: "svg-inline--fa fa-shopping-cart fa-w-18", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, { children: (0,jsx_runtime.jsx)("path", { fill: "currentColor", d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" }, void 0) }), void 0) }), void 0));
};
/* harmony default export */ const components_AddToCartButton = (AddToCartButton);

;// CONCATENATED MODULE: ./src/components/Preloader/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Preloader_styles = ({"preloader":"uIHazxE+3Khgp1VEsOnABA==","main":"IN-LpAsLjUTGR5NOfb+aYw=="});
// EXTERNAL MODULE: ./src/components/Preloader/assets/preloader-for-page.gif
var preloader_for_page = __webpack_require__(5790);
;// CONCATENATED MODULE: ./src/components/Preloader/index.tsx



const Preloader = ({ type }) => ((0,jsx_runtime.jsx)("div", Object.assign({ "data-attachment": 'preloader', className: `${Preloader_styles.preloader} ${type ? Preloader_styles[type] : ''}` }, { children: (0,jsx_runtime.jsx)("img", { src: preloader_for_page }, void 0) }), void 0));
/* harmony default export */ const components_Preloader = (Preloader);

;// CONCATENATED MODULE: ./src/components/ProductCard/components/ProductCardImage/index.tsx




const LoadableProductCardImage = ({ src, title }) => {
    //TODO: This function only for testing and demonstration. !!!Must be deleted!!!
    const loadDemo = () => { setTimeout(() => { setIsLoaded(true); }, Math.random() * (900 - 300) + 300); };
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ className: `${styles["product-card__image"]} ${(isLoaded) ? styles.loaded : ''}` }, { children: [(0,jsx_runtime.jsx)("img", { className: styles["product-card__image-img"], src: src, alt: title, title: title, onLoad: loadDemo }, void 0),
            (!isLoaded) && (0,jsx_runtime.jsx)(components_Preloader, {}, void 0)] }), void 0));
};
/* harmony default export */ const ProductCardImage = (LoadableProductCardImage);

// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/components/ProductCard/index.tsx







const ProductCard = ({ product }) => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const { title, image, data, price, currency, stock, id } = product;
    const params = data.map((item) => {
        const param = Object.keys(item)[0];
        return ((0,jsx_runtime.jsxs)("span", { children: [(0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["product-card__info-params-name"] }, { children: [__translate(param), ":"] }), void 0),
                (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__info-params-value"] }, { children: item[param] }), void 0)] }, param));
    });
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ "data-test": `product-card`, className: `${styles["product-card"]} ${shop_animation/* default.product-card */.Z["product-card"]}` }, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["product-card__buttons"] }, { children: [(0,jsx_runtime.jsx)(components_AddToFavoritesButton, { id: id }, void 0),
                    (0,jsx_runtime.jsx)(components_AddToCartButton, { id: id }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(ProductCardImage, { src: image, title: title }, void 0),
            (0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["product-card__info"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__info-title"] }, { children: __translate(title) }), void 0),
                    (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__info-params"] }, { children: params }), void 0),
                    (0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["product-card__info-price"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__info-price-currency"] }, { children: currency }), void 0),
                            (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__info-price-value"] }, { children: price }), void 0)] }), void 0)] }), void 0),
            (0,jsx_runtime.jsx)("div", Object.assign({ className: styles["product-card__additional-info"] }, { children: (0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["product-card__params"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__params-name"] }, { children: __translate('In Stock') }), void 0),
                        (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["product-card__params-value"] }, { children: stock }), void 0)] }), void 0) }), void 0)] }), void 0));
};
/* harmony default export */ const components_ProductCard = (ProductCard);

// EXTERNAL MODULE: ./mocks/fakeData/shop.ts
var shop = __webpack_require__(9410);
;// CONCATENATED MODULE: ./src/utils/getCatProductsSlice.ts

const getCatProductsSlice = (cat, sliceFrom = 0, sliceSize = 7) => (0,shop/* getProductsByCategoryID */.Gl)(cat, 300)
    .then((prods) => {
    if (!(prods === null || prods === void 0 ? void 0 : prods.items))
        return;
    // eslint-disable-next-line consistent-return
    if (sliceFrom >= prods.items.length)
        return { done: true, items: [] };
    let newProds = [...prods.items];
    newProds = newProds.slice(sliceFrom, sliceSize);
    // eslint-disable-next-line consistent-return
    return { items: newProds, done: false };
});
/* harmony default export */ const utils_getCatProductsSlice = (getCatProductsSlice);

;// CONCATENATED MODULE: ./src/utils/addPreloadingData.ts
const addPreloadingData = (currentData, amount) => {
    const newArr = [...currentData];
    for (let i = 0; i < amount; i++) {
        newArr.push({ id: `loading-${i}`, sku: 0, title: '', image: '', price: 0, currency: '$', stock: 0, data: [] });
    }
    return newArr;
};
/* harmony default export */ const utils_addPreloadingData = (addPreloadingData);

;// CONCATENATED MODULE: ./src/hooks/useScrollLoadProduct/useScrollLoadProduct.ts



const useScrollLoadProduct = (actualCat, currentIndex = 4, sliceSize = 2) => {
    const [state, setState] = (0,react.useState)({
        actualCat, currentIndex, prods: [], loading: false, error: false, success: false, done: false,
    });
    const isNeedStartLoadingOnScroll = (triggeredHeight, totalHeight) => ((triggeredHeight && totalHeight) && triggeredHeight < totalHeight);
    const screenElm = document.querySelector('#content-group');
    let triggerElm = null;
    const getProdsOnScroll = (containElm) => {
        var _a;
        if (isNeedStartLoadingOnScroll((_a = triggerElm === null || triggerElm === void 0 ? void 0 : triggerElm.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top, containElm === null || containElm === void 0 ? void 0 : containElm.offsetHeight)) {
            if (state.loading)
                return;
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { loading: true })));
        }
    };
    (0,react.useEffect)(() => {
        const addr = new URL(window.location.href);
        const footer = document.querySelector('#footer');
        if (!footer)
            return;
        if (addr.pathname === '/shop' || addr.pathname === '/') {
            if (state.done) {
                footer.style.display = 'flex';
            }
            else {
                footer.style.display = 'none';
            }
        }
        else {
            footer.style.display = 'flex';
        }
        return () => {
            footer.style.display = 'flex';
        };
    }, [state.done]);
    (0,react.useEffect)(() => {
        if (!state.loading || state.done)
            return;
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { currentIndex: prevState.currentIndex + sliceSize, prods: [...utils_addPreloadingData(prevState.prods, sliceSize)] })));
        utils_getCatProductsSlice(actualCat, state.currentIndex, state.currentIndex + sliceSize)
            .then((prods) => {
            var _a;
            if (!prods)
                return;
            if (prods.done || ((_a = prods === null || prods === void 0 ? void 0 : prods.items) === null || _a === void 0 ? void 0 : _a.length) < 1) {
                setState((prevState) => (Object.assign(Object.assign({}, prevState), { prods: [...state.prods.filter(({ id }) => (typeof id !== 'string' || !(id === null || id === void 0 ? void 0 : id.startsWith('loading'))))], done: true, success: true, loading: false })));
            }
            else {
                setState((prevState) => (Object.assign(Object.assign({}, prevState), { prods: [...state.prods, ...prods.items], success: true, loading: false })));
            }
        });
    }, [state.loading]);
    (0,react.useEffect)(() => {
        triggerElm = document.querySelector(`[data-cat="${actualCat}"]`);
        const scrollHandler = () => { getProdsOnScroll(screenElm); };
        screenElm === null || screenElm === void 0 ? void 0 : screenElm.addEventListener('scroll', scrollHandler);
        return () => screenElm === null || screenElm === void 0 ? void 0 : screenElm.removeEventListener('scroll', scrollHandler);
    }, []);
    return [state.prods, state.done];
};
/* harmony default export */ const useScrollLoadProduct_useScrollLoadProduct = (useScrollLoadProduct);

;// CONCATENATED MODULE: ./src/components/ProductCartLoading/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ProductCartLoading_styles = ({"product-card":"Y2uvOrUCnIRbW2OzXxe-rg==","loadingCard":"uCRYzFYfYK2+G1w1BW7OCw==","product-card__buttons":"_5YKqLPBNg+O77P0B+mCmWw==","product-card__buttons_item":"eHXAvZ+aW1H6eIGslhxhXg==","product-card__image":"DCYxqzE2m-01UhhKjYZ14g=="});
;// CONCATENATED MODULE: ./src/components/ProductCartLoading/index.tsx


const ProductCardLoading = () => ((0,jsx_runtime.jsxs)("div", Object.assign({ className: ProductCartLoading_styles["product-card"] }, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ className: ProductCartLoading_styles["product-card__buttons"] }, { children: [(0,jsx_runtime.jsx)("span", { className: ProductCartLoading_styles["product-card__buttons_item"] }, void 0),
                (0,jsx_runtime.jsx)("span", { className: ProductCartLoading_styles["product-card__buttons_item"] }, void 0)] }), void 0),
        (0,jsx_runtime.jsx)("div", { className: ProductCartLoading_styles["product-card__image"] }, void 0),
        (0,jsx_runtime.jsx)("div", { className: ProductCartLoading_styles["product-card__info"] }, void 0),
        (0,jsx_runtime.jsx)("div", { className: ProductCartLoading_styles["product-card__additional-info"] }, void 0)] }), void 0));
/* harmony default export */ const ProductCartLoading = (ProductCardLoading);

;// CONCATENATED MODULE: ./src/components/ProductItemSlice/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ProductItemSlice_styles = ({"noProductsToDisplay":"OjmgmfDTLJ92wsi+cw4Xig=="});
;// CONCATENATED MODULE: ./src/components/ProductItemSlice/index.tsx






const ProductItemSlice = ({ actualCat }) => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const [products, done] = useScrollLoadProduct_useScrollLoadProduct(actualCat);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [products.map((item) => ((typeof item.id === 'string'
                && actualCat !== -1
                && item.id.startsWith('loading')) ? (0,jsx_runtime.jsx)(ProductCartLoading, {}, item.id) : (0,jsx_runtime.jsx)(components_ProductCard, { product: item }, item.id))),
            // eslint-disable-next-line max-len
            done ? (0,jsx_runtime.jsx)("span", Object.assign({ className: ProductItemSlice_styles.noProductsToDisplay }, { children: __translate('These are all products') }), void 0) : ((0,jsx_runtime.jsx)("span", { style: {
                    width: '1px', height: '1px', display: 'block', marginTop: '-2rem',
                }, "data-cat": actualCat }, void 0))] }, void 0));
};
/* harmony default export */ const components_ProductItemSlice = (ProductItemSlice);

;// CONCATENATED MODULE: ./src/components/GroupedCards/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const GroupedCards_styles = ({"shop-grouped":"_9T7SMCU8jQeopfVf6C5m6w==","shop-grouped__collection":"t37IQb24aRQOHHIThmXHmA=="});
// EXTERNAL MODULE: ./src/styles/index.scss
var src_styles = __webpack_require__(2714);
;// CONCATENATED MODULE: ./src/components/GroupedCards/index.tsx





const GroupedCards = ({ products, actualCat, catId }) => {
    const productsCollection = products.map((item, num) => (0,jsx_runtime.jsx)(components_ProductCard, { product: item }, `${item.id}-${num}`));
    return ((0,jsx_runtime.jsx)("section", Object.assign({ className: GroupedCards_styles["shop-grouped"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: src_styles/* default.container */.Z.container }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ "data-test": `products-${catId}`, className: GroupedCards_styles["shop-grouped__collection"] }, { children: [productsCollection, (catId === actualCat) ? (0,jsx_runtime.jsx)(components_ProductItemSlice, { actualCat: actualCat }, void 0) : ''] }), void 0) }), void 0) }), void 0));
};
/* harmony default export */ const components_GroupedCards = (GroupedCards);


/***/ }),

/***/ 7276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => /* binding */ hooks_useThemeSwitcher
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/utils/changeCssTheme.ts
const { round } = Math;
const checkAndUpdateColorHelper = (gradient, result, step) => {
    for (let i = 0; i < gradient.length; i++) {
        if (round(result[i]) === gradient[i])
            continue;
        if (round(result[i]) < gradient[i]) {
            result[i] = ((result[i] + step) < gradient[i]) ? result[i] += step : gradient[i];
        }
        if (round(result[i]) > gradient[i]) {
            result[i] = ((result[i] - step) > gradient[i]) ? result[i] -= step : gradient[i];
        }
    }
    return result;
};
const changeCssTheme = (lastTheme, newTheme, rootElement, delay, step = 2.3) => {
    if (lastTheme.length !== newTheme.length)
        throw new Error('lastTheme.length !== newTheme.length');
    if (!rootElement)
        throw new Error('no root element for themes');
    const resultGradient = lastTheme;
    const smoothThemeUpdate = () => {
        let complete = true;
        const [gradient1, gradient2] = newTheme;
        resultGradient[0] = checkAndUpdateColorHelper(gradient1, resultGradient[0], step);
        resultGradient[1] = checkAndUpdateColorHelper(gradient2, resultGradient[1], step);
        for (let i = 0; i < resultGradient.length; i++) {
            for (let j = 0; j < resultGradient[i].length; j++)
                if (round(resultGradient[i][j]) !== round(newTheme[i][j]))
                    complete = false;
        }
        const colorPrimary = `rgb(${[...resultGradient[0].map((item) => round(item))]})`;
        const colorSecondary = `rgb(${[...resultGradient[1].map((item) => round(item))]})`;
        if (!complete)
            window.requestAnimationFrame(smoothThemeUpdate);
        rootElement.setAttribute('style', ` --background-theme: linear-gradient(180deg, ${colorPrimary} 20%, ${colorSecondary} 80%);
        --mobile-wrapper-menu-theme:linear-gradient(135deg, ${colorPrimary}, ${colorSecondary});
        --color-theme: ${colorPrimary};
        `);
    };
    setTimeout(smoothThemeUpdate, delay);
};
/* harmony default export */ const utils_changeCssTheme = (changeCssTheme);

// EXTERNAL MODULE: ./src/components/App.tsx + 29 modules
var App = __webpack_require__(119);
// EXTERNAL MODULE: ./mocks/fakeData/themes.ts
var themes = __webpack_require__(6069);
;// CONCATENATED MODULE: ./src/hooks/useThemeSwitcher/index.ts




const useThemeSwitcher = (id, delay = 700) => {
    const { themeID, setThemeID, toggleMenu, menuOpened, } = (0,react.useContext)(App/* LayoutContext */.V);
    const [themeRGB, setThemeRGB] = (0,react.useState)(null);
    (0,react.useEffect)(() => {
        if (menuOpened)
            toggleMenu();
        if (themeID === null) {
            (0,themes/* getThemeByID */.P)(id)
                .then((themeColorsArray) => {
                if (themeColorsArray && Array.isArray(themeColorsArray)) {
                    const oldThemeRGB = themeColorsArray;
                    setThemeID(`${id}`);
                    setThemeRGB(() => themeColorsArray);
                    utils_changeCssTheme(oldThemeRGB, themeColorsArray, document.querySelector('main'), delay);
                }
            })
                .catch((e) => {
                throw new Error(`theme error: ${e}`);
            });
        }
        if (themeRGB === null) {
            (0,themes/* getThemeByID */.P)(themeID !== null && themeID !== void 0 ? themeID : id)
                .then((oldThemeRGB) => {
                (0,themes/* getThemeByID */.P)(id)
                    .then((themeColorsArray) => {
                    if ((themeColorsArray && Array.isArray(themeColorsArray))
                        && (oldThemeRGB && Array.isArray(oldThemeRGB))) {
                        setThemeID(`${id}`);
                        setThemeRGB(() => themeColorsArray);
                        utils_changeCssTheme(oldThemeRGB, themeColorsArray, document.querySelector('main'), delay);
                    }
                });
            })
                .catch((e) => {
                throw new Error(`theme error: ${e}`);
            });
            return;
        }
        (0,themes/* getThemeByID */.P)(id)
            .then((themeColorsArray) => {
            if (themeColorsArray && Array.isArray(themeColorsArray)) {
                setThemeID(`${id}`);
                setThemeRGB(() => themeColorsArray);
                utils_changeCssTheme(themeRGB, themeColorsArray, document.querySelector('main'), delay);
            }
        })
            .catch((e) => {
            throw new Error(`theme error: ${e}`);
        });
    }, [id]);
};
/* harmony default export */ const hooks_useThemeSwitcher = (useThemeSwitcher);


/***/ }),

/***/ 5790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/resources/preloader-for-page.7f686c03a467bef7dac6.gif";

/***/ })

}]);