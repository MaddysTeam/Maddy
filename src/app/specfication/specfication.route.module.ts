import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app-shared';

import { SpecficaitonComponent } from './specfication.component';

const speRoutes: Routes = [
    { path: 'specfication', component: SpecficaitonComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(speRoutes),
        SharedModule
    ],
    exports: [RouterModule]
})
export class SpecficationRouteModule {}