<template>
	<!--主题列表页面-->
	<div>
		<!-- 全局header -->
		<nv-head ref = "head" :page-type = "getTitleStr(searchKey.tab)" :fix-head = "true" :need-add = "true"></nv-head>
		<!-- 首页主题列表 -->
		<section id = "page">
			<ul class = "posts-list">
				<li v-for = "item in topics" :key = "item.id">
					<!--/topic/:id 主题详情-->
					<router-link :to = "{name:'topic',params:{id:item.id}}">
						<!--主题标题-->
						<h3 v-text = "item.title"
						    :class = "getTabInfo(item.tab, item.good, item.top, true)"
						    :title = "getTabInfo(item.tab, item.good, item.top, false)">
						</h3>
						<!--主题内容-->
						<div class = "content">
							<!--作者头像-->
							<img class = "avatar" :src = "item.author.avatar_url" />
							<div class = "info">
								<p>
									<!--作者名称-->
									<span class = "name"> {{item.author.loginname}} </span>
									<!--回复数量/浏览数量-->
									<span class = "status" v-if = "item.reply_count > 0">
										<b>{{item.reply_count}}</b> /{{item.visit_count}}
									</span>
								</p>
								<p>
									<!--创建于-->
									<time>创建于{{item.create_at | getLastTimeStr(true)}}</time>
									<!--最后回复于-->
									<time>最后回复于{{item.last_reply_at | getLastTimeStr(true)}}</time>
								</p>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--回到首页悬浮按钮-->
		<nv-top></nv-top>
	</div>
</template>

