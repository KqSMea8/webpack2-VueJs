<template>
  <div class="bar"></div>
</template>

<script>
  export default {
    data() {
      return {
        timer: null
      };
    },
    props: {
      state: {
        type: String
      }
    },
    watch: {
      state(newVal) {
        if (newVal === 'start') {
          this.startLoading();
        } else if (newVal === 'end') {
          this.endLoading();
        }
      }
    },
    methods: {
      startLoading() {
        let percent = 0;

        this.timer = window.setInterval(() => {
          if (this.state === 'end') {
            this.endLoading();
            return;
          }
          percent += 5;

          this.draw(percent);

          if (percent === 70) {
            window.clearInterval(this.timer);
          }
        }, 80);
      },

      draw(val) {
        this.$el.style.transform = `translate3d(${val - 100}%,0,0)`;
      },

      endLoading() {
        window.clearInterval(this.timer);
        this.draw(100);

        setTimeout(() => {
          this.$el.classList.add('is-loaded');

          setTimeout(() => {
            this.$el.style.transform = 'translate3d(-100%, 0, 0)';
            this.$el.classList.remove('is-loaded');
          }, 300);
        }, 200);
      }
    }
  };
</script>
