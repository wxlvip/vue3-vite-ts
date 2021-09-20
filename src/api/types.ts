export type MethodTy = 'get' | 'GET' | 'delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';


export interface AxiosRequestConfig {
    url?: string,
    method?:MethodTy,
    data?:any,
    params?:any,
    headers?:any,
    responseType?:XMLHttpRequestResponseType,
    timeout?:number,
}

export interface AxiosResponse {
    status:number,
    statusText: string,
    headers: any,
    config: AxiosRequestConfig,
    request:any,
    data:any,
}

export interface AxiosPromise extends Promise<AxiosResponse>{
}

export interface AxiosError extends Error {
    isAxiosError: boolean,
    config: AxiosRequestConfig,
    code?: string | null,
    request?:any;
    response?:AxiosResponse,
}

// export interface Axios {
//     request(config:AxiosRequestConfig): AxiosPromise
//     get(url:string,config?:AxiosRequestConfig): AxiosPromise
//     delete(url:string,config?:AxiosRequestConfig): AxiosPromise
//     head(url:string,config?:AxiosRequestConfig): AxiosPromise
//     options(url:string,config?:AxiosRequestConfig): AxiosPromise
//     post(url:string,data?:any,config?:AxiosRequestConfig): AxiosPromise
//     put(url:string,data?:any,config?:AxiosRequestConfig): AxiosPromise
//     patch(url:string,data?:any,config?:AxiosRequestConfig): AxiosPromise
// }

export interface AxiosInstance extends Axios {
    (config:AxiosRequestConfig):AxiosPromise,
}
