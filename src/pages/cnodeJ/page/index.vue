<template>
	<div class = "page">
		<!--父组件Door中自定义了ready事件-->
		<Door :state = "doorState" @ready = "doorIsReady"></Door>
		<ActionBtn :host = "host"></ActionBtn>
		<GlobalNav @ready = "ready" :isLoading = "isLoading">
			<li class = "globalnav__link" :class = "{'is-active': currType === n.tag}" v-for = "n in navs">
				<a href = "#" @click.prevent = "selectNav(n.tag)">{{ n.name }}</a>
			</li>
		</GlobalNav>
		<div class = "page__main">
			<div class = "container">
				<div class = "home-content" v-if = "articles && articles.length > 0">
					<ArticleList :articles = "articles"></ArticleList>
					<div class = "loadmore-wrap" v-show = "showLoadMoreModal">
						<LoadMore :state = "loadMoreType" @loadMore = "loadMore"></LoadMore>
					</div>
				</div>
				<p class = "page__feedback" v-else>
					暂无任何文章
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { API } from '../js/config';
	import Tools from '../js/tools';
	// 初始启动页面
	import Door from '../components/Door';
	// 悬浮按钮-发布文章
	import ActionBtn from '../components/ActionButton';
	// 全局导航条
	import GlobalNav from '../components/GlobalNav';
	// 文章列表
	import ArticleList from '../components/ArticleBrief';
	import LoadMore from '../components/LoadMore';
	export default {
		data() {
			const navs = [
				{name: '全部', tag: 'all'},
				{name: '精华', tag: 'good'},
				{name: '分享', tag: 'share'},
				{name: '问答', tag: 'ask'},
				{name: '招聘', tag: 'job'}
			];
			return {
				navs,
				doorState        : 'init', // init | start | end
				// barState: 'init', // init | start | end
				isLoading        : false,
				showLoadMoreModal: false,
				loadMoreType     : 0,  // 0(loading) | 1(load more) | 2(none)
				isLoadingMore    : false, // 是否正在加載更多
				page             : 1,
				currType         : '',
				articles         : null,
				host             : null  // 登入的用户
			};
		},
		components: {
			Door,
			ActionBtn,
			GlobalNav,
			ArticleList,
			LoadMore
		},
		mounted() {},
		methods   : {
			// 接收GlobalNav传递过来的用户信息
			ready(data) {
				this.host = data;
			},
			/*
			父组件Door中自定义的ready事件执行函数doorIsReady
			*/
			// 启动页加载期间
			doorIsReady() {
				// 开始加载
				this.doorState = 'start';
				// 获取全部主题
				this.getArticleType(this.navs[0].tag, () => {
					// 结束加载
					this.doorState = 'end';
					this.addScrollEvt();
				});
			},
			// 接收数据
			getArticleType(type, callback) {
				this.fetchData(type).then((cb) => {
					// console.log(cb)
					/* cb={
					 data:{},
					 page:1,
					 type: "all"
					 } */
					this.articles = cb.data.data;
					this.page = cb.page;
					this.currType = cb.type;
					typeof callback === 'function' && (callback());
				}, (reject) => {
					Tools.handleAjaxError(reject, this);
				});
			},
			// API默认获取全部主题一页二十条
			fetchData(type, page = 1, limit = 20) {
				const params = `?tab=${(type === 'all' ? '' : type)}&page=${page}&limit=${limit}`;
				const self = this;
				// http://es6.ruanyifeng.com/#docs/promise#Promise-的含义
				return new Promise((resolve, reject) => {
					self.$http.get(API.topics + params).then((response) => {
						// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 Pending 变为 Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
						resolve({data: response.data, type, page});
					}, (error) => {
						reject(error);
					});
				});
			},
			// 添加页面滚动，加载主题列表事件
			addScrollEvt() {
				const winH = window.innerHeight;
				const doc = document.documentElement;
				const body = document.body;
				this.scrollEv = () => {
					// 是否正在加載更多
					if (this.isLoadingMore) return;
					const docH = Math.max(doc.clientHeight, doc.scrollHeight);
					// fix firefox body.scrollTop always return 0
					// see http://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
					const bodyScrollTop = window.pageYOffset || body.scrollTop || doc.scrollTop || 0;
					if ((bodyScrollTop + winH - docH) >= 0) {
						// 0(loading) | 1(load more) | 2(none)
						if (this.loadMoreType === 2) {
							window.removeEventListener('scroll', this.scrollEv);
							return;
						}
						this.showLoadMoreModal = true;
						// 每三页可加载一次
						if (this.page % 3 === 0) {
							// load more
							this.loadMoreType = 1;
						} else {
							this.loadMore();
						}
					}
				};
				window.addEventListener('scroll', this.scrollEv, false);
			},
			// 加载主题列表第二页
			loadMore() {
				this.isLoadingMore = true;
				this.loadMoreType = 0;
				setTimeout(() => {
					let currPage = this.page;
					this.fetchData(this.currType, (currPage += 1)).then((cb) => {
						const data = cb.data;
						if (data.success) {
							const arr = data.data;
							if ((arr instanceof Array) && arr.length > 0) {
								!this.articles && (this.articles = []);
								this.articles = this.articles.concat(arr);
								this.showLoadMoreModal = false;
							} else {
								this.loadMoreType = 2;
								window.removeEventListener('scroll', this.scrollEv);
							}
							this.page = currPage;
						} else {
							this.loadMoreType = 1;
							Tools.handleAjaxError(data, this);
						}
						this.isLoadingMore = false;
					}, (reject) => {
						Tools.handleAjaxError(reject, this);
						this.loadMoreType = 1;
						this.isLoadingMore = false;
					});
				}, 1000);
			},
		    // 导航条
			selectNav(tag) {
				this.isLoading = true;
				this.getArticleType(tag, () => {
					this.isLoading = false;
				});
			},
		}
	};
</script>
<style lang = "scss" rel = "stylesheet/scss" scoped>
</style>
