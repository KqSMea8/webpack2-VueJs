<template>
	<!--router-view / 新闻列表页-->
	<div class = "newslist">
		<div class = "newswrapper" v-for = "(item, index) in newsList">
			<!--顶部轮播图, latest news 时打开-->
			<slider v-if = "!index" :list = "sliderList"></slider>
			<h3 v-if = "index">{{ item.date }}</h3>
			<!--新闻列表-->
			<newsitem v-for = "news in item.stories" :item = "news" :key="news.id"></newsitem>
		</div>
		<!--加载更多-->
		<more :show = "news.length" :loading = "loading" :addFun = "getLastNews"></more>
	</div>
</template>

<script type = "text/ecmascript-6">
	import { mapGetters, mapActions } from 'vuex'
	import API from '../api/index'
	import { prevDate } from '../common/js/utils'
	import slider from './common/slider'
	import newsitem from './common/newsitem'
	import more from './common/more'
	export default {
		mounted () {
			// 触发 router-view 中的绑定事件
			this.$emit('loadingStart')
			this.$nextTick(() => {
				// 获取当天新闻 state.news
				this.getNews()
			    // 主题日报 state.topics
				if (!this.topics.length) {
					this.getTopics()
				}
				// 栏目总览 state.sections
				if (!this.sections.length) {
					this.getSections()
				}
				this.$emit('loadingDone')
			})
		},
		data () {
			return {
				loading: false
			}
		},
		computed  : {
			...mapGetters(['news', 'topics', 'sections', 'index']),
			sliderList () {
				let arr = []
				if (this.news.length && this.news[0].top_stories) {
					this.news[0].top_stories.forEach(item => {
						arr.push({
							image: item.image,
							title: item.title,
							url  : '/news/' + item.id
						})
					})
				}
				return arr
			},
			newsList () {
				let arr = []
				if (this.news.length) {
					arr = this.news.filter((value, index) => {
						return index <= this.index
					})
				}
				return arr
			}
		},
		methods   : {
			...mapActions(['getNews', 'getTopics', 'getSections', 'addIndex', 'addNews']),
			// 加载前一天的新闻内容
			getLastNews () {
				let find = false
				this.loading = true
				this.addIndex()
				// 如果news中的item的date有前一天的内容存在，则表示已经加载过
				this.news.forEach((item) => {
					if (item.date === prevDate(this.news[0].date, this.index)) {
						find = true
						this.$nextTick(() => {
							this.loading = false
						})
					}
				})
				// 未加载过的话，则重新根据日期加载
				if (!find) {
					let date = prevDate(this.news[0].date, this.index - 1)
					API.NewsDateResource(date).then(res => {
						this.addNews(res.data)
						this.$nextTick(() => {
							this.loading = false
						})
					})
				}
			}
		},
		components: {
			slider,
			newsitem,
			more
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.newswrapper {
		h3 {
			padding-top: 0.3rem;
			text-align: center;
			font-size: 2.2rem;
			color: #7f8c8d;
		}
	}
</style>
