<template>
	<header class = "globalnav globalnav--fixed" :class = "{ 'is-loading': isLoading}">
		<div class = "container">
			<router-link to = "/" class = "globalnav__brand t-pull-left">CNodeJ</router-link>
			<!--导航旋转加载条-->
			<div class = "globalnav__spinner">
				<svg version = "1.1" id = "L9" xmlns = "http://www.w3.org/2000/svg" xmlns:xlink = "http://www.w3.org/1999/xlink" x = "0px" y = "0px" viewBox = "0 0 100 100" enable-background = "new 0 0 0 0" xml:space = "preserve">
					<path fill = "#00a9e8" d = "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform = "rotate(222 50 50)">
						<animateTransform attributeName = "transform"
						                 attributeType = "XML" type = "rotate" dur = "0.5s"
						                 from = "0 50 50" to = "360 50 50" repeatCount = "indefinite"></animateTransform>
					</path>
                </svg>
			</div>
			<ul class = "globalnav__nav t-pull-right">
				<!--如果有用户，显示用户头像-->
				<li class = "globalnav__link" v-if = "host">
					<router-link :to = "{ path: '/user/' + host.loginname }" class = "globalnav__avatar">
						<img :src = "host.avatar_url">
					</router-link>
				</li>
				<!--如果没有用户，显示登录-->
				<li class = "globalnav__link" v-if = "!host">
					<a href = "#" @click.stop.prevent = "toggleMenu(1)">登录</a>
					<div class = "globalnav__menu globalnav__loginFormMenu">
						<loginForm @signIn = "getHost" :show = "showLoginForm"></loginForm>
					</div>
				</li>
				<!--如果有用户，点击图标弹出信息框-->
				<li class = "globalnav__link globalnav__link--withicon globalnav__notifies" v-if = "host">
					<a href = "#" :class = "{ 'is-active': host.notifiesCount }"
					   @click.stop.prevent = "toggleMenu(2)">
						<i class = "fa fa-envelope fa-lg" aria-hidden = "true"></i>
					</a>
					<div class = "globalnav__menu globalnav__notificationMenu">
						<Notification :show = "showNotification"></Notification>
					</div>
				</li>
				<!--更多导航-->
				<li class = "globalnav__link globalnav__link--withicon">
					<a href = "#" @click.stop.prevent = "toggleMenu(3)">
						<i class = "fa fa-ellipsis-h fa-lg" aria-hidden = "true"></i>
					</a>
					<div class = "globalnav__menu">
						<transition name = "menu-fade-slide">
							<div class = "menu menu--arrowed moremenu" v-show = "showMoreMenu">
								<ul>
									<li>
										<a href = "https://cnodejs.org/" target = "_blank">真·官网</a>
									</li>
									<li>
										<a href = "https://github.com/jiananle/vue-cnode" target = "_blank">项目地址</a>
									</li>
									<li>
										<a href = "https://jiananle.github.io/vue-cnode" target = "_blank">预览</a>
									</li>
								</ul>
							</div>
						</transition>
					</div>
				</li>
			</ul>
			<ul class = "globalnav__nav">
				<!--接收该组件的内容容器，全局导航栏-->
				<slot></slot>
			</ul>
		</div>
	</header>
</template>
<script>
	import Tools from '../js/tools';
	import loginForm from './LoginForm';
	import Notification from './Notification';
	export default {
		data() {
			return {
				// 用户信息对象：accesstoken,avatar_url,loginname,id,notifiesCount,success
				host            : null,
			    // 登录框
				showLoginForm   : false,
				// 消息框
				showNotification: false,
				// 更多导航框
				showMoreMenu    : false
			};
		},
		props     : {
			isLoading: {
				type   : Boolean,
				default: false
			}
		},
		components: {
			loginForm,
			Notification
		},
		mounted() {
			this.getHost();
			// 监听注册index.vue页面的点击事件
			// see https://css-tricks.com/dangers-stopping-event-propagation/
			document.documentElement.addEventListener('click', (event) => {
				let parent = event.target;
				let isInside = false;
				if (this.showNotification || this.showLoginForm || this.showMoreMenu) {
					let checkedClassName;
					if (this.showNotification) {
						checkedClassName = 'globalnav__notificationMenu';
					} else if (this.showLoginForm) {
						checkedClassName = 'globalnav__loginFormMenu';
					} else {
						checkedClassName = 'globalnav__moreMenu';
					}
					// 如果点击的元素是登录框、消息框以及更多导航菜单，那么无需关闭模态框
				    // 如果不是点击的这些框，则关闭模态框
					while (parent) {
						if (parent.classList && parent.classList.contains(checkedClassName)) {
							console.log(`parent.classList`);
							console.info(parent.classList);
							isInside = true;
							break;
						}
						parent = parent.parentNode;
					}
					// 关闭模态框
					if (!isInside) {
						if (this.showNotification) {
							this.showNotification = false;
						} else if (this.showLoginForm) {
							this.showLoginForm = false;
						} else {
							this.showMoreMenu = false;
						}
					}
				}
			}, false);
		},
		methods   : {
			// 请求登录的用户
			getHost(token) {
				const auth = Tools.getHost(token);
				auth.then((data) => {
					this.host = data;
					this.showLoginForm = false;
					setTimeout(() => {
						this.$emit('ready', data);
					}, 1000);
				}, (errorMsg) => {
					this.host = null;
					this.$message.error(errorMsg);
				});
			},
		    // 多个弹出框之间点击切换
			toggleMenu(type) {
				switch (type) {
					case 1: // loginForm
						this.showNotification = false;
						this.showMoreMenu = false;
						this.showLoginForm = !this.showLoginForm;
						break;
					case 2: // notification
						this.showLoginForm = false;
						this.showMoreMenu = false;
						this.showNotification = !this.showNotification;
						break;
					case 3: // moreMenu
						this.showNotification = false;
						this.showLoginForm = false;
						this.showMoreMenu = !this.showMoreMenu;
						break;
					default:
						return;
				}
			}
		}
	};
</script>
