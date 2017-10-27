import { NgZone, Component, Optional, Input, Output } from '@angular/core';
import { EventEmitter, HostBinding, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig } from './swiper.interfaces';
var SwiperComponent = (function () {
    /**
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} defaults
     */
    function SwiperComponent(zone, elementRef, defaults) {
        this.zone = zone;
        this.elementRef = elementRef;
        this.defaults = defaults;
        this.index = null;
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.useSwiperClass = true;
        this.runInsideAngular = false;
        this.useSwiperWrapperClass = true;
        this.indexChange = new EventEmitter();
        this.S_INIT = new EventEmitter();
        this.S_DESTROY = new EventEmitter();
        this.S_SCROLL = new EventEmitter();
        this.S_PROGRESS = new EventEmitter();
        this.S_SETTRANSLATE = new EventEmitter();
        this.S_SETTRANSITION = new EventEmitter();
        this.S_AUTOPLAY = new EventEmitter();
        this.S_AUTOPLAYSTART = new EventEmitter();
        this.S_AUTOPLAYSTOP = new EventEmitter();
        this.S_REACHBEGINNING = new EventEmitter();
        this.S_REACHEND = new EventEmitter();
        this.S_SLIDECHANGESTART = new EventEmitter();
        this.S_SLIDECHANGEEND = new EventEmitter();
        this.S_SLIDENEXTSTART = new EventEmitter();
        this.S_SLIDENEXTEND = new EventEmitter();
        this.S_SLIDEPREVSTART = new EventEmitter();
        this.S_SLIDEPREVEND = new EventEmitter();
        this.S_SLIDERMOVE = new EventEmitter();
        this.S_CLICK = new EventEmitter();
        this.S_TAP = new EventEmitter();
        this.S_DOUBLETAP = new EventEmitter();
        this.S_TOUCHSTART = new EventEmitter();
        this.S_TOUCHMOVE = new EventEmitter();
        this.S_TOUCHMOVEOPPOSITE = new EventEmitter();
        this.S_TOUCHEND = new EventEmitter();
        this.S_TRANSITIONSTART = new EventEmitter();
        this.S_TRANSITIONEND = new EventEmitter();
        this.S_IMAGESREADY = new EventEmitter();
        this.S_LAZYIMAGELOAD = new EventEmitter();
        this.S_LAZYIMAGEREADY = new EventEmitter();
        this.S_PAGINATIONRENDERED = new EventEmitter();
    }
    Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
        /**
         * @return {?}
         */
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper) ?
                false : this.directiveRef.swiper.isEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        /**
         * @return {?}
         */
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper) ?
                false : this.directiveRef.swiper.isBeginning;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.updateClasses();
            _this.mo = new MutationObserver(function (mutations) {
                _this.updateClasses();
            });
            _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
        });
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngOnDestroy = function () {
        if (this.mo) {
            this.mo.disconnect();
        }
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.getConfig = function () {
        this.config = this.config || {};
        var /** @type {?} */ options = new SwiperConfig(this.defaults);
        options.assign(this.config); // Custom config
        if (options.scrollbar === true) {
            options.scrollbar = '.swiper-scrollbar';
        }
        if (options.pagination === true) {
            options.pagination = '.swiper-pagination';
        }
        if (options.prevButton === true) {
            options.prevButton = '.swiper-button-prev';
        }
        if (options.nextButton === true) {
            options.nextButton = '.swiper-button-next';
        }
        if (options.pagination === '.swiper-pagination' && !options.paginationBulletRender) {
            options.paginationClickable = false;
            if (!this.paginationBulletRender) {
                this.paginationBulletRender = function (swiper, index, className) {
                    var /** @type {?} */ bullet = "<span class=\"" + className + " " + className + "-middle\" index=\"" + index + "\"></span>";
                    if (index === 0) {
                        bullet = "<span class=\"" + className + " " + className + "-first\" index=\"" + index + "\"></span>";
                    }
                    else if (index === (swiper.slides.length - 1)) {
                        bullet = "<span class=\"" + className + " " + className + "-last\" index=\"" + index + "\"></span>";
                    }
                    return "<span class=\"swiper-pagination-handle\" index=\"" + index + "\">" + bullet + "</span>";
                };
            }
            options.paginationBulletRender = this.paginationBulletRender;
        }
        return options;
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.updateClasses = function () {
        var /** @type {?} */ updateNeeded = false;
        var /** @type {?} */ children = this.swiperSlides.nativeElement.children;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            if (!children[i].classList.contains('swiper-slide')) {
                updateNeeded = true;
                children[i].classList.add('swiper-slide');
            }
        }
        if (updateNeeded) {
            this.directiveRef.update();
        }
    };
    /**
     * @param {?=} updateTranslate
     * @return {?}
     */
    SwiperComponent.prototype.update = function (updateTranslate) {
        console.warn('Deprecated function, update needs to be called through directiveRef!');
        this.directiveRef.update(updateTranslate);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.getIndex = function () {
        console.warn('Deprecated function, getIndex needs to be called through directiveRef!');
        return this.directiveRef.getIndex();
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} callbacks
     * @return {?}
     */
    SwiperComponent.prototype.setIndex = function (index, speed, callbacks) {
        console.warn('Deprecated function, setIndex needs to be called through directiveRef!');
        this.directiveRef.setIndex(index, speed, callbacks);
    };
    /**
     * @param {?=} callbacks
     * @param {?=} speed
     * @return {?}
     */
    SwiperComponent.prototype.prevSlide = function (callbacks, speed) {
        console.warn('Deprecated function, prevSlide needs to be called through directiveRef!');
        this.directiveRef.prevSlide(speed, callbacks);
    };
    /**
     * @param {?=} callbacks
     * @param {?=} speed
     * @return {?}
     */
    SwiperComponent.prototype.nextSlide = function (callbacks, speed) {
        console.warn('Deprecated function, nextSlide needs to be called through directiveRef!');
        this.directiveRef.nextSlide(speed, callbacks);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.stopAutoplay = function () {
        console.warn('Deprecated function, stopAutoplay needs to be called through directiveRef!');
        this.directiveRef.stopAutoplay();
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.startAutoplay = function () {
        console.warn('Deprecated function, startAutoplay needs to be called through directiveRef!');
        this.directiveRef.startAutoplay();
    };
    SwiperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'swiper',
                    template: "<div class=\"swiper-container\" [swiper]=\"getConfig()\" [index]=\"index\" [hidden]=\"hidden\" [fxHide]=\"fxHide\" [fxShow]=\"fxShow\" [disabled]=\"disabled\" [useSwiperClass]=\"useSwiperClass\" [runInsideAngular]=\"runInsideAngular\" (indexChange)=\"indexChange.emit($event)\" (init)=\"S_INIT.emit($event)\" (destroy)=\"S_DESTROY.emit($event)\" (scroll)=\"S_SCROLL.emit($event)\" (progress)=\"S_PROGRESS.emit($event)\" (setTranslate)=\"S_SETTRANSLATE.emit($event)\" (setTransition)=\"S_SETTRANSITION.emit($event)\" (autoplay)=\"S_AUTOPLAY.emit($event)\" (autoplayStart)=\"S_AUTOPLAYSTART.emit($event)\" (autoplayStop)=\"S_AUTOPLAYSTOP.emit($event)\" (reachBeginning)=\"S_REACHBEGINNING.emit($event)\" (reachEnd)=\"S_REACHEND.emit($event)\" (slideChangeStart)=\"S_SLIDECHANGESTART.emit($event)\" (slideChangeEnd)=\"S_SLIDECHANGEEND.emit($event)\" (slideNextStart)=\"S_SLIDENEXTSTART.emit($event)\" (slideNextEnd)=\"S_SLIDENEXTEND.emit($event)\" (slidePrevStart)=\"S_SLIDEPREVSTART.emit($event)\" (slidePrevEnd)=\"S_SLIDEPREVEND.emit($event)\" (sliderMove)=\"S_SLIDERMOVE.emit($event)\" (swiperClick)=\"S_CLICK.emit($event)\" (swiperTap)=\"S_TAP.emit($event)\" (swiperDoubleTap)=\"S_DOUBLETAP.emit($event)\" (swiperTouchStart)=\"S_TOUCHSTART.emit($event)\" (swiperTouchMove)=\"S_TOUCHMOVE.emit($event)\" (swiperTouchMoveOpposite)=\"S_TOUCHMOVEOPPOSITE.emit($event)\" (swiperTouchEnd)=\"S_TOUCHEND.emit($event)\" (swiperTransitionStart)=\"S_TRANSITIONSTART.emit($event)\" (swiperTransitionEnd)=\"S_TRANSITIONEND.emit($event)\" (imagesReady)=\"S_IMAGESREADY.emit($event)\" (lazyImageLoad)=\"S_LAZYIMAGELOAD.emit($event)\" (lazyImageReady)=\"S_LAZYIMAGEREADY.emit($event)\" (paginationRendered)=\"S_PAGINATIONRENDERED.emit($event)\"> <div #swiperSlides class=\"swiper-wrapper\"> <ng-content></ng-content> </div> <div [hidden]=\"config?.scrollbar !== '.swiper-scrollbar'\" class=\"swiper-scrollbar\"></div> <div [hidden]=\"config?.prevButton !== '.swiper-button-prev'\" class=\"swiper-button-prev\" [attr.disabled]=\"isAtFirst || null\"></div> <div [hidden]=\"config?.nextButton !== '.swiper-button-next'\" class=\"swiper-button-next\" [attr.disabled]=\"isAtLast || null\"></div> <div [hidden]=\"config?.pagination !== '.swiper-pagination'\" class=\"swiper-pagination\" (click)=\"directiveRef.setIndex($event.target.getAttribute('index'))\"></div> </div> ",
                    styles: ["/** * Swiper 3.4.2 * Most modern mobile touch slider and framework with hardware accelerated transitions *  * http://www.idangero.us/swiper/ *  * Copyright 2017, Vladimir Kharlampidi * The iDangero.us * http://www.idangero.us/ *  * Licensed under MIT *  * Released on: March 10, 2017 */ .swiper-container { margin-left: auto; margin-right: auto; position: relative; overflow: hidden; z-index: 1; } .swiper-container-no-flexbox .swiper-slide { float: left; } .swiper-container-vertical > .swiper-wrapper { -webkit-box-orient: vertical; -moz-box-orient: vertical; -ms-flex-direction: column; -webkit-flex-direction: column; flex-direction: column; } .swiper-wrapper { position: relative; width: 100%; height: 100%; z-index: 1; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-transition-property: -webkit-transform; -moz-transition-property: -moz-transform; -o-transition-property: -o-transform; -ms-transition-property: -ms-transform; transition-property: transform; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; } .swiper-container-android .swiper-slide, .swiper-wrapper { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -o-transform: translate(0, 0); -ms-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } .swiper-container-multirow > .swiper-wrapper { -webkit-box-lines: multiple; -moz-box-lines: multiple; -ms-flex-wrap: wrap; -webkit-flex-wrap: wrap; flex-wrap: wrap; } .swiper-container-free-mode > .swiper-wrapper { -webkit-transition-timing-function: ease-out; -moz-transition-timing-function: ease-out; -ms-transition-timing-function: ease-out; -o-transition-timing-function: ease-out; transition-timing-function: ease-out; margin: 0 auto; } .swiper-slide { -webkit-flex-shrink: 0; -ms-flex: 0 0 auto; flex-shrink: 0; width: 100%; height: 100%; position: relative; } .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide { height: auto; } .swiper-container-autoheight .swiper-wrapper { -webkit-box-align: start; -ms-flex-align: start; -webkit-align-items: flex-start; align-items: flex-start; -webkit-transition-property: -webkit-transform,height; -moz-transition-property: -moz-transform; -o-transition-property: -o-transform; -ms-transition-property: -ms-transform; transition-property: transform,height; } .swiper-container .swiper-notification { position: absolute; left: 0; top: 0; pointer-events: none; opacity: 0; z-index: -1000; } .swiper-wp8-horizontal { -ms-touch-action: pan-y; touch-action: pan-y; } .swiper-wp8-vertical { -ms-touch-action: pan-x; touch-action: pan-x; } .swiper-button-next, .swiper-button-prev { position: absolute; top: 50%; width: 27px; height: 44px; margin-top: -22px; z-index: 10; cursor: pointer; -moz-background-size: 27px 44px; -webkit-background-size: 27px 44px; background-size: 27px 44px; background-position: center; background-repeat: no-repeat; } .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled { opacity: .35; cursor: auto; pointer-events: none; } .swiper-button-prev, .swiper-container-rtl .swiper-button-next { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\"); left: 10px; right: auto; } .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); } .swiper-button-prev.swiper-button-white, .swiper-container-rtl .swiper-button-next.swiper-button-white { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); } .swiper-button-next, .swiper-container-rtl .swiper-button-prev { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\"); right: 10px; left: auto; } .swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); } .swiper-button-next.swiper-button-white, .swiper-container-rtl .swiper-button-prev.swiper-button-white { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); } .swiper-pagination { position: absolute; text-align: center; -webkit-transition: .3s; -moz-transition: .3s; -o-transition: .3s; transition: .3s; -webkit-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); z-index: 10; } .swiper-pagination.swiper-pagination-hidden { opacity: 0; } .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction { bottom: 10px; left: 0; width: 100%; } .swiper-pagination-bullet { width: 8px; height: 8px; display: inline-block; border-radius: 100%; background: #000; opacity: .2; } button.swiper-pagination-bullet { border: none; margin: 0; padding: 0; box-shadow: none; -moz-appearance: none; -ms-appearance: none; -webkit-appearance: none; appearance: none; } .swiper-pagination-clickable .swiper-pagination-bullet { cursor: pointer; } .swiper-pagination-white .swiper-pagination-bullet { background: #fff; } .swiper-pagination-bullet-active { opacity: 1; background: #007aff; } .swiper-pagination-white .swiper-pagination-bullet-active { background: #fff; } .swiper-pagination-black .swiper-pagination-bullet-active { background: #000; } .swiper-container-vertical > .swiper-pagination-bullets { right: 10px; top: 50%; -webkit-transform: translate3d(0, -50%, 0); -moz-transform: translate3d(0, -50%, 0); -o-transform: translate(0, -50%); -ms-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); } .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet { margin: 5px 0; display: block; } .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet { margin: 0 5px; } .swiper-pagination-progress { background: rgba(0, 0, 0, 0.25); position: absolute; } .swiper-pagination-progress .swiper-pagination-progressbar { background: #007aff; position: absolute; left: 0; top: 0; width: 100%; height: 100%; -webkit-transform: scale(0); -ms-transform: scale(0); -o-transform: scale(0); transform: scale(0); -webkit-transform-origin: left top; -moz-transform-origin: left top; -ms-transform-origin: left top; -o-transform-origin: left top; transform-origin: left top; } .swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar { -webkit-transform-origin: right top; -moz-transform-origin: right top; -ms-transform-origin: right top; -o-transform-origin: right top; transform-origin: right top; } .swiper-container-horizontal > .swiper-pagination-progress { width: 100%; height: 4px; left: 0; top: 0; } .swiper-container-vertical > .swiper-pagination-progress { width: 4px; height: 100%; left: 0; top: 0; } .swiper-pagination-progress.swiper-pagination-white { background: rgba(255, 255, 255, 0.5); } .swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar { background: #fff; } .swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar { background: #000; } .swiper-container-3d { -webkit-perspective: 1200px; -moz-perspective: 1200px; -o-perspective: 1200px; perspective: 1200px; } .swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper { -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -ms-transform-style: preserve-3d; transform-style: preserve-3d; } .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top { position: absolute; left: 0; top: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10; } .swiper-container-3d .swiper-slide-shadow-left { background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(transparent)); background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), transparent); background-image: -moz-linear-gradient(right, rgba(0, 0, 0, 0.5), transparent); background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), transparent); background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent); } .swiper-container-3d .swiper-slide-shadow-right { background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(transparent)); background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), transparent); background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5), transparent); background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), transparent); background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent); } .swiper-container-3d .swiper-slide-shadow-top { background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(transparent)); background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent); background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent); background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent); background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent); } .swiper-container-3d .swiper-slide-shadow-bottom { background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(transparent)); background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), transparent); background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.5), transparent); background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), transparent); background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent); } .swiper-container-coverflow .swiper-wrapper, .swiper-container-flip .swiper-wrapper { -ms-perspective: 1200px; } .swiper-container-cube, .swiper-container-flip { overflow: visible; } .swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide { pointer-events: none; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -ms-backface-visibility: hidden; backface-visibility: hidden; z-index: 1; } .swiper-container-cube .swiper-slide .swiper-slide, .swiper-container-flip .swiper-slide .swiper-slide { pointer-events: none; } .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active, .swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active { pointer-events: auto; } .swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top, .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top { z-index: 0; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -ms-backface-visibility: hidden; backface-visibility: hidden; } .swiper-container-cube .swiper-slide { visibility: hidden; -webkit-transform-origin: 0 0; -moz-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; width: 100%; height: 100%; } .swiper-container-cube.swiper-container-rtl .swiper-slide { -webkit-transform-origin: 100% 0; -moz-transform-origin: 100% 0; -ms-transform-origin: 100% 0; transform-origin: 100% 0; } .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev { pointer-events: auto; visibility: visible; } .swiper-container-cube .swiper-cube-shadow { position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; background: #000; opacity: .6; -webkit-filter: blur(50px); filter: blur(50px); z-index: 0; } .swiper-container-fade.swiper-container-free-mode .swiper-slide { -webkit-transition-timing-function: ease-out; -moz-transition-timing-function: ease-out; -ms-transition-timing-function: ease-out; -o-transition-timing-function: ease-out; transition-timing-function: ease-out; } .swiper-container-fade .swiper-slide { pointer-events: none; -webkit-transition-property: opacity; -moz-transition-property: opacity; -o-transition-property: opacity; transition-property: opacity; } .swiper-container-fade .swiper-slide .swiper-slide { pointer-events: none; } .swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active { pointer-events: auto; } .swiper-zoom-container { width: 100%; height: 100%; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-pack: center; -moz-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -moz-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; text-align: center; } .swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg { max-width: 100%; max-height: 100%; object-fit: contain; } .swiper-scrollbar { border-radius: 10px; position: relative; -ms-touch-action: none; background: rgba(0, 0, 0, 0.1); } .swiper-container-horizontal > .swiper-scrollbar { position: absolute; left: 1%; bottom: 3px; z-index: 50; height: 5px; width: 98%; } .swiper-container-vertical > .swiper-scrollbar { position: absolute; right: 3px; top: 1%; z-index: 50; width: 5px; height: 98%; } .swiper-scrollbar-drag { height: 100%; width: 100%; position: relative; background: rgba(0, 0, 0, 0.5); border-radius: 10px; left: 0; top: 0; } .swiper-scrollbar-cursor-drag { cursor: move; } .swiper-lazy-preloader { width: 42px; height: 42px; position: absolute; left: 50%; top: 50%; margin-left: -21px; margin-top: -21px; z-index: 10; -webkit-transform-origin: 50%; -moz-transform-origin: 50%; transform-origin: 50%; -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite; -moz-animation: swiper-preloader-spin 1s steps(12, end) infinite; animation: swiper-preloader-spin 1s steps(12, end) infinite; } .swiper-lazy-preloader:after { display: block; content: \"\"; width: 100%; height: 100%; background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); background-position: 50%; -webkit-background-size: 100%; background-size: 100%; background-repeat: no-repeat; } .swiper-lazy-preloader-white:after { background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); } @-webkit-keyframes swiper-preloader-spin { 100% { -webkit-transform: rotate(360deg); } } @keyframes swiper-preloader-spin { 100% { transform: rotate(360deg); } } swiper.s-wrapper[fxflex], swiper.s-wrapper[fxlayout], swiper.s-wrapper[fxflexfill] { display: flex; flex-direction: inherit; -webkit-box-orient: inherit; -webkit-box-direction: inherit; align-item: inherit; place-content: inherit; -webkit-box-pack: inherit; -webkit-box-align: inherit; } swiper.s-wrapper[fxflex] > .swiper, swiper.s-wrapper[fxlayout] > .swiper, swiper.s-wrapper[fxflexfill] > .swiper { display: flex; flex: 1 1 auto; -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex-direction: inherit; -webkit-box-orient: inherit; -webkit-box-direction: inherit; align-item: inherit; place-content: inherit; -webkit-box-pack: inherit; -webkit-box-align: inherit; } swiper.s-wrapper > .swiper { width: 100%; height: 100%; } swiper.s-wrapper > .swiper .swiper-wrapper .swiper-slide, swiper.s-wrapper > .swiper .swiper-wrapper .swiper-slide-content { overflow: auto; width: 100%; height: 100%; max-width: 100%; max-height: 100%; } swiper.s-wrapper > .swiper .swiper-pagination { pointer-events: none; } swiper.s-wrapper > .swiper .swiper-pagination .swiper-pagination-handle { position: relative; padding: 4px; margin: 2px; cursor: pointer; pointer-events: all; } swiper.s-wrapper > .swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet { margin: 0; } swiper.s-wrapper > .swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-last, swiper.s-wrapper > .swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-first { border: 1px solid rgba(0, 0, 0, 0.5); } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-button-prev { top: 10px; left: 50%; margin-top: 0; margin-left: -13px; transform: rotate(90deg); } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-button-next { top: auto; bottom: 10px; left: 50%; margin-top: 0; margin-left: -13px; transform: rotate(90deg); } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-scrollbar { width: 8px; transition: width 250ms ease-in-out; } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-scrollbar:hover { width: 16px; } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle { display: block; } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet { display: inline-block; } swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last, swiper.s-wrapper > .swiper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first { margin: 0 -1px; } swiper.s-wrapper > .swiper.swiper-container-horizontal > .swiper-scrollbar { height: 8px; transition: height 250ms ease-in-out; } swiper.s-wrapper > .swiper.swiper-container-horizontal > .swiper-scrollbar:hover { height: 16px; } swiper.s-wrapper > .swiper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last, swiper.s-wrapper > .swiper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first { margin: -1px 0; } "],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /**
     * @nocollapse
     */
    SwiperComponent.ctorParameters = function () { return [
        { type: NgZone, },
        { type: ElementRef, },
        { type: SwiperConfig, decorators: [{ type: Optional },] },
    ]; };
    SwiperComponent.propDecorators = {
        'index': [{ type: Input },],
        'fxShow': [{ type: Input },],
        'fxHide': [{ type: Input },],
        'hidden': [{ type: HostBinding, args: ['hidden',] }, { type: Input },],
        'disabled': [{ type: Input },],
        'config': [{ type: Input },],
        'useSwiperClass': [{ type: Input },],
        'runInsideAngular': [{ type: Input },],
        'useSwiperWrapperClass': [{ type: HostBinding, args: ['class.s-wrapper',] }, { type: Input },],
        'indexChange': [{ type: Output },],
        'swiperSlides': [{ type: ViewChild, args: ['swiperSlides',] },],
        'directiveRef': [{ type: ViewChild, args: [SwiperDirective,] },],
        'S_INIT': [{ type: Output, args: ['init',] },],
        'S_DESTROY': [{ type: Output, args: ['destroy',] },],
        'S_SCROLL': [{ type: Output, args: ['scroll',] },],
        'S_PROGRESS': [{ type: Output, args: ['progress',] },],
        'S_SETTRANSLATE': [{ type: Output, args: ['setTranslate',] },],
        'S_SETTRANSITION': [{ type: Output, args: ['setTransition',] },],
        'S_AUTOPLAY': [{ type: Output, args: ['autoplay',] },],
        'S_AUTOPLAYSTART': [{ type: Output, args: ['autoplayStart',] },],
        'S_AUTOPLAYSTOP': [{ type: Output, args: ['autoplayStop',] },],
        'S_REACHBEGINNING': [{ type: Output, args: ['reachBeginning',] },],
        'S_REACHEND': [{ type: Output, args: ['reachEnd',] },],
        'S_SLIDECHANGESTART': [{ type: Output, args: ['slideChangeStart',] },],
        'S_SLIDECHANGEEND': [{ type: Output, args: ['slideChangeEnd',] },],
        'S_SLIDENEXTSTART': [{ type: Output, args: ['slideNextStart',] },],
        'S_SLIDENEXTEND': [{ type: Output, args: ['slideNextEnd',] },],
        'S_SLIDEPREVSTART': [{ type: Output, args: ['slidePrevStart',] },],
        'S_SLIDEPREVEND': [{ type: Output, args: ['slidePrevEnd',] },],
        'S_SLIDERMOVE': [{ type: Output, args: ['sliderMove',] },],
        'S_CLICK': [{ type: Output, args: ['swiperClick',] },],
        'S_TAP': [{ type: Output, args: ['swiperTap',] },],
        'S_DOUBLETAP': [{ type: Output, args: ['swiperDoubleTap',] },],
        'S_TOUCHSTART': [{ type: Output, args: ['swiperTouchStart',] },],
        'S_TOUCHMOVE': [{ type: Output, args: ['swiperTouchMove',] },],
        'S_TOUCHMOVEOPPOSITE': [{ type: Output, args: ['swiperTouchMoveOpposite',] },],
        'S_TOUCHEND': [{ type: Output, args: ['swiperTouchEnd',] },],
        'S_TRANSITIONSTART': [{ type: Output, args: ['swiperTransitionStart',] },],
        'S_TRANSITIONEND': [{ type: Output, args: ['swiperTransitionEnd',] },],
        'S_IMAGESREADY': [{ type: Output, args: ['imagesReady',] },],
        'S_LAZYIMAGELOAD': [{ type: Output, args: ['lazyImageLoad',] },],
        'S_LAZYIMAGEREADY': [{ type: Output, args: ['lazyImageReady',] },],
        'S_PAGINATIONRENDERED': [{ type: Output, args: ['paginationRendered',] },],
    };
    return SwiperComponent;
}());
export { SwiperComponent };
function SwiperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SwiperComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SwiperComponent.ctorParameters;
    /** @type {?} */
    SwiperComponent.propDecorators;
    /** @type {?} */
    SwiperComponent.prototype.mo;
    /** @type {?} */
    SwiperComponent.prototype.paginationBulletRender;
    /** @type {?} */
    SwiperComponent.prototype.index;
    /** @type {?} */
    SwiperComponent.prototype.fxShow;
    /** @type {?} */
    SwiperComponent.prototype.fxHide;
    /** @type {?} */
    SwiperComponent.prototype.hidden;
    /** @type {?} */
    SwiperComponent.prototype.disabled;
    /** @type {?} */
    SwiperComponent.prototype.config;
    /** @type {?} */
    SwiperComponent.prototype.useSwiperClass;
    /** @type {?} */
    SwiperComponent.prototype.runInsideAngular;
    /** @type {?} */
    SwiperComponent.prototype.useSwiperWrapperClass;
    /** @type {?} */
    SwiperComponent.prototype.indexChange;
    /** @type {?} */
    SwiperComponent.prototype.swiperSlides;
    /** @type {?} */
    SwiperComponent.prototype.directiveRef;
    /** @type {?} */
    SwiperComponent.prototype.S_INIT;
    /** @type {?} */
    SwiperComponent.prototype.S_DESTROY;
    /** @type {?} */
    SwiperComponent.prototype.S_SCROLL;
    /** @type {?} */
    SwiperComponent.prototype.S_PROGRESS;
    /** @type {?} */
    SwiperComponent.prototype.S_SETTRANSLATE;
    /** @type {?} */
    SwiperComponent.prototype.S_SETTRANSITION;
    /** @type {?} */
    SwiperComponent.prototype.S_AUTOPLAY;
    /** @type {?} */
    SwiperComponent.prototype.S_AUTOPLAYSTART;
    /** @type {?} */
    SwiperComponent.prototype.S_AUTOPLAYSTOP;
    /** @type {?} */
    SwiperComponent.prototype.S_REACHBEGINNING;
    /** @type {?} */
    SwiperComponent.prototype.S_REACHEND;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDECHANGESTART;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDECHANGEEND;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDENEXTSTART;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDENEXTEND;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDEPREVSTART;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDEPREVEND;
    /** @type {?} */
    SwiperComponent.prototype.S_SLIDERMOVE;
    /** @type {?} */
    SwiperComponent.prototype.S_CLICK;
    /** @type {?} */
    SwiperComponent.prototype.S_TAP;
    /** @type {?} */
    SwiperComponent.prototype.S_DOUBLETAP;
    /** @type {?} */
    SwiperComponent.prototype.S_TOUCHSTART;
    /** @type {?} */
    SwiperComponent.prototype.S_TOUCHMOVE;
    /** @type {?} */
    SwiperComponent.prototype.S_TOUCHMOVEOPPOSITE;
    /** @type {?} */
    SwiperComponent.prototype.S_TOUCHEND;
    /** @type {?} */
    SwiperComponent.prototype.S_TRANSITIONSTART;
    /** @type {?} */
    SwiperComponent.prototype.S_TRANSITIONEND;
    /** @type {?} */
    SwiperComponent.prototype.S_IMAGESREADY;
    /** @type {?} */
    SwiperComponent.prototype.S_LAZYIMAGELOAD;
    /** @type {?} */
    SwiperComponent.prototype.S_LAZYIMAGEREADY;
    /** @type {?} */
    SwiperComponent.prototype.S_PAGINATIONRENDERED;
    /** @type {?} */
    SwiperComponent.prototype.zone;
    /** @type {?} */
    SwiperComponent.prototype.elementRef;
    /** @type {?} */
    SwiperComponent.prototype.defaults;
}
//# sourceMappingURL=swiper.component.js.map