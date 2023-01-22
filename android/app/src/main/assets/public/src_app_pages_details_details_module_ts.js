"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page.html?ngResource */ 6366);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DetailsPage = class DetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailsPage.ctorParameters = () => [];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-details',
        template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 791:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6366:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map