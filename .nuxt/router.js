import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c1d0bd64 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _9ffb93b2 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _1cd7ad6e = () => interopDefault(import('..\\pages\\user\\record\\_category\\_id.vue' /* webpackChunkName: "pages_user_record__category__id" */))
const _5f510852 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5944855f = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages__" */))

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
    component: _c1d0bd64,
    name: "list"
  }, {
    path: "/user",
    component: _9ffb93b2,
    name: "user"
  }, {
    path: "/user/record/:category?/:id?",
    component: _1cd7ad6e,
    name: "user-record-category-id"
  }, {
    path: "/",
    component: _5f510852,
    name: "index"
  }, {
    path: "/*",
    component: _5944855f,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
