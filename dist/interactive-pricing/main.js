(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9vy":
/*!********************************************************!*\
  !*** ./src/app/check-switch/check-switch.component.ts ***!
  \********************************************************/
/*! exports provided: CheckSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSwitchComponent", function() { return CheckSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "active": a0 }; };
class CheckSwitchComponent {
    constructor() {
        this.activeSwitch = false;
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleSwitch() {
        this.activeSwitch = !this.activeSwitch;
        this.onchange.emit(this.activeSwitch);
    }
}
CheckSwitchComponent.ɵfac = function CheckSwitchComponent_Factory(t) { return new (t || CheckSwitchComponent)(); };
CheckSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckSwitchComponent, selectors: [["app-check-switch"]], inputs: { activeSwitch: "activeSwitch" }, outputs: { onchange: "onchange" }, decls: 2, vars: 3, consts: [[1, "check-switch", 3, "ngClass", "click"], [1, "check-sphere"]], template: function CheckSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckSwitchComponent_Template_div_click_0_listener() { return ctx.toggleSwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.activeSwitch));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".check-switch[_ngcontent-%COMP%] {\n  height: 2em;\n  width: 4em;\n  border-radius: 15px;\n  border: 0.4em solid #cdd7ee;\n  background: #cdd7ee;\n  position: relative;\n}\n.check-switch[_ngcontent-%COMP%]   .check-sphere[_ngcontent-%COMP%] {\n  transition: ease-in-out 0.3s;\n  background: white;\n  border-radius: 100%;\n  height: 1.2em;\n  width: 1.2em;\n  position: relative;\n  left: 0;\n}\n.check-switch.active[_ngcontent-%COMP%] {\n  background: #10d5c2;\n  border-color: #10d5c2;\n}\n.check-switch.active[_ngcontent-%COMP%]   .check-sphere[_ngcontent-%COMP%] {\n  left: 100%;\n  transform: translate(-100%, 0);\n}\n.check-switch[_ngcontent-%COMP%]:hover {\n  border-color: #a5f3eb;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi9jaGVjay1zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBLGdCQUFBO0FBT0EsZ0JBQUE7QUNFQTtFQUNFLFdBSmE7RUFLYixVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CRERtQjtFQ0VuQixrQkFBQTtBQU5GO0FBUUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQWRLO0VBZUwsWUFmSztFQWdCTCxrQkFBQTtFQUNBLE9BQUE7QUFOSjtBQVNFO0VBQ0UsbUJEMUJTO0VDMkJULHFCRDNCUztBQ29CYjtBQVFJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FBTk47QUFVRTtFQUVFLHFCRHJDTztFQ3NDUCxlQUFBO0FBVEoiLCJmaWxlIjoiY2hlY2stc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbG9ycyAqKi9cclxuLyoqKiBQcmltYXJ5ICoqKi9cclxuJHNvZnRDeWFuOiBoc2woMTc0LCA3NyUsIDgwJSk7XHJcbiRzdHJvbmdDeWFuOiBoc2woMTc0LCA4NiUsIDQ1JSk7XHJcbiRsaWdodFJlZDogaHNsKDE0LCA5MiUsIDk1JSk7XHJcbiRyZWQ6IGhzbCgxNSwgMTAwJSwgNzAlKTtcclxuJGJsdWU6IGhzbCgyMjYsIDEwMCUsIDg3JSk7XHJcblxyXG4vKioqIE5ldXRyYWwgKioqL1xyXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiR2ZXJ5UGFsZUJsdWU6IGhzbCgyMzAsIDEwMCUsIDk5JSk7XHJcbiRncmF5aXNoQmx1ZTogaHNsKDIyNSwgMjAlLCA2MCUpO1xyXG4kZGFya0JsdWU6IGhzbCgyMjcsIDM1JSwgMjUlKTtcclxuJGxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjQsIDY1JSwgOTUlKTtcclxuJGxpZ2h0R3JheWlzaEJsdWUyOiAgaHNsKDIyMywgNTAlLCA4NyUpO1xyXG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9jb2xvcnNcIjtcclxuXHJcbi8vYmFzZSAxMnB4XHJcblxyXG4vLyRzd2l0Y2hCb3JkZXJXaWR0aDogNXB4O1xyXG4kc3dpdGNoQm9yZGVyV2lkdGg6IDAuNGVtO1xyXG4vLyRzd2l0Y2hIZWlnaHQ6IDI2cHg7XHJcbiRzd2l0Y2hIZWlnaHQ6IDJlbTtcclxuJHNwaGVyZTogJHN3aXRjaEhlaWdodCAtIDIqJHN3aXRjaEJvcmRlcldpZHRoO1xyXG5cclxuLmNoZWNrLXN3aXRjaCB7XHJcbiAgaGVpZ2h0OiAkc3dpdGNoSGVpZ2h0O1xyXG4gIHdpZHRoOiA0ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICRzd2l0Y2hCb3JkZXJXaWR0aCBzb2xpZCAkbGlnaHRHcmF5aXNoQmx1ZTI7XHJcbiAgYmFja2dyb3VuZDogJGxpZ2h0R3JheWlzaEJsdWUyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmNoZWNrLXNwaGVyZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAkc3BoZXJlO1xyXG4gICAgd2lkdGg6ICRzcGhlcmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJHN0cm9uZ0N5YW47XHJcbiAgICBib3JkZXItY29sb3I6ICRzdHJvbmdDeWFuO1xyXG4gICAgLmNoZWNrLXNwaGVyZSB7XHJcbiAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICRzdHJvbmdDeWFuO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkc29mdEN5YW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leodelcastanher/Projects/FrontendMentor/interactive-pricing-component/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'interactive-pricing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _check_switch_check_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-switch/check-switch.component */ "+9vy");
/* harmony import */ var _slider_select_slider_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-select/slider-select.component */ "arYf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _check_switch_check_switch_component__WEBPACK_IMPORTED_MODULE_5__["CheckSwitchComponent"],
        _slider_select_slider_select_component__WEBPACK_IMPORTED_MODULE_6__["SliderSelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]] }); })();


/***/ }),

