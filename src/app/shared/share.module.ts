import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'angular2-datatable';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ColumnComponent } from './plugins/table/table.column.component';
import { BypassSecurityTrustHtmlPipe } from './pipes/trust-html-pipe';
import { CarouselComponent } from './plugins/carousel/carousel.component';
import { CardComponent } from './plugins/card/card.component';
import { PopoverDirective } from './plugins/popover/popover';
import { PopoverContent } from './plugins/popover/popover.content';
import { TableComponent } from './plugins/table/table.component';
import { ArticleComponent} from './plugins/article/article.component';
import { SearchBoxComponent } from './plugins/search-box/search-box.component';
import { ListComponent } from 'app/shared/plugins/list/list.component';
import { ModalComponent } from 'app/shared/plugins/modal/modal.component';
import { ModalDirective } from 'app/shared/plugins/modal/modal.directive';

//  module
const MODULE = [CommonModule, DataTableModule, FormsModule, NgbPaginationModule]

//  声明(declarations) 导出(exports) 输入(entryComponents)
const DEE = [];

//  声明(declarations) 导出(exports)
const DE = [BypassSecurityTrustHtmlPipe,
    CardComponent,
    CarouselComponent,
    PopoverDirective,
    PopoverContent,
    TableComponent,
    ColumnComponent,
    ArticleComponent,
    SearchBoxComponent,
    ListComponent,
    ModalComponent,
    ModalDirective
  ];

@NgModule({
    imports: [...MODULE],
    declarations: [...DE],
    exports: [...DE]
})

export class SharedModule { }