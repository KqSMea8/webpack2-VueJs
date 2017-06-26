<template>
	<section class = "reply">
        <textarea id = "content" rows = "8" class = "text" placeholder = '回复支持Markdown语法，请注意标记代码'
                  :class = "{'err':hasErr}" v-model = "content">
        </textarea>
		<a class = "button" @click = "addReply">确定</a>
		<a class = "button" @click = "cancelReply">取消</a>
	</section>
</template>
<script>
	import Zepto from 'webpack-zepto';
	import * as utils from '../assist/utils.js';
	const markdown = require('markdown').markdown;
	import { mapGetters } from 'vuex';
	export default {
		replace : true,
		props   : [
			'topic',
			'topicId',
			'replyTo',
			'replyId',
			'show'
		],
		data() {
			return {
				// 没有回复内容开头时
				hasErr    : false,
				// 回复内容开头
				content   : '',
				// 回复内容尾款签名
				// author_txt: '<p><a href="https://github.com/xlldll/webpack2-VueJs">HI! I‘m webpack2-VueJs</a></p>'
				author_txt: '[HI! I‘m webpack2-VueJs](https://github.com/xlldll/webpack2-VueJs)\r\n'
			};
		},
		computed: {
			...mapGetters({
				userInfo: 'getUserInfo'
			})
		},
		mounted() {
			// 如果是回复层主的，那么自动添加回复前缀：@层主用户名
			if (this.replyTo) {
				// console.log(`this.replyTo:`,this.replyTo)
				this.content = `@${this.replyTo}`
				// this.content = `[@${this.replyTo}](http://localhost:3333/user/${this.replyTo})`
				// this.content = this.replyTo
				// this.content = `<router-link :to = "{name:'user',params:{loginname:${this.replyTo}}}">@${this.replyTo}</router-link>`
			}
		},
		methods : {
			// post /topic/:topic_id/replies 新建评论
			addReply() {
				if (!this.content) {
					this.hasErr = true;
				} else {
					let time = new Date();
					// 回复前缀：@层主用户名将被linkUsers转化为markdown的超链接语法：[@xlldll](/user/xlldll) 回复内容
					let mdReplyPre = utils.linkUsers(this.content);
					let htmlText = markdown.toHTML(mdReplyPre) + markdown.toHTML(this.author_txt);
					console.log(`markdown.toHTML(mdReplyPre):`, markdown.toHTML(mdReplyPre))
					console.log(`markdown.toHTML(mdReplyPre):`, markdown.toHTML(this.author_txt))
					console.log(`htmlText:`, htmlText)
				 
					let replyContent = Zepto('<div class="markdown-text"></div>').append(htmlText)[0].outerHTML;
					console.log(`replyContent0:`, Zepto('<div class="markdown-text"></div>').append(htmlText))
					console.log(`replyContent1:`, Zepto('<div class="markdown-text"></div>').append(htmlText)[0])
					// .outerHTML返回整个HTML标签
					console.log(`replyContent2:`, replyContent)
					// 向后台传递三个数据，内容要为markdown形式，显示的时候nodejs后台自动会转为html
				    /*content: [@xlldll](/user/xlldll)  再次 [HI! I‘m webpack2-VueJs](https://github.com/xlldll/webpack2-VueJs) */
					let postData = {
						accesstoken: this.userInfo.token,
						content    : mdReplyPre + this.author_txt
					};
					if (this.replyId) {
						postData.reply_id = this.replyId;
					}
					Zepto.ajax({
						type    : 'POST',
						url     : `https://cnodejs.org/api/v1/topic/${this.topicId}/replies`,
						data    : postData,
						dataType: 'json',
						success : (res) => {
							if (res.success) {
								// Todo-vue:因为父组件传递过来的:topic带有.sync的缘故，所以可以更新父组件中topic的数据
								this.topic.replies.push({
									id       : res.reply_id,
									author   : {
										loginname : this.userInfo.loginname,
										avatar_url: this.userInfo.avatar_url
									},
									content  : replyContent,
									ups      : [],
									create_at: time
								});
							}
							this.content = '';
							if (this.show) {
								this.$emit('close');
							}
						},
						error   : (res) => {
							var error = JSON.parse(res.responseText);
							// 调用了全局注册的弹出插件
							this.$alert(error.error_msg);
							return false;
						}
					});
				}
			},
			//取消评论
			cancelReply(){
				if (this.show) {
					this.$emit('close');
				}
			}
		}
	};
</script>
