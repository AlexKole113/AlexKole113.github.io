(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[471],{

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

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_Contact
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/ContactItem/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"contact-item":"EWVgtZuwukRJaGKWJe3FtQ==","contact-item__label":"Sz0v11pmDueKovjUzWqP-A==","contact-item__value":"FzQ0Oil5SlbjnJ-KDWB1Wg=="});
;// CONCATENATED MODULE: ./src/components/ContactItem/index.tsx


const ContactItem = () => ((0,jsx_runtime.jsxs)("div", Object.assign({ className: styles["contact-item"] }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: styles["contact-item__label"] }, { children: "Email:" }), void 0),
        (0,jsx_runtime.jsx)("a", Object.assign({ href: "mailto:alexander.koledov@gmail.com", className: styles["contact-item__value"] }, { children: "email@email.com" }), void 0)] }), void 0));
/* harmony default export */ const components_ContactItem = (ContactItem);

;// CONCATENATED MODULE: ./src/pages/Contact/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Contact_styles = ({"contact-group__title-block":"_14AjIptkVuCF-JSWtt1qNg==","contact-group__title-block_title":"za-kYXW+hHqu27ZZ-QsWqQ==","contact-group__contacts-collection":"gJi6F3Kaki4LwkITYwx3kQ==","contact-group-map":"_2zNLKcAlRdD+PwK9IwVUaQ==","contact-group-map__iframe-wrapper":"_5dJKUlvImvNTqLdy-Czwgg=="});
// EXTERNAL MODULE: ./src/styles/_common.scss
var _common = __webpack_require__(6044);
// EXTERNAL MODULE: ./src/hooks/useThemeSwitcher/index.ts + 1 modules
var useThemeSwitcher = __webpack_require__(7276);
// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/pages/Contact/index.tsx

//@ts-nocheck





const Contact = () => {
    const __translate = (0,useMultiLanguage/* default */.Z)();
    (0,useThemeSwitcher/* default */.Z)('contact-theme');
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: Contact_styles["contact-group-map"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: Contact_styles["contact-group__group"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: Contact_styles["contact-group-map__iframe-wrapper"] }, { children: (0,jsx_runtime.jsx)("iframe", { width: "100%", height: "100%", frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", src: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gdansk%20Brzezno+(My%20Business%20Name)&t=&z=12&ie=UTF8&iwloc=B&output=embed" }, void 0) }), void 0) }), void 0) }), void 0),
            (0,jsx_runtime.jsx)("div", Object.assign({ className: Contact_styles["contact-group"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: _common/* default.container */.Z.container }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ className: Contact_styles["contact-group__group"] }, { children: [(0,jsx_runtime.jsx)("section", Object.assign({ className: Contact_styles["contact-group__title-block"] }, { children: (0,jsx_runtime.jsx)("h3", Object.assign({ className: Contact_styles["contact-group__title-block_title"] }, { children: __translate('Email and Phone') }), void 0) }), void 0),
                            (0,jsx_runtime.jsxs)("section", Object.assign({ className: Contact_styles["contact-group__contacts-collection"] }, { children: [(0,jsx_runtime.jsx)(components_ContactItem, {}, void 0),
                                    (0,jsx_runtime.jsx)(components_ContactItem, {}, void 0)] }), void 0)] }), void 0) }), void 0) }), void 0)] }, void 0));
};
/* harmony default export */ const pages_Contact = (Contact);


/***/ })

}]);