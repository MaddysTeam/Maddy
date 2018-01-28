import {
    Component, ContentChild, AfterViewInit, TemplateRef,
    EventEmitter, Output, Input, OnInit
} from '@angular/core';

@Component({
    selector: 'app-list',
    template: ` <ul class="list-group">
                    <li class="list-group-item" *ngFor="let item of data" (rowbinding)="rowBinding(item)" >
                      <ng-template *ngTemplateOutlet="itemTemplate; context: item"></ng-template>
                    </li>
                </ul> 
                <div class="row justify-content-center" style="margin-top:30px;">
                <ngb-pagination *ngIf="ShowPagination"
                  [(collectionSize)]="pageEvent.total"
                  [(pageSize)]="pageEvent.pageSize"
                  [(page)]="pageEvent.current" 
                  [boundaryLinks]="true" 
                  [directionLinks]="true"
                  (pageChange)="pageChange(pageEvent)">
                </ngb-pagination>
                </div>
                `,
    styles: [`
    .list-group{
        display:block;
    }
    .list-group-item{
        border:0px;
        padding:0px;
    }
    `]
})

export class ListComponent implements OnInit {

    /**
     * 列表数据
     * @memberof ListComponent
     */
    data: Array<any>;

    /**
     * 列表模板
     * @memberof ListComponent
     */
    @ContentChild('itemTemplate')
    itemTemplate: TemplateRef<any>;

    /**
     * 输入分页事件
     * @memberof ListComponent
     */
    @Input() pageEvent: PageEvent = {
        pageSize: 5,
        current: 0,
        total: 0
    };

    /**
     * 是否显示分页
     * @memberof ListComponent
     */
    @Input() ShowPagination = true;

    /**
     * 是否使用分页
     *  @memberof ListComponent
     */
    @Input() IsUsePagination = true;

    /**
     * 数据绑定请求
     * @memberof ListComponent
     */
    @Output()
    bindSourceRequest: EventEmitter<ListComponent>;

    /**
     * 行数据绑定事件
     * @memberof ListComponent
     */
    rowDataBindingRequest: EventEmitter<any>;

    /**
     * 构造函数，绑定事件
     * @memberof ListComponent
     */
    constructor() {
        this.bindSourceRequest = new EventEmitter();
        this.rowDataBindingRequest = new EventEmitter();
    }

    ngOnInit(): void {
        if (!this.ShowPagination) {
            this.bindSourceRequest.emit(this);
        }
    }

    /**
     * 分页事件触发
     * 
     * @memberof ListComponent
     */
    pageChange() {
        this.bindSourceRequest.emit(this);
    }

    /**
     * 行绑定事件
     * 
     * @param {any} item 
     * @memberof ListComponent
     */
    rowBinding(item) {
        if (this.rowDataBindingRequest) {
            this.rowDataBindingRequest.emit(
                {
                    list: this,
                    item: item,
                });
        }
    }

}

/**
 * 分页事件
 * 
 * @export
 * @interface PageEvent
 */
export interface PageEvent {
    total: number;
    pageSize: number;
    current: number;
}

