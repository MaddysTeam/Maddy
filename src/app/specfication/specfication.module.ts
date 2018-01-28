import { NgModule } from '@angular/core';

import { SharedModule } from '@app-shared';
import { SpecficaitonComponent } from './specfication.component';
import { SpecficationRouteModule } from './specfication.route.module';

@NgModule({
    declarations: [SpecficaitonComponent],
    imports: [SharedModule, SpecficationRouteModule],
    exports: [SpecficaitonComponent]
})
export class SpecficaitonModule { }