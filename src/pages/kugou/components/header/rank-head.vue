<template>
	<div class = "rank-head container" v-bind:style = "head.style" id = "transparent-header">
		<a class = "rank-head-back" @click = "routerBack"></a>
		{{title}}
	</div>
</template>

<script type = "es6">
	import { mapGetters } from 'vuex'
	export default {
		props   : ['title',],
		name    : 'rank-head',
		computed: {
			...mapGetters(['head'])
		},
		methods : {
			routerBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
