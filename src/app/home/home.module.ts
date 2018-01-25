import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  LoadingModule
} from 'ngx-loading';
import {
  SharedModule
} from '../shared/share.module';
import {
  HomeComponent
} from './home.component';
import {
  RouterModule,
  Routes
} from '@angular/router';

@NgModule({
  imports: [
    LoadingModule,
    NgbModule.forRoot(),
    SharedModule,
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule {}
