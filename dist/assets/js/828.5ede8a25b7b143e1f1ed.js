(self["webpackChunkmobile_minishop"] = self["webpackChunkmobile_minishop"] || []).push([[828],{

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

/***/ 1828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_Settings
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/Switcher/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({"switch-control":"w2ON31BwtNmLCI7C30W--w==","slider":"zPhoxF51aHXX+VC3dk7I1w==","round":"zrNAfMKzmVCSwLvxt0WkGA=="});
;// CONCATENATED MODULE: ./src/components/Switcher/index.tsx


const Switcher = ({ value, onToggle }) => {
    return ((0,jsx_runtime.jsxs)("label", Object.assign({ "data-test": 'switcher', tabIndex: 1, className: `${styles["switch-control"]} ${styles["settings-switch"]}` }, { children: [(0,jsx_runtime.jsx)("input", { onChange: () => { onToggle(value); }, type: "checkbox", checked: value }, void 0),
            (0,jsx_runtime.jsx)("span", { className: `${styles.slider} ${styles.round}` }, void 0)] }), void 0));
};
/* harmony default export */ const components_Switcher = (Switcher);

;// CONCATENATED MODULE: ./src/components/SettingsControl/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SettingsControl_styles = ({"settings-control":"rhfTknG6BP-Y+6cMyMxKzA==","settings-control__input":"s1UpzT1YpI0MSgxx6s--4A==","settings-control__caption":"Wyemyjj6P6Y4Q6ub17MvqQ==","settings-control__caption__text":"-bcTZZxqeYKbMRFrDK2MTA=="});
;// CONCATENATED MODULE: ./src/components/SettingsControl/index.tsx


const SettingsControl = ({ children, label }) => ((0,jsx_runtime.jsxs)("div", Object.assign({ className: SettingsControl_styles["settings-control"] }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: SettingsControl_styles["settings-control__input"] }, { children: children }), void 0),
        (0,jsx_runtime.jsx)("div", Object.assign({ className: SettingsControl_styles["settings-control__caption"] }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ className: SettingsControl_styles["settings-control__caption_text"] }, { children: label }), void 0) }), void 0)] }), void 0));
/* harmony default export */ const components_SettingsControl = (SettingsControl);

;// CONCATENATED MODULE: ./src/components/SelectSettings/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const SelectSettings_styles = ({"select-control":"_3sqYKhcJ1Z28KYwwSJpMOA==","settings-select":"DZcVMIj-qurVlNcHMA9jSw=="});
;// CONCATENATED MODULE: ./src/components/SelectSettings/index.tsx


const SelectSettings = ({ value, options, onSelect }) => {
    const onChangeHandler = (e) => [
        onSelect(e.target.value)
    ];
    return ((0,jsx_runtime.jsx)("select", Object.assign({ onChange: onChangeHandler, value: value, tabIndex: 1, className: `${SelectSettings_styles["select-control"]} ${SelectSettings_styles["settings-select"]}`, name: "", id: "language" }, { children: options.map(({ value: val, label }) => (0,jsx_runtime.jsx)("option", Object.assign({ value: val }, { children: label }), val)) }), void 0));
};
/* harmony default export */ const components_SelectSettings = (SelectSettings);

;// CONCATENATED MODULE: ./src/pages/Settings/styles/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Settings_styles = ({"settings-group__title-block":"ldA4X80QhwP9Bztx8hrJzQ==","settings-group__title-block_title":"LTMmYm5HSkXN-eDIo4W+mA==","settings-group__settings-collection":"b72UD61Qsk+0LsINMBitHQ=="});
// EXTERNAL MODULE: ./src/styles/_common.scss
var _common = __webpack_require__(6044);
// EXTERNAL MODULE: ./src/hooks/useThemeSwitcher/index.ts + 1 modules
var useThemeSwitcher = __webpack_require__(7276);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(8048);
// EXTERNAL MODULE: ./src/selectors/settings.ts
var selectors_settings = __webpack_require__(5204);
// EXTERNAL MODULE: ./src/actions/settings.ts
var actions_settings = __webpack_require__(4005);
// EXTERNAL MODULE: ./src/hooks/useMultiLanguage/index.ts + 3 modules
var useMultiLanguage = __webpack_require__(1482);
;// CONCATENATED MODULE: ./src/pages/Settings/index.tsx

