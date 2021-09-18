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

# 简介

基于Vue3.0 + Typescript + Vite 构建的空白项目，css 样式采用normalize.css 进行的初始化，以及基本常用的 axios,vue-router,状态管理工具采用的是 vuex，模块化使用 Element Plus已经按需引入配置好，包括打包优化的cdn引入，代码压缩，图片压缩，关闭map等打包优化都已配置完成。项目都是以composition api风格编写。

vue3 发布之后，性能增强，速度vue2的倍数，打包体积都在减小（treeshaking），composition api 增加了项目可读性。


# 目录结构

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

# Setup
## 项目安装

```
npm install  or yarn or yarn install
```

## 项目启动
```
npm run dev  or yarn dev
```


# Browsers support
Modern browsers and Internet Explorer 10+.

| IE  | 火狐 | Chrome |  Safari   |
| --- | --- | --- | --- |
|  IE10, IE11, Edge |  Firefox last 2 versions | Chrome last 2 versions | Safari last 2 versions |



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


