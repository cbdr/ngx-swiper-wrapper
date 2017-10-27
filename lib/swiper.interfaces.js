// http://idangero.us/swiper/api/#emitter
export var /** @type {?} */ SwiperEvents = [
    'init',
    'destroy',
    'scroll',
    'progress',
    'setTranslate',
    'setTransition',
    'autoplay',
    'autoplayStart',
    'autoplayStop',
    'reachBeginning',
    'reachEnd',
    'slideChangeEnd',
    'slideChangeStart',
    'slideNextStart',
    'slideNextEnd',
    'slidePrevStart',
    'slidePrevEnd',
    'sliderMove',
    'swiperClick',
    'swiperTap',
    'swiperDoubleTap',
    'swiperTouchStart',
    'swiperTouchMove',
    'swiperTouchMoveOpposite',
    'swiperTouchEnd',
    'swiperTransitionStart',
    'swiperTransitionEnd',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'paginationRendered'
];
var fadeObject = (function () {
    function fadeObject() {
    }
    return fadeObject;
}());
export { fadeObject };
function fadeObject_tsickle_Closure_declarations() {
    /** @type {?} */
    fadeObject.prototype.crossFade;
}
var flipObject = (function () {
    function flipObject() {
    }
    return flipObject;
}());
export { flipObject };
function flipObject_tsickle_Closure_declarations() {
    /** @type {?} */
    flipObject.prototype.limitRotation;
    /** @type {?} */
    flipObject.prototype.slideShadows;
}
var cubeObject = (function () {
    function cubeObject() {
    }
    return cubeObject;
}());
export { cubeObject };
function cubeObject_tsickle_Closure_declarations() {
    /** @type {?} */
    cubeObject.prototype.shadow;
    /** @type {?} */
    cubeObject.prototype.shadowScale;
    /** @type {?} */
    cubeObject.prototype.shadowOffset;
    /** @type {?} */
    cubeObject.prototype.slideShadows;
}
var coverflowObject = (function () {
    function coverflowObject() {
    }
    return coverflowObject;
}());
export { coverflowObject };
function coverflowObject_tsickle_Closure_declarations() {
    /** @type {?} */
    coverflowObject.prototype.depth;
    /** @type {?} */
    coverflowObject.prototype.rotate;
    /** @type {?} */
    coverflowObject.prototype.stretch;
    /** @type {?} */
    coverflowObject.prototype.modifier;
    /** @type {?} */
    coverflowObject.prototype.slideShadows;
}
var SwiperConfig = (function () {
    /**
     * @param {?=} config
     */
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    SwiperConfig.prototype.assign = function (config) {
        if (config === void 0) { config = {}; }
        for (var /** @type {?} */ key in config) {
            this[key] = config[key];
        }
    };
    return SwiperConfig;
}());
export { SwiperConfig };
function SwiperConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    SwiperConfig.prototype.nested;
    /** @type {?} */
    SwiperConfig.prototype.direction;
    /** @type {?} */
    SwiperConfig.prototype.speed;
    /** @type {?} */
    SwiperConfig.prototype.width;
    /** @type {?} */
    SwiperConfig.prototype.height;
    /** @type {?} */
    SwiperConfig.prototype.autoHeight;
    /** @type {?} */
    SwiperConfig.prototype.initialSlide;
    /** @type {?} */
    SwiperConfig.prototype.roundLengths;
    /** @type {?} */
    SwiperConfig.prototype.setWrapperSize;
    /** @type {?} */
    SwiperConfig.prototype.virtualTranslate;
    /** @type {?} */
    SwiperConfig.prototype.autoplay;
    /** @type {?} */
    SwiperConfig.prototype.autoplayStopOnLast;
    /** @type {?} */
    SwiperConfig.prototype.autoplayDisableOnInteraction;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesProgress;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesVisibility;
    /** @type {?} */
    SwiperConfig.prototype.freeMode;
    /** @type {?} */
    SwiperConfig.prototype.freeModeSticky;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMinimumVelocity;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentum;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounce;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounceRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumVelocityRatio;
    /** @type {?} */
    SwiperConfig.prototype.effect;
    /** @type {?} */
    SwiperConfig.prototype.fade;
    /** @type {?} */
    SwiperConfig.prototype.flip;
    /** @type {?} */
    SwiperConfig.prototype.cube;
    /** @type {?} */
    SwiperConfig.prototype.coverflow;
    /** @type {?} */
    SwiperConfig.prototype.parallax;
    /** @type {?} */
    SwiperConfig.prototype.spaceBetween;
    /** @type {?} */
    SwiperConfig.prototype.centeredSlides;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerView;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerGroup;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumn;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumnFill;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetBefore;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetAfter;
    /** @type {?} */
    SwiperConfig.prototype.grabCursor;
    /** @type {?} */
    SwiperConfig.prototype.threshold;
    /** @type {?} */
    SwiperConfig.prototype.touchAngle;
    /** @type {?} */
    SwiperConfig.prototype.touchRatio;
    /** @type {?} */
    SwiperConfig.prototype.shortSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesMs;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesRatio;
    /** @type {?} */
    SwiperConfig.prototype.followFinger;
    /** @type {?} */
    SwiperConfig.prototype.onlyExternal;
    /** @type {?} */
    SwiperConfig.prototype.simulateTouch;
    /** @type {?} */
    SwiperConfig.prototype.passiveListeners;
    /** @type {?} */
    SwiperConfig.prototype.touchEventsTarget;
    /** @type {?} */
    SwiperConfig.prototype.touchReleaseOnEdges;
    /** @type {?} */
    SwiperConfig.prototype.touchMoveStopPropagation;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeDetection;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeThreshold;
    /** @type {?} */
    SwiperConfig.prototype.resistance;
    /** @type {?} */
    SwiperConfig.prototype.resistanceRatio;
    /** @type {?} */
    SwiperConfig.prototype.preventClicks;
    /** @type {?} */
    SwiperConfig.prototype.slideToClickedSlide;
    /** @type {?} */
    SwiperConfig.prototype.preventClicksPropagation;
    /** @type {?} */
    SwiperConfig.prototype.noSwiping;
    /** @type {?} */
    SwiperConfig.prototype.noSwipingClass;
    /** @type {?} */
    SwiperConfig.prototype.swipeHandler;
    /** @type {?} */
    SwiperConfig.prototype.allowSwipeToPrev;
    /** @type {?} */
    SwiperConfig.prototype.allowSwipeToNext;
    /** @type {?} */
    SwiperConfig.prototype.uniqueNavElements;
    /** @type {?} */
    SwiperConfig.prototype.pagination;
    /** @type {?} */
    SwiperConfig.prototype.paginationType;
    /** @type {?} */
    SwiperConfig.prototype.paginationHide;
    /** @type {?} */
    SwiperConfig.prototype.paginationElement;
    /** @type {?} */
    SwiperConfig.prototype.paginationClickable;
    /** @type {?} */
    SwiperConfig.prototype.paginationCustomRender;
    /** @type {?} */
    SwiperConfig.prototype.paginationBulletRender;
    /** @type {?} */
    SwiperConfig.prototype.paginationFractionRender;
    /** @type {?} */
    SwiperConfig.prototype.paginationProgressRender;
    /** @type {?} */
    SwiperConfig.prototype.nextButton;
    /** @type {?} */
    SwiperConfig.prototype.prevButton;
    /** @type {?} */
    SwiperConfig.prototype.scrollbar;
    /** @type {?} */
    SwiperConfig.prototype.scrollbarHide;
    /** @type {?} */
    SwiperConfig.prototype.scrollbarDraggable;
    /** @type {?} */
    SwiperConfig.prototype.scrollbarSnapOnRelease;
    /** @type {?} */
    SwiperConfig.prototype.a11y;
    /** @type {?} */
    SwiperConfig.prototype.prevSlideMessage;
    /** @type {?} */
    SwiperConfig.prototype.nextSlideMessage;
    /** @type {?} */
    SwiperConfig.prototype.firstSlideMessage;
    /** @type {?} */
    SwiperConfig.prototype.lastSlideMessage;
    /** @type {?} */
    SwiperConfig.prototype.paginationBulletMessage;
    /** @type {?} */
    SwiperConfig.prototype.keyboardControl;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelControl;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelInvert;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelSensitivity;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelForceToAxis;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelReleaseOnEdges;
    /** @type {?} */
    SwiperConfig.prototype.mousewheelEventsTarged;
    /** @type {?} */
    SwiperConfig.prototype.history;
    /** @type {?} */
    SwiperConfig.prototype.hashnav;
    /** @type {?} */
    SwiperConfig.prototype.replaceState;
    /** @type {?} */
    SwiperConfig.prototype.hashnavWatchState;
    /** @type {?} */
    SwiperConfig.prototype.preloadImages;
    /** @type {?} */
    SwiperConfig.prototype.updateOnImagesReady;
    /** @type {?} */
    SwiperConfig.prototype.lazyLoading;
    /** @type {?} */
    SwiperConfig.prototype.lazyLoadingInPrevNext;
    /** @type {?} */
    SwiperConfig.prototype.lazyLoadingInPrevNextAmount;
    /** @type {?} */
    SwiperConfig.prototype.lazyLoadingOnTransitionStart;
    /** @type {?} */
    SwiperConfig.prototype.loop;
    /** @type {?} */
    SwiperConfig.prototype.loopedSlides;
    /** @type {?} */
    SwiperConfig.prototype.loopAdditionalSlides;
    /** @type {?} */
    SwiperConfig.prototype.zoom;
    /** @type {?} */
    SwiperConfig.prototype.zoomMin;
    /** @type {?} */
    SwiperConfig.prototype.zoomMax;
    /** @type {?} */
    SwiperConfig.prototype.zoomToggle;
    /** @type {?} */
    SwiperConfig.prototype.control;
    /** @type {?} */
    SwiperConfig.prototype.controlInverse;
    /** @type {?} */
    SwiperConfig.prototype.controlBy;
    /** @type {?} */
    SwiperConfig.prototype.normalizeSlideIndex;
    /** @type {?} */
    SwiperConfig.prototype.observer;
    /** @type {?} */
    SwiperConfig.prototype.observeParents;
    /** @type {?} */
    SwiperConfig.prototype.breakpoints;
    /** @type {?} */
    SwiperConfig.prototype.slideClass;
    /** @type {?} */
    SwiperConfig.prototype.slideActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideVisibleClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicateClass;
    /** @type {?} */
    SwiperConfig.prototype.slideNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slidePrevClass;
    /** @type {?} */
    SwiperConfig.prototype.wrapperClass;
    /** @type {?} */
    SwiperConfig.prototype.bulletClass;
    /** @type {?} */
    SwiperConfig.prototype.bulletActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.notificationClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationHiddenClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationCurrentClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationTotalClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationModifierClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationClickableClass;
    /** @type {?} */
    SwiperConfig.prototype.paginationProgressbarClass;
    /** @type {?} */
    SwiperConfig.prototype.buttonDisabledClass;
    /** @type {?} */
    SwiperConfig.prototype.containerModifierClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedPrevClass;
    /** @type {?} */
    SwiperConfig.prototype.lazyLoadingClass;
    /** @type {?} */
    SwiperConfig.prototype.lazyStatusLoadingClass;
    /** @type {?} */
    SwiperConfig.prototype.lazyStatusLoadedClass;
    /** @type {?} */
    SwiperConfig.prototype.lazyPreloaderClass;
    /** @type {?} */
    SwiperConfig.prototype.preloaderClass;
    /** @type {?} */
    SwiperConfig.prototype.zoomContainerClass;
    /** @type {?} */
    SwiperConfig.prototype.runCallbacksOnInit;
    /** @type {?} */
    SwiperConfig.prototype.onInit;
    /** @type {?} */
    SwiperConfig.prototype.onSlideChangeStart;
    /** @type {?} */
    SwiperConfig.prototype.onSlideChangeEnd;
    /** @type {?} */
    SwiperConfig.prototype.onSlideNextStart;
    /** @type {?} */
    SwiperConfig.prototype.onSlideNextEnd;
    /** @type {?} */
    SwiperConfig.prototype.onSlidePrevStart;
    /** @type {?} */
    SwiperConfig.prototype.onSlidePrevEnd;
    /** @type {?} */
    SwiperConfig.prototype.onTransitionStart;
    /** @type {?} */
    SwiperConfig.prototype.onTransitionEnd;
    /** @type {?} */
    SwiperConfig.prototype.onTouchStart;
    /** @type {?} */
    SwiperConfig.prototype.onTouchMove;
    /** @type {?} */
    SwiperConfig.prototype.onTouchMoveOpposite;
    /** @type {?} */
    SwiperConfig.prototype.onSliderMove;
    /** @type {?} */
    SwiperConfig.prototype.onTouchEnd;
    /** @type {?} */
    SwiperConfig.prototype.onClick;
    /** @type {?} */
    SwiperConfig.prototype.onTap;
    /** @type {?} */
    SwiperConfig.prototype.onDoubleTap;
    /** @type {?} */
    SwiperConfig.prototype.onImagesReady;
    /** @type {?} */
    SwiperConfig.prototype.onProgress;
    /** @type {?} */
    SwiperConfig.prototype.onReachBeginning;
    /** @type {?} */
    SwiperConfig.prototype.onReachEnd;
    /** @type {?} */
    SwiperConfig.prototype.onDestroy;
    /** @type {?} */
    SwiperConfig.prototype.onSetTranslate;
    /** @type {?} */
    SwiperConfig.prototype.onSetTransition;
    /** @type {?} */
    SwiperConfig.prototype.onAutoplay;
    /** @type {?} */
    SwiperConfig.prototype.onAutoplayStart;
    /** @type {?} */
    SwiperConfig.prototype.onAutoplayStop;
    /** @type {?} */
    SwiperConfig.prototype.onLazyImageLoad;
    /** @type {?} */
    SwiperConfig.prototype.onLazyImageReady;
    /** @type {?} */
    SwiperConfig.prototype.onPaginationRendered;
    /** @type {?} */
    SwiperConfig.prototype.onScroll;
    /** @type {?} */
    SwiperConfig.prototype.onScrollbarDragEnd;
}
//# sourceMappingURL=swiper.interfaces.js.map