"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

});
//# sourceMappingURL=app.0dc74ff10111bf46.hot-update.js.map