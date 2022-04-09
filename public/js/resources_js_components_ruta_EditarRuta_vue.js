"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ruta_EditarRuta_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  name: "editar-Ruta",
  data: function data() {
    return {
      ruta: {
        documento_id: "",
        oficina_id: "",
        descripción: "",
        fecha_ingreso: "",
        hora_ingreso: "",
        fecha_salida: "",
        hora_salida: ""
      }
    };
  },
  mounted: function mounted() {
    this.buscarRuta();
  },
  methods: {
    buscarRuta: function buscarRuta() {
      var _this = this;

      axios.get('/api/rutas/' + this.$route.params.id).then(function (response) {
        var _response$data = response.data,
            documento_id = _response$data.documento_id,
            oficina_id = _response$data.oficina_id,
            descripción = _response$data.descripción,
            fecha_ingreso = _response$data.fecha_ingreso,
            hora_ingreso = _response$data.hora_ingreso,
            fecha_salida = _response$data.fecha_salida,
            hora_salida = _response$data.hora_salida;
        _this.ruta.documento_id = documento_id, _this.ruta.oficina_id = oficina_id, _this.ruta.descripción = descripción, _this.ruta.fecha_ingreso = fecha_ingreso, _this.ruta.hora_ingreso = hora_ingreso, _this.ruta.fecha_salida = fecha_salida, _this.ruta.hora_salida = hora_salida;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    actualizarRuta: function actualizarRuta() {
      var _this2 = this;

      var data = {
        id: this.$route.params.id,
        ruta: this.ruta
      };
      axios.put('/api/rutas/' + this.$route.params.id, this.ruta).then(function (response) {
        _this2.$router.push({
          name: "mostrarRutas"
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/ruta/EditarRuta.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ruta/EditarRuta.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarRuta.vue?vue&type=template&id=53445522& */ "./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522&");
/* harmony import */ var _EditarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarRuta.vue?vue&type=script&lang=js& */ "./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ruta/EditarRuta.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarRuta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarRuta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarRuta_vue_vue_type_template_id_53445522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarRuta.vue?vue&type=template&id=53445522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ruta/EditarRuta.vue?vue&type=template&id=53445522& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.actualizarRuta.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Documento ID ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.documento_id,
                            expression: "ruta.documento_id",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ruta.documento_id },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "documento_id",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Oficina ID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.oficina_id,
                            expression: "ruta.oficina_id",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ruta.oficina_id },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "oficina_id",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Descripción ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.descripción,
                            expression: "ruta.descripción",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ruta.descripción },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "descripción",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Fecha Ingreso ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.fecha_ingreso,
                            expression: "ruta.fecha_ingreso",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.ruta.fecha_ingreso },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "fecha_ingreso",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Hora Ingreso ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.hora_ingreso,
                            expression: "ruta.hora_ingreso",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "time" },
                        domProps: { value: _vm.ruta.hora_ingreso },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "hora_ingreso",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Fecha Salida ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.fecha_salida,
                            expression: "ruta.fecha_salida",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.ruta.fecha_salida },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "fecha_salida",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Hora Salida ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ruta.hora_salida,
                            expression: "ruta.hora_salida",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "time" },
                        domProps: { value: _vm.ruta.hora_salida },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ruta,
                              "hora_salida",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
              ]
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Editar Rutas")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v(" Guardar")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);