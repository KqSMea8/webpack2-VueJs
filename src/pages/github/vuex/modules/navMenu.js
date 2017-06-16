import api from '../../api'
import * as types from '../mutation-types'

const state = {
    full: false,
		// 是否打开用户搜索侧栏
    open: false
}

const getters = {
    getOpenState: state => state.open,
    getFullState: state => state.full
}

const actions = {
		// 全屏用户搜索框
    fullNavMenu ({ commit }) {
        commit('FULL_NAV_MENU')
    },
		// 打开用户搜索框
    openNavMenu ({ commit }) {
        commit('OPEN_NAV_MENU')
    },
	  // 关闭用户搜索框
    closeNavMenu ({ commit }) {
        commit('CLOSE_NAV_MENU')
    },
    toggleNavMenu ({ commit }) {
        commit('TOGGLE_NAV_MENU')
    }
}

const mutations = {
    [types.FULL_NAV_MENU] (state) {
        state.full = true
    },
    [types.OPEN_NAV_MENU] (state) {
        state.full = false
        state.open = true
    },
    [types.CLOSE_NAV_MENU] (state) {
        state.full = false
        state.open = false
    },
    [types.TOGGLE_NAV_MENU] (state) {
        state.open = !state.open
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
