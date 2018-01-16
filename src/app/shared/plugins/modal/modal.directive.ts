import { Directive, HostListener, Input } from '@angular/core';

import { ModalComponent } from './modal.component';

@Directive({
    selector: '[modal]',
    exportAs: 'modal'
})

export class ModalDirective {
    @Input()
    modal: ModalComponent;

    @HostListener('click')
    show() {
        const currentModal = this.modal as ModalComponent;
        currentModal.modalButton.nativeElement.click();
    }

    constructor() {
      
    }
}