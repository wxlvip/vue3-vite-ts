# Vue 3 + Typescript + Vite


![](https://img.shields.io/badge/vue-3.2.6-brightgreen)
![](https://img.shields.io/badge/vue--router-4.0.0-brightgreen)
![](https://img.shields.io/badge/vuex-4.0.2-brightgreen)
![](https://img.shields.io/badge/axios-0.21.4-brightgreen)
![](https://img.shields.io/badge/sass-1.41.0-brightgreen)
![](https://img.shields.io/badge/normalize.css-v8.0.1-brightgreen)
![](https://img.shields.io/badge/element--plus-1.1.0-brightgreen)
![](https://img.shields.io/badge/Typescript-4.3.2-brightgreen)
![](https://img.shields.io/badge/vite-2.5.4-brightgreen)
![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/release-v0.0.1-blue)
![](https://img.shields.io/badge/%24-donate-ff69b4)

## 简介

vue3 发布之后，性能增强，速度vue2的倍数，打包体积都在减小（treeshaking）,composition api 增加了项目可读性。

为了提升开发效率，减少在配置框架上消耗的时间，根据当前前端发展趋势，基于Vue3.0 + Typescript + Vite 构建的空白项目，内置了 normalize.css 进行 CSS 的初始化，以及基本常用的库 Axios、Vue-Router、Sass、Vuex、Element Plus等，项目都是以composition api风格编写，并配置好了代理以及对cdn引入、代码压缩、图片压缩、关闭map等打包问题进行优化配置。

该方案可作为直接开发使用的架构环境，也可因个人喜好进行修改。

## 目录结构

```
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # apis统一管理
│     ├── axios.ts          # Axios 类封装
│     └── index.ts          # API 接口封装
│   ├── assets              # 需要打包的静态资源│   
│   ├── components          # 公共组件
│     └── HelloWorld.vue    # HelloWorld 组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── style               # css 样式
│     └── common.scss       # 样式初始化文件，全局样式
│   ├── utils               # 公用方法文件夹
│   ├── views               # 路由页面
│     ├── About.vue         # About 组件
│     └── Home.vue          # Home 组件
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   └── env.d.ts            # vite 类型声明
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock
```


## 功能

- [x] 配置数据状态管理工具 Vuex
- [x] 配置了 Axios
- [x] 采用 Sass 编译 CSS 样式
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are com


## Setup

### 下载项目
```
// 把模板下载到本地
git clone https://github.com/lin-xin/vue-manage-system.git
// 进入模板目录
cd vue-manage-system
```

### 项目安装

```
npm install  or yarn or yarn install
```

### 项目启动
```
npm run dev  or yarn dev
```

### 项目打包
```
npm run build  or yarn build
```
### 本地访问

```
// 下载安装 http-server
$ npm install http-server -g

// 进入到 dist 已打包文件目录中
$ cd dist

// 启动 http-server 使用命令：http-server [path] [options]
$ http-server ./ 3000

```
访问: http://127.0.0.1:8080 或者 http://192.168.0.100:8080
使用 CTRL-C 停止本地服务。[http-server 传送门](https://www.npmjs.com/package/http-server)

### 线上部署

本例使用 Nginx 部署\
需要注意的是路由配置 src/router/index.ts 
```js
const router = createRouter({
  history: createWebHistory('test'),// 此处部署非根目录，而是 test 目录下,所以括号内配置 test，如果是根目录则改成 createWebHistory()
  // history: createWebHashHistory('test'),// hash 也是可以，如果面向企业对 url 不敏感可用此模式
  routes,
});
```
Nginx 配置：

```
server {
    listen 80;
    server_name  test.wxlvip.com;
    server_tokens off;
    index index.html index.htm;
    root /www;
    location / {
        proxy_ssl_session_reuse off;
        try_files $uri $uri/ /index.html;
        client_max_body_size    1000m;
    }
}
```

访问地址：http://test.wxlvip.com/test/


## Browsers support
Modern browsers and Internet Explorer 10+.

| IE  | 火狐 | Chrome |  Safari   |
| --- | --- | --- | --- |
|  IE10, IE11, Edge |  Firefox last 2 versions | Chrome last 2 versions | Safari last 2 versions |

## License
[MIT](https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE)

Copyright (c) 2021-present


<!-- 此内容不会出现在呈现的 Markdown 中 

 - [x] Element Plus
 - [ ] 登录/注销
 - [ ] Dashboard
 - [ ] 表格
 - [ ] Tab 选项卡
 - [ ] 表单
 - [ ] 图表 📊
 - [ ] 富文本编辑器
 - [ ] 图片拖拽/裁剪上传
 - [ ] 权限测试
 - [ ] 404 / 403
 - [ ] 三级菜单
 - [ ] 自定义图标
 国际化


https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams

富文本

Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。 访问地址：vue-quill-editor

markdown

掘金
mavonEditor：基于Vue的markdown编辑器。 访问地址：mavonEditor


## 项目结构

```
├─.vscode           // vscode配置文件
├─public            // 无需编译的静态资源目录
├─src                // 代码源文件目录
│  ├─apis            // apis统一管理
│  │  └─modules        // api模块
│  ├─assets            // 静态资源
│  │  └─images      
│  ├─components     // 项目组件目录
│  │  ├─Form
│  │  ├─Input
│  │  ├─Message
│  │  ├─Search
│  │  ├─Table
│  ├─directives     // 指令目录
│  │  └─print
│  ├─hooks            // hooks目录
│  ├─layouts        // 布局组件
│  │  ├─dashboard
│  │  │  ├─content
│  │  │  ├─header
│  │  │  └─sider
│  │  └─fullpage
│  ├─mock           // mock apu存放地址，和apis对应
│  │  └─modules
│  ├─router            // 路由相关
│  │  └─helpers
│  ├─store            // 状态管理相关
│  ├─styles            // 样式相关(后面降到css架构会涉及具体的目录)
│  ├─types            // 类型定义相关
│  ├─utils            // 工具类相关
│  └─views            // 页面目录地址
│      ├─normal    
│      └─system
└─template            // 模板相关
    ├─apis
    └─page



	
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts

```

## 已集成插件

vue-router、vuex、sass、element-plus、eslint

# 项目搭建说明

## 搭建项目
使用 vite 脚手架，安装 Vue3、Vite、TypeScript,使用这种方法会安装最新的 vue 和 vite 版本

```
npm init @vitejs/app vue3-vite
```
安装过程中，1.选择 vue 2.选择 vue-ts 然后回车此时初始化项目安装完成

然后 进入到项目中 cd vue3-vite 进行包安装 可以使用 npm 也可以使用 yarn 这里我使用的是 yarn

```
npm install  or yarn or yarn install
npm run dev  or yarn dev
```

安装 vue-router@4

```
npm install vue-router@4

// or

yarn add vue-router@4 --save
```

安装 sass

```
yarn add sass --save-dev
```

安装 ElementPlus

```
yarn add element-plus
yarn add @element-plus/icons
```

安装 vuex4
```
yarn add vuex@next --save
```

安装 eslint prettier
```
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier
```


 "vue-cropperjs": "^5.0.0",
    "vue-i18n": "^9.0.0",
    "vue-schart": "^2.0.0",
    "wangeditor": "^4.7.4"
 "amfe-flexible": "^2.2.1",
"moment": "^2.29.0",
    "postcss-px2rem": "^0.3.0",
    "qs": "^6.9.4",
 "px2rem-loader": "^0.1.9",
    "stylus": "^0.54.7",
    "stylus-loader": "^3.0.2",
    "typescript": "~3.5.3",
    "vue-cli-plugin-element": "^1.0.1",
    "vue-template-compiler": "^2.6.10"
-->
