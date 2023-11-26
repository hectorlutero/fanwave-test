self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&setup=true&lang=js":
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/vue-loader/dist/index.js):\nTypeError: Cannot read properties of null (reading 'content')\n    at selectBlock (/home/hectorlutero/hectorsiman/fanwave-test-main/wp-content/themes/crypto-theme/node_modules/vue-loader/dist/select.js:23:45)\n    at Object.loader (/home/hectorlutero/hectorsiman/fanwave-test-main/wp-content/themes/crypto-theme/node_modules/vue-loader/dist/index.js:92:41)");

/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
    class: "",
    style: {
        "height": "800px"
    }
};
const _hoisted_2 = {
    class: "tab-container mx-auto divide-x-2 flex items-center max-w-2xl my-20 border rounded"
};
const _hoisted_3 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_4 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_5 = {
    class: "w-full text-sm text-left text-gray-500"
};
const _hoisted_6 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
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
const _hoisted_7 = {
    key: 0,
    class: "animate-pulse"
};
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    class: "py-4 px-6"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-2 bg-slate-300 rounded col-span-1"
    })
], -1 /* HOISTED */ );
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    class: "py-4 px-6"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-2 bg-slate-300 rounded col-span-1"
    })
], -1 /* HOISTED */ );
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    class: "py-4 px-6"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-2 bg-slate-300 rounded col-span-1"
    })
], -1 /* HOISTED */ );
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    class: "py-4 px-6"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-2 bg-slate-300 rounded col-span-1"
    })
], -1 /* HOISTED */ );
const _hoisted_12 = [
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11
];
const _hoisted_13 = {
    key: 1
};
const _hoisted_14 = {
    key: 0,
    class: "modal"
};
const _hoisted_15 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Hello from the modal!", -1 /* HOISTED */ );
function render(_ctx, _cache) {
    const _component_CryptoItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CryptoItem");
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'eur'
                        }
                    ]),
                    onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.changeCurrency('eur'))
                }, " EUR ", 2 /* CLASS */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'usd'
                        }
                    ]),
                    onClick: _cache[1] || (_cache[1] = ($event)=>_ctx.changeCurrency('usd'))
                }, " USD ", 2 /* CLASS */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'jpy'
                        }
                    ]),
                    onClick: _cache[2] || (_cache[2] = ($event)=>_ctx.changeCurrency('jpy'))
                }, " JPY ", 2 /* CLASS */ )
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [
                        _hoisted_6,
                        _ctx.coins.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_7, [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(10, (index)=>{
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
                                    class: "bg-white border-b hover:bg-gray-50 transition-all duration-100 ease-in",
                                    key: index
                                }, [
                                    ..._hoisted_12
                                ]);
                            }), 64 /* STABLE_FRAGMENT */ ))
                        ])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_13, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CryptoItem, {
                                coins: _ctx.coins
                            }, null, 8 /* PROPS */ , [
                                "coins"
                            ])
                        ]))
                    ])
                ])
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: _cache[3] || (_cache[3] = ($event)=>_ctx.open = true)
        }, "Open Modal"),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
            to: "body"
        }, [
            _ctx.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [
                _hoisted_15,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    onClick: _cache[4] || (_cache[4] = ($event)=>_ctx.open = false)
                }, "Close")
            ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
    ], 64 /* STABLE_FRAGMENT */ );
}


/***/ }),

/***/ "./scripts/components/CryptoTable.vue":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoTable_vue_vue_type_template_id_ff93632e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e");
/* harmony import */ var _CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoTable.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CryptoTable_vue_vue_type_template_id_ff93632e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"scripts/components/CryptoTable.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "ff93632e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('ff93632e', __exports__)) {
    api.reload('ff93632e', __exports__)
  }
  
  module.hot.accept("./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CryptoTable_vue_vue_type_template_id_ff93632e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e");
(() => {
    api.rerender('ff93632e', _CryptoTable_vue_vue_type_template_id_ff93632e__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./scripts/components/CryptoTable.vue?vue&type=script&setup=true&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ })

});
//# sourceMappingURL=app.c21216625f23c9d1.hot-update.js.map