import { Component } from '@angular/core';
import { ListComponent } from '../../shared/plugins/list/list.component';
import { CarouselComponent } from '../../shared/plugins/carousel/carousel.component';

@Component({
    selector: 'app-news-detai',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent {
    bindRecommandList(list: ListComponent) {
        list.data = [
            { 'id': 'data-2', 'name': 'img1' },
            { 'col1': 'data-2', 'col2': 'img1' },
            { 'col1': 'data-2', 'col2': 'img1' }
        ];
    }

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





