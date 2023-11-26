self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
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
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
});


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    props: [
        'modalActive'
    ],
    setup (props, { emit }) {
        const close = ()=>{
            emit('close');
        };
        return {
            close
        };
    }
});


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = (n)=>((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-781185c8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
    class: "modal"
};
const _hoisted_2 = {
    class: "modal-inner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "modal-animation",
        persisted: ""
    }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(()=>[
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
                        name: "modal-animation-inner",
                        persisted: ""
                    }, {
                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(()=>[
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                        onClick: _cache[0] || (_cache[0] = (...args)=>$setup.close && $setup.close(...args)),
                                        class: "far fa-times-circle"
                                    }),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Content "),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                        onClick: _cache[1] || (_cache[1] = (...args)=>$setup.close && $setup.close(...args)),
                                        type: "button"
                                    }, "Close")
                                ], 512 /* NEED_PATCH */ ), [
                                    [
                                        vue__WEBPACK_IMPORTED_MODULE_0__.vShow,
                                        $props.modalActive
                                    ]
                                ])
                            ]),
                        _: 3 /* FORWARDED */ 
                    })
                ], 512 /* NEED_PATCH */ ), [
                    [
                        vue__WEBPACK_IMPORTED_MODULE_0__.vShow,
                        $props.modalActive
                    ]
                ])
            ]),
        _: 3 /* FORWARDED */ 
    });
}


/***/ }),

/***/ "./scripts/components/CryptoModal.vue":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true");
/* harmony import */ var _CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoModal.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./scripts/components/CryptoModal.vue?vue&type=style&index=0&id=781185c8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-781185c8"],['__file',"scripts/components/CryptoModal.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "781185c8"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('781185c8', __exports__)) {
    api.reload('781185c8', __exports__)
  }
  
  module.hot.accept("./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true");
(() => {
    api.rerender('781185c8', _CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=style&index=0&id=781185c8&lang=scss&scoped=true":
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:0)\nFile was processed with these loaders:\n * ../node_modules/vue-loader/dist/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n> .modal-animation-enter-active,\n| .modal-animation-leave-active {\n|   transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);");

/***/ }),

/***/ "./scripts/components/CryptoModal.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ }),

/***/ "./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_template_id_781185c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./scripts/components/CryptoModal.vue?vue&type=style&index=0&id=781185c8&lang=scss&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=style&index=0&id=781185c8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_loader_dist_index_js_vue_CryptoModal_vue_vue_type_style_index_0_id_781185c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ })

});
//# sourceMappingURL=app.df257f4592340d47.hot-update.js.map