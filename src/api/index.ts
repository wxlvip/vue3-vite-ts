import Axios from './axios'; //数据请求方法
/* import {getArticlesApi} from "../utils/api"; */

/**
 * 博文管理--查询博文列表
 * @params bid number
 * ｛bid?:1}
 */
 export const getArticlesApi = (params={id:1,k:'关键词'}) => {
     
    return Axios.get({
        url:'/blog/getArticles',
        params:params,
        data: ''
    })
}