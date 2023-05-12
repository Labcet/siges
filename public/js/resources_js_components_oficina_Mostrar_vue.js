"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_oficina_Mostrar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "oficinas",
  data: function data() {
    return {
      oficinas: []
    };
  },
  mounted: function mounted() {
    this.mostrarOficinas();
  },
  methods: {
    mostrarOficinas: function mostrarOficinas() {
      var _this = this;

      axios.get('/api/oficinas').then(function (response) {
        _this.oficinas = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    borrarOficina: function borrarOficina(id) {
      var _this2 = this;

      if (confirm("¿confirma eliminar el registro?")) {
        axios["delete"]('/api/oficinas/' + id).then(function (response) {
          _this2.mostrarOficinas();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/oficina/Mostrar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/oficina/Mostrar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=fb72d1be& */ "./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__.render,
  _Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/oficina/Mostrar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_fb72d1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mostrar.vue?vue&type=template&id=fb72d1be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/oficina/Mostrar.vue?vue&type=template&id=fb72d1be& ***!
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
  return _c(
    "div",
    { staticClass: "container", staticStyle: { padding: "0 50px" } },
    [
      _c("div", { staticClass: "row" }, [
        _vm.is("administrador")
          ? _c("div", [
              _c(
                "div",
                { staticClass: "col-lg-12 mb-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-success",
                      attrs: { to: { name: "crearOficinas" } },
                    },
                    [_vm._v("Crear")]
                  ),
                ],
                1
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("thead", { staticClass: "bg-primary text-white" }, [
                _c("tr", [
                  _c("th", [_vm._v(" ID ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Nombre Oficina ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Jefe de la Oficina")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Descripción ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Estado ")]),
                  _vm._v(" "),
                  _vm.is("administrador")
                    ? _c("div", [_c("th", [_vm._v(" Acciones ")])])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.oficinas, function (oficina) {
                  return _c("tr", { key: oficina.id }, [
                    _c("td", [_vm._v(_vm._s(oficina.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(oficina.nombre_oficina))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(oficina.nombre_jefe))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(oficina.descripcion))]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _vm._v(_vm._s(oficina.estado)),
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _vm.is("administrador")
                        ? _c(
                            "div",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "editarOficinas",
                                      params: { id: oficina.id },
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
                                      return _vm.borrarOficina(oficina.id)
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
                          )
                        : _vm._e(),
                    ]),
                  ])
                }),
                0
              ),
            ]),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);