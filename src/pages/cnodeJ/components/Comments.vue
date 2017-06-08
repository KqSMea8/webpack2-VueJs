<template>
  <div class="comments-container">
    <div class="comments__num">
      <span>{{ comments.length }} 条评论</span>
    </div>
    <div class="comments__sort">
      <div class="button-group">
        <button class="btn" :class="{'is-active': sortBy === 'normal'}" @click="sort('normal', $event)">默认</button>
        <button class="btn" :class="{'is-active': sortBy === 'latest'}" @click="sort('latest', $event)">最新</button>
        <button class="btn" :class="{'is-active': sortBy === 'ups'}" @click="sort('ups', $event)">赞数</button>
      </div>
    </div>
    <!-- comments list -->
    <div v-if="comments.length > 0">
      <transition-group name="cell" tag="div" class="comments__list">
        <div class="comments__item clearfix" v-for="(c, key) in comments" :key="c.id">
          <div class="comments__left">
            <router-link :to="{ path: '/user/' + c.author.loginname }">
              <img :src="c.author.avatar_url" class="avatar avatar--s">
            </router-link>
          </div>
          <div class="comments__right">
            <router-link :to="{ path: '/user/' + c.author.loginname }" class="comments__author">
              {{ c.author.loginname }}
            </router-link>
            <!-- comment content -->
            <div class="comments__cont" v-html="c.content"></div>

            <!-- meta -->
            <div class="comments__meta">
              <span class="comments__replyTime">{{ formatCreateTime(c.create_at) }}</span>

              <span class="t-pull-right" v-show="c.ups && c.ups.length > 0">{{ c.ups.length }} 赞</span>

              <a href="#" class="comments__ope-btn" @click.prevent="handleUps(c)" v-if="hasHost">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 赞
              </a>

              <a href="#" class="comments__ope-btn" @click.prevent="handleReply(c.author.loginname)" v-if="hasHost">
                <i class="fa fa-reply" aria-hidden="true"></i> 回复
              </a>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <p class="page__feedback" v-else>暂无评论</p>
  </div>
</template>
<script>
  import Tools from '../js/tools';

  export default {
    data() {
      return {
        sortBy: 'normal'
      };
    },
    props: {
      comments: {
        type: Array,
        default: []
      },

      hasHost: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      formatCreateTime(time) {
        return Tools.timeFormatCN(time);
      },

      // 点赞
      handleUps(reply) {
        reply.ups = reply.ups || [];

        this.$emit('ups', reply.id, (data) => {
          if (data.action === 'up') { // 点赞
            reply.ups.push(null);
          } else if (data.action === 'down') { // 取消点赞
            reply.ups.shift();
          }
        });
      },

      handleReply(authorName) {
        this.$emit('reply', `@${authorName}`);
      },

      sort(type, $evt) {
        if (this.comments && this.comments.length > 0) {
          const $target = $evt.target;

          if ($target.classList.contains('is-active')) return;

          this.comments.sort((a, b) => {
            this.sortBy = type;

            if (type === 'normal' || type === 'latest') {
              return type === 'normal'
                ? new Date(a.create_at) - new Date(b.create_at)
                : new Date(b.create_at) - new Date(a.create_at);
            } else if (type === 'ups') {
              return b.ups.length - a.ups.length;
            }

            return new Date(a.create_at) - new Date(b.create_at);
          });
        }
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped></style>
