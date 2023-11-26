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
        const modalActive1 = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        const toggleModal = ()=>{
            modalActive1.value = !modalActive1.value;
        };
        return {
            modalActive: modalActive1,
            toggleModal
        };
    },
    components: {
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    methods: {
        updateModal (newSelectedCoin) {
            this.selectedCoin = newSelectedCoin;
        },
        setSelectedCoin () {
            modalActive.value = !modalActive.value;
            this.$emit('set-selected-coin', this.selectedCoin);
        }
    }
});


/***/ })

});
//# sourceMappingURL=app.4d055a8a04276cec.hot-update.js.map