(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"]
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-header></app-header>\r\n<!-- Content-->\r\n<router-outlet></router-outlet>\r\n<!-- Footer-->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setCommonData();
    };
    AppComponent.prototype.setCommonData = function () {
        this.appService.setCommonData();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: PlunkerMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlunkerMaterialModule", function() { return PlunkerMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _core_ui_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/ui/dropdown-menu/dropdown.component */ "./src/app/core/ui/dropdown-menu/dropdown.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PlunkerMaterialModule = /** @class */ (function () {
    function PlunkerMaterialModule() {
    }
    PlunkerMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            ]
        })
    ], PlunkerMaterialModule);
    return PlunkerMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                // UI
                _core_ui_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"],
                // App
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // index
                _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
            ],
            imports: [
                // UI
                PlunkerMaterialModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                // App
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                // Router
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService_1 = AppService;
    AppService.prototype.setCommonData = function () {
        AppService_1.TreatmentItemsName = '服務項目';
        var items = [];
        items[0] = { label: '五十肩' };
        items[1] = { label: '肢體障礙' };
        AppService_1.ItemsSource = items;
    };
    AppService.prototype.getItemsSource = function () {
        return {
            name: AppService_1.TreatmentItemsName,
            items: AppService_1.ItemsSource
        };
    };
    AppService = AppService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppService);
    return AppService;
    var AppService_1;
}());



/***/ }),

/***/ "./src/app/core/ui/dropdown-menu/dropdown.component.css":
/*!**************************************************************!*\
  !*** ./src/app/core/ui/dropdown-menu/dropdown.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon-button{\r\n    line-height: 0;\r\n    height: 0;\r\n    width: 50px;\r\n    font-family: Microsoft JhengHei;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.mat-menu-item{\r\n    font-family: Microsoft JhengHei;\r\n}"

/***/ }),

