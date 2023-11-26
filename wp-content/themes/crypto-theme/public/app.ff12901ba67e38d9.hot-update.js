"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function() {
        return {
            coins: []
        };
    },
    mounted () {
        this.loadCoins();
    },
    methods: {
        loadCoins: function() {
            Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en').then((response)=>{
                this.coins = response.data;
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
});


/***/ })

});
//# sourceMappingURL=app.ff12901ba67e38d9.hot-update.js.map