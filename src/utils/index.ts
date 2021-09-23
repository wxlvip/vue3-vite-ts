import md5 from 'js-md5'

/**
 * Md5 加密
 *
 */
const $md5 = (value: any) => {
  return md5(value)
}

/**
 * 设置 Storage
 *
 */
const $setStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取 Storage
 *
 */
const $getStorage = (key: string) => {
  const storage = window.localStorage.getItem(key) as string
  try {
    return JSON.parse(storage)
  } catch (error) {
    return storage
  }
}

/**
 * 删除 Storage
 *
 */
const $removeStorage = (key: string) => {
  window.localStorage.removeItem(key)
}

/* const $encrypt = (data:any, key:string) => {

  key = md5(key); 
  let x = 0;
  let len = data.length;
  let l = key.length;
  let char = '';
  let str = '';
  for (let i = 0; i < len; i++) {
      if (x == l) {
          x = 0;
      }
      char += key[x];
      x++;
  }
  for (let i = 0; i < len; i++) {
    // $str .= chr(ord($data{$i}) + (ord($char{$i})) % 256);
      str += String.fromCharCode.((data[i].charCodeAt()) + ((char[i].charCodeAt()) % 256));
  }
  return base64_encode(str);
} */

/* 
function decrypt($data, $key)
    {
        $key = md5($key);
        $x = 0;
        $data = base64_decode($data);
        $len = strlen($data);
        $l = strlen($key);
        $char = '';
        $str = '';
        for ($i = 0; $i < $len; $i++) {
            if ($x == $l) {
                $x = 0;
            }
            $char .= substr($key, $x, 1);
            $x++;
        }
        for ($i = 0; $i < $len; $i++) {
            if (ord(substr($data, $i, 1)) < ord(substr($char, $i, 1))) {
                $str .= chr((ord(substr($data, $i, 1)) + 256) - ord(substr($char, $i, 1)));
            } else {
                $str .= chr(ord(substr($data, $i, 1)) - ord(substr($char, $i, 1)));
            }
        }
        return $str;
    } */

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

export default {
  // 挂载到全局变量中 这样调用 如：$md5()
  install: (app: any) => {
    app.config.globalProperties['$md5'] = $md5
    app.config.globalProperties['$getStorage'] = $getStorage
    app.config.globalProperties['$setStorage'] = $setStorage
    app.config.globalProperties['$removeStorage'] = $removeStorage
  }
}
