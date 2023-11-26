"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoTable.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var _CryptoItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./scripts/components/CryptoItem.vue");
/* harmony import */ var _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./scripts/components/CryptoModal.vue");
/**
 * THE SCRIPT PART HANDLES THE  TEMPLATE PARTS IN TWO STATES, ON MOUNT AND ON INTERACTIONS:
 *  - To understand it better, we need to understand the data flow when mounted and available interactions.
 *  - On Mount:
 *    - loadCoins: This method makes a API call to retrieve crypto data and renders the table rows.
 *        - it takes the top 10 currencies in market (limited to 10)
 *        - With the response.data it updates the array variable 'coins'
 *        - when coins array variable is updated it rerenders the Component CryptoItem that receives it.
 *          Rendering the Table's rows.
 *  - When Interacting:
 *    - changeCurrency: everytime the currency is changed, it updates the variable selectedCurrency,
 *      and makes the api call again thorugh loadCoins method.
 *    - Table Row Selection: everytime a coin is selected opens up a modal, with informations about that
 *      specific currency.
 *        - Get the selected coin through click. However, you won't see this happening on this component,
 *          because, the rows are rendered in a children Component called CryptoItem.
 *        - In CryptoItems we 'emit' the selected coin value to it's parent component, CrytoTable, update
 *          the selectedCoin variable state and show its data rendering the CryptoModal, using toggleModal(),
 *    -
 *
 */ 


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function() {
        return {
            coins: [],
            selectedCurrency: 'eur',
            userInput: '',
            sortKey: null,
            sortOrder: 1,
            selectedCoin: null,
            modalActive: false
        };
    },
    mounted () {
        setTimeout(()=>{
            this.loadCoins();
        }, 1500);
    },
    methods: {
        loadCoins: function() {
            axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.getApiUrl()).then((response)=>{
                this.coins = response.data;
            }).catch((error)=>{
                console.log(error);
            });
        },
        changeCurrency: function(currency) {
            this.selectedCurrency = currency;
            this.coins = [];
            setTimeout(()=>{
                this.loadCoins();
            }, 1500);
        },
        getApiUrl: function() {
            return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.selectedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-Dja2R2rhxMMJ9bYxERe3D27n`;
        },
        getSelectedCoin (value) {
            this.selectedCoin = value;
        },
        toggleModal () {
            this.modalActive = !this.modalActive;
        },
        isModalActive () {
            this.toggleModal();
        },
        logUserInput: function() {
            const filteredCoins = this.coins.filter((coin)=>{
                const lowerCaseInput = this.userInput.toLowerCase();
                return coin.name.toLowerCase().includes(lowerCaseInput) || coin.symbol.toLowerCase().includes(lowerCaseInput);
            });
            if (this.userInput && filteredCoins.length > 0) {
                return this.coins = filteredCoins;
            } else {
                return this.loadCoins();
            }
        },
        sortTable: function(key) {
            if (this.sortKey === key) {
                this.sortOrder *= -1;
            } else {
                this.sortKey = key;
                this.sortOrder = 1;
            }
            this.coins.sort((a, b)=>{
                const aValue = a[key];
                const bValue = b[key];
                return (typeof aValue === 'string' ? aValue.localeCompare(bValue) : aValue - bValue) * this.sortOrder;
            });
        }
    },
    components: {
        CryptoItem: _CryptoItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        CryptoModal: _CryptoModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
});


/***/ })

});
//# sourceMappingURL=app.62c2aa99941b1f2c.hot-update.js.map