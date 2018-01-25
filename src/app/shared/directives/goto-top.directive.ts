import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
  AfterViewInit
} from '@angular/core';

/**
 * 回到顶部指定, 刚距离顶部200的时候出现
 * 扩展: 回到顶部的时候实现动画, 出现的距离可以由外部控制
 * @export
 * @class GotoTopDirective
 * @implements {AfterViewInit}
 */
@Directive({
  selector: '[appGotoTop]'
})
export class GotoTopDirective implements AfterViewInit {

  constructor(private el: ElementRef, private rd: Renderer2) {}

  /**
   * 页面加载之后, 监听window的滚动事件
   * 
   * @memberof GotoTopDirective
   */
  ngAfterViewInit() {
    this.rd.listen('window', 'scroll', (event) => this.scrollEvent(event));
  }

  /**
   * 绑定点击事件
   * 
   * @memberof GotoTopDirective
   */
  @HostListener('click')
  onClick() {
    window.scrollTo(0, 0); //  回到顶部
  }

  /**
   * 绑定none样式
   * 
   * @type {Boolean}
   * @memberof GotoTopDirective
   */
  @HostBinding('class.none')
  isShow: Boolean = true;

  /**
   * 滚动事件
   * 
   * @param {any} ev 
   * @memberof GotoTopDirective
   */
  scrollEvent(ev) {
    if (window.pageYOffset > 200) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

}
