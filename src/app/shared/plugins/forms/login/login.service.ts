import { Injectable } from "@angular/core";
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { isNullOrUndefined } from "util";

import { LoginModel } from "./login.model";

@Injectable()
export class LoginControlService {
    toFormGroup(model: LoginModel, nameValidator: ValidatorFn, passwordValidator: ValidatorFn) {
        const group: any = {};
        group["name"] = new FormControl(model.name, [Validators.required]);
        group["password"] = new FormControl(model.password, [Validators.required]);
        return new FormGroup(group);
    }
}
