



 -> /posts/${post.id}

- home.vue 
通过 page/${page} 路由跳转到 home.vue ，显示目录
子组件 posts.vue
	- posts.vue
	通过 /posts/${post.id} 路由跳转到 post.vue ，显示详细内容
		- post.vue
		通过 /categories/${page.category.id} 路由跳转到 category.vue ，显示category目录
			- categories
			通过 categories/${id}/${page} 路由跳转到 category.vue ，显示category目录的第N页
			子组件 posts.vue
		通过 /tags/${tag.id} 路由跳转到 tag.vue ，显示tag目录
			- tag.vue
			通过 tags/${id}/${page} 路由跳转到 tag.vue ，显示tag目录的第N页
			子组件 posts.vue

- menu.vue
 - archives.vue
 通过 archives/${page} 路由跳转到 archives.vue ，显示archives目录的第N页

 - categories.vue
 
 
 - tags.vue
 
 - page.vue