import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/retry';

import {
    Request, Response, KeyValue, JsonResponse,
    FileResponse, ErrorResponse
} from './http.model';

/**
 * http 封装
 * 
 * @class HttpHelperComponent
 */
@Injectable()
export class HttpService {

    /**
     * Http helper 构造函数
     * @param {HttpClient} http 
     * @memberof HttpHelperComponent
     */
    constructor(private http: HttpClient) { }

    /**
     * get 泛型方法，异步返回response
     * 
     * @template T 
     * @param {Request}  封装了用户请求参数
     * @param {(res: Response<T>) => void} 成功时触发
     * @param {(res: Response<T>) => void} 失败时触发
     * @memberof HttpHelperComponent
     */
    get<T>(request: Request, whenSuccess?: (res: Response<T>) => void, whenError?: (res: ErrorResponse) => void) {
        this.http.get<T>(request.url, {
            observe: 'response',
            params: this.convertParas(request.paras),
            headers: this.converHeaders(request.headers),
        })
            .retry(request.retryCount)
            .subscribe(resp => {
                const response = new Response<T>();
                response.inner = resp;  // 更多的响应信息
                response.data = resp.body; // 响应数据
                whenSuccess(response);
            }, (err: HttpErrorResponse) => {
                const errRes = new ErrorResponse();
                errRes.error = err;
                errRes.message = err.message;
                whenError(errRes);
            });
    }

    getJson(request: Request, whenSuccess?: (res: JsonResponse) => void, whenError?: (res: JsonResponse) => void) {
        this.get<object>(request, whenSuccess, whenError);
    }

    getFile(request: Request, whenSuccess?: (res: FileResponse) => void, whenError?: (res: FileResponse) => void) {

    }


    /**
     * post 泛型方法，异步返回response
     * 
     * @template T 
     * @param {Request}  封装了用户请求参数
     * @param {(res: Response<T>) => void} 成功时触发
     * @param {(res: Response<T>) => void} 失败时触发
     * @memberof HttpHelperComponent
     */
    post<T>(request: Request, whenSuccess?: (res: Response<T>) => void, whenError?: (res: ErrorResponse) => void) {
        this.http.post<T>(request.url, request.body, {
            observe: 'response',
            params: this.convertParas(request.paras),
            headers: this.converHeaders(request.headers)
        })
            .retry(request.retryCount)
            .subscribe(resp => {
                const response = new Response<T>();
                response.inner = resp;  // 更多的响应信息
                response.data = resp.body; // 响应数据
                whenSuccess(response);
            }, (err: HttpErrorResponse) => {
                const errRes = new ErrorResponse();
                errRes.error = err;
                errRes.message = err.message;
                whenError(errRes);
            });
    }

    postJson(request: Request, whenSuccess?: (res: JsonResponse) => void, whenError?: (res: JsonResponse) => void) {
        this.post<object>(request, whenSuccess, whenError);
    }

    postString<T>() {

    }

    private convertParas(paras: Array<KeyValue>) {
        const params = new HttpParams();
        paras.forEach(p => {
            params.append(p.key, p.value);
        });

        return params;
    }

    private converHeaders(headers: Array<KeyValue>) {
        const httpHeaders = new HttpHeaders();
        headers.forEach(p => {
            httpHeaders.append(p.key, p.value);
        });

        return httpHeaders;
    }
}