/***/ "arYf":
/*!**********************************************************!*\
  !*** ./src/app/slider-select/slider-select.component.ts ***!
  \**********************************************************/
/*! exports provided: SliderSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderSelectComponent", function() { return SliderSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SliderSelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderSelectComponent.ɵfac = function SliderSelectComponent_Factory(t) { return new (t || SliderSelectComponent)(); };
SliderSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderSelectComponent, selectors: [["app-slider-select"]], decls: 2, vars: 0, consts: [[1, "slider-select"], ["type", "range", "min", "1", "max", "100", "value", "50", "id", "", 1, "slider-input"]], template: function SliderSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".slider-select[_ngcontent-%COMP%] {\n  padding: 1.5rem 0.7rem;\n}\n.slider-input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0.66rem;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.slider-input[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.slider-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 100%;\n  border: 0;\n  background: #10d5c2 url(\"/assets/images/icon-slider.svg\") no-repeat center;\n  cursor: pointer;\n}\n.slider-input[_ngcontent-%COMP%]::-webkit-slider-thumb:hover, .slider-input[_ngcontent-%COMP%]::-webkit-slider-thumb:active {\n  box-shadow: 0 0.5rem 2rem #10d5c2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi9zbGlkZXItc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7QUFDQSxnQkFBQTtBQU9BLGdCQUFBO0FDTkEsY0FBQTtBQUlBO0VBQ0Usc0JBQUE7QUFERjtBQUlBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7QUFERjtBQUtBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBM0JXO0VBNEJYLGNBNUJXO0VBNkJYLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDBFQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUU7RUFFRSxpQ0FBQTtBQUhKIiwiZmlsZSI6InNsaWRlci1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29sb3JzICoqL1xyXG4vKioqIFByaW1hcnkgKioqL1xyXG4kc29mdEN5YW46IGhzbCgxNzQsIDc3JSwgODAlKTtcclxuJHN0cm9uZ0N5YW46IGhzbCgxNzQsIDg2JSwgNDUlKTtcclxuJGxpZ2h0UmVkOiBoc2woMTQsIDkyJSwgOTUlKTtcclxuJHJlZDogaHNsKDE1LCAxMDAlLCA3MCUpO1xyXG4kYmx1ZTogaHNsKDIyNiwgMTAwJSwgODclKTtcclxuXHJcbi8qKiogTmV1dHJhbCAqKiovXHJcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcclxuJHZlcnlQYWxlQmx1ZTogaHNsKDIzMCwgMTAwJSwgOTklKTtcclxuJGdyYXlpc2hCbHVlOiBoc2woMjI1LCAyMCUsIDYwJSk7XHJcbiRkYXJrQmx1ZTogaHNsKDIyNywgMzUlLCAyNSUpO1xyXG4kbGlnaHRHcmF5aXNoQmx1ZTogaHNsKDIyNCwgNjUlLCA5NSUpO1xyXG4kbGlnaHRHcmF5aXNoQmx1ZTI6ICBoc2woMjIzLCA1MCUsIDg3JSk7XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL2NvbG9yc1wiO1xuXG4vKiBWYXJpYWJsZXMgKi9cbiRzbGlkZXJTaXplOiAyLjRyZW07XG4kc2xpZGVySW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9pY29uLXNsaWRlci5zdmcnO1xuXG4uc2xpZGVyLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAwLjdyZW07XG59XG5cbi5zbGlkZXItaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuNjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgb3V0bGluZTogbm9uZTtcbiAgb3BhY2l0eTogMC43O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG59XG5cbi5zbGlkZXItaW5wdXQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vLy5zbGlkZXItaW5wdXQ6Oi1tb3otcmFuZ2UtdGh1bWIsXG4uc2xpZGVyLWlucHV0Ojotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6ICRzbGlkZXJTaXplO1xuICBoZWlnaHQ6ICRzbGlkZXJTaXplO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICRzdHJvbmdDeWFuIHVybCgkc2xpZGVySW1hZ2UpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAkc3Ryb25nQ3lhbjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slider_select_slider_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider-select/slider-select.component */ "arYf");
/* harmony import */ var _check_switch_check_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-switch/check-switch.component */ "+9vy");



