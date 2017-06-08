<!-- 个人中心 -->
<template>
	<div class = "page">
		<PageLoading :show = "isLoading"></PageLoading>
		<GlobalNav @ready = "ready" :isLoading = "isNavLoading">
			<li class = "globalnav__link" :class = "{'is-active': currType === n.tag}" v-for = "n in navs">
				<a href = "#" @click.prevent = "getArticleType(n.tag)">{{ n.name }}</a>
			</li>
		</GlobalNav>
		<ActionBtn :host = "host"></ActionBtn>
		<div class = "page__main">
			<div class = "container">
				<div v-if = "userData">
					<div class = "profile-canopy">
						<div class = "profile__avatar">
							<img :src = "userData.avatar_url" alt = "">
							<div class = "profile__meta">
								<span class = "profile-vcard__score">
									<i class = "fa fa-star" aria-hidden = "true"></i> {{ userData.score }}
								</span>
								<span class = "profile-vcard__time">
									<i class = "fa fa-calendar" aria-hidden = "true"></i> {{ formatCreateTime(userData.create_at) }}
								</span>
							</div>
						</div>
						<h2 class = "profile__name">
							{{ userData.loginname }}
						</h2>
					</div>
					<div class = "profile__content">
						<ArticleList :articles = "articles" v-if = "articles && articles.length > 0"></ArticleList>
						<p class = "page__feedback" v-else>
							还没收藏文章
						</p>
					</div>
				</div>
				<div class = "page__feedback" v-else>
					用户不存在, {{ time }} 秒后跳转至首页
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { API } from '../js/config';
	import Tools from '../js/tools';
	import PageLoading from '../components/PageLoading';
	import GlobalNav from '../components/GlobalNav';
	import ActionBtn from '../components/ActionButton';
	import ArticleList from '../components/ArticleBrief';
	export default {
		data() {
			return {
				navs        : [
					{name: '创建的文章', tag: 'create'},
					{name: '参与的文章', tag: 'reply'},
					{name: '收藏的文章', tag: 'collect'}
				],
				isLoading   : false,
				isNavLoading: false, // 切换类型时的loading
				host        : null,
				currType    : '',
				userData    : null, // 用户信息
				articles    : null,
				time        : 3 // 没有数据时跳转至首页的时间
			};
		},
		components: {
			PageLoading,
			GlobalNav,
			ActionBtn,
			ArticleList
		},
		watch     : {
			$route() {
				this.fetchData();
			}
		},
		mounted() {
			this.fetchData();
		},
		methods   : {
			ready(data) {
				this.host = data;
			},
			// get /user/:loginname 用户详情
			fetchData() {
				this.isLoading = true;
				this.$http.get(API.interface + this.$route.path).then((response) => {
					const data = response.data;
					if (data.success) {
						const defaultTag = this.navs[0].tag;
						this.userData = data.data;
						this.hoverIdx = 0;
						this.getArticleType(defaultTag);
						this.isLoading = false;
					} else {
						this.$message.error(data.error_msg);
					}
				}, () => {
					this.isLoading = false;
					const timer = setInterval(() => {
						if (this.time === 0) {
							clearInterval(timer);
							this.$router.push({path: '/'});
							return;
						}
						this.time -= 1;
					}, 1000);
				});
			},
			// 筛选出创建、参与和收藏的主题数据
			getArticleType(type) {
				if (type === 'collect') {
					this.showCollectTopic(type);
					return;
				}
				if (!this.userData || (type !== 'create' && type !== 'reply')) return;
				if (type === 'create') {
					this.articles = this.userData.recent_topics;
				} else {
					this.articles = this.userData.recent_replies;
				}
				this.currType = type;
			},
			// 显示用户收藏的主题
			showCollectTopic(type) {
				this.isNavLoading = true;
				this.$http.get(API.topicCollect + this.userData.loginname).then((response) => {
					const data = response.data;
					if (data.success) {
						this.articles = data.data;
						this.currType = type;
					} else {
						this.$message.error(data.error_msg);
					}
					this.isNavLoading = false;
				}, (reject) => {
					this.isNavLoading = false;
					Tools.handleAjaxError(reject, this);
				});
			},
			formatCreateTime(time) {
				return Tools.timeFormat(time);
			},
		}
	};
</script>
<style lang = "scss" rel = "stylesheet/scss" scoped></style>
