import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _81d2861a = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _1700a6e2 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _0fd3e5ee = () => interopDefault(import('..\\pages\\user\\record\\_category\\_id.vue' /* webpackChunkName: "pages_user_record__category__id" */))
const _3f35614d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _6fcad84c = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages__" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _81d2861a,
    name: "list"
  }, {
    path: "/user",
    component: _1700a6e2,
    name: "user"
  }, {
    path: "/user/record/:category?/:id?",
    component: _0fd3e5ee,
    name: "user-record-category-id"
  }, {
    path: "/",
    component: _3f35614d,
    name: "index"
  }, {
    path: "/*",
    component: _6fcad84c,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
