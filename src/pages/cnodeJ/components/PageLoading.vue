<template>
  <div id="loader" class="pageload-overlay">
    <div class="spinner"></div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60"
         preserveAspectRatio="xMidYMid slice">
      <path d="M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z"></path>
      <desc>Created with Snap</desc>
      <defs></defs>
    </svg>
  </div>
</template>

<script>
  /* global mina */
  // see https://github.com/negomi/react-burger-menu/commit/1b4a99906601c04d13c8ae27f13e77eaa1cc559a
  let Snap;
  try {
    Snap = require('imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'); // eslint-disable-line global-require
  } catch (e) {
    Snap = require('snapsvg'); // eslint-disable-line global-require
  }

  export default {
    data() {
      const path = 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z';
      const steps = path.split(';');
      const stepsNum = steps.length;

      return {
        path: null,
        snap: null,
        speedIn: 500,
        easingIn: mina.linear,
        isAnimating: false,
        steps,
        stepsNum
      };
    },

    props: {
      show: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      show(newVal) {
        if (newVal) {
          this.start();
        } else {
          this.end();
        }
      }
    },

    mounted() {
      this.snap = Snap(this.$el.querySelector('svg'));
      this.path = this.snap.select('path');
    },

    methods: {
      start() {
        if (this.isAnimating) return false;
        this.isAnimating = true;

        this.animate(() => {
          this.$el.classList.add('pageload-loading');
          this.isAnimating = false;
        });

        this.$el.classList.add('show');

        return true;
      },

      end() {
        if (this.isAnimating) return false;

        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);

        return true;
      },

      animate(callback) {
        let pos = 0;

        const nextStep = () => {
          if (pos > this.stepsNum - 1) {
            if (callback && typeof callback === 'function') {
              callback();

              // 此时已经获得了数据
              if (!this.show) {
                setTimeout(() => {
                  this.end();
                }, 1000);
              }
            }
            return;
          }
          this.path.animate({ path: this.steps[pos] },
            this.speedIn,
            this.easingIn,
            () => {
              nextStep(pos);
            });

          pos += 1;
        };

        nextStep(pos);
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .pageload-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
    background-color: #4FC3F7;
    z-index: 99999;
    &.show {
      visibility: visible;
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;

      path {
        fill: #fff;
      }
    }

    .spinner {
      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -10px;
      visibility: hidden;
      opacity: 0;
      z-index: 1000;
      transition: opacity .3s;
    }

    &.pageload-loading {
      .spinner {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @keyframes moveRight {
    to {
      transform: translateX(20px);
    }
  }

  @keyframes moveLeft {
    to {
      transform: translateX(-20px);
    }
  }
</style>
