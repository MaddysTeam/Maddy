export class LoginModel {
    name: string;
    password: string;

    constructor(options: {
        name?: string,
        password?: string
    } = {}) {
        this.name = options.name || '';
        this.password = options.password || '';
    }
}