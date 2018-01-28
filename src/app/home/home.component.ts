import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';

import { CarouselModel, CarouselComponent } from '../shared/plugins/carousel/carousel.component';
import { TableComponent } from '../shared/plugins/table/table.component';
import { ArticleComponent } from '../shared/plugins/article/article.component';
import { ListComponent } from '../shared/plugins/list/list.component';
import { User } from '../users/shared/user.model';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})

export class HomeComponent {
  title = 'home';

  /**
   * 构造函数
   * @param {HomeService} serivce 
   * @memberof HomeComponent
   */
  constructor(private serivce: HomeService) { }

  /**
  * 轮播回滚
  * 
  * @param {CarouselComponent} carousel 
  * @memberof HomeComponent
  */
  carouselPrev(message: CarouselModel) {
    console.log(message.url);
  }


  /**
   * 轮播数据绑定
   * 
   * @param {CarouselComponent} carousel 
   * @memberof HomeComponent
   */
  bindCarousel(carousel: CarouselComponent) {
    carousel.carousels = this.serivce.getCarouselData();
  }

  /**
   * table数据绑定
   * 
   * @param {TableComponent} table 
   * @memberof HomeComponent
   */
  bindTable(table: TableComponent) {
    table.columnTitles = ['标题1', '标题2'];
    table.pageEvent.pageSize = 5;

    // 模拟1秒后读取数据
    setTimeout(() => {
      table.pageEvent.total = 11;
      table.data = this.serivce.getTableData();
      table.bind();
    }, 1000);
  }


  click(event: any, id: any) {
    alert(id);
  }

  /**
  * 列表数据绑定
  * 
  * @param {TableComponent} table 
  * @memberof HomeComponent
  */
  bindList(list: ListComponent) {
    list.pageEvent.total = 10;
    list.data = this.serivce.getListData();
  }
}
