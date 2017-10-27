import { NgModule, InjectionToken, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig } from './swiper.interfaces';
export var /** @type {?} */ SWIPER_GUARD = new InjectionToken('SWIPER_GUARD');
export var /** @type {?} */ SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
var SwiperModule = (function () {
    /**
     * @param {?} guard
     */
    function SwiperModule(guard) {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    SwiperModule.forRoot = function (config) {
        return {
            ngModule: SwiperModule,
            providers: [
                {
                    provide: SWIPER_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [
                        [
                            SwiperConfig,
                            new Optional(),
                            new SkipSelf()
                        ]
                    ]
                },
                {
                    provide: SWIPER_CONFIG,
                    useValue: config ? config : {}
                },
                {
                    provide: SwiperConfig,
                    useFactory: provideDefaultConfig,
                    deps: [
                        SWIPER_CONFIG
                    ]
                }
            ]
        };
    };
    /**
     * @return {?}
     */
    SwiperModule.forChild = function () {
        return {
            ngModule: SwiperModule
        };
    };
    SwiperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SwiperComponent, SwiperDirective],
                    exports: [CommonModule, SwiperComponent, SwiperDirective]
                },] },
    ];
    /**
     * @nocollapse
     */
    SwiperModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_GUARD,] },] },
    ]; };
    return SwiperModule;
}());
export { SwiperModule };
function SwiperModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SwiperModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SwiperModule.ctorParameters;
}
/**
 * @param {?} config
 * @return {?}
 */
export function provideForRootGuard(config) {
    if (config) {
        throw new Error("\n      Application called SwiperModule.forRoot() twice.\n      For submodules use SwiperModule.forChild() instead.\n    ");
    }
    return 'guarded';
}
/**
 * @param {?} config
 * @return {?}
 */
export function provideDefaultConfig(config) {
    return new SwiperConfig(config);
}
//# sourceMappingURL=swiper.module.js.map