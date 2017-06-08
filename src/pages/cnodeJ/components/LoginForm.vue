<template>
  <transition name="menu-fade-slide">
    <div class="menu menu--arrowed loginFormMenu" v-show="show">
      <form role="form">
        <div class="form-group loginFormMenu__cont">
          <label for="accesstoken" class="sr-only">accessToke</label>
          <input type="text" class="form-control" id="accesstoken" placeholder="accesstoken">
        </div>
        <span class="loginFormMenu__msg" :class="{ 'is-error': msg }">{{ msg }}</span>
        <button type="button" class="btn btn-default loginFormMenu__btn" @click.stop="signIn">Sign in</button>
      </form>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        $input: null,
        msg: ''
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
        if (!newVal) {
          this.msg = '';
          this.$input && (this.$input.value = '');
        }
      }
    },

    methods: {
      signIn() {
        !this.$input && (this.$input = document.getElementById('accesstoken'));

        const token = this.$input.value;

        if (!token) {
          this.msg = 'accesstoken 不能为空';
          return;
        }

        this.$emit('signIn', token);
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .loginFormMenu {
    position: relative;
    background-color: #fff;
    padding: 12px;
    width: 250px;

    &__btn {
      width: 100%;
    }

    &__msg {
      visibility: hidden;
      display: block;
      margin: 5px 0;
      height: 10px;
      line-height: 10px;
      color: #d9534f;
      &.is-error {
        visibility: visible;
      }
    }
  }
</style>
