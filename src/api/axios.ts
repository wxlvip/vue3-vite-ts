// import axios from 'axios';
import Qs from "qs";
// import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types';
import axios from 'axios'; // AxiosInstance

class Axios {

    public static init(config:any) {
        // 创建axios实例
        let env = process.env.NODE_ENV;
        let baseURL = '/api';
        if (env === 'debug') {// 开发环境
            baseURL = '/debug';
        } else if(env === 'development'){// 测试环境
            baseURL = '/dev';
        } else if(env === 'production'){ // 生产环境
            baseURL = 'https://api.ycsnews.com/api/v1';
        } else { // 生产环境
            baseURL = 'https://api.ycsnews.com/api/v1';
        }

        const instance = axios({
            baseURL: baseURL,
            url: config.url,
            method: config.method || 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON 'application/json, text/plain, */*',
            },
            params: config.method==='get'? config.params || {} : {},
            // `paramsSerializer` 是一个负责 `params` 序列化的函数
            // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
            paramsSerializer: function(params:{}) {
                return Qs.stringify(params, {arrayFormat: 'brackets'})
            },
            data: config.method==='post'? config.params || {} : {},
            timeout: 0,// 0 为不限制
            withCredentials: false, // default 为true则产生跨域
            // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            responseType: 'json', // default
        });

        // 添加请求拦截器
        axios.interceptors.request.use((config:any) => {
            // 在发送请求之前做些什么
            console.log('请求拦截');
            if (localStorage.getItem('Authorization')) {
                config.headers.Authorization = localStorage.getItem('Authorization')
            }

            return config;
        }, function (error:any) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use((response:any) => {
            // 对响应数据做点什么
            console.log('响应拦截');
            if (response.data.code === 1003) {
                // router.replace({
                //   path: '/login'
                // })
                localStorage.removeItem('Authorization')
            }

            return response;
        }, (error:any) => {
            // 对响应错误做点什么
            /*
            //==============  错误处理  ====================
            if (error && error.response) {
                    switch (error.response.status) {
                        case 400: error.message = '请求错误(400)'; break;
                        case 401:
                            error.message = '未授权，请重新登录(401)';
                            localStorage.removeItem('Authorization')
                            router.replace({
                                path: '/login',
                                query: {redirect: router.currentRoute.fullPath} // 登录成功后 跳转当前页面
                            })
                        break;
                        case 403: error.message = '拒绝访问(403)'; break;
                        case 404: error.message = '请求出错(404)'; break;
                        case 408: error.message = '请求超时(408)'; break;
                        case 500: error.message = '服务器错误(500)'; break;
                        case 501: error.message = '服务未实现(501)'; break;
                        case 502: error.message = '网络错误(502)'; break;
                        case 503: error.message = '服务不可用(503)'; break;
                        case 504: error.message = '网络超时(504)'; break;
                        case 505: error.message = 'HTTP版本不受支持(505)'; break;
                        default: error.message = `连接出错(${err.response.status})!`;
                    }
                } else {
                    err.message = '连接服务器失败!'
                }

            */
            return Promise.reject(error);
        });

        return new Promise((resolve, reject) => {
            instance.then((response:any) => {
                // 如果成功了, 调用resolve(value)
                resolve(response);
            })
            .catch((error:any) => {
                // 如果失败了, 不调用reject(reason), 而是提示异常信息
                reject(error)
                // message.error('请求出错了: ' + error.message).then(r => {});
            }).finally(() => {
            })
        });
    }

    get =({url,params}:any)=>{
        console.log('get方法：',url);

        let config = {
            url: url,
            method: 'get',
            params: params
        }
        return  Axios.init(config);
    }

    post =({url,params}:any)=>{
        let config = {
            url: url,
            method: 'post',
            params: params
        }
        return  Axios.init(config);
    }

    put =({url,params}:any)=>{
        let config = {
            url: url,
            method: 'put',
            params: params
        }
        return  Axios.init(config);
    }

    del =({url,params}:any)=>{
        let config = {
            url: url,
            method: 'delete',
            params: params
        }
        return  Axios.init(config);
    }

}


// let axios = new Axios();
// axios.nterceptors.request.use()
// axios.nterceptors.request.eject()

export default new Axios();
