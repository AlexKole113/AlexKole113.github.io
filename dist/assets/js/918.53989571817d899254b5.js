(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[918],{

/***/ 3945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"app-btn":"_3JbCiQHCXG9ixJeJQMcDXq","app-btn__icon":"zZULfbrkgm0SIOF5bcy7A","app-btn__text":"WUGgIOabZ0c92R8VBQ15f","check-out-btn":"X9LC9UoeGm-3peiJ66vkc","cart-btn":"_2Vp55r58G8HeZiQoDhdJtf","text-color-black":"_2c2_pwS_tjEnc5MvgQxIUr","state-active":"_18Mt8KD8257tzd0NFedHOD","state-loading":"_2Nxe64LGMa9xEKVQZM9EPJ","shadow-pink":"_2Rowne9s61T8Veg10PKuDn","shadow-green":"_2Gs6zDhd7k0bHZ50RimlBK","shadow-blue":"Ve9Jvr1f-nDUXM_XPGoXO","shadow-violet":"eQ23MbM6MU8LTMxX9o3pw","shadow-theme":"_3JpmEl7Z_Sn4YH1LgbjAXk"});

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
/* harmony default export */ const styles = ({"input-with-btn":"_2hVWGzSMyok9Evi9ZjECbS","input-with-btn_input-btn":"_3Uzw-dTr8TL7XKYM7RF7l2","input-control__placeholder":"_1G-jyAkxke8IiR8TiPh--G","open-list":"qRg_FhIwKEHd4nCYsS1j0","profile-input":"_3Fn8pERsxjx7Z_abJyNXZn","cart-input":"_3cFR5LRA2JOUy6X3Sn6EmI","state-loading":"_29cEpihhOpC31Jocevy4u4","input-with-btn_input_btn":"_11MllaQcYRHpJsbDdgrSA2","with-placeholder-movement":"_3ZZqt61zo3SrbukPsqqL5H","search-input":"_3oe9FxvuNgtf_ByyfZRkY6","input-control":"_3qyYPQeVW8Zg_6rhLDJjx1","input-control__input":"_1_PsYcg2469r-ngYUE9EDn","field-has-content":"rNVHgH0WaHNE3qp6aSQql","input-control__state":"_12heKFUjxwHW7XTstiEUDY","success-check":"_3u1mBD6t-f1frGi4S5MjNy","state-invalid":"_3aeq9H6eQafMq-n6EtSEAn","shadow-pink":"_1jVoesjAfDvuQjcwD3kh3_","shadow-green":"_28yjtqOops6ITRTgGgYgCm","shadow-blue":"_1ZGbzGq1eIs3bmeovM8DEO","shadow-violet":"_3Oj1_OxlM0LVrfD9ZNDh7b","shadow-theme":"_3Au1Ylj9PPbVcBAJFlCH4P"});
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

/***/ 918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_Cart
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./src/components/InputWithButton/index.tsx + 1 modules
var InputWithButton = __webpack_require__(2708);
;// CONCATENATED MODULE: ./src/components/TotalInCart/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"total-in-cart":"_1aAF4lUK_1-JZJA1UhAyyt","total-in-cart__text":"_3Gboby8xmfh7ozXMZOjWV7","total-in-cart__value":"GkEVw-oOL0OWT-Kf6ZzEj","total-in-cart__value_currency":"_22y1GJXS44b90jUEUP1ZgV"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(8048);
// EXTERNAL MODULE: ./src/selectors/cart.ts
var selectors_cart = __webpack_require__(3083);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./mocks/APIService.ts + 3 modules
var APIService = __webpack_require__(1915);
;// CONCATENATED MODULE: ./src/hooks/useTotalPriceCart/index.ts




const useTotalPriceCart = () => {
    const { data: cart } = (0,es/* useSelector */.v9)(selectors_cart/* cartStateSelector */.d);
    const [totalCart, setTotalCart] = (0,react.useState)({
        cart: {
            total: 0,
            currency: null
        },
        loading: false
    });
    (0,react.useEffect)(() => {
        setTotalCart(() => ({
            cart: {
                total: 0,
                currency: null
            },
            loading: true
        }));
        let allRequests = [];
        for (const id in cart) {
            allRequests.push(APIService/* default.getProductByID */.Z.getProductByID(id)
                // @ts-ignore
                .then(({ price, currency }) => [price * cart[id], currency]));
        }
        Promise.all(allRequests)
            .then((allresponces) => {
            let total = 0;
            let currency = '';
            allresponces.forEach(([priceTotalItem, curencyItem], index) => {
                total += priceTotalItem;
                if (index === 0) {
                    currency = curencyItem;
                }
                else {
                    if (currency !== curencyItem) {
                        throw new Error('Products has different currency');
                    }
                }
            });
            // @ts-ignore
            setTotalCart(() => ({
                cart: {
                    total,
                    currency
                },
                loading: true
            }));
        });
    }, [cart]);
    return totalCart;
};
/* harmony default export */ const hooks_useTotalPriceCart = (useTotalPriceCart);

// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/components/TotalInCart/index.tsx




const TotalInCart = () => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const { cart } = hooks_useTotalPriceCart();
    return ((0,jsx_runtime.jsxs)("section", Object.assign({ className: styles["total-in-cart"] }, { children: [(0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["total-in-cart__text"] }, { children: [__translate('Total'), ":"] }), void 0),
            (0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["total-in-cart__value"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ "data-test": 'total-in-cart', className: styles["total-in-cart__value_number"] }, { children: cart.total > 0 && cart.total.toFixed(2) }), void 0),
                    (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["total-in-cart__value_currency"] }, { children: cart.currency }), void 0)] }), void 0)] }), void 0));
};
/* harmony default export */ const components_TotalInCart = (TotalInCart);

// EXTERNAL MODULE: ./src/components/Button/styles/index.scss
var Button_styles = __webpack_require__(3945);
// EXTERNAL MODULE: ./src/styles/_common.scss
var _common = __webpack_require__(6044);
// EXTERNAL MODULE: ./src/hooks/useThemeSwitcher/index.ts + 1 modules
var useThemeSwitcher = __webpack_require__(7276);
;// CONCATENATED MODULE: ./src/pages/Cart/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Cart_styles = ({"cart-group__title-block":"_30LCSmjXaPbCPNmpaPW6W3","cart-group__title-block_title":"_33n-cgKGg5aHf9U_vcQ-g1","cart-group__collection":"_1dT8MnBLxdQLym8bo9JW6s","cart-group":"_2R7MSLtoO_Pc2hyZz3Mx-P","app-btn":"_3tox71AfJctfo1EdQ904zA","cart-group__loader":"_2bIHbnyqMpTtUlY322Nc9c"});
;// CONCATENATED MODULE: ./src/components/InputWithButton/components/arrow.tsx

const Arrow = () => (0,jsx_runtime.jsx)("svg", Object.assign({ "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "arrow-right", className: "svg-inline--fa fa-arrow-right fa-w-14", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, { children: (0,jsx_runtime.jsx)("path", { fill: "currentColor", d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" }, void 0) }), void 0);
/* harmony default export */ const arrow = (Arrow);

;// CONCATENATED MODULE: ./src/pages/Cart/index.tsx













const CartItem = react.lazy(() => __webpack_require__.e(/* import() */ 953).then(__webpack_require__.bind(__webpack_require__, 4953)));
const Cart = () => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const { data: cart } = (0,es/* useSelector */.v9)(selectors_cart/* cartStateSelector */.d);
    (0,useThemeSwitcher/* default */.Z)('cart-theme');
    let itemsArray = [];
    for (const id in cart)
        itemsArray = [...itemsArray, [id, cart[id]]];
    return ((0,jsx_runtime.jsx)("section", Object.assign({ className: Cart_styles["cart-group"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: _common/* default.container */.Z.container }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ className: Cart_styles["cart-group__group"] }, { children: [(0,jsx_runtime.jsx)("section", Object.assign({ className: Cart_styles["cart-group__title-block"] }, { children: (0,jsx_runtime.jsx)("h3", Object.assign({ className: Cart_styles["cart-group__title-block_title"] }, { children: __translate('Your order') }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)("section", Object.assign({ className: Cart_styles["cart-group__collection"] }, { children: (0,jsx_runtime.jsx)(react.Suspense, Object.assign({ fallback: (0,jsx_runtime.jsx)("p", Object.assign({ className: Cart_styles["cart-group__loader"] }, { children: "Loading..." }), void 0) }, { children: itemsArray.map(([id, amount]) => (0,jsx_runtime.jsx)(CartItem, { id: id, amount: amount }, id)) }), void 0) }), void 0),
                    itemsArray.length ? (0,jsx_runtime.jsx)("section", Object.assign({ className: Cart_styles["promocode-group"] }, { children: (0,jsx_runtime.jsx)(InputWithButton/* default */.Z, Object.assign({ styling: "categories-input", onClickHandler: () => { console.log('btn pressed'); }, placeholder: 'Enter promo code' }, { children: (0,jsx_runtime.jsx)(arrow, {}, void 0) }), void 0) }), void 0) : null,
                    itemsArray.length ? (0,jsx_runtime.jsx)(components_TotalInCart, {}, void 0) : null,
                    itemsArray.length ? (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, Object.assign({ to: "/check-out", className: `${Button_styles/* default.app-btn */.Z["app-btn"]} ${Button_styles/* default.check-out-btn */.Z["check-out-btn"]}` }, { children: __translate('Next') }), void 0) : null] }), void 0) }), void 0) }), void 0));
};
/* harmony default export */ const pages_Cart = (Cart);


/***/ })

}]);