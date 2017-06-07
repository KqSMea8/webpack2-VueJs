<template>
	<section class = "reply">
        <textarea id = "content" rows = "8" class = "text"
                  :class = "{'err':hasErr}"
                  v-model = "content"
                  placeholder = '回复支持Markdown语法,请注意标记代码'>
        </textarea>
		<a class = "button" @click = "addReply">确定</a>
	</section>
</template>
<script>
  import Zepto from 'webpack-zepto';
  import * as utils from '../assist/utils.js';
  // var utils =  require('../assist/utils.js')
  const markdown = require('markdown').markdown;
  import { mapGetters } from 'vuex';
  
  export default {
    replace : true,
    props   : ['topic', 'replyId', 'topicId', 'replyTo', 'show'],
    data() {
      return {
        hasErr    : false,
        content   : '',
        author_txt: '<br/><br/><a class="form" href="https://github.com/shinygang/Vue-cnodejs">I‘m webapp-cnodejs-vue</a>'
      };
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },
    mounted() {
      if (this.replyTo) {
        let a =Zepto(this.replyTo)
        // console.log(a);
        this.content =`<a href="#">@${a['selector']}</a>`
      }
    },
    methods : {
      // post /topic/:topic_id/replies 新建评论
      addReply() {
        if (!this.content) {
          this.hasErr = true;
        } else {
          let time = new Date();
          let linkUsers = utils.linkUsers(this.content);
          // console.log(linkUsers)
          let htmlText = markdown.toHTML(linkUsers) + this.author_txt;
          // console.log(htmlText)
          let replyContent = Zepto('<div class="markdown-text"></div>').append(htmlText)[0].outerHTML;
          // console.log(replyContent)
          let postData = {
            accesstoken: this.userInfo.token,
            content    : this.content + this.author_txt
          };
          
          if (this.replyId) {
            postData.reply_id = this.replyId;
          }
          // Todo:评论真的有用吗
          Zepto.ajax({
            type    : 'POST',
            url     : `https://cnodejs.org/api/v1/topic/Zepto{this.topicId}/replies`,
            data    : postData,
            dataType: 'json',
            success : (res) => {
              if (res.success) {
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
              this.$alert(error.error_msg);
              return false;
            }
          });
        }
      }
    }
  };
</script>
