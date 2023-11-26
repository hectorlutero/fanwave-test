self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue");
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        coins: Array
    },
    data () {
        return {
            selectedCoin: null,
            modalActive: false
        };
    },
    methods: {
        toggleModal () {
            this.modalActive = !this.modalActive;
        },
        updateModal (newSelectedCoin) {
            this.selectedCoin = newSelectedCoin;
        },
        selectCoin (coin) {
            this.selectedCoin = coin;
            console.log(coin);
            this.$emit('set-selected-coin', coin); // Emitting the event with the selected coin data
            this.toggleModal();
        }
    },
    components: {
        CryptoModal: (_CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0___default())
    }
});


/***/ }),

/***/ "./scripts/components/CryptoModal.vue":
/***/ (() => {



/***/ })

});
//# sourceMappingURL=app.17d79b30a0b41033.hot-update.js.map