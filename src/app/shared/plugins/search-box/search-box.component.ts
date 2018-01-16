import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'plugins-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  //  配置文件
  //  具体格式等下好之后写出来
  @Input() config: any;

  //  每行显示多小个, 只支持3, 4。
  @Input() col: number = 4;

  f: any = {
    name1: '123',
    name2: '2'
  }

  constructor() { }

  ngOnInit() {
    console.log(this.col)
    this.config = [{
      label: '名称',
      id: 'name1',
      type: 'text',
      value: '1',
      placeholder: '请输入名称',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function ($event) {
        console.log($event)
        this['f']['name2'] = '34'
        console.log('我是改变事件')
        console.log(this)
      }.bind(this)
    }, {
      label: '名称',
      id: 'name2',
      type: 'text',
      value: '1',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }, {
      label: '名称',
      id: 'name',
      type: 'text',
      value: '',
      init: function () {
        console.log('我是初始化事件')
      },
      change: function () {
        console.log('我是改变事件')
      }
    }]
  }

  change (fn) {
    fn();
  }
}
