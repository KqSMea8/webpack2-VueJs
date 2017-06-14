/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    audio: {
      songUrl: '',
      imgUrl: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
      title: '',
      singer: '',
      currentLength: 0, // 当前播放位置
      songLength: 0,  // 总播放长度
      currentFlag: false
    },
    head: {
      toggle: false,
      title: '',
      style: {'background': 'rgba(43,162,251,0)'}
    },
    headNav: 'head-nav1',
    audioLoadding: false,
    detailPlayerFlag: false, // 显示详细播放器
    showPlayer: false,
    listenCount: 0,
    isPlay: true, // 切换播放暂停
    listInfo: {
      songList: [],
      songIndex: 0
    }
  },
  getters: {
    audio: state => state.audio,
    head: state => state.head,
    audioLoadding: state => state.audioLoadding,
    detailPlayerFlag: state => state.detailPlayerFlag,
    showPlayer: state => state.showPlayer,
    isPlay: state => state.isPlay
  },
  mutations: {
    setAudio (state, audio) {
      if (!state.listenCount) {
        state.showPlayer = true  // 首次进入应用时不可打开播放详情
      }
      state.listenCount++
	    // console.log('setAudio', state.audio)
      state.audio = {...(state.audio), ...audio}
	    // console.log('setAudio', state.audio)
    },
	  // 当前播放位置
    setAudioTime (state, time) {
      state.audio.currentLength = time
    },
    setCurrent (state, flag) {
      state.audio.currentFlag = flag
    },
	  // 第二级路由标题，rank_info
    showHead (state, flag) {
      state.head.toggle = flag
    },
    setHeadTitle (state, title) {
      state.head.title = title
    },
    setHeadStyle (state, style) {
      state.head.style = style
    },
    resetHeadStyle: state => {
      state.head.style = {'background': 'rgba(43,162,251,0)'}
    },
    toggleAudioLoadding: (state, flag) => {
      state.audioLoadding = flag
    },
	  // 切换导航标签时
    setHeadNav: (state, index) => {
      state.headNav = 'head-nav' + index
    },
	  // 显示详细播放器
    showDetailPlayer: (state, flag) => {
      state.detailPlayerFlag = flag
    },
    showPlayer: (state, flag) => {
      state.showPlayer = flag
    },
    isPlay: (state, flag) => {
      state.isPlay = flag
    },
    setLrc: (state, lrc) => {
	    // console.log('setLrc', state.audio)
      state.audio = {...(state.audio), lrc}
	    // console.log('setLrc', state.audio)
    },
    setListInfo: (state, {list, index}) => {
      state.listInfo.songList = list
      state.listInfo.songIndex = index
    }
  },
  actions: {
    getSong ({commit, state}, hash) {
      commit('toggleAudioLoadding', true)
      Vue.http.get(`http://cs003.m2828.com/apis/getKugouSong.php?hash=${hash}`).then(res => {
      	// console.log(res)
      	// console.log(res.data)
        var json_obj = JSON.parse(JSON.stringify(res.data))
        let songUrl = json_obj.url,
          imgUrl = json_obj.imgUrl.split('{size}').join('100'),
          title = json_obj.songName,
          singer = json_obj.choricSinger,
          songLength = json_obj.timeLength,
          currentLength = 0,
          audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
        commit('setAudio', audio)
	      commit('isPlay', true)
        commit('toggleAudioLoadding', false)
      })
    },
    getLrc ({commit, state}, hash) {
      Vue.http.get(`http://cs003.m2828.com/apis/getLrc.php?hash=${hash}`).then(res => {
        commit('setLrc', res.data)
      })
    },
    prev ({dispatch, state}) {
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == 0) {
        state.listInfo.songIndex = list.length
      } else {
        state.listInfo.songIndex--
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    },
    next ({dispatch, state}) {
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == list.length - 1) {
        state.listInfo.songIndex = 0
      } else {
        ++state.listInfo.songIndex
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    }
  }
})

export default store
