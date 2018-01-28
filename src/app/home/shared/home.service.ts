import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {

    /**
     * table demo 数据
     * 
     * @returns 
     * @memberof HomeService
     */
    getTableData() {
        return [{
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        ];
    }

    /**
     * list demo 数据
     * 
     * @returns 
     * @memberof HomeService
     */
    getListData() {
        return [{
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        {
            'col1': 'data-2',
            'col2': 'img1'
        },
        ];
    }

    /**
    * 轮播 数据
    * 
    * @returns 
    * @memberof HomeService
    */
    getCarouselData() {
        return [{
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