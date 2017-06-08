<template>
	<div>
		<div class = "action-btn"
		     @mouseenter = "mouseenter"
		     @mouseleave = "mouseleave">
			<a href = "#" class = "action-btn__link action-btn__plus">
				<img src = "../assets/img/cross.png" alt = "">
			</a>
			<ul>
				<li v-if = "topicId">
					<a href = "#" class = "tooltips tooltips--left action-btn__link action-btn__reply" aria-label = "回复"
					   @click.prevent = "toggleModal('reply')">
						<i class = "fa fa-reply fa-lg" aria-hidden = "true"></i>
					</a>
				</li>
				<li>
					<a href = "#" class = "tooltips tooltips--left action-btn__link action-btn__post" aria-label = "发布文章"
					   @click.prevent = "toggleModal('post')">
						<i class = "fa fa-pencil fa-lg" aria-hidden = "true"></i>
					</a>
				</li>
			</ul>
		</div>
		<!--模态面板-->
		<div class = "modal-container">
			<vc_post-modal ref = "postModal" :show = "showPostModal"
			               @post = "post" @close = "closeModal"></vc_post-modal>
			<vc_reply-modal ref = "replyModal" :show = "showReplyModal"
			                @reply = "reply" @close = "closeModal"></vc_reply-modal>
		</div>
	</div>
</template>

<script>
	import { API } from '../js/config';
	import Tools from '../js/tools';
	import PostModal from './PostModal';
	import ReplyModal from './ReplyModal';
	export default {
		props     : {
			// 文章的ID
			topicId: null,
			// 登入的用户
			host   : {
				type: Object
			}
		},
		data() {
			return {
				showPostModal : false,
				showReplyModal: false,
				editArticle   : null, // 要编辑的文章信息
				state         : 'normal' // normal || edit
			};
		},
		components: {
			'vc_post-modal' : PostModal,
			'vc_reply-modal': ReplyModal
		},
		methods   : {
			mouseenter() {
				this.$el.firstChild.classList.add('is-active');
			},
			mouseleave() {
				this.$el.firstChild.classList.remove('is-active');
			},
			// 用户是否登入
			checkValid() {
				if (!this.host) {
					this.$message.info('请先登录');
					return false;
				}
				return true;
			},
			// 编辑主题&主题首页
			post(params) {
				const url = this.state === 'edit' ? API.topicUpdate : API.topics;
				if (this.state === 'edit') {
					params.topic_id = this.article.topic_id;
				}
				params.accesstoken = this.host.accesstoken;
				this.$http.post(url, params).then((response) => {
					const data = response.data;
					// 跳转到发布的文章页
					if (data.success) {
						this.$message.success('发布成功, 正在跳转到文章页');
						this.$refs.postModal.close();
						setTimeout(() => {
							this.$router.push({path: `/topic/${data.topic_id}`});
						}, 2000);
					} else {
						this.$message.error(data.error_msg);
					}
				}, (reject) => {
					Tools.handleAjaxError(reject, this);
				});
			},
		 
		    // TODO:编辑文章信息
			editArticle(article) {
				this.state = 'edit';
				this.$refs.postModal.setArticle(article);
				this.showPostModal = true;
			},
		 
			// TODO:设置@的人 从topic.vue的handleReply函数中this.$refs.actionBtn.setReply(cont)调用
			setReply(content) {
				this.$refs.replyModal.setReply(content);
				this.showReplyModal = true;
			},
		 
		    // post /topic/:topic_id/replies 新建评论
			reply(content, cb) {
				const params = {
					accesstoken: this.host.accesstoken,
					content
				};
				this.$http.post(`${API.topic}${this.topicId}/replies`, params).then((response) => {
					const data = response.data;
					typeof cb === 'function' && cb(data.success);
					if (data.success) {
						this.$message.success('回复成功');
						// flash comments
						this.$emit('afterReply', () => {
							this.toggleModal('reply');
						});
					} else {
						this.$message.error(data.error_msg);
					}
				}, (reject) => {
					const data = reject.data;
					Tools.handleAjaxError(reject, this, () => {
						typeof cb === 'function' && cb(data.success);
					});
				});
			},
			// 切换显示模态面板
			toggleModal(type) {
				const isValid = this.checkValid();
				// 发表主题以及评论回复
				if (type === 'post') {
					if (!this.showPostModal) {
						isValid && (this.showPostModal = true);
					} else {
						this.$refs.postModal.close();
					}
				} else if (type === 'reply') {
					if (!this.showReplyModal) {
						isValid && (this.showReplyModal = true);
					} else {
						this.$refs.replyModal.close();
					}
				}
			},
			closeModal(type, cb) {
				if (type === 'post') {
					this.showPostModal = false;
				} else if (type === 'reply') {
					this.showReplyModal = false;
				}
				typeof cb === 'function' && cb();
			}
		}
	};
</script>
<style rel = "stylesheet/scss" lang = "scss" scoped>
	.modal-container {
		position: fixed;
		bottom: 0.25rem;
		right: 7rem;
		display: flex;
		align-items: flex-end;
		flex-direction: row-reverse;
		z-index: 1000;
		> div {
			float: right;
			margin-right: 0.75rem;
		}
	}
</style>
