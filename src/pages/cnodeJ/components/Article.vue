<template>
	<div class = "article-container">
		<article>
			<h1 class = "article__title">{{ article.title }}</h1>
			<div class = "article__meta-wrap clearfix">
				<div class = "article__btn-wrap">
					<span v-show = "editState" class = "article__edit-btn" @click = "edit">
						<i class = "fa fa-pencil-square-o fa-2x" aria-hidden = "true"></i>
					</span>
					<span v-show = "collectState !== 0" class = "article__like-btn"
					      @click = "collect"></span>
				</div>
				
				<div class = "article__author-wrap">
					<router-link :to = "{ path: '/user/' + article.author.loginname }" class = "article__author">
						<img :src = "article.author.avatar_url" class = "avatar avatar--s"> {{ article.author.loginname }}
					</router-link>
					<span class = "article__reply-time"> {{ formatCreateTime(article.create_at) }} </span>
				</div>
				
				<div class = "article__meta">
					<span>
						<i class = "fa fa-eye"></i>&nbsp;&nbsp;{{ article.visit_count }} 访问
					</span>
					<span>
						<i class = "fa fa-comment"></i>&nbsp;&nbsp;{{ article.reply_count }} 回复
					</span>
				</div>
			</div>
			<div v-html = "article.content"></div>
		</article>
	</div>
</template>
<script>
	import Tools from '../js/tools';
	export default {
		data() {
			return {
				$likeBtn: null
			};
		},
		props: {
			article: {
				require: true
			},
			collectState: { // 0(隐藏该功能) | 1(已收藏) | 2(没有收藏)
				type     : Number,
				default  : 0,
				validator: val => val >= 0 && val <= 2
			},
			editState: {
				type   : Boolean,
				default: false
			}
		},
		watch: {
			collectState(newVal) {
				this.$likeBtn || (this.$likeBtn = this.$el.querySelector('.article__like-btn'));
				if (newVal === 1) {
					this.$likeBtn.classList.add('is-active', 'animating');
					this.$likeBtn.addEventListener('animationend', () => {
						this.$likeBtn.classList.remove('animating');
					}, false);
				} else if (newVal === 2) {
					this.$likeBtn.classList.remove('is-active');
				}
			}
		},
		methods: {
			formatCreateTime(time) {
				return Tools.timeFormatCN(time);
			},
			collect() {
				this.$emit('collect');
			},
			edit() {
				this.$emit('edit');
			}
		}
	};
</script>
<style lang = "scss" rel = "stylesheet/scss" scoped></style>
