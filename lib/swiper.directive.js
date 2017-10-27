import { NgZone, KeyValueDiffers } from '@angular/core';
import { Directive, Optional } from '@angular/core';
import { Input, HostBinding, Output, EventEmitter, ElementRef } from '@angular/core';
import { SwiperConfig, SwiperEvents } from './swiper.interfaces';
var SwiperDirective = (function () {
    /**
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} differs
     * @param {?} defaults
     */
    function SwiperDirective(zone, elementRef, differs, defaults) {
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.useSwiperClass = true;
        this.runInsideAngular = false;
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
    Object.defineProperty(SwiperDirective.prototype, "index", {
        /**
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ element = this.elementRef.nativeElement;
        var /** @type {?} */ options = new SwiperConfig(this.defaults);
        options.assign(this.config); // Custom config
        if (this.initialIndex != null) {
            options.initialSlide = this.initialIndex;
        }
        var /** @type {?} */ onSlideChangeStart = options.onSlideChangeStart;
        var /** @type {?} */ onScrollbarDragEnd = options.onScrollbarDragEnd;
        options.onSlideChangeStart = function (swiper) {
            if (onSlideChangeStart) {
                onSlideChangeStart(swiper);
            }
            _this.zone.run(function () {
                _this.indexChange.emit(swiper.snapIndex);
            });
        };
        options.onScrollbarDragEnd = function (swiper) {
            if (onScrollbarDragEnd) {
                onScrollbarDragEnd(swiper);
            }
            _this.zone.run(function () {
                _this.indexChange.emit(swiper.snapIndex);
            });
        };
        if (typeof options.scrollbar === 'string') {
            options.scrollbar = element.querySelector(options.scrollbar);
        }
        if (typeof options.pagination === 'string') {
            options.pagination = element.querySelector(options.pagination);
        }
        if (typeof options.prevButton === 'string') {
            options.prevButton = element.querySelector(options.prevButton);
        }
        if (typeof options.nextButton === 'string') {
            options.nextButton = element.querySelector(options.nextButton);
        }
        import(/* webpackChunkName: swiper */ 'swiper').then(function (Swiper) {
            if (_this.runInsideAngular) {
                _this.swiper = new Swiper(element, options);
            }
            else {
                _this.zone.runOutsideAngular(function () {
                    _this.swiper = new Swiper(element, options);
                });
            }
            _this.S_INIT.emit(_this.swiper);
            // Add native swiper event handling
            SwiperEvents.forEach(function (eventName) {
                eventName = eventName.replace('swiper', '');
                eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
                _this.swiper.on(eventName, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (args.length === 1) {
                        args = args[0];
                    }
                    if (_this["S_" + eventName.toUpperCase()]) {
                        _this["S_" + eventName.toUpperCase()].emit(args);
                    }
                });
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create(null);
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.configDiff) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.initialIndex = this.getIndex();
                changes.forEachAddedItem(function (changed) {
                    if (changed.key === 'initialSlide') {
                        _this.initialIndex = _this.config.initialSlide;
                    }
                });
                this.ngOnDestroy();
                // Timeout is needed for the styles to update properly
                setTimeout(function () {
                    _this.ngOnInit();
                }, 0);
            }
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.destroy(true, true);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.destroy(true, true);
                });
            }
            this.swiper = null;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SwiperDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.swiper && ((changes['hidden'] && this.hidden) ||
            (changes['fxHide'] && this.fxHide) || (changes['fxShow'] && !this.fxShow))) {
            // For some reason resize causes Swiper to change index when hidden
            this.initialIndex = this.swiper.activeIndex || 0;
        }
        if (this.swiper && ((changes['hidden'] && !this.hidden) ||
            (changes['fxHide'] && !this.fxHide) || (changes['fxShow'] && this.fxShow))) {
            // For some reason resize causes Swiper to change index when hidden
            this.swiper.activeIndex = this.initialIndex || 0;
            this.update(true);
        }
        if (this.swiper && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    if (this.runInsideAngular) {
                        this.swiper.lockSwipes();
                    }
                    else {
                        this.zone.runOutsideAngular(function () {
                            _this.swiper.lockSwipes();
                        });
                    }
                }
                else if (changes['disabled'].currentValue === false) {
                    if (this.runInsideAngular) {
                        this.swiper.unlockSwipes();
                    }
                    else {
                        this.zone.runOutsideAngular(function () {
                            _this.swiper.unlockSwipes();
                        });
                    }
                }
            }
        }
    };
    /**
     * @param {?=} updateTranslate
     * @return {?}
     */
    SwiperDirective.prototype.update = function (updateTranslate) {
        var _this = this;
        setTimeout(function () {
            if (_this.swiper) {
                if (_this.runInsideAngular) {
                    _this.swiper.update();
                    if (updateTranslate) {
                        setTimeout(function () {
                            if (_this.swiper) {
                                _this.swiper.update(true);
                            }
                        }, 0);
                    }
                }
                else {
                    _this.zone.runOutsideAngular(function () {
                        _this.swiper.update();
                        if (updateTranslate) {
                            setTimeout(function () {
                                if (_this.swiper) {
                                    _this.swiper.update(true);
                                }
                            }, 0);
                        }
                    });
                }
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.getIndex = function () {
        if (!this.swiper) {
            return this.initialIndex;
        }
        else {
            var /** @type {?} */ index = this.swiper.activeIndex;
            if (this.swiper.params.loop) {
                var /** @type {?} */ slidesCount = this.swiper.slides.length - 2 * this.swiper.loopedSlides;
                index -= this.swiper.loopedSlides;
                if (index < 0) {
                    index += slidesCount;
                }
                else if (index >= slidesCount) {
                    index -= slidesCount;
                }
            }
            return index;
        }
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.setIndex = function (index, speed, silent) {
        var _this = this;
        if (!this.swiper || this.hidden || this.fxHide || !this.fxShow) {
            this.initialIndex = index;
        }
        else {
            var /** @type {?} */ realIndex_1 = index * this.swiper.params.slidesPerGroup;
            if (this.swiper.params.loop) {
                realIndex_1 += this.swiper.loopedSlides;
            }
            if (this.runInsideAngular) {
                this.swiper.slideTo(realIndex_1, speed, !silent);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slideTo(realIndex_1, speed, !silent);
                });
            }
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.prevSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.slidePrev(!silent, speed);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slidePrev(!silent, speed);
                });
            }
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.nextSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.slideNext(!silent, speed);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slideNext(!silent, speed);
                });
            }
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.stopAutoplay = function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.stopAutoplay();
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.stopAutoplay();
                });
            }
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.startAutoplay = function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.startAutoplay();
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.startAutoplay();
                });
            }
        }
    };
    SwiperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[swiper]'
                },] },
    ];
    /**
     * @nocollapse
     */
    SwiperDirective.ctorParameters = function () { return [
        { type: NgZone, },
        { type: ElementRef, },
        { type: KeyValueDiffers, },
        { type: SwiperConfig, decorators: [{ type: Optional },] },
    ]; };
    SwiperDirective.propDecorators = {
        'index': [{ type: Input },],
        'fxShow': [{ type: Input },],
        'fxHide': [{ type: Input },],
        'hidden': [{ type: Input },],
        'disabled': [{ type: Input },],
        'useSwiperClass': [{ type: HostBinding, args: ['class.swiper',] }, { type: Input },],
        'runInsideAngular': [{ type: Input },],
        'config': [{ type: Input, args: ['swiper',] },],
        'indexChange': [{ type: Output },],
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
    return SwiperDirective;
}());
export { SwiperDirective };
function SwiperDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SwiperDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SwiperDirective.ctorParameters;
    /** @type {?} */
    SwiperDirective.propDecorators;
    /** @type {?} */
    SwiperDirective.prototype.swiper;
    /** @type {?} */
    SwiperDirective.prototype.configDiff;
    /** @type {?} */
    SwiperDirective.prototype.initialIndex;
    /** @type {?} */
    SwiperDirective.prototype.fxShow;
    /** @type {?} */
    SwiperDirective.prototype.fxHide;
    /** @type {?} */
    SwiperDirective.prototype.hidden;
    /** @type {?} */
    SwiperDirective.prototype.disabled;
    /** @type {?} */
    SwiperDirective.prototype.useSwiperClass;
    /** @type {?} */
    SwiperDirective.prototype.runInsideAngular;
    /** @type {?} */
    SwiperDirective.prototype.config;
    /** @type {?} */
    SwiperDirective.prototype.indexChange;
    /** @type {?} */
    SwiperDirective.prototype.S_INIT;
    /** @type {?} */
    SwiperDirective.prototype.S_DESTROY;
    /** @type {?} */
    SwiperDirective.prototype.S_SCROLL;
    /** @type {?} */
    SwiperDirective.prototype.S_PROGRESS;
    /** @type {?} */
    SwiperDirective.prototype.S_SETTRANSLATE;
    /** @type {?} */
    SwiperDirective.prototype.S_SETTRANSITION;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAY;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAYSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAYSTOP;
    /** @type {?} */
    SwiperDirective.prototype.S_REACHBEGINNING;
    /** @type {?} */
    SwiperDirective.prototype.S_REACHEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDECHANGESTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDECHANGEEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDENEXTSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDENEXTEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDEPREVSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDEPREVEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDERMOVE;
    /** @type {?} */
    SwiperDirective.prototype.S_CLICK;
    /** @type {?} */
    SwiperDirective.prototype.S_TAP;
    /** @type {?} */
    SwiperDirective.prototype.S_DOUBLETAP;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHMOVE;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHMOVEOPPOSITE;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHEND;
    /** @type {?} */
    SwiperDirective.prototype.S_TRANSITIONSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_TRANSITIONEND;
    /** @type {?} */
    SwiperDirective.prototype.S_IMAGESREADY;
    /** @type {?} */
    SwiperDirective.prototype.S_LAZYIMAGELOAD;
    /** @type {?} */
    SwiperDirective.prototype.S_LAZYIMAGEREADY;
    /** @type {?} */
    SwiperDirective.prototype.S_PAGINATIONRENDERED;
    /** @type {?} */
    SwiperDirective.prototype.zone;
    /** @type {?} */
    SwiperDirective.prototype.elementRef;
    /** @type {?} */
    SwiperDirective.prototype.differs;
    /** @type {?} */
    SwiperDirective.prototype.defaults;
}
//# sourceMappingURL=swiper.directive.js.map