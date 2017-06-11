import Vue from 'vue'
import Vuex from 'vuex'
import { addLocalStory, removeLocalStory, clearLocalStories } from './localStore'
Vue.use(Vuex)
const store = new Vuex.Store({
	state    : {
		favorites: []
	},
	getters  : {
		getFavorites (state) {
			return state.favorites
		},
		getFavoritesReverse (state) {
			return state.favorites.reverse()
		},
		getFavoritesStoryNum (state) {
			return state.favorites.length
		}
	},
	mutations: {
		addStory (state, story) {
			let hadFav = state.favorites.find(function (value, index, arr) {
				return value.id === story.id
			})
			if (hadFav === undefined) {
				state.favorites.push(story)
				addLocalStory(story)
			}
		},
		removeStory (state, story) {
			let hadFav = state.favorites.findIndex(function (value, index, arr) {
				return value.id == story.id
			})
			if (hadFav !== -1) {
				state.favorites.splice(hadFav, 1)
				removeLocalStory(story)
			}
		},
		clearStories (state) {
			state.favorites.splice(0, state.favorites.length)
			clearLocalStories()
		},
		// Vue 创建时读取localStorage项目
		loadLocalStories (state) {
			for (var i = 0; i < window.localStorage.length; i++) {
				state.favorites.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
			}
		}
	},
	actions  : {
		addFavoriteStory ({commit}, story) {
			commit('addStory', story)
		},
		removeFavoriteStory ({commit}, {story}) {
			commit('removeStory', story)
		},
		clearFavoriteStorie ({commit}) {
			commit('clearStories')
		},
		getLocalFavoriteStories ({commit}) {
			commit('loadLocalStories')
		}
	}
})
export default store
