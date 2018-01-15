import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
    {path: '', redirectTo: 'search-demo', pathMatch: 'full'},
    {path: 'search-demo', component: SearchBoxComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(
          routes
        ),
    ],
    exports: [RouterModule]
})
export class RoutingModule {}
