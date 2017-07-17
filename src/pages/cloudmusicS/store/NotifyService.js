/**
 * Created by sioxa on 2016/12/29 0029.
 */
import Rx from 'rxjs/Rx'
export default {
	state    : {
		actionSheet: {
			show   : false,
			menus  : {},
			subject: null
		},
		playingList: {
			show: false
		}
	},
	actions  : {
		// todo-vuex: rxjs/Rx 示例
		notifyActionSheet ({commit, state}, options) {
			state.actionSheet.subject = new Rx.AsyncSubject()
			state.actionSheet.subject.subscribe({
				next    : (v) => options.handler[v](),
				complete: () => commit('closeActionSheet')
			})
			commit('showActionSheet', options.menus)
		},
		responceFromActionSheet ({state}, menu) {
			state.actionSheet.subject.next(menu)
			state.actionSheet.subject.complete()
		}
	},
	mutations: {
		// 显示浮动操作栏
		showActionSheet (state, menus) {
			state.actionSheet.menus = menus
			state.actionSheet.show = true
		},
		// 关闭浮动操作栏
		closeActionSheet (state) {
			state.actionSheet.show = false
		},
		// 显示播放列表
		showPlayingList (state) {
			state.playingList.show = true
		},
		// 关闭播放列表
		closePlayingList (state) {
			state.playingList.show = false
		}
	}
}
