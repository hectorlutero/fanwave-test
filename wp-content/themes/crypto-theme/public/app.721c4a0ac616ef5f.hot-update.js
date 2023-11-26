"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&setup=true&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoModal.vue");


const __default__ = {
    props: {
        coins: Object
    },
    data () {
        return {
            isModalOpen: false,
            selectedCoin: null
        };
    },
    methods: {
        openModal (coin) {
            console.log(coin);
            this.selectedCoin = coin;
            this.isModalOpen = true;
        },
        closeModal () {
            this.isModalOpen = false;
        }
    },
    components: {
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object.assign(__default__, {
    __name: 'CryptoItem',
    setup (__props, { expose: __expose }) {
        __expose();
        const open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const __returned__ = {
            open,
            CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
            ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
        };
        Object.defineProperty(__returned__, '__isScriptSetup', {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
}));


/***/ }),

/***/ "./scripts/components/CryptoItem.vue":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoItem_vue_vue_type_template_id_0c0408c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoItem.vue?vue&type=template&id=0c0408c8");
/* harmony import */ var _CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoItem.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CryptoItem_vue_vue_type_template_id_0c0408c8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"scripts/components/CryptoItem.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "0c0408c8"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('0c0408c8', __exports__)) {
    api.reload('0c0408c8', __exports__)
  }
  
  module.hot.accept("./scripts/components/CryptoItem.vue?vue&type=template&id=0c0408c8", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CryptoItem_vue_vue_type_template_id_0c0408c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoItem.vue?vue&type=template&id=0c0408c8");
(() => {
    api.rerender('0c0408c8', _CryptoItem_vue_vue_type_template_id_0c0408c8__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./scripts/components/CryptoItem.vue?vue&type=script&setup=true&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ })

});
//# sourceMappingURL=app.721c4a0ac616ef5f.hot-update.js.map