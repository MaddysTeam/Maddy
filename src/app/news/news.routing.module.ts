import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component'

const newsRoutes: Routes = [
    { path: 'news', component: NewsListComponent },
    { path: 'news/detail', component: NewsDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(newsRoutes)],
    exports: [RouterModule]
})

export class NewsRoutingModule {

}