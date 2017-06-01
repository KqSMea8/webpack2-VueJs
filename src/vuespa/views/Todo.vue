/**
* Created by LinChuQiang on 2017/5/10.
*/

<template>
	<div id = "todoList">
		<header>
			<h1 class = "bg-primary">TodoList</h1>
			<div class = "input-group">
				<input type = "text" class = "form-control" placeholder = "有什么需要备录的？" autofocus autocomplete = "off" v-on:keyup.enter = "submitTodo">
				<span class = "input-group-btn">
					<button class = "btn btn-default" type = "button" @click = "csl2('ok',$event)">Go!</button>
				</span>
			</div>
			<p>
				<input type = "button" class = "btn btn-danger" @click = "csl" value = "csl(this.$store)">
			</p>
		</header>
		<section>
			<div class = "input-group">
				<span class = "input-group-addon">
					<input type = "checkbox" v-bind:checked = 'allChecked' @change = "toggleAll({ done: !allChecked })" aria-label = "...">
				</span>
				<input type = "text" class = "form-control" aria-label = "..." placeholder = "全选" disabled>
			</div>
			<ul class = "list-unstyled">
				<TodoList v-for = "(todoitem,index) in filteredTodos" v-bind:key = "index" v-bind:todo = "todoitem"></TodoList>
			</ul>
		</section>
		<footer>
			<ul class = "filters list-inline">
				<li>还有 <span><strong>{{ remaining }}</strong> {{ remaining | pluralize('件事') }}未做</span>
				</li>
				<li v-for = "(value,key) in types">
					<span v-on:click = "sortTypes(key)" :ref="key" >{{ key }}</span>
				</li>
			</ul>
			<button @click = "clearCompleted" class = "btn btn-default">清除已完成的Todo</button>
		</footer>
	</div>
</template>

<script>
  import TodoList from './TodoList.vue'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
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
    mounted(){
      this.$refs['全部'][0].style.color='green'
    },
    methods   : {
      ...mapMutations([
        'clearCompleted',
        'toggleAll'
      ]),
      ...mapActions({
        // Todo:submitTodo需要改造,如何获取其它DOM元素的值
        // 解决：参考sortTypes
        submitTodo: 'rootActAddTodoItem'
      }),
      // 选取类型时，突出文字效果
      sortTypes(key){
        this.visibility=key
        let array=['全部','未完成','已完成']
        let filter=array.filter(str=>str!=key)
        this.$nextTick( () => {
          filter.every(str=>this.$refs[str][0].style.color='black')
          this.$refs[key][0].style.color='green'
        })
      },
      csl(){
        console.log(this.$store);
      },
      csl2(str,event){
        console.log(event);
      },
      
    },
    computed  : {
      ...mapGetters({
        todos: 'getTodos'
      }),
      // 过滤 todoList
      filteredTodos(){
        return types[this.visibility](this.todos);
      },
      // 剩余 todoList
      remaining(){
        // console.log('todovue->remaining:', this);
        // this.todos可以从mapGetters获取到值
        return this.todos.filter(todo => !todo.done).length;
      },
      // 全选
      allChecked(){
        return this.todos.every(todo => todo.done);
      }
    },
    filters   : {
      pluralize: (value, string) => value === 1 ? string : (string + '情')
    }
  }
</script>

<style lang = "scss" rel = "stylesheet/scss" scoped = "true">
	#todoList {
		header {
			margin: 15px 0;
			text-align: center;
			.input-group {
				position: absolute;
				left: 50%;
				margin-left: -25%;
				width: 50%;
				
			}
			p {
				margin-top: 50px;
			}
		}
	}
</style>
