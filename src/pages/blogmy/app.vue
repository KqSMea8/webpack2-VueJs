<template>
	<div id = "page">
		<nav>
			<ul>
				<li>
					<a href = "/Archives">文章合集 Archives</a>
				</li>
				<li>
					<a href = "/Categories">文章分类 Categories</a>
				</li>
				<li>
					<a href = "/Tags"> 文章标签 Tags</a>
				</li>
				<li>
					<a href = "/About">关于 About</a>
				</li>
			</ul>
		</nav>
		<header>
			<div class = "outerbox">
				<div class = "innerbox naving"></div>
			</div>
			<p>A Node.js blog tool powered by GitHub.</p>
			<h1>所有博客列表</h1>
		</header>
		<article>
			<ul>
				<li>
					<h2>
						<a href = "/Archives/:id">不依赖服务端实现 react-router 的 browserHistory</a>
					</h2>
					<p>SPA 项目基本上都会用到路由 router。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>
					<p>Mar 16, 2017</p>
				</li>
				<li>
					<h2>
						<a href = "/Archives/:id">不依赖服务端实现 react-router 的 browserHistory</a>
					</h2>
					<p>SPA 项目基本上都会用到路由 router。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>
					<p>Mar 16, 2017</p>
				</li>
			</ul>
		</article>
		<aside>
			<button>前一页</button>
			<button>后一页</button>
			<span>当前页/总页码</span>
		</aside>
		<footer>
			<p>© 2017 所有博客列表</p>
			<p>Powered by lcq / Vue.js / Unsplash It</p>
		</footer>
	</div>
</template>
<style lang = "scss">
	/*page*/
	#page {
		position: relative;
	}
	
	/*nav*/
	nav {
		background-color: #3e3e3e;
		ul {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			
			margin: 0;
			padding: 0;
			li {
				padding: 25px 10px;
				list-style: none;
				a {
					color: #e7e7e7;
					font-size: 14px;
					line-height: 1.5;
					font-weight: 600;
					text-decoration: none;
					
					-webkit-transition: color 0.2s;
					-moz-transition: color 0.2s;
					-ms-transition: color 0.2s;
					-o-transition: color 0.2s;
					transition: color 0.2s;
					
					&:hover {
						color: white;
						text-decoration: underline;
					}
				}
				
			}
		}
		
	}
	
	/*header*/
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		width: 90%;
		margin: 40px auto;
		padding: 60px;
		background-color: #f5f8fa;
		.outerbox {
			position: absolute;
			top: 20px;
			left: 40px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			
			width: 50px;
			height: 41px;
			
			background-color: black;
			.innerbox {
				position: relative;
				
				width: 50%;
				height: 18px;
				content: "";
				margin: 0;
				padding: 0;
				
				border-radius: 50%;
				border: 2px solid white;
				border-left-color: transparent;
				border-right-color: transparent;
				
				color: white;
				
				&.loading {
					-webkit-animation: circle 1s infinite;
					-o-animation: circle 1s infinite;
					animation: circle 1s infinite;
				}
				
				&.naving {
					border-radius: 0;
					border-left: none;
					border-right: none;
					&:before {
						position: absolute;
						top: 8px;
						left: 0;
						width: 100%;
						height: 2px;
						content: "";
						background-color: white;
						color: white;
					}
				}
			}
		}
		
		p {
			color: #a8a8a8;
		}
		h1 {
			margin-top: 0;
			
			font-weight: 500;
		}
	}
	
	@keyframes circle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	@-webkit-keyframes circle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	/*body*/
	article {
		width: 70%;
		margin: 0 auto;
		li {
			padding: 20px 0;
			
			list-style: none;
			
			border-bottom: 1px solid #e7e1cd;
			a {
				color: black;
				text-decoration: none;
				&:hover {
					color: #00a2ed;
				}
				transition: color 500ms;
			}
			p {
				font-size: 14px;
				line-height: 1.5;
			}
			p:last-child {
				font-size: 10px;
				color: #e7e1cd;
			}
		}
	}
	
	/*页码*/
	aside {
		position: relative;
		width: 20%;
		height: 60px;
		margin: 0 auto;
		
		text-align: center;
		&:before {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 3px;
			content: '';
			background: #ddd;
			
		}
		button {
			position: relative;
			float: left;
			
			margin: 0 15px 0 0;
			padding: 15px 0 0 0;
		
			z-index: 1;
			
			border: none;
			border-top: 3px solid #333;
			outline: none;
			
			background: none;
			color: #333;
			font-size: 16px;
			line-height: 1.5;
			cursor: pointer;
			
			&:hover {
				border-top-color: #00a2ed;
				color: #00a2ed;
			}
			
			transition: color 500ms;
			
			&:disabled {
				border-top-color: #888;
				color: #333;
				cursor: default;
			}
		}
		span {
			float: right;
			margin: 18px 0 0 0;
			color: #888;
			line-height: 1.5;
		}
	}
	
	/*footer*/
	footer {
		width: 90%;
		margin: 40px auto;
		padding: 60px;
		background-color: #f5f8fa;
	}
</style>
<script>
	export default {
		name:'app'
	}
</script>
