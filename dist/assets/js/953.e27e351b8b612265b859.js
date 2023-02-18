(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[953],{

/***/ 4953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ components_CartItem
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/CartItem/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"cart-item":"o28tzQ-xwZZPucYde4dW-A==","cart-item__img":"ou5vbhj3JXHMnWEnvd6-iA==","cart-item__price-amount-group":"h73idmWhgNgeVPXEPWLdEQ==","cart-item__title":"uzp5PvaOHnNvZ4gyQ2mNNA==","cart-item__title_title":"evQrKLMB63hExFLzr7jl4A==","cart-item__amount":"BLVisXQqA2uts7Pb1nk3KA==","cart-item__amount_minus":"atzhdSVus803l1v1C8DJBg==","cart-item__amount_plus":"JcWF5KQpQWoxDmBG-OcJPQ==","cart-item__amount_current":"xFQ04KAoevtBuwLY2BGbNg==","cart-item__total":"VkqJbjTrcoJfdXplBvEO6w==","cart-item__total_total":"R6897Lxjoi1-B0kF9nUzNQ==","cart-item__del":"rB0bmlLH1l9XZDPn5ripbA==","cart-item__del_del":"xJ8GCjuLh1qq-w3sfyLnAg==","cart-item__stock-alert":"+Qlu4mon44LSTwlEGLM2WQ=="});
// EXTERNAL MODULE: ./src/actions/cart.ts
var cart = __webpack_require__(7319);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(8048);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./mocks/APIService.ts + 3 modules
var APIService = __webpack_require__(1915);
;// CONCATENATED MODULE: ./src/hooks/useProductDataByID/index.ts


const useProductDataByID = (id) => {
    let [state, setProducts] = (0,react.useState)({ product: null, loading: false });
    (0,react.useEffect)(() => {
        if (id) {
            setProducts(() => ({ product: null, loading: true }));
            APIService/* default.getProductByID */.Z.getProductByID(`${id}`)
                .then((product) => {
                if (product && Object.keys(product).length) {
                    // @ts-ignore
                    setProducts((prevProducts) => ({ product, loading: false }));
                }
            });
        }
    }, [id]);
    return state;
};
/* harmony default export */ const hooks_useProductDataByID = (useProductDataByID);

// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/components/CartItem/index.tsx






const CartItem = ({ id, amount }) => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const { product } = hooks_useProductDataByID(id);
    const dispatch = (0,es/* useDispatch */.I0)();
    const addItemProduct = () => {
        dispatch(cart/* cartAddAction.request */.HA.request({ params: { data: id } }));
        dispatch(cart/* cartInfoAction.request */.sQ.request());
    };
    const removeItemProduct = () => {
        dispatch(cart/* cartDeleteAction.request */.r6.request({ params: { data: id } }));
        dispatch(cart/* cartInfoAction.request */.sQ.request());
    };
    const removeProduct = () => {
        dispatch(cart/* cartDeleteAllAction.request */.tQ.request({ params: { data: id } }));
        dispatch(cart/* cartInfoAction.request */.sQ.request());
    };
    if (amount < 1)
        return null;
    if (product === null)
        return null;
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ "data-test": 'cart-item', className: styles["cart-item"] }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: styles["cart-item__img"] }, { children: (0,jsx_runtime.jsx)("img", { className: styles["cart-item__img_img"], src: product.image, alt: product === null || product === void 0 ? void 0 : product.title }, void 0) }), void 0),
            (0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["cart-item__price-amount-group"] }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: styles["cart-item__title"] }, { children: (0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["cart-item__title_title"] }, { children: [" ", product === null || product === void 0 ? void 0 : product.title, amount > product.stock && (0,jsx_runtime.jsxs)("span", Object.assign({ className: styles["cart-item__stock-alert"] }, { children: [__translate('Available in stock now'), " : ", product.stock, " "] }), void 0)] }), void 0) }), void 0),
                    (0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["cart-item__amount"] }, { children: [(0,jsx_runtime.jsx)("a", Object.assign({ "data-test": 'minus-item', href: "#", onClick: (e) => { e.preventDefault(); removeItemProduct(); }, className: styles["cart-item__amount_minus"] }, { children: "-" }), void 0),
                            (0,jsx_runtime.jsx)("input", { "data-test": 'cart-item-amount', type: "text", className: styles["cart-item__amount_current"], value: amount, onChange: () => { } }, void 0),
                            (0,jsx_runtime.jsx)("a", Object.assign({ "data-test": 'plus-item', href: "#", onClick: (e) => { e.preventDefault(); addItemProduct(); }, className: styles["cart-item__amount_plus"] }, { children: "+" }), void 0)] }), void 0),
                    (0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["cart-item__total"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ "data-test": 'cart-item-price', className: styles["cart-item__total_total"] }, { children: ((product === null || product === void 0 ? void 0 : product.price) * amount).toFixed(2) }), void 0),
                            (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["cart-item__total_currency"] }, { children: product === null || product === void 0 ? void 0 : product.currency }), void 0)] }), void 0)] }), void 0),
            (0,jsx_runtime.jsx)("a", Object.assign({ "data-test": 'remove-product', href: "#", onClick: (e) => { e.preventDefault(); removeProduct(); }, className: styles["cart-item__del"] }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ className: styles["cart-item__del_del"] }, { children: (0,jsx_runtime.jsx)("svg", Object.assign({ "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "times", className: "svg-inline--fa fa-times fa-w-11", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 352 512" }, { children: (0,jsx_runtime.jsx)("path", { fill: "currentColor", d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0));
};
/* harmony default export */ const components_CartItem = (CartItem);


/***/ })

}]);