/***/ "./src/app/core/ui/dropdown-menu/dropdown.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/ui/dropdown-menu/dropdown.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    {{itemsSource.name}}\r\n</button>\r\n<mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item  *ngFor=\"let item of itemsSource.items\">\r\n        <span>{{item.label}}</span>\r\n    </button>\r\n</mat-menu>\r\n\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/core/ui/dropdown-menu/dropdown.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/ui/dropdown-menu/dropdown.component.ts ***!
  \*************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Menu with icons
 */
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], DropdownComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "itemsSource", void 0);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropdown-menu',
            inputs: ['items'],
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/core/ui/dropdown-menu/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/core/ui/dropdown-menu/dropdown.component.css")]
        })
    ], DropdownComponent);
    return DropdownComponent;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <section class=\"well3\">\r\n      <div class=\"container\">\r\n        <ul class=\"row contact-list\">\r\n          <li class=\"grid_4\">\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-map-marker\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\">\r\n                <address>4578 Marmora Road,Glasgow<br/> D04 89GR</address>\r\n              </div>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-envelope\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\"><a href=\"mailto:#\">info@demolink.org</a></div>\r\n            </div>\r\n          </li>\r\n          <li class=\"grid_4\">\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-phone\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\"><a href=\"callto:#\">800-2345-6789</a></div>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-fax\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\"><a href=\"callto:#\">800-2345-6790</a></div>\r\n            </div>\r\n          </li>\r\n          <li class=\"grid_4\">\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-facebook\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\"><a href=\"#\">Follow on facebook</a></div>\r\n            </div>\r\n            <div class=\"box\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon2 fa-twitter\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\"><a href=\"#\">Follow on Twitter</a></div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <section>\r\n      <div class=\"container\">\r\n        <div class=\"copyright\">Business Company © <span id=\"copyright-year\"></span>.&nbsp;&nbsp;<a href=\"index-5.html\">Privacy Policy</a>More Business Templates at <a rel=\"nofollow\" href=\"http://www.templatemonster.com/category.php?category=418&type=1\" target=\"_blank\">TemplateMonster.com</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imgWeather{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <div class=\"brand\">\r\n      <h1 class=\"brand_name\">\r\n        <a href=\"./\">温老師</a>\r\n      </h1>\r\n      <p class=\"brand_slogan\">物理治療所</p>\r\n    </div>\r\n    <a href=\"callto:#\" class=\"fa-phone\">800-2345-6789</a>\r\n    <p>AM 8:00 ~ PM 20:00</p>\r\n  </div>\r\n  <div id=\"stuck_container\" class=\"stuck_container\">\r\n    <div class=\"container\">\r\n      <nav class=\"nav\">\r\n        <ul data-type=\"navbar\" class=\"sf-menu\">\r\n          <li class=\"active\">\r\n            <a href=\"javascript:void(0);\">首頁</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\">\r\n              <dropdown-menu [itemsSource]='treatmentItems'></dropdown-menu>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"index-3.html\">FAQS</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"index-4.html\">Contacts</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService, headerService) {
        this.appService = appService;
        this.headerService = headerService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.treatmentItems = this.appService.getItemsSource();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _header_service__WEBPACK_IMPORTED_MODULE_0__["HeaderService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _header_service__WEBPACK_IMPORTED_MODULE_0__["HeaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.service.ts":
/*!******************************************!*\
  !*** ./src/app/header/header.service.ts ***!
  \******************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
    }
    HeaderService.prototype.getWeather = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].sourceUrl + '/weather/warning');
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <section class=\"camera_container\">\r\n      <div id=\"camera\" class=\"camera_wrap\">\r\n        <div data-src=\"images/page-1_slide01.jpg\">\r\n          <div class=\"camera_caption fadeIn\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"preffix_6 grid_6\">Helping with any of your business needs!</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div data-src=\"images/page-1_slide02.jpg\">\r\n          <div class=\"camera_caption fadeIn\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"preffix_6 grid_6\">The best strategies to attract new business</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div data-src=\"images/page-1_slide03.jpg\">\r\n          <div class=\"camera_caption fadeIn\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"preffix_6 grid_6\">A wide range of global business information</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section>\r\n      <div class=\"container banner_wr\">\r\n        <ul class=\"banner\">\r\n          <li>\r\n            <div class=\"fa-globe\"></div>\r\n            <h3>Global<br/>research</h3>\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p><a href=\"#\"></a>\r\n          </li>\r\n          <li>\r\n            <div class=\"fa-lightbulb-o\"></div>\r\n            <h3>Creative<br/>ideas</h3>\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p><a href=\"#\"></a>\r\n          </li>\r\n          <li>\r\n            <div class=\"fa-cog\"></div>\r\n            <h3>New<br/>services</h3>\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p><a href=\"#\"></a>\r\n          </li>\r\n          <li>\r\n            <div class=\"fa-briefcase\"></div>\r\n            <h3>Pro<br/>management</h3>\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p><a href=\"#\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <section class=\"well ins1\">\r\n      <div class=\"container hr\">\r\n        <ul class=\"row product-list\">\r\n          <li class=\"grid_6\">\r\n            <div class=\"box wow fadeInRight\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon fa-comments\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\">\r\n                <h3><a href=\"#\">Incididunt ut labore et dolore</a></h3>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <div data-wow-delay=\"0.2s\" class=\"box wow fadeInRight\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon fa-calendar-o\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\">\r\n                <h3><a href=\"#\">Incididunt ut labore et dolore</a></h3>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"grid_6\">\r\n            <div data-wow-delay=\"0.3s\" class=\"box wow fadeInRight\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon fa-group\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\">\r\n                <h3><a href=\"#\">Incididunt ut labore et dolore</a></h3>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <div data-wow-delay=\"0.4s\" class=\"box wow fadeInRight\">\r\n              <div class=\"box_aside\">\r\n                <div class=\"icon fa-thumbs-up\"></div>\r\n              </div>\r\n              <div class=\"box_cnt__no-flow\">\r\n                <h3><a href=\"#\">Incididunt ut labore et dolore</a></h3>\r\n                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <section class=\"well1\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"grid_4\">\r\n            <h2>About</h2><img src=\"/assets/images/page-1_img01.jpg\" alt=\"\">\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p><a href=\"#\" class=\"btn\">Read more</a>\r\n          </div>\r\n          <div class=\"grid_4\">\r\n            <h2>Services</h2>\r\n            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n            <ul class=\"marked-list\">\r\n              <li><a href=\"#\">Lorem ipsum dolor sit amet </a></li>\r\n              <li><a href=\"#\">Conse ctetur adipisicing</a></li>\r\n              <li><a href=\"#\">Elit sed do eiusmod tempor</a></li>\r\n              <li><a href=\"#\">Incididunt ut labore</a></li>\r\n              <li><a href=\"#\">Et dolore magna aliqua</a></li>\r\n              <li><a href=\"#\">Ut enim ad minim veniam</a></li>\r\n              <li><a href=\"#\">Quis nostrud exercitation</a></li>\r\n              <li><a href=\"#\">Incididunt ut labore</a></li>\r\n              <li><a href=\"#\">Et dolore magna aliqua</a></li>\r\n            </ul><a href=\"#\" class=\"btn\">Read more</a>\r\n          </div>\r\n          <div class=\"grid_4\">\r\n            <div class=\"info-box\">\r\n              <h2 class=\"fa-comment\">Help center</h2>\r\n              <hr>\r\n              <h3>Ask professionals:</h3>\r\n              <dl>\r\n                <dt>Monday - Friday:</dt>\r\n                <dd>8am-7pm</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Saturday:</dt>\r\n                <dd>8am-5pm</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Sunday:</dt>\r\n                <dd>1pm-5pm</dd>\r\n              </dl>\r\n              <hr>\r\n              <h3>24/7 Online Support:</h3>\r\n              <dl>\r\n                <dt>800-2345-6789</dt>\r\n              </dl>\r\n            </div>\r\n            <div class=\"owl-carousel\">\r\n              <div class=\"item\">\r\n                <blockquote class=\"box\">\r\n                  <div class=\"box_aside\"><img src=\"/assets/images/page-1_img02.jpg\" alt=\"\"></div>\r\n                  <div class=\"box_cnt__no-flow\">\r\n                    <p>\r\n                      <q>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</q>\r\n                    </p>\r\n                    <cite><a href=\"#\">Incididunt ut labor</a></cite>\r\n                  </div>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"item\">\r\n                <blockquote class=\"box\">\r\n                  <div class=\"box_aside\"><img src=\"/assets/images/page-1_img03.jpg\" alt=\"\"></div>\r\n                  <div class=\"box_cnt__no-flow\">\r\n                    <p>\r\n                      <q>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</q>\r\n                    </p>\r\n                    <cite><a href=\"#\">Incididunt ut labor</a></cite>\r\n                  </div>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"item\">\r\n                <blockquote class=\"box\">\r\n                  <div class=\"box_aside\"><img src=\"/assets/images/page-1_img04.jpg\" alt=\"\"></div>\r\n                  <div class=\"box_cnt__no-flow\">\r\n                    <p>\r\n                      <q>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</q>\r\n                    </p>\r\n                    <cite><a href=\"#\">Incididunt ut labor</a></cite>\r\n                  </div>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"item\">\r\n                <blockquote class=\"box\">\r\n                  <div class=\"box_aside\"><img src=\"/assets/images/page-1_img05.jpg\" alt=\"\"></div>\r\n                  <div class=\"box_cnt__no-flow\">\r\n                    <p>\r\n                      <q>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</q>\r\n                    </p>\r\n                    <cite><a href=\"#\">Incididunt ut labor</a></cite>\r\n                  </div>\r\n                </blockquote>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.service */ "./src/app/index/index.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(appService) {
        this.appService = appService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        // this.getServiceHighLights();
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")],
            providers: [_index_service__WEBPACK_IMPORTED_MODULE_0__["IndexService"]]
        }),
        __metadata("design:paramtypes", [_index_service__WEBPACK_IMPORTED_MODULE_0__["IndexService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/index.service.ts":
/*!****************************************!*\
  !*** ./src/app/index/index.service.ts ***!
  \****************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexService = /** @class */ (function () {
    function IndexService() {
    }
    IndexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    sourceUrl: "localhost:8080/girlfirend/api"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\girlfriend\src\main\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map