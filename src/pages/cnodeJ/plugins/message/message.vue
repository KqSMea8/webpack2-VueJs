<template>
  <transition name="message-slide" type="animation"
              enter-active-class="animated bounceInRight"
              leave-active-class="animated bounceOutRight">
    <div class="message" :class="'message--' + type" v-show="visible"
         @mouseenter="clearTimer"
         @mouseleave="startTimer">
      <button type="button" class="close message__closeBtn" @click="close">
        <i class="fa fa-times"></i>
      </button>

      <div class="message__group">
        <div class="message__icon">
          <i class="fa fa-2x" :class="typeIcon"></i>
        </div>
        <p>{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        closed: false,
        timer: null,
        onClose: null
      };
    },

    computed: {
      typeIcon() {
        switch (this.type) {
          case 'success':
            return 'fa-check-circle';
          case 'info':
            return 'fa-info-circle';
          case 'error':
            return 'fa-ban';
          case 'warning':
            return 'fa-exclamation-triangle';
          default: return '';
        }
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) { // destroy element
          this.visible = false;
          this.$el.addEventListener('animationend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('animationend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;

        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>