class MainComponent {
    constructor() {
        this.yearlyBilling = false;
    }
    ngOnInit() {
    }
    toggleMonthlyBilling() {
        this.yearlyBilling = !this.yearlyBilling;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 36, vars: 1, consts: [[1, "header"], [1, "pricing-container"], [1, "pageviews", "info-style"], [1, "value-box"], [1, "value"], [1, "info-style"], [1, "billing-selection"], [1, "info-style", "monthly"], [3, "activeSwitch", "onchange"], [1, "info-style", "yearly"], [1, "badge", "rounded-pill"], [1, "line-divider"], [1, "call-to-action"], [1, "advantages"], [1, "action"], ["type", "button", 1, "action-button"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Simple, traffic-based pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign-up for out 30-day trial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No credit card required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "100K PAGEVIEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-slider-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "$16.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/ month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Monthy Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-check-switch", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchange", function MainComponent_Template_app_check_switch_onchange_19_listener() { return ctx.toggleMonthlyBilling(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Yearly Billing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Unlimited websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "100% data ownership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Star my trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeSwitch", ctx.yearlyBilling);
    } }, directives: [_slider_select_slider_select_component__WEBPACK_IMPORTED_MODULE_1__["SliderSelectComponent"], _check_switch_check_switch_component__WEBPACK_IMPORTED_MODULE_2__["CheckSwitchComponent"]], styles: ["@charset \"UTF-8\";\n\n\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  padding: 0 1rem;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  background-image: url(\"/assets/images/pattern-circles.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 9.5rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #858fad;\n}\n.pricing-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  display: grid;\n  padding: 2.5rem 0.3rem;\n}\n.pricing-container[_ngcontent-%COMP%]   .info-style[_ngcontent-%COMP%] {\n  color: #858fad;\n  text-align: center;\n  font-size: 12px;\n}\n.pricing-container[_ngcontent-%COMP%]   .info-style[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: #ff8c66;\n  background: #feece7;\n  font-size: inherit;\n  margin-left: 0.4em;\n}\n.pricing-container[_ngcontent-%COMP%]   .pageviews[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: bold;\n}\n.pricing-container[_ngcontent-%COMP%]   .value-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2em;\n}\n.pricing-container[_ngcontent-%COMP%]   .value-box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  padding-right: 0.25em;\n}\n.pricing-container[_ngcontent-%COMP%]   .billing-selection[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 3rem 1fr;\n  grid-gap: 1rem;\n  font-size: 12px;\n  margin-bottom: 1.7em;\n}\n.pricing-container[_ngcontent-%COMP%]   .billing-selection[_ngcontent-%COMP%]   .monthly[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.pricing-container[_ngcontent-%COMP%]   .billing-selection[_ngcontent-%COMP%]   .yearly[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pricing-container[_ngcontent-%COMP%]   .line-divider[_ngcontent-%COMP%] {\n  margin-left: -0.3rem;\n  margin-right: -0.3rem;\n  background: #858fad;\n}\n.pricing-container[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.pricing-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  color: #858fad;\n  line-height: 2.5em;\n  margin-bottom: 1.7em;\n}\n.pricing-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  color: #10d5c2;\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\uF00C\";\n  font-weight: 700;\n  font-size: 0.8em;\n  padding-right: 1.5em;\n}\n.pricing-container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pricing-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5rem;\n  color: #fafbff;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: #293356;\n  border: 1px solid transparent;\n  padding: 0.75rem 3.5rem;\n  font-size: 1rem;\n  border-radius: 2rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.pricing-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.pricing-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:focus {\n  color: #cdd7ee;\n  box-shadow: 0 0 0 0.25rem #bdccff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FBQ0EsZ0JBQUE7QUFPQSxnQkFBQTtBRE5BO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBR0Y7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsY0N2QlU7QUR3QmQ7QUFHQTtFQUNFLGlCQzlCTTtFRCtCTixrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7QUFFRTtFQUNFLGNDbkNVO0VEb0NWLGtCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUk7RUFDRSxjQzlDQTtFRCtDQSxtQkNoREs7RURpREwsa0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFITjtBQU9FO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUxOO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVVFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQ3ZGVTtBRCtFZDtBQVdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3BHVTtFRHFHVixrQkFBQTtFQUNBLG9CQUFBO0FBVko7QUFZSTtFQUNFLGNDakhPO0VEa0hQLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVZOO0FBY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpKO0FBZUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQzdIVztFRDhIWCxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ2xJTztFRG1JUCw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUlBQUE7QUFiSjtBQWVJO0VBQ0UsV0FBQTtBQWJOO0FBZ0JJO0VBQ0UsY0M1SWU7RUQ2SWYsaUNBQUE7QUFkTiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvY29sb3JzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wYXR0ZXJuLWNpcmNsZXMuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDkuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAkZ3JheWlzaEJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpY2luZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6IDIuNXJlbSAwLjNyZW07XHJcblxyXG4gIC5pbmZvLXN0eWxlIHtcclxuICAgIGNvbG9yOiAkZ3JheWlzaEJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRsaWdodFJlZDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC40ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZXZpZXdzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC52YWx1ZS1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmlsbGluZy1zZWxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNyZW0gMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjdlbTtcclxuXHJcbiAgICAubW9udGhseSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnllYXJseSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZS1kaXZpZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC4zcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4zcmVtO1xyXG4gICAgYmFja2dyb3VuZDogJGdyYXlpc2hCbHVlO1xyXG4gIH1cclxuXHJcbiAgLmNhbGwtdG8tYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWR2YW50YWdlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICRncmF5aXNoQmx1ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuN2VtO1xyXG5cclxuICAgIHNwYW46YmVmb3JlIHtcclxuICAgICAgY29sb3I6ICRzdHJvbmdDeWFuO1xyXG4gICAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xyXG4gICAgICBjb250ZW50OiAnXFxmMDBjJztcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMS41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBjb2xvcjogJHZlcnlQYWxlQmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya0JsdWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMy41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogJGxpZ2h0R3JheWlzaEJsdWUyO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtICRibHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLyoqIENvbG9ycyAqKi9cclxuLyoqKiBQcmltYXJ5ICoqKi9cclxuJHNvZnRDeWFuOiBoc2woMTc0LCA3NyUsIDgwJSk7XHJcbiRzdHJvbmdDeWFuOiBoc2woMTc0LCA4NiUsIDQ1JSk7XHJcbiRsaWdodFJlZDogaHNsKDE0LCA5MiUsIDk1JSk7XHJcbiRyZWQ6IGhzbCgxNSwgMTAwJSwgNzAlKTtcclxuJGJsdWU6IGhzbCgyMjYsIDEwMCUsIDg3JSk7XHJcblxyXG4vKioqIE5ldXRyYWwgKioqL1xyXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiR2ZXJ5UGFsZUJsdWU6IGhzbCgyMzAsIDEwMCUsIDk5JSk7XHJcbiRncmF5aXNoQmx1ZTogaHNsKDIyNSwgMjAlLCA2MCUpO1xyXG4kZGFya0JsdWU6IGhzbCgyMjcsIDM1JSwgMjUlKTtcclxuJGxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjQsIDY1JSwgOTUlKTtcclxuJGxpZ2h0R3JheWlzaEJsdWUyOiAgaHNsKDIyMywgNTAlLCA4NyUpO1xyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map