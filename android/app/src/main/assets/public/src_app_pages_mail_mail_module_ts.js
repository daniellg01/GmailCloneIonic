"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mail_mail_module_ts"],{

/***/ 8676:
/*!*****************************************************!*\
  !*** ./src/app/directives/hide-header.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideHeaderDirective": () => (/* binding */ HideHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 0] = "down";
})(Direction || (Direction = {}));
let HideHeaderDirective = class HideHeaderDirective {
    constructor(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.saveY = 0;
        this.direction = Direction.down;
        this.previousY = 0;
        this.scrollDistance = 50;
    }
    onContentScroll($event) {
        if ($event.detail.currentY <= 0 || $event.detail.currentY === this.saveY) {
            return;
        }
        const scrollTop = $event.detail.scrollTop;
        let newDirection = Direction.down;
        let newPosition = -scrollTop + this.previousY;
        if (this.saveY > $event.detail.currentY) {
            newDirection = Direction.up;
            newPosition -= this.scrollDistance;
        }
        if (newPosition < -this.scrollDistance) {
            newPosition = -this.scrollDistance;
        }
        // eslint-disable-next-line prefer-const
        let newOpacity = 1 - (newPosition / -this.scrollDistance);
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'top', Math.min(0, newPosition) + 'px');
            this.renderer.setStyle(this.header, 'opacity', newOpacity);
        });
        this.saveY = $event.detail.currentY;
        if (this.direction !== newDirection) {
            this.direction = newDirection;
            this.previousY = scrollTop;
        }
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.DomController }
];
HideHeaderDirective.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['appHideHeader',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionScroll', ['$event'],] }]
};
HideHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appHideHeader]'
    })
], HideHeaderDirective);



/***/ }),

/***/ 8665:
/*!********************************************************!*\
  !*** ./src/app/directives/shared-directives.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDirectivesModule": () => (/* binding */ SharedDirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _hide_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-header.directive */ 8676);




let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective]
    })
], SharedDirectivesModule);



/***/ }),

/***/ 3550:
/*!***************************************************!*\
  !*** ./src/app/pages/mail/mail-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPageRoutingModule": () => (/* binding */ MailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.page */ 8060);




const routes = [
    {
        path: '',
        component: _mail_page__WEBPACK_IMPORTED_MODULE_0__.MailPage
    }
];
let MailPageRoutingModule = class MailPageRoutingModule {
};
MailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MailPageRoutingModule);



/***/ }),

/***/ 5185:
/*!*******************************************!*\
  !*** ./src/app/pages/mail/mail.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPageModule": () => (/* binding */ MailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/shared-directives.module */ 8665);
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/account.module */ 6868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-routing.module */ 3550);
/* harmony import */ var _mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.page */ 8060);









let MailPageModule = class MailPageModule {
};
MailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__.MailPageRoutingModule,
            _account_account_module__WEBPACK_IMPORTED_MODULE_1__.AccountPageModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_0__.SharedDirectivesModule
        ],
        declarations: [_mail_page__WEBPACK_IMPORTED_MODULE_3__.MailPage]
    })
], MailPageModule);



/***/ }),

/***/ 8060:
/*!*****************************************!*\
  !*** ./src/app/pages/mail/mail.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPage": () => (/* binding */ MailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.page.html?ngResource */ 6033);
/* harmony import */ var _mail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.page.scss?ngResource */ 1596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _account_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.page */ 9610);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let MailPage = class MailPage {
    constructor(http, router, popoverCtrl) {
        this.http = http;
        this.router = router;
        this.popoverCtrl = popoverCtrl;
        this.emails = [];
    }
    ngOnInit() {
        this.http.get('https://devdactic.fra1.digitaloceanspaces.com/gmail/data.json').subscribe(res => {
            this.emails = res.map(email => {
                email.color = this.intoRGB(this.hashCode(email.from));
                return email;
            });
            console.log(this.emails);
        });
    }
    openAccount(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _account_account_page__WEBPACK_IMPORTED_MODULE_2__.AccountPage,
                event: ev,
                cssClass: 'custom-popover'
            });
            yield popover.present();
        });
    }
    openDetail(id) {
        this.router.navigate(['tabs', 'mail', id]);
    }
    handleRefresh(ev) {
        setTimeout(() => {
            ev.target.complete();
        }, 2000);
    }
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            // eslint-disable-next-line no-bitwise
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }
    intoRGB(i) {
        // eslint-disable-next-line no-bitwise
        const c = (i & 0x00ffffff).toString(16).toUpperCase();
        return '#' + '00000'.substring(0, 6 - c.length) + c;
    }
};
MailPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController }
];
MailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mail',
        template: _mail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MailPage);



