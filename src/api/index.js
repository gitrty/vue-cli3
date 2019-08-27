import { $axios } from '../axios'

export default {
  // 获取轮播图
  getLunbo: () => $axios.get('/api/getlunbo'),
  // 获取grid导航图片/内容
  getGrid: () => $axios.get('/api/girds'),
  // 获取newsList新闻数据
  getNews: () => $axios.get('/api/getnewslist'),
  // 获取newsInfo新闻详情数据
  getNewsInfo: id => $axios.get(`/api/getnew/${id}`),
  // 获取评论内容
  getComments: (id, pageIndex, limit = 2) => $axios.get(`/api/getcomments/${id}?pageindex=${pageIndex}&limit=${limit}`),
  // 发表评论
  postMessage: (id, content) => $axios.post(`api/postcomment/${id}`, { content: content }),
  // 获取photolist导航内容
  getImgCategory: () => $axios.get('/api/getimgcategory'),
  // 获取所属当前photolist的所有图片
  getImages: id => $axios.get(`/api/getimages/${id}`)
}
