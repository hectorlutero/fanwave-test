"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function() {
        return {
            coins: []
        };
    },
    mounted () {
        this.loadCoins();
    },
    methods: {
        loadCoins: function() {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en').then((response)=>{
                this.coins = response.data;
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
});


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_2 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_3 = {
    class: "w-full text-sm text-left text-gray-500"
};
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
    class: "text-xs text-gray-700 uppercase bg-gray-100"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            scope: "col",
            class: "py-3 px-6"
        }, "Symbol"),
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            scope: "col",
            class: "py-3 px-6"
        }, "Name"),
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            scope: "col",
            class: "py-3 px-6"
        }, "Current Price"),
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
            scope: "col",
            class: "py-3 px-6"
        }, "Market Cap")
    ])
], -1 /* HOISTED */ );
const _hoisted_5 = {
    class: "py-4 px-6"
};
const _hoisted_6 = {
    class: "py-4 px-6"
};
const _hoisted_7 = {
    class: "py-4 px-6"
};
const _hoisted_8 = {
    class: "py-4 px-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [
                _hoisted_4,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.coins, (coin)=>{
                        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                            class: "bg-white border-b hover:bg-gray-50 transition-all duration-200 ease-in-out",
                            key: coin.id
                        }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.symbol), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.name), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.current_price), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.market_cap), 1 /* TEXT */ )
                        ]);
                    }), 128 /* KEYED_FRAGMENT */ ))
                ])
            ])
        ])
    ]);
}


/***/ }),

/***/ "./scripts/components/CryptoTable.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ })

});
//# sourceMappingURL=app.4dde32b73736948b.hot-update.js.map