/***/ }),

/***/ 1596:
/*!******************************************************!*\
  !*** ./src/app/pages/mail/mail.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 40px;\n}\n\n.email-circle {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #efefef;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n\n.preview {\n  margin: 15px;\n}\n\n.d-flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.search-overlay {\n  margin: 20px;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.search-overlay ion-row {\n  background-color: rgb(61, 106, 255);\n  margin: 40px 0;\n  box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);\n  border-radius: 10px;\n}\n\n.search-overlay ion-avatar, .search-overlay ion-input {\n  padding-right: 5px;\n  position: relative;\n  top: 5px;\n}\n\n.search-overlay ion-input {\n  position: relative;\n  top: 4px;\n}\n\nion-refresher {\n  margin-top: 120px;\n  z-index: 1;\n}\n\nion-list {\n  margin-top: 100px;\n}\n\n.email {\n  margin-bottom: 6px;\n}\n\n.email ion-label {\n  white-space: pre;\n}\n\n.email .excerpt {\n  padding-top: 4px;\n}\n\n.email .date {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFKRTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRCxRQUFBO0FBTUg7O0FBSkU7RUFDRSxrQkFBQTtFQUNELFFBQUE7QUFNSDs7QUFIQTtFQUNFLGlCQUFBO0VBQ0YsVUFBQTtBQU1BOztBQUpBO0VBQ0UsaUJBQUE7QUFPRjs7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7O0FBTkU7RUFDRSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UsZ0JBQUE7QUFRSjs7QUFORTtFQUNFLGdCQUFBO0FBUUoiLCJmaWxlIjoibWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLXBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5lbWFpbC1jaXJjbGV7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZWZlZmVmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnByZXZpZXd7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi5kLWZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5zZWFyY2gtb3ZlcmxheXtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpb24tcm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxMDYsIDI1NSk7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDVweCByZ2JhKDAsIDE0MiwgMjM2LCAwLjgxNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBpb24tYXZhdGFyLCBpb24taW5wdXR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHRvcDo1cHhcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB0b3A6NHB4XHJcbiAgfVxyXG59XHJcbmlvbi1yZWZyZXNoZXJ7XHJcbiAgbWFyZ2luLXRvcDoxMjBweDtcclxuei1pbmRleDogMTtcclxufVxyXG5pb24tbGlzdHtcclxuICBtYXJnaW4tdG9wOjEwMHB4O1xyXG59XHJcblxyXG4uZW1haWx7XHJcbiAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICB9XHJcbiAgLmV4Y2VycHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 6033:
/*!******************************************************!*\
  !*** ./src/app/pages/mail/mail.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content scrollEvents=\"true\" [appHideHeader]=\"search\">\n <div slot=\"fixed\" class=\"search-overlay\" #search>\n  <ion-row >\n    <ion-col size=\"2\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-input placeholder=\"Search in emails\"></ion-input>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-avatar (click)=\"openAccount($event)\">\n        <img src=\"../../../assets/avatar.jpg\" alt=\"\">\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n </div>\n\n <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n  <ion-refresher-content\n    pullingIcon=\"chevron-down-circle-outline\"\n    pullingText=\"Pull to refresh\"\n    refreshingSpinner=\"circles\"\n    refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n</ion-refresher>\n\n  <ion-list>\n    <ion-list-header>\n      Inbox\n    </ion-list-header>\n    <ion-item *ngFor=\"let m of emails\" class=\"email\" lines=\"none\">\n\n     <ion-row class=\"ion-align-items-center\">\n      <ion-col (cick)=\"openDetail(m.id)\" size=\"2\">\n        <div class=\"email-circle\" [style.background]=\"m.color\">\n        {{m.from | slice:0:1}}\n        </div>\n      </ion-col>\n    <ion-col  (cick)=\"openDetail(m.id)\" size=\"8\">\n        <ion-label [style.font-weight]=\"!m.read ? 'bold' :''\" color=\"dark\" class=\"preview ion-text-capitalize ion-text-wrap\">\n          {{ m.from.split('@')[0] }}\n          <p class=\"excerpt\">\n            {{ (m.content.length>50)? (m.content | slice:0:50)+'...' : (m.content)}}\n          </p>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"d-flex ion-text-right\" tappable (click)=\"m.star = !m.star;\">\n          <p class=\"date\">{{ m.date | date:'dd. MMM' }}</p>\n          <br>\n          <ion-icon slot=\"end\" [name]=\"m.star ? 'star' : 'star-outline'\" [color]=\"m.star ? 'warning' : 'medium'\"></ion-icon>\n        </div>\n      </ion-col>\n     </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mail_mail_module_ts.js.map