/**
* Created by v_chqlin on 2018/3/28.
* 1.点击li，也要触发input值变化
* 2.全选,已解决
* 3.:class="[classObject,{'is-fin':val.isfin}]"给li添加已勾选的样式
* 4.isEditing的全局共享变量,未解决
* 5.分类别,type,选了类别之后，原数组消失，已解决

*/
<template>
	<section class="todoWrapper">
		<div class="todo-head">
			<h1>待做列表</h1>
		</div>
		<div class="todo-content">
			<div class="todo-what">
				<input type="text" placeholder="请填写你的待做列表" v-model="userval" @keyup.enter="addTodo_m($event)">
			</div>
			<ul class="todo-ul">
				<li>
					<input id="chk-selall" type="checkbox" :checked="chkAll_c" @change="chkAll_m({ischkall:!chkAll_c})"><span>全选</span>
					<label for="chk-selall"></label>
				</li>
				<li v-for="(val,key) in filtertodolist_c" :key="key" :class="[{'is-fin':val.isfin}]">
					<label :for=getID_m(val)></label>
					<input :id=getID_m(val) type="checkbox" :checked="val.isfin" @change="chkfin_m({id:key,ischkfin:!val.isfin})">
					<span v-if="!isEditing" @dblclick="isEditing = true">{{val.content}}</span>
					<input v-if="isEditing" type="text" class="todo-edit" :autofoucus="isEditing" :value="val.content" @keyup.enter="doneEdit_m(val,$event)" @keyup.esc="cancelEdit_m(val,$event)" @blur="doneEdit_m(val,$event)">
					<div class="todo-del" @click="deleteTodo_m(val.id)">X</div>
				</li>
			</ul>
		</div>
		<div class="todo-footer">
			<div class="todo-tip">还有<span>{{remaining_c}}</span>件事未完成
			</div>
			<!--<div class="todo-filter">
				<span>全部</span>
				<span>未完成</span>
				<span>已完成</span>
			</div>-->
			<ul class="todo-filter">
				<li v-for="(value,key) in type" :key="key">
					<span @click="sortType_m(key)" :ref="key">{{key}}</span>
				</li>
			</ul>
			<button class="todo-clear">清除已完成</button>
		</div>
	</section>
</template>

<style lang="scss" scoped="true">
	.todoWrapper {
		position: relative;
		background-color: #0d519c;
		text-align: center;
	}
	
	input[type=text] {
		padding: 0 10px;
		font-size: 14px;
		line-height: 1.5;
		color: black;
		&:focus {
			outline-color: #0BB20C;
		}
	}
	
	input[type=checkbox] {
		margin: 0;
		background-color: transparent;
	}
	
	.todo {
		&-head {
			text-align: center;
			font-size: 24px;
			line-height: 1.5;
			color: white;
			padding: 5px 0;
			margin: 5px 0;
		}
		&-what {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 5px 0;
		}
		&-content {
			flex: 1 0 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 5px 0;
		}
		&-ul {
			width: 50%;
			margin: 5px 0;
			li {
				position: relative;
				box-sizing: inherit;
				display: flex;
				align-items: center;
				margin: 10px 0;
				span {
					display: inline-block;
					width: 80%;
					height: 42px;
					line-height: 42px;
					padding: 0 10px;
					margin: 0 10px;
					border: 1px solid gold;
					border-radius: 5%;
					font-size: 14px;
					color: black;
					background-color: #00a2ed;
				}
				label {
					display: inline-block;
					width: 20px;
					height: 20px;
					margin: 0;
					background-color: whitesmoke;
					position: absolute;
					top: 50%;
					left: -25px;
					-webkit-transform: translateY(-50%);
					-moz-transform: translateY(-50%);
					-ms-transform: translateY(-50%);
					-o-transform: translateY(-50%);
					transform: translateY(-50%);
					
					&.is-chk {
						& {
							background-color: yellowgreen;
						}
						&:before {
							content: "√";
							display: inline-block;
							width: 50%;
							height: 50%;
							position: absolute;
							top: 25%;
							left: 50%;
							color: #9B59B6;
							-webkit-transform: translateY(-50%) translateX(-50%);
							transform: translateY(-50%) translateX(-50%);
						}
					}
					
				}
				/*&.is-editing {*/
				/*.todo-edit {*/
				/*display: block;*/
				/*}*/
				/*.todo-del {*/
				/*display: block;*/
				/*}*/
				/*}*/
				&.is-fin {
					span {
						border: 2px solid green;
						text-decoration-color: red;
						text-decoration-line: line-through;
						background-color: antiquewhite;
					}
				}
				
			}
		}
		&-edit {
			/*position: absolute;*/
			/*top: 50%;*/
			/*left: 22px;*/
			display: inline-block;
			width: 80%;
			height: 42px;
			line-height: 42px;
			padding: 0 10px;
			margin: 0 10px;
			font-size: 14px;
			color: black;
		}
		&-del {
			box-sizing: content-box;
			width: 15px;
			height: 15px;
			padding: 3px 0;
			font-size: 15px;
			line-height: 15px;
			text-align: center;
			color: white;
			background-color: red;
		}
		&-tip {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 5px 0;
		}
		&-filter {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 5px 0;
			span {
				&.is-chk {
					color: #9B59B6;
					font-weight: bold;
				}
			}
		}
		&-clear {
			margin: 5px 0;
		}
	}
