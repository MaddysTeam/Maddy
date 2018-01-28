import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app-shared';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NewsService } from './shared/news.services';
import { NewsRoutingModule } from './news.routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from 'app/news/news-detail/news-detail.component';

@NgModule({
    declarations: [NewsListComponent, NewsDetailComponent],
    imports: [
        NewsRoutingModule,
        CommonModule,
        SharedModule,
        AngularFontAwesomeModule
    ],
    providers: [NewsService],
    exports: [NewsListComponent]
})

export class NewsModule {

}