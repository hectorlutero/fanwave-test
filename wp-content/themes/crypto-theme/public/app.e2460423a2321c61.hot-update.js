"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=template&id=781185c8&scoped=true":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = (n)=>((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-781185c8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
    class: "modal flex flex-col justify-center"
};
const _hoisted_2 = {
    class: "modal-inner"
};
const _hoisted_3 = {
    key: 0
};
const _hoisted_4 = {
    class: "bg-white rounded-md w-1/2 mx-auto"
};
const _hoisted_5 = {
    class: "modal-header flex justify-end pt-5 px-5"
};
const _hoisted_6 = {
    class: "modal-content p-5 flex divide-x gap-5"
};
const _hoisted_7 = {
    class: "primary-info w-1/2 flex flex-col gap-3 p-2"
};
const _hoisted_8 = {
    class: "text-2xl uppercase"
};
const _hoisted_9 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */ ));
const _hoisted_10 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-40 w-full overflow-x-hidden"
    }, " {!! coin.description.en !!} ", -1 /* HOISTED */ ));
const _hoisted_11 = {
    class: "secondary-info w-1/2 flex flex-col gap-4 p-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Display selected coin information "),
            $props.coin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                            onClick: _cache[0] || (_cache[0] = (...args)=>$setup.close && $setup.close(...args)),
                            class: "far fa-times-circle"
                        }),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                            onClick: _cache[1] || (_cache[1] = (...args)=>$setup.close && $setup.close(...args)),
                            type: "button"
                        }, "Close")
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coin.name), 1 /* TEXT */ ),
                            _hoisted_9,
                            _hoisted_10
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coin.name), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Symbol: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coin.symbol), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Current Price: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coin.current_price), 1 /* TEXT */ ),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Market Cap: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coin.market_cap), 1 /* TEXT */ )
                        ])
                    ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add other relevant information as needed ")
            ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ], 512 /* NEED_PATCH */ ), [
            [
                vue__WEBPACK_IMPORTED_MODULE_0__.vShow,
                $props.modalActive
            ]
        ])
    ], 512 /* NEED_PATCH */ )), [
        [
            vue__WEBPACK_IMPORTED_MODULE_0__.vShow,
            $props.modalActive
        ]
    ]);
}


/***/ })

});
//# sourceMappingURL=app.e2460423a2321c61.hot-update.js.map