import { Headers } from '@angular/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { HttpService } from 'app/shared/providers/http/http.service';

/**
 * http请求参数封装类
 */
export class Request {
    url: string;
    body?: any;
    paras?: KeyValue[];
    headers?: KeyValue[];
    retryCount: 0; // 重试次数
    fileType: string; // 文件类型
}

/**
 * http响应参数封装类
 */
export class Response<T> {
    data?: T;
    error?: HttpErrorResponse;
    headers?: KeyValue[];
    inner?: HttpResponse<T>;
}

/**
 * http json响应参数封装类
 */
export class JsonResponse extends Response<any> { }

/**
 * http 文件响应参数封装类
 */
export class FileResponse extends Response<string>  { }

/**
 * http 错误响应参数封装类
 */
export class ErrorResponse extends Response<HttpErrorResponse> {
    message: string;
}

export class KeyValue {
    key: string;
    value: string;
}
