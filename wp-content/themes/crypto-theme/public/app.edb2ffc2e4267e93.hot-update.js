self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.modal[data-v-15e0c33d] {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
`, "",{"version":3,"sources":["webpack://./scripts/components/MyModal.vue"],"names":[],"mappings":";AACA;EACE,eAAe;EACf,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["\n.modal[data-v-15e0c33d] {\n  position: fixed;\n  z-index: 999;\n  top: 20%;\n  left: 50%;\n  width: 300px;\n  margin-left: -150px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


      var API = __webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      var domAPI = __webpack_require__("../node_modules/style-loader/dist/runtime/styleDomAPI.js");
      var insertFn = __webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js");
      var setAttributes = __webpack_require__("../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
      var insertStyleElement = __webpack_require__("../node_modules/style-loader/dist/runtime/insertStyleElement.js");
      var styleTagTransformFn = __webpack_require__("../node_modules/style-loader/dist/runtime/styleTagTransform.js");
      var content = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");
      
      content = content.__esModule ? content.default : content;

var options = {};

options.styleTagTransform = styleTagTransformFn;
options.setAttributes = setAttributes;

      options.insert = insertFn.bind(null, "head");
    
options.domAPI = domAPI;
options.insertStyleElement = insertStyleElement;

var update = API(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = false;
    var oldLocals = isNamedExport ? namedExport : content.locals;

    module.hot.accept(
      "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css",
      function () {
        content = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                      content = [[module.id, content, '']];
                    }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}


module.exports = content && content.locals || {};


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var _CryptoItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoItem.vue");
/* harmony import */ var _MyModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./scripts/components/MyModal.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function() {
        return {
            coins: [],
            selectedCurrency: 'eur'
        };
    },
    mounted () {
        setTimeout(()=>{
            this.loadCoins();
        }, 1500);
    },
    methods: {
        loadCoins: function() {
            axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.getApiUrl()).then((response)=>{
                this.coins = response.data;
            }).catch((error)=>{
                console.log(error);
            });
        },
        changeCurrency: function(currency) {
            this.selectedCurrency = currency;
            this.coins = [];
            setTimeout(()=>{
                this.loadCoins();
            }, 1500);
        },
        getApiUrl: function() {
            return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.selectedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;
        }
    },
    components: {
        CryptoItem: _CryptoItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        MyModal: _MyModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
});


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=script&setup=true&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    __name: 'MyModal',
    setup (__props, { expose: __expose }) {
        __expose();
        const open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const __returned__ = {
            open,
            ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
        };
        Object.defineProperty(__returned__, '__isScriptSetup', {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});


/***/ }),

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = (n)=>((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-15e0c33d"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
    key: 0,
    class: "modal"
};
const _hoisted_2 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Hello from the modal!", -1 /* HOISTED */ ));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: _cache[0] || (_cache[0] = ($event)=>$setup.open = true)
        }, "Open Modal"),
        $setup.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
            _hoisted_2,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[1] || (_cache[1] = ($event)=>$setup.open = false)
            }, "Close")
        ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */ );
}


/***/ }),

/***/ "./scripts/components/MyModal.vue":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true");
/* harmony import */ var _MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/MyModal.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-15e0c33d"],['__file',"scripts/components/MyModal.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "15e0c33d"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('15e0c33d', __exports__)) {
    api.reload('15e0c33d', __exports__)
  }
  
  module.hot.accept("./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true");
(() => {
    api.rerender('15e0c33d', _MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./scripts/components/MyModal.vue?vue&type=script&setup=true&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 

/***/ }),

/***/ "./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=template&id=15e0c33d&scoped=true");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_swc_loader_src_index_js_swc_node_modules_roots_wordpress_hmr_lib_loader_cjs_roots_wordpress_hmr_loader_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_template_id_15e0c33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_roots_bud_support_lib_style_loader_index_cjs_style_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-style-loader/index.js!../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_roots_bud_support_lib_style_loader_index_cjs_style_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_roots_bud_support_lib_style_loader_index_cjs_style_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_roots_bud_support_lib_style_loader_index_cjs_style_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_node_modules_roots_bud_support_lib_style_loader_index_cjs_style_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_vue_loader_dist_index_js_vue_MyModal_vue_vue_type_style_index_0_id_15e0c33d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__("../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("0c775f8a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css", function() {
     var newContent = __webpack_require__("../node_modules/@roots/bud-support/lib/style-loader/index.cjs??style!../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/MyModal.vue?vue&type=style&index=0&id=15e0c33d&scoped=true&lang=css");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=app.edb2ffc2e4267e93.hot-update.js.map