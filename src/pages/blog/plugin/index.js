/**
 * Created by LinChuQiang.
 */


import api from './api'
import axios from 'axios'

export default {

  install(Vue, options) {

    // 添加 $load 实例方法
    Vue.prototype.$load = function (...urls) {
      console.log(urls);
      
      const args = urls.map(url => axios({method: 'get', url: api(url)}))
      
      this.$store.dispatch('setLoading', true)
      
      return axios.all(args).then(
        axios.spread((...res) => {
          setTimeout(() => {
            this.$store.dispatch('setLoading', false)
          }, 1500)
          
          if (res.length == 1) {
            return res[0].data
          }
          return res.map(r => r.data)
        }),
      ).catch((err) => {
        this.$store.dispatch('setMessage', 'Network Error | 404')
        return Promise.reject()
      })
    }
    
    Vue.filter('timeFormat', time => {
      if (!time) {
        return ''
      }
      return new Date(time).toString().split(' ').filter((t, i) => i >= 1 && i <= 3).map((t, i) => i == 1 ? `${t},` : t).join(' ')
    })
  },
}