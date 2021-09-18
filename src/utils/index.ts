export function getStorage (key:string) {
    const storage = window.localStorage.getItem(key) as string;
    try {
      return JSON.parse(storage);
    } catch (error) {
      return storage;
    }
  }
  
  export function setStorage (key:string, value:any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function removeStorage (key:string) {
    window.localStorage.removeItem(key);
  }
  
  /* 以下仅为示例 */
  // 判断内容是否含有表情字符，现有数据库不支持。
  /* export function hasEmoji (str = '') {
    const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
    return str.match(reg) && str.match(reg).length
  } */
  
  // 单张图片上传
//   export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
  // 多张图片上传
//   export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'
  
 /*  export const pathMap = {
    login: '登录',
    introduce: '系统介绍',
    dashboard: '大盘数据',
    add: '添加商品',
    swiper: '轮播图配置'
  } */