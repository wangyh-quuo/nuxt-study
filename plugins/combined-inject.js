// 注入上下文
// Vue.prototype.$xxx = xxx
// context.app.$xxx = xxx
import axios from 'axios'
export default ({ app }, inject) => {
  inject('axios', axios)
}