"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoItem.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./scripts/components/CryptoModal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/axios/index.js");


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
            this.$emit('selectedCoin', this.selectedCoin);
        },
        selectCoin (coin) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://api.coingecko.com/api/v3/coins/${coin.id}`).then((response)=>{
                console.log(response.data);
                this.selectedCoin = response.data;
            }).catch((error)=>{
                console.log(error);
            });
            this.$emit('set-selected-coin', coin);
            this.toggleModal();
        }
    },
    components: {
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
});


/***/ })

});
//# sourceMappingURL=app.8c987626e948b300.hot-update.js.map