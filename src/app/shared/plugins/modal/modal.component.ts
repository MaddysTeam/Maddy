import {
  Component, ViewChild, ElementRef, ContentChild,
  ContentChildren, QueryList, Input, OnInit
} from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-modal',
  template: ` 
    <a #open class="btn btn-primary" hidden data-toggle="modal" href="#{{modalId}}" >Trigger modal</a>
    <div class="modal fade" id="{{modalId}}">
    <div class="modal-dialog">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
    `
})

export class ModalComponent {
  @Input() modalId: string;
  @ViewChild('open') modalButton: ElementRef;
}
