import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: {
      'id': 0,
      'name': '歌曲名称',
      'singer': '演唱者',
      'albumPic': '../../../static/player-bar.png',
      'location': '',
      'album': ''
    },
    lyric: '',
    currentIndex: 0, // 当前播放的歌曲位置
    playing: false, // 是否正在播放
    loading: false, // 是否正在加载中
    showDetail: false,
    songList: [],// 播放列表
    currentTime: 0, // 当目前的播放位置已更改时
    tmpCurrentTime: 0, // 设置音频的当前播放位置
    durationTime: 0,// 歌曲总时间，秒计算
    bufferedTime: 0,// 已缓冲部分
    change: false   // 判断是更改的时间还是播放的时间
  },
  getters: {
    audio: state => state.audio,
    playing: state => state.playing,
    loading: state => state.loading,
    showDetail: state => state.showDetail,
    durationTime: state => state.durationTime,
    currentIndex: state => state.currentIndex,
    bufferedTime: state => state.bufferedTime,
    tmpCurrentTime: state => state.tmpCurrentTime,
    songList: state => state.songList,
    change: state => state.change,
    currentTime: state => state.currentTime,
    prCurrentTime: state => {
      return state.currentTime / state.durationTime * 100
    },
    prBufferedTime: state => {
      return state.bufferedTime / state.durationTime * 100
    }
  },
  mutations: {
    // 显示底部迷你播放器
    toggleDetail (state) {
      state.showDetail = !state.showDetail
    },
    
    //播放
    play (state) {
      state.playing = true
    },
    //暂停
    pause (state) {
      state.playing = false
    },

    // 播放中的歌曲
    setAudio (state) {
      state.audio = state.songList[state.currentIndex - 1]
    },
    // 歌曲地址
    setLocation (state, location) {
      state.audio.location = location
    },
    // 点击列表中的歌曲时
    setAudioIndex (state, index) {
      state.audio = state.songList[index]
      state.currentIndex = index + 1
    },
    // 删除列表中的歌曲时
    removeAudio (state, index) {
      state.songList.splice(index, 1)
      if (index === state.songList.length) {
        index--
      }
      state.audio = state.songList[index]
      state.currentIndex = index + 1
      if (state.songList.length === 0) {
        state.audio = {
          'id': 0,
          'name': '歌曲名称',
          'singer': '演唱者',
          'albumPic': '/static/player-bar.png',
          'location': '',
          'album': ''
        }
        state.playing = false
      }
    },
    
    setChange (state, flag) {
      state.change = flag
    },
    // 当目前的播放位置已更改时
    updateCurrentTime (state, time) {
      state.currentTime = time
    },
    // 歌曲总时间，秒计算
    updateDurationTime (state, time) {
      state.durationTime = time
    },
    // 已缓冲部分
    updateBufferedTime (state, time) {
      state.bufferedTime = time
    },
    changeTime (state, time) {
      state.tmpCurrentTime = time
    },
    //显示加载条
    openLoading (state) {
      state.loading = true
    },
    //关闭加载条
    closeLoading (state) {
      state.loading = false
    },
    resetAudio (state) {
      state.currentTime = 0
    },
    // 播放下一曲
    playNext (state) {
      state.currentIndex++
      if (state.currentIndex > state.songList.length) {
        state.currentIndex = 1
      }
      state.audio = state.songList[state.currentIndex - 1]
    },
    // 播放上一曲
    playPrev (state) {
      state.currentIndex--
      if (state.currentIndex < 1) {
        state.currentIndex = state.songList.length
      }
      state.audio = state.songList[state.currentIndex - 1]
    },
    // 添加到播放列表
    addToList (state, songs) {
      var items = Array.prototype.concat.call(songs)
      console.log(items);
      /*
      * [
      *  {id,name.location,...}
      * ]
      * */
      items.forEach(item => {
        var flag = false
        // 检测歌曲重复
        state.songList.forEach(function (element, index) {
          if (element.id === item.id) {
            flag = true
            // 并播放
            state.currentIndex = index + 1
          }
        })
        if (!flag) {
          state.songList.push(item)
          // 并播放
          state.currentIndex = state.songList.length
        }
      })
    },
    setLrc (state, lrc) {
      state.lyric = lrc
    }
  },
  // 异步的数据操作
  actions: {
    
    getSong ({commit, state}, id) {
      
      commit('openLoading')
      Axios.get(api.getSong(id)).then(res => {
        // 统一数据模型，方便后台接口的改变
        var url = res.data.data[0].url
        commit('setAudio')
        commit('setLocation', url)
      })
      .catch((error) => {     // 错误处理
        console.log(error)
        window.alert('获取歌曲信息出错！')
      })
    }
  }
})
export default store
