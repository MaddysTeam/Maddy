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
    .list-group-item:hover{
        background-color:#FFEBCD;
    }
    `]
})

export class ListComponent implements OnInit {

    // 列表数据
    data: Array<any>;

    // 列表模板
    @ContentChild('itemTemplate')
    itemTemplate: TemplateRef<any>;

    // 分页事件
    @Input() pageEvent: PageEvent = {
        pageSize: 5,
        current: 0,
        total: 0
    };
    @Input() ShowPagination = true;

    @Input() IsUsePagination = true;

    // 数据绑定请求
    @Output()
    bindSourceRequest: EventEmitter<ListComponent>;

    rowDataBindingRequest: EventEmitter<any>;

    constructor() {
        this.bindSourceRequest = new EventEmitter();
        this.rowDataBindingRequest = new EventEmitter();
    }

    ngOnInit(): void {
        if (!this.ShowPagination) {
            this.bindSourceRequest.emit(this);
        }
    }

    // 分页事件触发
    pageChange() {
        this.bindSourceRequest.emit(this);
    }

    // 行绑定事件
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

// 分页接口
export interface PageEvent {
    total: number;
    pageSize: number;
    current: number;
}

