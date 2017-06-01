<template>
	<div id = "app">
		Clicked: {{ this.$store.state.count }} times, count is {{ evenOrOdd }} and {{ isthree }} and {{ myfilter }} and {{ countPlusLocalState }}.
		<!-- Clicked: {{ count }} times, count is {{ evenOrOdd }}.-->
		<button @click = "add">+</button>
		<button @click = "decrement">-</button>
		<button @click = "incrementIfOdd">如果奇数时 +1</button>
		<button @click = "incrementAsync">自动 3秒后 +1</button>
	</div>
</template>

<style scoped rel="stylesheet/css">
	
	html, body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		color: #2c3e50;
	}
	
	ul {
		line-height: 1.5em;
		padding-left: 1.5em;
	}
	
	a {
		color: #7f8c8d;
		text-decoration: none;
	}
	
	a:hover {
		color: #4fc08d;
	}
	
	#app{
		text-align: center;
	}

</style>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  
  export default {
    name:'counterC',
    data(){
      return {localCount: 5};
    },
    //	  mapState 和 mapGetters 的组合使用方式
    computed: {
      ...mapGetters(
          [
            'evenOrOdd'
          ]
      ),
      ...mapGetters(
          {
            myfilter: 'myfilter',
            // 映射 this.isthree 为 store.getters.myfilter
            isthree : 'myfilter'
          }
      ),
      ...mapState(
          {
            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
              return state.count +
                     this.localCount
            }
          })
    },
    methods : {
      ...mapMutations(
          [
            // 映射 this.decrement() 为 this.$store.commit('decrement')
            'decrement'
          ]),
      ...mapMutations(
          {
            // 映射 this.add() 为 this.$store.commit('increment')
            add: 'increment'
          }),
      ...mapActions(
          [
            'incrementIfOdd',
            'incrementAsync'
          ])
    }
  }
</script>
