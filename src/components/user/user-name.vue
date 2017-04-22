/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "row">
		<div class = "form-group">
			<label class = "col-sm-2">用户名</label>
			<div class = "col-sm-10">
				<!--:username 在input上绑定一个username属性 赋值为 组件的data.username -->
				<!--触发 input 事件时，将该元素的值，更新到 组件的data.username-->
				<input type = "text" class = "form-control" :placeholder = "placeholder" :username = "username" @input = "username=$event.target.value" @change = "userNameChg" @blur = "userNameVaild" v-uname:foo.a.b = "username" v-focus>
				<label class = "label label-danger" v-if = "showErrorLabel">用户不合法</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props      : [ "placeholder" ],
		data       : function() {
			return {
				username       : '',
				showErrorLabel : false
			};
		},
		methods    : {
			//文本框change事件调用方法userNameChange
			userNameChg(){
				// 调用父组件的方法
				this.$emit( "iptChange","username",this.username )
			},
			userNameVaild(){
				// 用户名改变的方法里判断 用户名是否复合要求
				if( this.checkUserName( this.username ) ) {
					this.showErrorLabel = false; // 如果验证没有通过就显示错误提示
				} else {
					this.showErrorLabel = true;
				}
			}
		},
		mounted(){},
		//注册局部指令，组件中接受一个 directives 的选项
		directives : {
			uname : {
				// 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
				//el: 指令所绑定的元素，可以用来直接操作 DOM
				//binding: 一个对象，包含指令名、指令的绑定值等属性
				//vnode: Vue 编译生成的虚拟节点
				bind : function( el,binding,vnode ) {
					let s = JSON.stringify
					let str = ''
					str =
						'name: '+  s( binding.name ) +
						'\n value: '+  s( binding.value ) +
						'\n expression: '+  s( binding.expression ) +
						'\n argument: '+  s( binding.arg ) +
						'\n modifiers: '+  s( binding.modifiers ) +
						'\n vnode keys: '+  Object.keys( vnode ).join( ', ' )
					;
					console.log( str );
				},
				//被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
				update( el,binding,vnode ){
					console.log( el );
					console.dir( binding );
					console.dir( vnode );
				}
			}
		}
	}
</script>