<template>
	<transition name = "fade">
		<div class = "modal postModal" v-show = "show">
			<div class = "modal-header">
				<button type = "button" class = "close" @click.stop = "close">
					<span aria-hidden = "true">×</span>
				</button>
				<h4 class = "modal-title">发布文章</h4>
			</div>
			<div class = "modal-body">
				<div class = "form-group">
					<span class = "post__label">类型：</span>
					<div class = "post__types">
						<span v-for = "(val, key) in categories"
						      :data-type = "key"
						      :class = "selectedCategory === key ? 'active' : ''"
						      @click = "selectType($event)">{{ val }}</span>
					</div>
				</div>
				<div class = "form-group">
					<input type = "text" class = "form-control" placeholder = "标题" v-model = "title">
				</div>
				<div class = "form-group">
					<label for = "post" aria-hidden = "true"></label>
					<textarea name = "post" id = "post"></textarea>
				</div>
			</div>
			<div class = "modal-footer">
				<button class = "btn btn-default" @click = "post($event)" :disabled = "state === 'posting'">
					{{ state === 'posting' ? '发布中...' : '发布' }}
				</button>
			</div>
		</div>
	</transition>
</template>

<script>
  import { articleCategory } from '../js/config';
  import createSimplemde from '../js/createSimplemde';
  
  export default {
    data() {
      return {
        mde             : null,
        categories      : articleCategory,
        selectedCategory: 'ask',
        title           : '',
        state           : 'ready' // 当前的状态 ready || posting
      };
    },
    
    props: {
      show: {
        type   : Boolean,
        default: false
      },
      
      article: {
        type   : Object,
        default: null
      }
    },
    
    watch: {
      show(newVal) {
        if (newVal && !this.mde) {
          this.mde = createSimplemde({
            element: document.getElementById('post')
          });
        }
      },
      
      article(newVal) {
        if (newVal) {
          this.selectedCategory = newVal.tab;
          this.title = newVal.title;
          this.mde.value(newVal.content);
        }
      }
    },
    
    methods: {
      close() {
        this.$emit('close', 'post', () => {
          this.state = 'ready';
          this.selectedCategory = '';
          this.title = '';
          this.mde && this.mde.value('');
        });
      },
      
      setArticle(article) {
        this.state = 'ready';
        this.selectedCategory = article.tab;
        this.title = article.title;
        
        if (!this.mde) {
          this.mde = createSimplemde({
            element: document.getElementById('post')
          });
        }
        
        setTimeout(() => {
          // 直接设置值, 不会直接显示
          this.mde.value(article.content);
        });
      },
      
      selectType(evt) {
        this.selectedCategory = evt.target.dataset.type;
      },
      
      post() {
        if (this.state === 'posting') return;
        
        const content = this.mde.value();
        
        if (!this.selectedCategory) {
          this.$message.error('类型不能为空');
          return;
        }
        
        if (!this.title) {
          this.$message.error('标题不能为空');
          return;
        }
        
        if (!content) {
          this.$message.error('内容不能为空');
          return;
        }
        
        const params = {
          title: this.title,
          tab  : this.selectedCategory,
          content
        };
        
        this.state = 'posting';
        
        this.$emit('post', params);
      }
    }
  };
</script>
