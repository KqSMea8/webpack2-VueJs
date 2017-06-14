/**
 * Created by sioxa on 2016/12/25 0025.
 */
import * as def from '../config/def'

export default {
  state: {
    playing: false,
    currentTime: 0,
    duration: 0,
    playMode: def.SEQUENTIAL,
	  // 当前播放列表的序号
    index: 0,
	  // 当前播放的歌曲
    song: {
      name: def.DEFAULT_SONG_NAME
    },
    playList: []
  },
  mutations: {
	  // 点播该歌曲
    playIndex (state, index) {
      state.index = index
      state.song = state.playList[index]
    },
	  // 设置播放列表并点播其中歌曲
    setPlayList (state, playList) {
      state.playList = playList.list
      state.index = playList.index
      state.song = state.playList[state.index]
    },
	  // 添加到播放列表
    addToPlayList (state, item) {
      state.playList.push(item)
    },
    deleteFromPlayList (state, index) {
      if (isNaN(index) || index >= state.playList.length) {
        return false
      }
      if (index === state.index) {
        if (state.index === 0 && state.playList.length === 1) {
          state.song = {
            name: def.DEFAULT_SONG_NAME,
            singer: ''
          }
          state.coverImgUrl = def.DEFAULT_IMG
        } else {
          state.song = state.playList[state.index + 1]
        }
      } else if (index < state.index) {
        state.index--
      }
      state.playList.splice(index, 1)
    },
	  // 添加到播放列表，下一首播放此歌曲
    addToPlayListAsNextPlay (state, item) {
      state.playList.splice(state.index + 1, 0, item)
    },
    updateCurrentTime (state, time) {
      state.currentTime = time
    },
    updateDuration (state, time) {
      state.duration = time
    },
	  // 播放
    play (state) {
      state.playing = true
    },
	  // 暂停
    pause (state) {
      state.playing = false
    },
	  // 上一首
    playFront (state) {
      state.index = (state.index - 1 + state.playList.length) % state.playList.length
      state.song = state.playList[state.index]
    },
	  // 下一首
    playNext (state) {
      state.index = (state.index + 1) % state.playList.length
      state.song = state.playList[state.index]
    },
	  // '单曲循环', '顺序播放', '随机播放'
    playContinue (state) {
      switch (state.playMode) {
        case def.SINGLE:
          break
        case def.SEQUENTIAL:
          state.index = (state.index + 1) % state.playList.length
          state.song = state.playList[state.index]
          break
        case def.RANDOM:
          state.index = Math.floor(Math.random() * state.playList.length)
          state.song = state.playList[state.index]
          break
      }
    },
	  // 改变播放模式 1:2 2:0 3:1
    changePlayMode (state) {
      state.playMode = (state.playMode + 1) % 3
    },
    setAlbummid (state, albummid) {
      state.song = {...state.song, albummid}
    }
  },
  getters: {
    currentTime: state =>
    parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
    duration: state =>
    parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),
    coverImgUrl:state => {
      if (typeof state.song.albummid === 'undefined') { return def.DEFAULT_IMG } else { return 'https://y.gtimg.cn/music/photo_new/T002R500x500M000' + state.song.albummid + '.jpg' }
    }
  }
}
