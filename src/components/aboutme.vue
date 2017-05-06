/**
* Created by LinChuQiang on 2017/4/20.
*/

<!--:age 是myage子组件用的数据 "age"是me_component父组件中获得的数据，通过props声明-->
<template>
	<div id = "aboutme">
		<myage :age = "age"></myage>
		<myname :myname = "fname"></myname>
	</div>
</template>

<script>
  import age  from "./myage.vue";
  import name  from "./myname.vue";
  
  export default{
    data() {
      return {
        age  : 22,
        fname: '拎出墙'
      };
    },
    components: {
      'myname': name,
      'myage' : age
    }
  }
</script>

