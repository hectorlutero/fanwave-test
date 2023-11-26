"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        coins: Object
    },
    data () {
        return {
            selectedCoin: null
        };
    },
    setup () {
        const modalActive = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        const selectedCoin = this.selectedCoin;
        const toggleModal = ()=>{
            modalActive.value = !modalActive.value;
        };
        const setSelectedCoin = ()=>{
            const modalActive = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
            modalActive.value = !modalActive.value;
        // this.$emit('set-selected-coin', this.selectedCoin);
        };
        return {
            modalActive,
            coin,
            setSelectedCoin
        };
    },
    components: {
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    methods: {
        updateModal (newSelectedCoin) {
            this.selectedCoin = newSelectedCoin;
        }
    }
});


/***/ })

});
//# sourceMappingURL=app.d5697a5b780f124e.hot-update.js.map