import { $axios } from '../axios'

export default {
  // 获取轮播图
  getLunbo: () => $axios.get('/api/getlunbo')
}
