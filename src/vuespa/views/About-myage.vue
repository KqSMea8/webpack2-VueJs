<template>
	<!-- age 是父组件 About 中传递的参数，通过 props 声明并接收-->
	<div class="alert alert-info" role="alert">我的年龄是{{ age }}</div>
</template>

<script>
  export default {
    props: ['age']
  }
</script>
