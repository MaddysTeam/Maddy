import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            homeRoutes
        ),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
