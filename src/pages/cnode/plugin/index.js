/**
 * Created by LinChuQiang.
 */

import Vue from 'vue'
import Zepto from 'webpack-zepto'

/**
 * 全局注册
 */
export default {
  install (Vue, options) {
    let timer = null
    Vue.prototype.$alert = (msg) => {
      Zepto('#alertWeek').remove()
      let $alert = Zepto('<div class="week-alert" id="alertWeek"></div>')
      Zepto('body').append($alert)
      $alert.html(msg)
      $alert.addClass('alert-show')
      clearTimeout(timer)
      timer = setTimeout(() => {
        $alert.remove()
      }, 2000)
    }
  }
}