</style>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  
  const Todos = [
    {
      id     : 0,
      content: 'vue核心梳理',
      isfin  : false,
      date   : '2018/3/29 上午11:02:02',
    },
    {
      id     : 1,
      content: 'vue核心梳理1',
      isfin  : false,
      date   : '2018/3/29 上午11:02:02',
    },
    {
      id     : 2,
      content: 'vue核心梳理2',
      isfin  : true,
      date   : '2018/3/29 上午11:02:02',
    },
  ]
  
  const Type = {
    '全部' : todos => todos,
    '未完成': todos => todos.filter(todo => !todo.isfin),
    '已完成': todos => todos.filter(todo => todo.isfin),
  }
  
  export default {
    name      : 'MyToDo',
    data () {
      return {
        userval    : '',
        todolist   : Todos,
        isEditing  : false,
        classObject: {
          'is-editing': false,
        },
        type       : Type,
        sortType   : '全部',
        //        todolist: [
        //          {
        //            id     : 0,
        //            content: 'vue核心梳理',
        //            isfin  : false,
        //            date   : '2018/3/29 上午11:02:02',
        //          },
        //          {
        //            id     : 1,
        //            content: 'vue核心梳理1',
        //            isfin  : false,
        //            date   : '2018/3/29 上午11:02:02',
        //          },
        //          {
        //            id     : 2,
        //            content: 'vue核心梳理2',
        //            isfin  : false,
        //            date   : '2018/3/29 上午11:02:02',
        //          },
        //        ],
      }
    },
    props     : [],
    components: {},
    beforeRouteEnter (to, from, next) {
      next()
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    },
    beforeCreate () {},
    created () {},
    beforeMount () {},
    mounted () {},
    beforeUpdate () {},
    updated () {},
    activated () {},
    deactivated () {},
    beforeDestroy () {},
    destroyed () {},
    watch     : {},
    computed  : {
      chkAll_c () {
        //如果用户自己全选了，就自动勾上全选按钮
        return this.todolist.every(todo => todo.isfin)
      },
      remaining_c () {
        return this.todolist.filter(todo => !todo.isfin).length
      },
      //所谓的过滤器，根据类别来给及todolist
      filtertodolist_c () {
        return Type[this.sortType](this.todolist)
      },
    },
    methods   : {
      addTodo_m (event) {
        const val = ('' + event.target.value).trim()
        console.log(`val:`, val)
        //        console.log(`valtype:`, val.type)
        //        console.log(`trim:`,val.trim())
        if (val) {
          const obj = {}
          obj.id = this.todolist.length + 1
          obj.content = val
          obj.isfin = false
          obj.date = new Date().toLocaleString()
          this.todolist.push(obj)
          event.target.value = ''
        }
      },
      chkLI_m (event) {
      
      },
      chkAll_m (obj) {
        // console.log(`this.todolist:`, this.todolist)
        // 并没有响应式变化
        return this.todolist.forEach(v => v.isfin = obj.ischkall)
        
      },
      getID_m (val) {
        return 'chk-' + val.id
      },
      enterEdit_m (event) {
        //        console.log(`event:`, event)
        //        this.classObject['is-editing'] = !this.classObject['is-editing']
        this.isEditing = true
      },
      sortType_m (key) {
        //经过处理后，原数组直接变异消失了,解决方案：交由过滤器filtertodolist_c来处理数据源
        //this.todolist = this.type[key](this.todolist)
        console.log(`this.todolist:`, this.todolist)
        this.sortType = key
        const array = ['全部', '已完成', '未完成']
        const filter = array.filter(a => a != key)
        this.$nextTick(() => {
          filter.every(a => this.$refs[a][0].style.color = 'black')
          this.$refs[key][0].style.color = 'green'
        })
      },
      chkfin_m ({id, ischkfin}) {
        this.todolist[id].isfin = ischkfin
      },
      doneEdit_m (obj, e) {
        // console.log(`obj:`, obj)
        const newval = e.target.value.trim()
        if (!newval) {
          this.deleteTodo_m(obj.id)
        } else if (this.isEditing) {
          this.todolist[obj.id].content = newval
          this.isEditing = false
        }
        
      },
      cancelEdit_m (obj, e) {
        e.target.value = obj.content
        this.isEditing = false
      },
      deleteTodo_m (id) {
        this.todolist.splice(id, 1)
      },
    },
    filters   : {},
  }

</script>