//@ts-nocheck










const Settings = () => {
    var _a, _b;
    (0,useThemeSwitcher/* default */.Z)('settings-theme');
    const settingsWithDefaultValues = {
        language: {
            defaultValue: 'en',
            label: 'Language',
            options: [{ value: 'en', label: '🇬🇧' }, { value: 'pl', label: '🇵🇱' }, { value: 'de', label: '🇩🇪' }, { value: 'ru', label: '🇷🇺' }]
        },
        pushNotification: {
            defaultValue: true,
            label: 'Push notifications',
            options: [true, false]
        },
        testOption1: {
            defaultValue: true,
            label: 'My super option 1',
            options: [true, false]
        },
        testOption2: {
            defaultValue: true,
            label: 'My super option 2',
            options: [true, false]
        },
        testOption3: {
            defaultValue: true,
            label: 'My super option 3',
            options: [true, false]
        }
    };
    const { data: settings } = (0,es/* useSelector */.v9)(selectors_settings/* settingsStateSelector */.h);
    const dispatch = (0,es/* useDispatch */.I0)();
    const __translate = (0,useMultiLanguage/* default */.Z)();
    const selectHandler = (key, value) => {
        dispatch(actions_settings/* settingsUpdateAction.request */.T.request({ params: { data: { [key]: value } } }));
        dispatch(actions_settings/* settingsInfoAction.request */.y.request());
    };
    const switcherHandler = (key, value) => {
        dispatch(actions_settings/* settingsUpdateAction.request */.T.request({ params: { data: { [key]: !value } } }));
        dispatch(actions_settings/* settingsInfoAction.request */.y.request());
    };
    let controls = [];
    for (const key in settingsWithDefaultValues) {
        const { defaultValue, label, options } = settingsWithDefaultValues[key];
        if (options.length > 2) {
            controls = [...controls, (0,jsx_runtime.jsx)(components_SettingsControl, Object.assign({ label: __translate(label) }, { children: (0,jsx_runtime.jsx)(components_SelectSettings, { value: (_a = settings[key]) !== null && _a !== void 0 ? _a : defaultValue, options: options, onSelect: (v) => { selectHandler(key, v); } }, void 0) }), key)];
        }
        else {
            controls = [...controls, (0,jsx_runtime.jsx)(components_SettingsControl, Object.assign({ label: __translate(label) }, { children: (0,jsx_runtime.jsx)(components_Switcher, { value: (_b = settings[key]) !== null && _b !== void 0 ? _b : defaultValue, options: options, onToggle: (v) => { switcherHandler(key, v); } }, void 0) }), key)];
        }
    }
    return ((0,jsx_runtime.jsx)("section", Object.assign({ className: Settings_styles["settings-group"] }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: _common/* default.container */.Z.container }, { children: (0,jsx_runtime.jsxs)("div", Object.assign({ "data-test": 'setting-section', className: Settings_styles["settings-group__group"] }, { children: [(0,jsx_runtime.jsx)("section", Object.assign({ className: Settings_styles["settings-group__title-block"] }, { children: (0,jsx_runtime.jsx)("h3", Object.assign({ "data-test": 'setting-section-title', className: Settings_styles["settings-group__title-block_title"] }, { children: __translate('App settings') }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)("section", Object.assign({ className: Settings_styles["settings-group__settings-collection"] }, { children: controls }), void 0)] }), void 0) }), void 0) }), void 0));
};
/* harmony default export */ const pages_Settings = (Settings);


/***/ })

}]);