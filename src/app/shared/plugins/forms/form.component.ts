import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { MY_FORM_MODEL } from "./form.models";
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from "@ng-dynamic-forms/core";

@Component({
    selector:'app-form',
    template: `
    <form class="form-horizontal" [formGroup]="formGroup">
        <dynamic-bootstrap-form [group]="formGroup" [layout]="formLayout" [model]="formModel"></dynamic-bootstrap-form>                            
    </form>
    `
})

export class FormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = MY_FORM_MODEL;
    formGroup: FormGroup;
    formLayout: DynamicFormLayout = MY_FORM_LAYOUT;

    constructor(private formService: DynamicFormService) { }

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
}


export const MY_FORM_LAYOUT = {
    
    "myFormControlModelId": {
    
        element: {
            label: "control-label"
        },
        grid: {
            control: "col-sm-9",
            label: "col-sm-3"
        }
    },
    
    "myOtherFormControlModelId": {
        
        element: {
            label: "control-label"
        },
        grid: {
            control: "col-sm-9",
            label: "col-sm-3"
        }
    }
};