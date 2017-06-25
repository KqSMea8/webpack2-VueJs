<template>
	<!--头部-->
	<div>
		<!--黑色透明遮罩层-->
		<div class = "page-cover" v-if = "show&&fixHead" @click = "showMenus"></div>
		<header id = "hd" :class = "{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}">
			<div class = "nv-toolbar">
				<!--复合响应式按钮，点击显示菜单栏并带遮罩-->
				<div class = "toolbar-nav" v-if = "fixHead" @click = "openMenus"></div>
				<!--主题类型-->
				<span v-text = "pageType"></span>
				<!--消息数量-->
				<i class = "num" v-if = "messageCount > 0"> {{messageCount}}</i>
				<!--新建主题按钮-->
				<router-link :to = "{name:'add'}">
					<i class = "iconfont add-icon" v-if = "needAdd" v-show = "!messageCount || messageCount <= 0">&#xe60f;</i>
				</router-link>
			</div>
		</header>
		<!--菜单栏-->
		<nv-menu :show-menu = "show" :page-type = "pageType" :nick-name = "nickname" :profile-url = "profileimgurl" v-if = "fixHead"></nv-menu>
	</div>
</template>

<script>
	import Zepto from 'webpack-zepto';
	export default {
		props     : {
			// 主题类型
			pageType    : String,
		    // 是否显示头部
			fixHead     : Boolean,
		    // 消息数量
			messageCount: Number,
		    // 新建主题按钮
			needAdd     : {
				type   : Boolean,
				default: true
			}
		},
		components: {
			'nvMenu': require('./menu.vue')
		},
		// todo-vue: replace
		replace   : true,
		data() {
			return {
				// 昵称
				nickname     : '',
				// 用户头像地址
				profileimgurl: '',
				// 控制隐藏遮罩层以及左侧菜单栏
				show         : false
			};
		},
		methods   : {
			// 点击，将三处地方添加class并显示菜单栏，#page为首页主题列表
			openMenus() {
				Zepto('html, body, #page').addClass('scroll-hide');
				this.show = !this.show;
			},
			showMenus() {
				Zepto('html, body, #page').removeClass('scroll-hide');
				this.show = !this.show;
			}
		}
	};
</script>
