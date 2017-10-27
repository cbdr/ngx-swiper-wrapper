import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { SwiperConfig, SwiperConfigInterface } from './swiper.interfaces';
export declare const SWIPER_GUARD: InjectionToken<{}>;
export declare const SWIPER_CONFIG: InjectionToken<{}>;
export declare class SwiperModule {
    constructor(guard: any);
    static forRoot(config: SwiperConfigInterface): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
export declare function provideForRootGuard(config: SwiperConfig): any;
export declare function provideDefaultConfig(config: SwiperConfigInterface): SwiperConfig;
