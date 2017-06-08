<template>
	<div class = "page">
		<PageLoading :show = "isLoading"></PageLoading>
		<ActionBtn ref = "actionBtn" :host = "host" :topicId = "topicId"
		           @afterReply = "afterReply"></ActionBtn>
		<GlobalNav @ready = "ready"></GlobalNav>
		<div class = "page__main">
			<div class = "container">
				<div v-if = "article">
					<VC-Article :article = "article"
					            :collectState = "collectState"
					            :editState = "editState"
					            @collect = "handleCollect"
					            @edit = "handleEdit">
					</VC-Article>
					
					<Comments :comments = "article.replies"
					          :hasHost = "!!host"
					          @reply = "handleReply"
					          @ups = "handleUps">
					</Comments>
				</div>
				<div class = "page__feedback" v-else>
					文章不存在, {{ time }} 秒后跳转至首页
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
	import Article from '../components/Article';
	import Comments from '../components/Comments';
	export default {
		data() {
			return {
				isLoading   : false,
				time        : 3, // 没有数据时跳转至首页的时间
				host        : null,
				topicId     : 0,
				article     : null,
				collectState: 0, // 0(隐藏该功能) | 1(已收藏) | 2(没有收藏)
				editState   : false // 是否可对文章编辑
			};
		},
		mounted() {
			this.init();
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			$route() {
				this.init();
			},
			host(newVal) {
				if (newVal) {
					// 判断文章是否被收藏
					this.fetchData(this.topicId, newVal.accesstoken).then((data) => {
						this.collectState = data.is_collect ? 1 : 2;
					}, () => {
						this.collectState = 0;
					});
					if (this.article) {
						this.editState = this.host.loginname === this.article.author.loginname;
					}
				}
			}
		},
		components: {
			PageLoading,
			ActionBtn,
			GlobalNav,
			'VC-Article': Article,
			Comments
		},
		methods: {
			ready(data) {
				this.host = data;
			},
			init() {
				this.isLoading = true;
				const path = this.$route.path;
				this.topicId = path.substring(path.lastIndexOf('/') + 1);
				this.fetchData(this.topicId, this.host && this.host.accesstoken).then((data) => {
					this.article = data;
					if (this.host) {
						this.collectState = data.is_collect ? 1 : 2;
						// 是否可以编辑
						// todo 判定条件是否可以更严格
						this.editState = this.host.loginname === this.article.author.loginname;
					} else {
						this.collectState = 0;
						this.editState = false;
					}
					this.isLoading = false;
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
			fetchData(topicId, accesstoken) {
				return new Promise((resolve, reject) => {
					this.$http.get(API.topic + topicId + (accesstoken ? `?accesstoken=${accesstoken}` : '')).then((response) => {
						const data = response.data;
						if (data.success) {
							resolve(data.data);
						} else {
							reject(data.error_msg);
						}
					}, () => {
						reject();
					});
				});
			},
			// 点赞
			handleUps(id, callback) {
				if (!this.host) return;
				this.$http.post(`${API.replyUps}${id}/ups`, {accesstoken: this.host.accesstoken}).then((response) => {
					const data = response.data;
					if (data.success) {
						typeof callback === 'function' && callback(data);
					}
				}, (reject) => {
					Tools.handleAjaxError(reject, this);
				});
			},
			// 评论
			handleReply(cont) {
				this.$refs.actionBtn.setReply(cont);
			},
			// 回复成功后 刷新回复列表
			afterReply(cb) {
				this.fetchData(this.topicId).then((data) => {
					this.article = data;
					typeof cb === 'function' && cb();
				}, () => {
					this.$message.error('评论刷新失败');
				});
			},
			// 专题收藏 | 取消
			handleCollect(cb) {
				if (!this.collectState || !this.host) return;
				const url = this.collectState === 1 ? API.deCollect : API.collect;
				const params = {
					accesstoken: this.host.accesstoken,
					topic_id   : this.topicId
				};
				this.$http.post(url, params).then((response) => {
					const data = response.data;
					if (data.success) {
						this.collectState = this.collectState === 1 ? 2 : 1;
					} else {
						this.$message.error(data.error_msg);
					}
					typeof cb === 'function' && cb(this.collectState);
				}, (reject) => {
					Tools.handleAjaxError(reject, this);
				});
			},
		 
			handleEdit() {
				if (this.editState && this.article) {
					// 重新获取数据, 没有md的版本
					this.$http.get(`${API.topic}${this.article.id}?mdrender=false`).then((response) => {
						const body = response.data;
						if (body.success) {
							const {id, tab, title, content} = body.data;
							this.$refs.actionBtn.editArticle({
								topic_id: id,
								tab,
								title,
								content
							});
						}
					}, (reject) => {
						Tools.handleAjaxError(reject, this);
					});
				}
			}
		}
	};
</script>
