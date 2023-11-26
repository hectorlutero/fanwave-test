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

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=template&id=0c0408c8&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = (n)=>((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0c0408c8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = [
    "onClick"
];
const _hoisted_2 = {
    class: "py-4 px-6"
};
const _hoisted_3 = {
    class: "py-4 px-6"
};
const _hoisted_4 = {
    class: "py-4 px-6"
};
const _hoisted_5 = {
    class: "py-4 px-6"
};
const _hoisted_6 = {
    key: 0,
    class: "modal top-0 hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
};
const _hoisted_7 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Hello from the modal!", -1 /* HOISTED */ ));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.coins, (coin)=>{
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                class: "bg-white border-b hover:bg-gray-50 transition-all duration-100 ease-in cursor-pointer",
                key: coin.id,
                onClick: ($event)=>$options.openModal(coin)
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.symbol), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.name), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.current_price), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.market_cap), 1 /* TEXT */ )
            ], 8 /* PROPS */ , _hoisted_1);
        }), 128 /* KEYED_FRAGMENT */ )),
        $setup.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
            _hoisted_7,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = ($event)=>$setup.open = false)
            }, "Close")
        ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */ );
}


/***/ })

});
//# sourceMappingURL=app.7830a914049738ef.hot-update.js.map