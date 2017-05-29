/**
* Created by LinChuQiang on 2017/5/10.
*/

<template>
	<li>
		<input type = "checkbox" v-bind:checked="todo.done" v-on:change="ischooseTodo({todo})">
		<label v-text="todo.todoitem" @click="editing=true"></label>
		<button v-on:click="deleteTodoitem({todo:todo})">删除该条：{{ todo.todoitem }}</button>
		<input type = "text" v-show="editing" v-myfocus="editing" v-bind:value="todo.todoitem" v-on:keyup.enter="doneEdit" v-on:keyup.esc="cancelEdit" v-on:blur="doneEdit">
	</li>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default{
    //声明并接收父组件的数据
    props      : [ "todo" ],
    data(){
      return {
        editing:false
      };
    },
    methods: {
      ...mapMutations([
        'editTodo',
        'ischooseTodo',
        'deleteTodoitem'
      ]),
      doneEdit(e){
        const newvalue = e.target.value.trim()
        console.log('doneEdit->this: ',this);
        //{to do:value,done:false}
        console.log('doneEdit->this: ',this.todo);
        //解构赋值变量 to do=this.to do
        const { todo } = this
        if (!newvalue) {
          this.deleteTodoitem({
            todo
          })
        } else if (this.editing) {
          this.editTodo({
            todo,
            newvalue
          })
          this.editing = false
        }
      },
      cancelEdit(e){
        e.target.value = this.todo.text
        this.editing = false
      },
      csl(){
        console.log(this.todo.todoitem);
      }
    },
    //注册一个局部自定义指令 v-focus
    directives: {
      myfocus(el,{value},{context}){
        if(value){
          // nextTick 解决异步 DOM 刷新问题 http://www.sunzhongwei.com/vuejs-nexttick-async-update-dom
          context.$nextTick(()=>{
            el.focus()
          })
        }
      }
    },
  }
</script>
