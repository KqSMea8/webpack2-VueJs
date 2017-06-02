<template>
	<div>
		<div class = "top">
			<p>{{ config.description }}</p>
			<h1>{{ config.title }}</h1>
		</div>
		
		<div class = "home content">
			<Posts :posts = "items"></Posts>
			
			<div class = "nav">
				<button
					@click = "$router.push(page == 2 ? '/' : `/page/${page - 1}`)"
					:disabled = "page <= 1 || isdisabled"
				>Previous
				</button>
				<button
					@click = "$router.push(`/page/${page + 1}`)"
					:disabled = "page >= total || isdisabled"
				>Next
				</button>
				<span>{{ page }} / {{ total }}</span>
			</div>
		</div>
	</div>
</template>

<script>
  
  import { mapActions, mapGetters } from 'vuex'
  import Posts from '../components/posts/posts.vue'
  import { clone } from '../assist/utils'
  import axios from 'axios'
  
  export default {
    name: 'home',
    
    components: {
      Posts
    },
    
    data() {
      return {
        // 初始翻页按钮不禁用
        isdisabled: false
      }
    },
    
    created() {
      /*
       * posts:{}
       * page:1
       * total:2
       * title: 'Recordum'
       */
      const {
              posts,
              page,
              total,
              config: {title}
            } = this
      
      document.title = title
      
      if (page > total) {
        return this.$router.replace('/')
      }
      
      // _posts={}
      const _posts = clone(posts)
      console.log('_posts', _posts);
      
      if (posts[page]) {
        return
      }
      
      this.$load(`page/${page}`).then((res) => {
        _posts[page] = res
        this.setPosts(_posts)
      })
    },
    
    computed: {
      // 获得数据
      ...mapGetters(['posts', 'config']),
      // 当前页码
      page() {
        return +this.$route.params.page || 1
      },
      // 总页码
      total() {
        /*
        * 'posts': [
         210285498,
         205319771,
         196350551,
         126817142,
         71470122,
         71329290
         ],
        * 'per_page': 5,
        */
        const {
                posts,
                per_page
              } = this.config
        
        if (per_page === 0 || posts.length === 0) {
          return 1
        }
        // 2
        return Math.ceil(posts.length / per_page)
      },
      // Posts组件的posts参数
      items() {
        const {
                posts,
                page,
                config: {per_page}
              } = this
        // 210285498
        return posts[page] || []
      },
      
    },
    
    watch: {
      page() {
        this.getPosts()
      }
    },
    
    methods: {
      // 获取文章
      getPosts() {
        const {
                config: {per_page},
                posts,
                page
              } = this
        
        const _posts = clone(posts)
        
        if (posts[page]) {
          return
        }
        
        this.isdisabled = true
        this.$load(`page/${page}`).then((res) => {
          this.isdisabled = false
          _posts[page] = res
          this.setPosts(_posts)
        })
      },
      
      ...mapActions(['setPosts'])
    }
  }

</script>

<style>
	
	.home {
		max-width: 900px;
	}

</style>