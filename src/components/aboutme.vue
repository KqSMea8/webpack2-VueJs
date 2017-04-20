/**
* Created by LinChuQiang on 2017/4/20.
*/

<!--:age 是myage子组件用的数据 "age"是me_component父组件中获得的数据，通过props声明-->
<template>
	<div id="aboutme">
		<myage :age="age"></myage>
		<myname :myname="myname"></myname>
	</div>
</template>

<script>
	import age  from "./myage.vue";
	import name  from "./myname.vue";
	
	export default{
		props:['age','myname'],
		components:{
			"myname":name,
			"myage":age
		}
	}
</script>