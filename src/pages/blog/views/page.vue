<template>
	<div>
		<!--关于页面-->
		<div class = "top">
			<p>{{ post.title }}</p>
			<h1>{{ post.name }}</h1>
		</div>
		
		<div class = "content markdown-body" v-html = "post.content"></div>
	
	</div>
</template>

<script>
  
  import { mapGetters, mapActions } from 'vuex'
  import { clone } from '../assist/utils'
  
  export default {
    name: 'page',
    
    data() {
      return {
        post: {}
      }
    },
    
    computed: {
      ...mapGetters(['config', 'page'])
    },
    
    methods: {
      ...mapActions(['setMessage', 'setPage'])
    },
    
    created() {
      const {
              page,
              config: {
                pages,
                title
              },
              $route: {
                params: {name}
              }
            } = this
      
      document.title = `${name} - ${title}`
      
      if (page[name]) {
        return this.post = page[name]
      }
      
      const currentPage = pages.find(p => p.name == name)
      
      if (!currentPage) {
        return this.setMessage('No This Page')
      }
      
      const {id} = currentPage
      const _page = clone(page)
      
      this.$load(`pages/${id}`).then((res) => {
        this.post = res
        _page[name] = res
        this.setPage(_page)
      })
    }
  }

</script>

<style lang = "postcss">

</style>
