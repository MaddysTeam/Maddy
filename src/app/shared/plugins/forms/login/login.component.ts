import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {
    FormGroup,
    AbstractControl, ValidationErrors, ValidatorFn
} from "@angular/forms";
import { isNullOrUndefined } from "util";

import { LoginControlService } from "./login.service";
import { LoginModel } from './login.model'

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    providers: [LoginControlService]
})

export class LoginComponent implements OnInit {
    @Input() 
    name: string;

    @Input() 
    password: string;

    @Input()
     nameValidator: ValidatorFn;

    @Input()
     passwordValidator: ValidatorFn;
     
    @Output()
     LoginRequest: EventEmitter<LoginModel>;

    private isValidateError = false;
    private loginModel: LoginModel;

    formGroup: FormGroup

    constructor(private service: LoginControlService) { }

    ngOnInit(): void {
        var options = { name: this.name, password: this.password };
        this.formGroup = this.service.toFormGroup(
            new LoginModel(options),
            this.nameValidator,
            this.passwordValidator
        );
    }
     
    //登录方法
    login() {
        this.valid();
        if (!this.isValidateError)
            this.LoginRequest.emit(this.loginModel);// 服务器登录请求
    }

    private valid() {
        this.isValidateError = !(
            this.formGroup.controls["name"].valid &&
            this.formGroup.controls["password"].valid
        );
    }
}
