<template>
  <div class="item" :class="classObj">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      	// left next active
        classObj: {}
      }
    },
    mounted () {
      this.$parent.rerender(this)
    },
    beforeDestroy () {
      this.$nextTick(() => {
        this.$parent.rerender(this, true)
      })
    }
  }
</script>
