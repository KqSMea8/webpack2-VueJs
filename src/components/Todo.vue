/**
* Created by LinChuQiang on 2017/5/10.
*/

<template>
	<div id = "todoList">
		<header>
			<h1>TODOS</h1>
			<input type = "text" placeholder = "还有什么需要做的？" autofocus autocomplete = "off" v-on:keyup.enter = "submitTodo">
			<input type = "button" @click = "csl">
			<button @click="go">this is to the data page!</button>
		</header>
		<section>
			<input type = "checkbox" v-bind:checked='allChecked' @change="toggleAll({ done: !allChecked })">全选
			
			<ul>
				<TodoList v-for = "(todoitem,index) in filteredTodos" v-bind:key = "index" v-bind:todo = "todoitem"></TodoList>
			</ul>
		
		</section>
		<footer>
			<span> 还有
				<strong>{{remaining}}</strong> {{remaining | pluralize('件事') }} 未做
			</span>
			<ul class = "filters">
				<li v-for = "(value,key) in types">
					<span v-on:click = "visibility=key">{{ key }}</span>
				</li>
			</ul>
			<button @click = "clearCompleted">清除已完成的Todo</button>
		</footer>
	</div>
</template>

<style lang = "scss" rel = "stylesheet/scss">
	#todoList {
		h1 {
			color: red;
			margin: 15px 0;
			text-align: center;
			
		}
		header, footer {
			margin: 10px 0;
		}
		ul {
			margin: 15px 0;
			li {
				margin: 15px 0;
			}
		}
	}
</style>

<script>
  import TodoList from './TodoList.vue'
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  const types = {
    '全部' : todos => todos,
    '未完成': todos => todos.filter(todo => !todo.done),
    '已完成': todos => todos.filter(todo => todo.done)
  }
  export default{
    components: {TodoList},
    data(){
      return {
        visibility: '全部',
        types     : types
      };
    },
    methods   : {
      ...mapMutations([
        'clearCompleted',
	      'toggleAll'
      ]),
      ...mapActions({
        submitTodo: 'rootAct_addTodoItem'
      }),
      
      csl(){
        console.log(this.$store);
      },
      go(){
        window.location.href = 'http://localhost:3333/pages/data/app.html';
      }
    },
    computed  : {
      ...mapGetters({
        todos: 'getTodos'
      }),
      filteredTodos(){
        return types[this.visibility](this.todos);
      },
      remaining(){
        console.log('todovue->remaining:', this);
        //this.todos可以从mapGetters获取到值
        return this.todos.filter(todo => !todo.done).length;
      },
      allChecked(){
        return this.todos.every(todo=>todo.done);
      }
    },
    filters   : {
      pluralize: (value, string) => value === 1 ? string : (string + '情')
    }
  }
</script>