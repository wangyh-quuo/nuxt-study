#### nuxt路由:
1. pages文件夹下的vue文件会被配置成路由
 ```
 pages/index.vue
 routes: [
  {
    path: '/',
    component: 'pages/index.vue',
    name: 'index'
  },
]
 ```
2. 嵌套路由,pages文件夹下面还有文件夹
```
pages/user/record/index.vue
routes: [
  {
    path: '/user',
    component: 'pages/user/index.vue',
    name: 'user',
    children: [
      {
        path: '/record',
        component: 'pages/user/record/index.vue'
      }
    ]
  },
]
```
3.动态路由
```
pages/user/record/_id.vue  => /user/record/:id
routes: [
  {
    path: '/user',
    component: 'pages/user/index.vue',
    name: 'user',
    children: [
      {
        path: '/record/:id',
        component: 'pages/user/record/_id.vue'
      }
    ]
  },
]
pages/user/record/_category/_id.vue  => /user/record/:category/:id
routes: [
  {
    path: '/user',
    component: 'pages/user/index.vue',
    name: 'user',
    children: [
      {
        path: '/record/:category/:id',
        component: 'pages/user/record/_category/_id.vue'
    ]
  },
]
```
#### nuxt布局
1. 在根目录layouts创建布局文件
2. 其它路由页面通过属性layout: '布局页名称(name属性)'来引入该布局

#### head配置 参考vue-meta 
1. head属性定义，可配置默认head
```
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
  ]
}
```
2. head方法返回head
```
head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
```
#### axios请求数据
asyncData中请求
#### 插件
1. 定义Vue全局属性
```
# vue-inject.js
import Vue from 'vue';
import axios from 'axios'

Vue.prototype.$axios = axios;
```
```
# nuxt.config.js
module.exports = {
  plugins: [
    '~/plugins/vue-inject.js',
  ]
}
```
使用this.$axios在vue中使用
2. 定义context全局属性
```
# ctx-inject.js
import axios from 'axios'
export default ({ app }, inject) => {
  app.$axios = axios;
}
```
```
# nuxt.config.js
module.exports = {
  plugins: [
    '~/plugins/ctx-inject.js',
  ]
}
```
使用context.app.$axios

3. 定义vue,context,vuex全局属性
```
# combined-inject.js
import axios from 'axios'
export default ({ app }, inject) => {
  inject('axios', axios)
}
```
```
# nuxt.config.js
module.exports = {
  plugins: [
    '~/plugins/combined-inject.js',
  ]
}
```
使用context.app.$axios,this.$axios