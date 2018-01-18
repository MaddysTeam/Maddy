import { Component } from '@angular/core';

import { CarouselComponent } from '../../shared/plugins/carousel/carousel.component';
import { ListComponent } from '../../shared/plugins/list/list.component';

@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent {

  // 列表数据绑定
  bindList(list: ListComponent) {
    list.pageEvent.total = 10;
    list.data = [
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
    ];
  }

  bindRecommandList(list: ListComponent) {
    list.data = [
      { 'id': 'data-2', 'name': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' },
      { 'col1': 'data-2', 'col2': 'img1' }
    ];
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
}