import Axios from './axios'; //数据请求方法
/* import {getArticlesApi} from "../utils/api"; */

/**
 * 博文管理--查询博文列表
 * @params unid string
 * ｛unid:1}
 */
 export const getArticlesApi = (params={}) => {
     console.log(Axios);
    //  return Axios.sayHi();
    return Axios.axiosInstance({
        url: '/blog/getArticles',
        method: 'get',
        data: ''
    })

    //  return Axios.get();
    // return HttpRequest.get();
}