"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ruta_MostrarRuta_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "rutas",
  data: function data() {
    return {
      rutas: []
    };
  },
  mounted: function mounted() {
    this.mostrarRutas();
  },
  methods: {
    mostrarRutas: function mostrarRutas() {
      var _this = this;

      axios.get('/api/rutas').then(function (response) {
        _this.rutas = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    borrarRutas: function borrarRutas(id) {
      var _this2 = this;

      if (confirm("¿confirma eliminar el registro?")) {
        axios["delete"]('/api/rutas/' + id).then(function (response) {
          _this2.mostrarRutas();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/ruta/MostrarRuta.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ruta/MostrarRuta.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarRuta.vue?vue&type=template&id=20f277dc& */ "./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc&");
/* harmony import */ var _MostrarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarRuta.vue?vue&type=script&lang=js& */ "./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ruta/MostrarRuta.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarRuta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRuta_vue_vue_type_template_id_20f277dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarRuta.vue?vue&type=template&id=20f277dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/MostrarRuta.vue?vue&type=template&id=20f277dc& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 mb-4" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-success",
              attrs: { to: { name: "crearRutas" } },
            },
            [_vm._v("Crear")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.rutas, function (ruta) {
                return _c("tr", { key: ruta.id }, [
                  _c("td", [_vm._v(_vm._s(ruta.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.documento_id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.oficina_id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.fecha_ingreso))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.hora_ingreso))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.fecha_salida))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(ruta.hora_salida))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "editarRutas",
                              params: { id: ruta.id },
                            },
                          },
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "user-edit" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.borrarRutas(ruta.id)
                            },
                          },
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "trash-alt" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ])
              }),
              0
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white" }, [
      _c("tr", [
        _c("th", [_vm._v(" ID")]),
        _vm._v(" "),
        _c("th", [_vm._v(" ID Documento")]),
        _vm._v(" "),
        _c("th", [_vm._v(" ID Oficina")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Fecha Ingreso ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Hora Ingreso")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Fecha Salida")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Hora Salida")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Acciones ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);