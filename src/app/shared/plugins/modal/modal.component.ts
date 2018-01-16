import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: ` 
    <a #open class="btn btn-primary" hidden data-toggle="modal" href='#modal-id'>Trigger modal</a>
    <div class="modal fade" id="modal-id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div class="modal-body">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
})

export class ModalComponent {
    @ViewChild('open') modalButton: ElementRef;
}
