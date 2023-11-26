"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=template&id=ff93632e":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    class: "currencies-tab-container mx-auto divide-x-2 flex items-center max-w-2xl my-20 border rounded"
};
const _hoisted_3 = {
    class: "search-container my-10"
};
const _hoisted_4 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_5 = {
    class: "overflow-x-auto relative shadow-md sm:rounded-lg"
};
const _hoisted_6 = {
    class: "w-full text-sm text-left text-gray-500"
};
const _hoisted_7 = {
    class: "text-xs text-gray-700 uppercase bg-gray-100"
};
const _hoisted_8 = {
    key: 0,
    class: "animate-pulse"
};
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
const _hoisted_12 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    class: "py-4 px-6"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "h-2 bg-slate-300 rounded col-span-1"
    })
], -1 /* HOISTED */ );
const _hoisted_13 = [
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    _hoisted_12
];
const _hoisted_14 = {
    key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CryptoItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CryptoItem");
    const _component_CryptoModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CryptoModal");
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \n  The template part is divided into 4 parts:\n    - Currencies Tab\n    - Search Functionality\n    - Crypto Table\n    - Crypto Modal - For checking Crypto details \n "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'eur'
                        }
                    ]),
                    onClick: _cache[0] || (_cache[0] = ($event)=>$options.changeCurrency('eur'))
                }, " EUR ", 2 /* CLASS */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'usd'
                        }
                    ]),
                    onClick: _cache[1] || (_cache[1] = ($event)=>$options.changeCurrency('usd'))
                }, " USD ", 2 /* CLASS */ ),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                        "w-1/3 text-center p-4 hover:bg-zinc-100 cursor-pointer",
                        {
                            'bg-zinc-100': _ctx.selectedCurrency === 'jpy'
                        }
                    ]),
                    onClick: _cache[2] || (_cache[2] = ($event)=>$options.changeCurrency('jpy'))
                }, " JPY ", 2 /* CLASS */ )
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    type: "text",
                    class: "border outline-none py-2 px-4 rounded-l",
                    placeholder: "Search for a crypto",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event)=>_ctx.userInput = $event),
                    onKeyup: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((...args)=>$options.searchCrypto && $options.searchCrypto(...args), [
                        "enter"
                    ]))
                }, null, 544 /* NEED_HYDRATION, NEED_PATCH */ ), [
                    [
                        vue__WEBPACK_IMPORTED_MODULE_0__.vModelText,
                        _ctx.userInput
                    ]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    type: "button",
                    class: "p-2 bg-amber-300 rounded-r",
                    onClick: _cache[5] || (_cache[5] = (...args)=>$options.searchCrypto && $options.searchCrypto(...args))
                }, " Search ")
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_7, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    onClick: _cache[6] || (_cache[6] = ($event)=>$options.sortTable('symbol'))
                                }, " Symbol "),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    onClick: _cache[7] || (_cache[7] = ($event)=>$options.sortTable('name'))
                                }, " Name "),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    onClick: _cache[8] || (_cache[8] = ($event)=>$options.sortTable('current_price'))
                                }, " Current Price "),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    onClick: _cache[9] || (_cache[9] = ($event)=>$options.sortTable('market_cap'))
                                }, " Market Cap ")
                            ])
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Here is a loading type screen, using tailwind feature animate-pulse "),
                        _ctx.coins.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_8, [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(10, (index)=>{
                                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
                                    class: "bg-white border-b hover:bg-gray-50 transition-all duration-100 ease-in",
                                    key: index
                                }, [
                                    ..._hoisted_13
                                ]);
                            }), 64 /* STABLE_FRAGMENT */ ))
                        ])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_14, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Here I have passed the coins array variable as a prop, and I listen to the value of selected coin and modal activation state "),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CryptoItem, {
                                coins: _ctx.coins,
                                onSetSelectedCoin: $options.getSelectedCoin,
                                onModalActive: $options.isModalActive
                            }, null, 8 /* PROPS */ , [
                                "coins",
                                "onSetSelectedCoin",
                                "onModalActive"
                            ])
                        ]))
                    ])
                ])
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Here I render the modal outside the table for styling purposes, also I listen the the modal activation state when closed,\n      and pass the props for modal activation and the selected coin for render its informations "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CryptoModal, {
            onClose: $options.toggleModal,
            modalActive: _ctx.modalActive,
            coin: _ctx.selectedCoin
        }, null, 8 /* PROPS */ , [
            "onClose",
            "modalActive",
            "coin"
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}


/***/ })

});
//# sourceMappingURL=app.6349445b6dd09a5b.hot-update.js.map