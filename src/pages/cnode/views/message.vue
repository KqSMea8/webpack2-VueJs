<template>
	<div>
		<nv-head page-type = "消息"
		         :fix-head = "true"
		         :show-menu = "showMenu"
		         :message-count = "no_read_len"
		         :need-add = "true"></nv-head>
		<div class = "page">
			<ul class = "tabs">
				<li class = "item br" :class = '{"selected":selectItem === 2}' @click = "changeItem(2)">已读消息</li>
				<li class = "item" :class = '{"selected":selectItem === 1}' @click = "changeItem(1)">
					未读消息
					<i class = "iconfont read" v-show = "no_read_len > 0"
					   @click = "markall">&#xe60c;</i>
				</li>
			</ul>
			<div class = "message markdown-body" v-for = "item in currentData">
				<section class = "user">
					<img class = "head" :src = "item.author.avatar_url" />
					<div class = "info">
						<span class = "cl">
							<span class = "name">{{item.author.loginname}}</span>
							<span class = "name" v-if = "item.type==='at'">在回复中@了您</span>
							<span class = "name" v-if = "item.type==='reply'">回复了您的话题</span>
						</span>
						<span class = "cr">
							<span class = "name" v-text = "getLastTimeStr(item.reply.create_at, true)"></span>
						</span>
					</div>
				</section>
				<div class = "reply_content" v-html = "item.reply.content"></div>
				<router-link :to = "{name:'topic',params:{id:item.topic.id}}">
					<div class = "topic-title">
						话题：{{item.topic.title}}
					</div>
				</router-link>
			</div>
			<div class = "no-data" v-show = "noData">
				<i class = "iconfont icon-empty">&#xe60a;</i> 暂无数据!
			</div>
		</div>
	</div>
</template>
<script>
	import Zepto from 'webpack-zepto';
	import * as utils from '../assist/utils.js';
	import nvHead from '../components/header.vue';
	import { mapGetters } from 'vuex';
	export default {
		components: {
			nvHead
		},
		data() {
			return {
				// TODO-vue: 跨组件控制menu隐藏？
				showMenu: false,
				// 存储未读消息以及已读消息
				message    : {},
				// 无数据时显示
				noData     : false,
				// 当前面板要填充的数据
				currentData: [],
				selectItem : 2,
				// 未读消息数量
				no_read_len: 0
			};
		},
		computed  : {
			...mapGetters({
				userInfo: 'getUserInfo'
			})
		},
		mounted() {
			// get /message/count 获取未读消息数
			Zepto.get('https://cnodejs.org/api/v1/messages?accesstoken=' + this.userInfo.token, (d) => {
				if (d && d.data) {
					this.message = d.data;
					this.no_read_len = d.data.hasnot_read_messages.length;
					if (d.data.hasnot_read_messages.length > 0) {
						this.currentData = d.data.hasnot_read_messages;
					} else {
						this.currentData = d.data.has_read_messages;
						this.selectItem = 2;
					}
					this.noData = this.currentData.length === 0;
				} else {
					this.noData = true;
				}
			});
		},
		methods   : {
			// 切换tab
			changeItem(idx) {
				this.selectItem = idx;
				this.currentData = idx === 1 ? this.message.hasnot_read_messages : this.message.has_read_messages;
				this.noData = this.currentData.length === 0;
			},
			// post /message/mark_all 标记全部已读
			markall() {
				Zepto.post('https://cnodejs.org/api/v1/message/mark_all', {
					accesstoken: this.userInfo.token
				}, (d) => {
					if (d && d.success) {
						window.location.reload();
					}
				});
			},
			getLastTimeStr(date, friendly) {
				return utils.getLastTimeStr(date, friendly);
			}
		}
	};
</script>

