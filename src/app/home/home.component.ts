import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';

import { CarouselModel, CarouselComponent } from '../shared/plugins/carousel/carousel.component';
import { TableComponent } from '../shared/plugins/table/table.component';
import { ArticleComponent } from '../shared/plugins/article/article.component'
import { ListComponent } from '../shared/plugins/list/list.component';
import { User } from '../users/shared/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'home';

  // 轮播回滚
  carouselPrev(message: CarouselModel) {
    console.log(message.url);
  }

  // 轮播数据绑定
  bindCarousel(carousel: CarouselComponent) {
    carousel.carousels = [
      {
        url: 'http://pic2.ooopic.com/12/54/38/87bOOOPICeb_1024.jpg',
        title: 'this is title1',
        subTitle: ''
      },
      {
        url: 'http://pic2.ooopic.com/12/54/38/87bOOOPICeb_1024.jpg',
        title: 'this is title2',
        subTitle: ''
      },
      {
        url: 'http://pic2.ooopic.com/12/54/38/87bOOOPICeb_1024.jpg',
        title: 'this is title3',
        subTitle: ''
      },
    ];
  }

  //table数据绑定
  bindTable(table: TableComponent) {
    table.columnTitles = ['标题1', '标题2'];
    table.pageEvent.pageSize = 5;

    setTimeout(() => {
      table.pageEvent.total = 11;
      table.data = table.pageEvent.current === 1 ? [
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
      ] : [
          { 'col1': 'data-2', 'col2': 'img1' },
          { 'col1': 'data-2', 'col2': 'img1' },
          { 'col1': 'data-2', 'col2': 'img1' },
        ];
      table.bind();
    }, 1000);
  }

  click(event: any, id: any) {
    alert(id);
  }

  // 列表数据绑定
  bindList(list:ListComponent){
    list.pageEvent.total=10;
    list.data=[
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
    ];
  }
}
