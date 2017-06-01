<template>
	<div>
		<div class="alert alert-warning" role="alert">我的名字是{{ myname }}</div>
		<div class="alert alert-danger" role="alert">我的歌曲是{{ song }}</div>
	</div>
</template>

<script>
	export default {
		props : [ 'myname' ],
		//组件的定义只接受 function
		//不应该对 data 属性使用箭头函数
		data  : function() {
			return { song : '本地数据' };
		}
	}
</script>
