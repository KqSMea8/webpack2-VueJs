/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

export default {
  settingUserInfo ({commit}, user) {
    commit(type.SET_USER_INFO, user)
  }
}
