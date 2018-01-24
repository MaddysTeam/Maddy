import { Component, Input, ContentChild, TemplateRef, EventEmitter, OnInit } from '@angular/core'
import { trigger } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-card',
    template: `<div class="{{theme}} {{displayAnimate}}">
                    <ng-template *ngTemplateOutlet="ContentTemplate; context:data"></ng-template>
                </div>`
})

export class CardComponent {
    @Input() data: any;
    @Input() theme = 'card';
    @Input() displayAnimate = 'animated fadeInUp' ; // this from Animate.css:https://daneden.github.io/animate.css/
    @ContentChild('contentTemplate') ContentTemplate: TemplateRef<void>;  
}
