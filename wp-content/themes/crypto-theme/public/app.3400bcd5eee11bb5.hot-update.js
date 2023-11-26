"use strict";
self["webpackHotUpdate_roots_bud_sage_sage"]("app",{

/***/ "../node_modules/swc-loader/src/index.js??swc!../node_modules/@roots/wordpress-hmr/lib/loader.cjs??@roots/wordpress-hmr/loader!../node_modules/vue-loader/dist/index.js??vue!./scripts/components/CryptoModal.vue?vue&type=script&lang=js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    props: [
        'modalActive',
        'coin'
    ],
    data () {
        return {
            description: this.coin.description,
            sanitizedHtml: ''
        };
    },
    created () {
        // Sanitize the HTML content using DOMPurify
        this.sanitizedHtml = DOMPurify.sanitize(this.description);
    },
    setup (props, { emit }) {
        const close = ()=>{
            emit('close');
        };
        // console.log(props);
        return {
            close
        };
    }
});


/***/ })

});
//# sourceMappingURL=app.3400bcd5eee11bb5.hot-update.js.map