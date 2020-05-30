// 注入上下文
import axios from 'axios'
export default ({ app }, inject) => {
  inject('axios', axios)
}