import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav/nav.routing.module';
import { FooterComponent } from './footer/footer.component'
import { SharedModule } from '@app-shared';


@NgModule({
    declarations: [NavComponent,FooterComponent],
    imports: [
        NavRoutingModule,
        CommonModule ,
        SharedModule
    ],
    exports: [NavComponent,FooterComponent], 
    // declarations: [NavComponent],
    // providers: [LoggerService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
