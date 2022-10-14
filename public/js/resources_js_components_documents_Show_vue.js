"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_documents_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "documentos",
  data: function data() {
    return {
      documentos: [],
      user_id: this.$userId,
      user_oficina: ""
    };
  },
  mounted: function mounted() {
    this.showDocuments();
    this.getUserOficina();
  },
  methods: {
    showDocuments: function showDocuments() {
      var _this = this;

      axios.get('/api/showDocuments/' + this.user_id).then(function (response) {
        _this.documentos = response.data;
      })["catch"](function (error) {
        alert(error); //console.log(error)
      });
    },
    getUserOficina: function getUserOficina() {
      var _this2 = this;

      axios.get('/api/getUserOficina/' + this.user_id).then(function (response) {
        _this2.user_oficina = response.data;
        console.log(_this2.user_oficina);
      })["catch"](function (error) {
        alert(error); //console.log(error)
      });
    },
    borrarDocumento: function borrarDocumento(id) {
      var _this3 = this;

      if (confirm("¿confirma eliminar el registro")) {
        axios["delete"]('/api/documentos/' + id).then(function (response) {
          _this3.showDocuments();
        })["catch"](function (error) {
          alert(error); //console.log(error)
        });
      }
    },
    derivarDocumento: function derivarDocumento(id) {
      var _this4 = this;

      if (confirm("¿confirma derivar el registro")) {
        axios.get('/api/derivarDoc/' + id).then(function (response) {
          //console.log(response.data);
          _this4.$router.push({
            name: "mostrarDocumentos"
          });
        })["catch"](function (error) {
          alert(error); //console.log(error)
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/documents/Show.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/documents/Show.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=8f0475c2& */ "./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/documents/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/documents/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/documents/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/documents/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8f0475c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=8f0475c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/documents/Show.vue?vue&type=template&id=8f0475c2& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "crearDocumentos" } },
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
              _vm._l(_vm.documentos, function (documents) {
                return _c("tr", { key: documents.id }, [
                  _c("td", [_vm._v(_vm._s(documents.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.codigo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.prioridad))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.estado))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.fecha_ingreso))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.hora_ingreso))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.fecha_salida))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.hora_salida))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.num_folios))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.dni_solicitante))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.ruc_solicitante))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.observacion))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        attrs: {
                          download: "documento_Adjunto",
                          href: documents.doc_adjunto,
                        },
                      },
                      [_vm._v("PDF")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.oficina_actual))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(documents.ciclo))]),
                  _vm._v(" "),
                  documents.oficina_actual == _vm.user_oficina &&
                  documents.oficina_actual != 6
                    ? _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "editarDocumentos",
                                  params: { id: documents.id },
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
                                  return _vm.borrarDocumento(documents.id)
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
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger ",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.derivarDocumento(documents.id)
                                },
                              },
                            },
                            [
                              _vm._v("D"),
                              _c("i", { staticClass: "far fa-trash-alt" }),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
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
        _c("th", [_vm._v(" ID ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Código ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Prioridad ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Estado ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Fecha Ingreso ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Hora Ingreso ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Fecha Salida ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Hora Salida ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" N° de Folios ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" DNI Solicitante ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" RUC Solicitante ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Observación ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Documento Adjunto ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Oficina Actual ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Ciclo ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Acciones ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);