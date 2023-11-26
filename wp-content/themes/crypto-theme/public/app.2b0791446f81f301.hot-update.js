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
        // Everytime a row is clicked it emits modalActivation state to the parent component for opening or closing the modal.
        toggleModal () {
            this.$emit('modal-active', !this.modalActive);
        },
        // Everytime the coin is selected, makes an api call to return the coin details and emits for the parent component to be rendered in the modal.
        selectCoin (coin) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://api.coingecko.com/api/v3/coins/${coin.id}`).then((response)=>{
                this.selectedCoin = response.data;
                this.$emit('set-selected-coin', response.data);
            }).catch((error)=>{
                console.log(error);
            });
            this.toggleModal();
        }
    },
    components: {
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
});


/***/ })

});
//# sourceMappingURL=app.2b0791446f81f301.hot-update.js.map