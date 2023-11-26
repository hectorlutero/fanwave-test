"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=template&id=0c0408c8":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "modal-content"
}, null, -1 /* HOISTED */ );
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CryptoModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CryptoModal");
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CryptoModal, {
            onSetSelectedCoin: _ctx.updateModal,
            onClose: $setup.toggleModal,
            modalActive: $setup.modalActive
        }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(()=>[
                    _hoisted_1
                ]),
            _: 1 /* STABLE */ 
        }, 8 /* PROPS */ , [
            "onSetSelectedCoin",
            "onClose",
            "modalActive"
        ]),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.coins, (coin)=>{
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                class: "bg-white border-b hover:bg-gray-50 transition-all duration-100 ease-in cursor-pointer",
                key: coin.id,
                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.toggleModal && $setup.toggleModal(...args))
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.symbol), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.name), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.current_price), 1 /* TEXT */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.market_cap), 1 /* TEXT */ )
            ]);
        }), 128 /* KEYED_FRAGMENT */ ))
    ], 64 /* STABLE_FRAGMENT */ );
}


/***/ })

});
//# sourceMappingURL=app.3aa0cae5744671a1.hot-update.js.map