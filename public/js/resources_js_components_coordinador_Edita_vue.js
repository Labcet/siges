"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_coordinador_Edita_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  name: "Edita-Coordinador",
  data: function data() {
    return {
      coordinador: {
        nombre: "",
        paterno: "",
        materno: "",
        direccion: "",
        dni: "",
        telefono: "",
        //email:"",
        //password:"",
        role: "",
        estado: "",
        oficina_id: ""
      }
    };
  },
  mounted: function mounted() {
    this.buscarCoordinador();
  },
  methods: {
    buscarCoordinador: function buscarCoordinador() {
      var _this = this;

      axios.get('/api/coordinadores/' + this.$route.params.id).then(function (response) {
        var _response$data = response.data,
            nombre = _response$data.nombre,
            paterno = _response$data.paterno,
            materno = _response$data.materno,
            direccion = _response$data.direccion,
            dni = _response$data.dni,
            telefono = _response$data.telefono,
            role = _response$data.role,
            estado = _response$data.estado,
            oficina_id = _response$data.oficina_id;
        _this.coordinador.nombre = nombre, _this.coordinador.paterno = paterno, _this.coordinador.materno = materno, _this.coordinador.direccion = direccion, _this.coordinador.dni = dni, _this.coordinador.telefono = telefono, //this.coordinador.email = email,
        //this.coordinador.password = password,
        _this.coordinador.role = role, _this.coordinador.estado = estado, _this.coordinador.oficina_id = oficina_id;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    update: function update() {
      var _this2 = this;

      var data = {
        id: this.$route.params.id,
        oficina: this.coordinador
      };
      axios.put('/api/coordinadores/' + this.$route.params.id, this.coordinador).then(function (response) {
        _this2.$router.push({
          name: "mostrarCoordinadores"
        });
      })["catch"](function (error) {
        alert(error);
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/coordinador/Edita.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/coordinador/Edita.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edita.vue?vue&type=template&id=641ca90d& */ "./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d&");
/* harmony import */ var _Edita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edita.vue?vue&type=script&lang=js& */ "./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/coordinador/Edita.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edita.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edita_vue_vue_type_template_id_641ca90d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edita.vue?vue&type=template&id=641ca90d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Edita.vue?vue&type=template&id=641ca90d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                    return _vm.update.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Nombre ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.nombre,
                            expression: "coordinador.nombre",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.nombre },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "nombre",
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
                      _c("label", [_vm._v("Apellido Paterno ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.paterno,
                            expression: "coordinador.paterno",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.paterno },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "paterno",
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
                      _c("label", [_vm._v("Apellido Materno")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.materno,
                            expression: "coordinador.materno",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.materno },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "materno",
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
                      _c("label", [_vm._v("Direccion ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.direccion,
                            expression: "coordinador.direccion",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.direccion },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "direccion",
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
                      _c("label", [_vm._v("DNI ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.dni,
                            expression: "coordinador.dni",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.dni },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "dni",
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
                      _c("label", [_vm._v("Telefono")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.telefono,
                            expression: "coordinador.telefono",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.telefono },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "telefono",
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
                      _c("label", [_vm._v("Rol ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.role,
                            expression: "coordinador.role",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.role },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "role",
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
                      _c("label", [_vm._v("Estado ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.estado,
                            expression: "coordinador.estado",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.estado },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "estado",
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
                      _c("label", [_vm._v("Oficina")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coordinador.oficina_id,
                            expression: "coordinador.oficina_id",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.coordinador.oficina_id },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.coordinador,
                              "oficina_id",
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
      _c("h4", [_vm._v("Edita Coordinador")]),
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