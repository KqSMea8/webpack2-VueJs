<template>
  <div class="loadmore" :class="stateClass[state]">
    <div class="spinner"></div>
    <div class="loadmore__btn">
      <button class="btn btn-default btn-block" @click.stop="handleClick">Load more...</button>
    </div>
    <div class="loadmore__text">
      <p>没有更多了 ╮(╯_╰)╭</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stateClass: ['is-loading', 'is-loadMore', 'is-none']
      };
    },
    props: {
      state: { // 0(loading) | 1(loadMore) | 2(none)
        type: Number,
        default: 0
      }
    },
    methods: {
      handleClick() {
        this.$emit('loadMore');
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .loadmore {
    > div {
      display: none;
    }

    &.is-loading {
      .spinner {
        display: block;
      }
    }

    &.is-loadMore {
      .loadmore__btn {
        display: block;
      }
    }

    &.is-none {
      .loadmore__text {
        display: block;
      }
    }

    &__text {
      text-align: center;
      font-size: 20px;
      color: #ccc;
    }
  }
</style>
