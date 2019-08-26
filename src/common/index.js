import { vue } from '../main'

export default {
  install(Vue) {
    Vue.prototype.$path = (path, query = {}) => vue.$router.push({ path: `${path}`, query }).catch(err => err)
  }
}
