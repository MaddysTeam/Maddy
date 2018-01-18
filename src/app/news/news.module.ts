import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news.routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './shared/news.services';
import { SharedModule } from '@app-shared';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    declarations: [NewsListComponent],
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