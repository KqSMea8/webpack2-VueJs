/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

export default {
  [type.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
