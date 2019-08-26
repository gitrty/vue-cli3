import { $axios } from '../axios'

export default {
  // 获取轮播图
  getLunbo: () => $axios.get('/api/getlunbo'),
  // 获取grid导航图片/内容
  getGrid: () => $axios.get('/api/girds'),
  // 获取newsList新闻数据
  getNews: () => $axios.get('/api/getnewslist')
}
