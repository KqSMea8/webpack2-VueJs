/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'
export default {
  // 添加 todos
  rootActAddTodoItem (context, event) {
    var todoitem = event.target.value
    // console.log('1.rootAct_addTodoItem->context:', context)
    if (todoitem.trim()) {
      context.commit(type.addTodoList, {todoitem})
    }
    event.target.value = ''
  }
}
