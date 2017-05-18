/**
 * Created by LinChuQiang.
 */
import * as type from '../mutationsTypes';

const state = {
  todos: JSON.parse('[]'),
};
const getters = {
  getTodos: state => state.todos,
};
const actions = {};
const mutations = {
  [type.addTodoList](state, {todoitem}){
    console.log('2.addTodoList->todoitem: ', todoitem);
    state.todos.push({
      todoitem,
      done: false,
    });
  },
  [type.ischooseTodo](state, {todo}){
    todo.done = !todo.done;
  },
  [type.editTodo](state, {todo, newvalue}){
    todo.todoitem = newvalue;
  },
  [type.deleteTodoitem](state, {todo}){
    console.log('删除前的todos', state.todos);
    state.todos.splice(state.todos.indexOf(todo), 1);
    console.log('删除后的todos', state.todos);
  },
  [type.clearCompleted](state){
    state.todos = state.todos.filter(todo => !todo.done);
  },
  [type.toggleAll](state, {done}){
    state.todos.forEach(todo => {
      todo.done = done;
    });
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};