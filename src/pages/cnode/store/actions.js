/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

export const setUserInfo = ({commit}, user) => {
  commit('setUserInfo', user)
}
