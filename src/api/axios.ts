// import axios from 'axios';
import Qs from "qs";
// import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';


const a =  {
    sayHi: function() {
		console.log("Hi from module.");
	},
    AxiosApi: function({url,params={},method='get'}:any) {
        const response = axios({
            baseURL: 'http://api.ycsnews.com/api/v1',
            url: '/blog/getArticles',
            method: method || 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON 'application/json, text/plain, */*',
            },
            params: method==='get'? params || {} : {},
            // `paramsSerializer` 是一个负责 `params` 序列化的函数
            // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
            paramsSerializer: function(params) {
                return Qs.stringify(params, {arrayFormat: 'brackets'})
            },
            data: method==='post'? params || {} : {},
            timeout: 0,
            withCredentials: false, // default 为true则产生跨域
            // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            responseType: 'json', // default
        });
        return response;
        // return new Promise((resolve, reject) => {
        //     response.then(response => {
        //         resolve(response);
        //     })
        //     .catch(error => {
        //         reject(error)
        //     }).finally(() => {
        //         console.log('请求结束了');
        //     })
        // });
    },
    get: function(){
        // this.sayHi;
        // return this.AxiosApi();
    }
};
// const Axios = new HttpRequest()
/* export default {
	userName: 'Neo',
	sayHi: function() {
		console.log("Hi from module.");
	}
} */
// export default Axios;
 


export default class Axios {
    public static axiosInstance: AxiosInstance;

    public static init() {
        // 创建axios实例
        this.axiosInstance = axios.create({
            baseURL: 'http://api.ycsnews.com/api/v1',
            timeout: 6000
        });
        // 初始化拦截器
        // this.initInterceptors();
        return axios;
    }
}
