import axios from 'axios'

const defaults = {
  baseURL: 'https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api',

  transformResponse: [(data) => {
    return JSON.parse(replaceImageUrl(data))
  }]
}

Object.assign(axios.defaults, defaults)

export const fetchLatest = () => {
  return axios.get('/4/news/latest')
}

export const fetchBefore = (date) => {
  return axios.get(`/4/news/before/${date}`)
}

export const fetchDetail = (id) => {
  return axios.get(`/4/news/${id}`)
}

function replaceImageUrl (str) {
  let reg = /https?:(\\?\/){2}(pic\d*\.zhimg\.com\\?\/)/g
  return str.replace(reg, 'https://images.weserv.nl/?url=$2')
}
