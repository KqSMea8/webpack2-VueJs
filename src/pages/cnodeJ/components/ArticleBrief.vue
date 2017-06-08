<template>
	<transition-group tag = "ul" name = "brief-list" appear>
		<li class = "article-brief" v-for = "a in articles" :key = "a.id">
			<router-link :to = "{ path: '/user/' + a.author.loginname }" class = "article-brief__avatar">
				<img :src = "a.author.avatar_url" class = "avatar avatar--m">
			</router-link>
			<div class = "article-brief__group">
				<h2 class = "article-brief__title">
					<router-link :to = "{ path: '/topic/' + a.id }" :title = "a.title">{{ a.title }}</router-link>
				</h2>
				<div class = "article-brief__tags">
					<span class = "tag tag--blue" v-if = "a.tab">{{ getTypeName(a.tab) }}</span>
				</div>
				<div class = "article-brief__meta">
					<span class = "article-brief__reply" v-if = "typeof a.reply_count !== 'undefined'">
						<i class = "fa fa-comment"></i>&nbsp;&nbsp;{{ a.reply_count }} 回复
					</span>
					<span class = "article-brief__view" v-if = "typeof a.visit_count !== 'undefined'">
						<i class = "fa fa-eye"></i>&nbsp;&nbsp;{{ a.visit_count }} 访问
					</span>
					<span class = "article-brief__replyTime">{{ replyTime(a.last_reply_at) }}</span>
				</div>
			</div>
			<div class = "article-brief__ribbons">
				<span class = "ribbon ribbon--green" v-if = "a.top">置顶</span>
				<span class = "ribbon ribbon--red" v-if = "a.good">精华</span>
			</div>
		</li>
	</transition-group>
</template>
<script>
	import { articleTypeMap } from '../js/config';
	import Tools from '../js/tools';
	export default {
		props: {
			articles: {
				type: Array
			}
		},
		methods: {
			getTypeName(type) {
				return articleTypeMap[type] || '';
			},
			replyTime(time) {
				return Tools.timeFormatCN(time);
			}
		}
	};
</script>
<style rel = "stylesheet/scss" lang = "scss" scoped></style>
