<template>
	<div>
		<!--黑色透明遮罩层-->
		<div class = "page-cover"
		     v-if = "show&&fixHead"
		     @click = "showMenus">
		</div>
		<header :class = "{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}" id = "hd">
			<div class = "nv-toolbar">
				<!--菜单标志-->
				<div class = "toolbar-nav"
				     @click = "openMenus"
				     v-if = "fixHead">
				</div>
				<!--主题类型-->
				<span v-text = "pageType"></span>
				<i class = "num" v-if = "messageCount > 0"> {{messageCount}}</i>
				<!--新建主题按钮-->
				<router-link :to = "{name:'add'}">
					<i v-if = "needAdd" v-show = "!messageCount || messageCount <= 0"
					   class = "iconfont add-icon">&#xe60f;</i>
				</router-link>
			</div>
		</header>
		<!--菜单栏-->
		<nv-menu :show-menu = "show"
		         :page-type = "pageType"
		         :nick-name = "nickname"
		         :profile-url = "profileimgurl"
		         v-if = "fixHead"></nv-menu>
	</div>
</template>

<script>
  import Zepto from 'webpack-zepto';
  
  export default {
    props     : {
      pageType    : String,
      fixHead     : Boolean,
      messageCount: Number,
      needAdd     : {
        type   : Boolean,
        default: true
      }
    },
    components: {
      'nvMenu': require('./menu.vue')
    },
    data() {
      return {
        nickname     : '',
        profileimgurl: '',
        show         : false
      };
    },
    methods   : {
      openMenus() {
        Zepto('html, body, #page').addClass('scroll-hide');
        this.show = !this.show;
      },
      showMenus() {
        Zepto('html, body, #page').removeClass('scroll-hide');
        this.show = !this.show;
      }
    },
    replace   : true,
  };
</script>
