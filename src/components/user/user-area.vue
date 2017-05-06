/**
* Created by LinChuQiang on 2017/4/21.
*/

<template>
	<div class = "row">
		<div class = "form-group">
			<label class = "col-sm-2">地区</label>
			<div class = "col-sm-10">
				<select class="form-control" :value = "selectedIndex" @input = "selectedIndex=$event.target.value" v-on:change = "seletecChange">
					<option v-for = "a in areas" v-bind:value = "a.id">{{a.text}}</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data    : function() {
			return {
				selectedIndex : 0,
				areas         : [
					{ "id" : 0,"text" : "——请选择——" },
					{ "id" : 1,"text" : "深圳" },
					{ "id" : 2,"text" : "广州" }
				]
			};
		},
		methods : {
			seletecChange(){
				this.$emit("iptChange","userarea",this.selectedIndex)
			}
		}
	}
</script>
