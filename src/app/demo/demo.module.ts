import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';

import { SharedModule } from '@app-shared';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [SearchBoxComponent]
})
export class DemoModule { }
