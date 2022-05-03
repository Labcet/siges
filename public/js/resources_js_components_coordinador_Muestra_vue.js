"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_coordinador_Muestra_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "coordinadores",
  data: function data() {
    return {
      coordinadores: []
    };
  },
  mounted: function mounted() {
    this.muestraCoordinador();
  },
  methods: {
    muestraCoordinador: function muestraCoordinador() {
      var _this = this;

      var data = {
        name: "Token Name",
        scopes: []
      };
      var respuesta = {};
      axios.post("/oauth/personal-access-tokens", data).then(function (response) {
        var config = {
          headers: {
            Authorization: "Bearer " + response.data.accessToken
          }
        };
        axios.get('/api/coordinadores', config).then(function (response) {
          _this.coordinadores = response.data; //console.log(response.data);
        })["catch"](function (error) {
          console.log(error);
        });
      })["catch"](function (response) {
        console.log(response);
      });
    },
    borrarCoordinador: function borrarCoordinador(id) {
      var _this2 = this;

      if (confirm("¿confirma eliminar el registro")) {
        axios["delete"]('/api/coordinadores/' + id).then(function (response) {
          _this2.muestraCoordinador();
        })["catch"](function (error) {
          alert(error);
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/coordinador/Muestra.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/coordinador/Muestra.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Muestra.vue?vue&type=template&id=5681d483& */ "./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483&");
/* harmony import */ var _Muestra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Muestra.vue?vue&type=script&lang=js& */ "./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Muestra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__.render,
  _Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/coordinador/Muestra.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Muestra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Muestra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Muestra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Muestra_vue_vue_type_template_id_5681d483___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Muestra.vue?vue&type=template&id=5681d483& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/coordinador/Muestra.vue?vue&type=template&id=5681d483& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              attrs: { to: { name: "crearCoordinadores" } },
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
              _vm._l(_vm.coordinadores, function (coordinador) {
                return _c("tr", { key: coordinador.id }, [
                  _c("td", [_vm._v(_vm._s(coordinador.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.nombre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.paterno))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.materno))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.direccion))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.dni))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.telefono))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.estado))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(coordinador.oficina_id))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-info",
                          attrs: {
                            to: {
                              name: "editarCoordinadores",
                              params: { id: coordinador.id },
                            },
                          },
                        },
                        [_c("i", { staticClass: "far fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger ",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.borrarCoordinador(coordinador.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "far fa-trash-alt" })]
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
        _c("th", [_vm._v(" ID ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Nombre ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Paterno ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Materno ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Direccion ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Dni ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Telefono ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Estado ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Oficina ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Acciones ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);