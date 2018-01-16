import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { LoginModel } from "./login.model";
import { FormGroup } from "@angular/forms/src/model";

@Injectable()
export class LoginService {

}

@Injectable()
export class LoginControlService {
    toFormGroup(model: LoginModel) {
        const group: any = {};
        group["name"] = new FormControl(model.name, Validators.required);
        group["password"] = new FormControl(model.password, Validators.required);

        return new FormGroup(group);
    }
}