<script>
	import Zepto from 'webpack-zepto';
	import * as utils from '../assist/utils.js';
	// var utils =  require('../assist/utils.js')
	import nvHead from '../components/header.vue';
	import nvTop from '../components/backtotop.vue';
	export default {
		components: {
			nvHead,
			nvTop
		},
		data() {
			return {
				// 获取主题列表数据期间，无限滚动无法再触发加载
				scroll       : true,
			    // 主题内容
				topics       : [],
			    // 记录插入主题时的编号，先后顺序
				index        : {},
			    // 没有用到！
				searchDataStr: '',
				// URL查找参数
				searchKey    : {
					page    : 1,
					limit   : 20,
					tab     : 'all',
					mdrender: true
				}
			};
		},
	    beforeCreate(){
			console.log(`beforeCreate`)
	    },
		mounted() {
			console.log(`mounted->searchKey:${this.searchKey}`)
			// 主题分类
			// 例如，对于路径 /foo?user=1，则有 $route.query.user == 1
			if (this.$route.query && this.$route.query.tab) {
				this.searchKey.tab = this.$route.query.tab;
			}
			// 如果从详情返回并且之前存有对应的查询条件和参数，则直接渲染之前的数据
			if (window.window.sessionStorage.searchKey && window.window.sessionStorage.tab === this.searchKey.tab) {
				this.topics = JSON.parse(window.window.sessionStorage.topics);
				this.searchKey = JSON.parse(window.window.sessionStorage.searchKey);
				// TODO-vue:通过$nextTick来设置原记录的滚动条位置
				this.$nextTick(() => Zepto(window).scrollTop(window.window.sessionStorage.scrollTop));
			} else {
				this.getTopics();
			}
			// 监听滚动事件，滚动加载数据并配置节流函数
			Zepto(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
		},
		// todo-vuerouter:beforeRouteEnter && beforeRouteLeave
		beforeRouteEnter(to, from, next) {
			console.log(`beforeRouteEnter:`,to)
			// 如果页面不是从主题详情页切换过来的，移除之前记录的数据集
			if (from.name !== 'topic') {
				if (window.window.sessionStorage.tab) {
					window.window.sessionStorage.removeItem('topics');
					window.window.sessionStorage.removeItem('searchKey');
					window.window.sessionStorage.removeItem('tab');
				}
			}
			next();
		},
		beforeRouteLeave(to, from, next) {
		    console.log(`beforeRouteLeave:`,to)
		    console.log(`beforeRouteLeave->this.$route:`,this.$route)
			// 主题列表页如果跳转到主题详情页面，则记录关键数据
			// 方便从详情页面返回到该页面时，继续加载之前位置的数据
			if (to.name === 'topic') {
				// 当前滚动条位置
				window.window.sessionStorage.scrollTop = Zepto(window).scrollTop();
				// 当前页面主题数据
				window.window.sessionStorage.topics = JSON.stringify(this.topics);
				// 查询参数
				window.window.sessionStorage.searchKey = JSON.stringify(this.searchKey);
				// 当前tab
				window.window.sessionStorage.tab = from.query.tab || 'all';
			}
			// 移除监听滚动事件
			Zepto(window).off('scroll');
			next();
		},
		methods: {
			// 获取当前主题分类标题
			getTitleStr(tab) {
				let str = '';
				switch (tab) {
					case 'share':
						str = '分享';
						break;
					case 'ask':
						str = '问答';
						break;
					case 'job':
						str = '招聘';
						break;
					case 'good':
						str = '精华';
						break;
					default:
						str = '全部';
						break;
				}
				return str;
			},
			// 根据isClass返回主题分类的class样式或者title提示字符串
			getTabInfo(tab, good, top, isClass) {
				return utils.getTabInfo(tab, good, top, isClass);
			},
			// 获取主题列表数据
			getTopics() {
				// todo-es6: 通过zepto.param序列化URL查找参数
				// params=page=1&limit=20&tab=all&mdrender=true
				let params = Zepto.param(this.searchKey);
				Zepto.get('https://cnodejs.org/api/v1/topics?' + params, (response) => {
					this.scroll = true;
					// console.log('https://cnodejs.org/api/v1/topics?' + params);
					// console.log(response.data);
					if (response && response.data) {
						response.data.forEach(this.mergeTopics);
					}
				});
			},
			// 20条主题数据的唯一标识符存入index作为键，值为number，可看做为插入的顺序编号
		    // 主题内容存入topics
			// topic.id=58d0fb3517f61387400b7e15，为每个主题的唯一标识符
			mergeTopics(topic) {
				// TODO-ES6：如果检测到该主题的数据已加载过，那么更新该主题数据
				if (typeof this.index[topic.id] === 'number') {
					const topicsIndex = this.index[topic.id];
					this.topics[topicsIndex] = topic;
				} else {
					this.index[topic.id] = this.topics.length;
					this.topics.push(topic);
				}
			},
			// 无限滚动加载数据
			getScrollData() {
				if (this.scroll) {
					// 当前可视窗口的高度,950
					// console.log(`windowHeight:`,Zepto(window).height())
				    // 整个窗口向下滚动的像素值,0
				    // console.log(`windowscrollTop:`,Zepto(window).scrollTop())
				    // 整个document的高度,2000
				    // console.log(`documentHeight:`,Zepto(document).height())
					if (Zepto(document).height() <= Zepto(window).scrollTop() + (Zepto(window).height()*1.1)) {
						this.scroll = false;
						this.searchKey.page += 1;
						this.getTopics();
					}
				}
			}
		},
		watch  : {
			// todo-vue: watch 切换路由时，只是menu菜单切换时才触发？？
			'$route'(to, from) {
				console.log(`watch->$route:`,this.$route)
				// 如果是当前页面切换分类的情况
				if (to.query && to.query.tab) {
					this.searchKey.tab = to.query.tab;
					this.topics = [];
					this.index = {};
				}
				this.searchKey.page = 1;
				this.getTopics();
				// 将全局header组建中的DATA数据:show，改为false，隐藏遮罩层以及左侧菜单栏
				this.$refs.head.show = false;
			}
		},
		filters: {
			// 已经全局注册了该filters
			/*getLastTimeStr(time, isFromNow) {
				return utils.getLastTimeStr(time, isFromNow);
			}*/
		}
	};
</script>
