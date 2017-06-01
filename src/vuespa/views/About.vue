/**
* Created by LinChuQiang on 2017/4/20.
*/

<!-- :age 为 myage 子组件传递 age 数据-->
<template>
	<div id = "aboutme">
		<div class="alert alert-success" role="alert">简单 Vue 分拆组件并传递数据效果！</div>
		<myage :age = "age"></myage>
		<myname :myname = "fname"></myname>
	</div>
</template>

<script>
  import age  from "./About-myage.vue";
  import name  from "./About-myname.vue";
  
  export default{
    data() {
      return {
        age  : 28,
        fname: '拎出墙'
      };
    },
    components: {
      'myname': name,
      'myage' : age
    }
  }
</script>

