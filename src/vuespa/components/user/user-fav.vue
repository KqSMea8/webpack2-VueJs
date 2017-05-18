/**
* Created by LinChuQiang on 2017/4/21.
*/

<template>
	<div class="row">
		<div class="form-group">
			<label for="fav" class = "col-sm-2">爱好</label>
			<div class="col-sm-10">
				<input id="fav" type = "text" class = "from-control" :value="favIpt" @input="favIpt=$event.target.value">
				<br>
				<table class="table table-bordered" v-if="showTable()">
					<thead>
						<tr>
							<th>类别一</th>
							<th>类别二</th>
						</tr>
					</thead>
					<tfoot>
					<tr>
						<td>Sum</td>
						<td>$180</td>
					</tr>
					</tfoot>
					<tbody>
						<tr v-for="f in getFavs">
							<td>{{ f.kind }}</td>
							<td>{{ f.opt }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				favIpt:"",
				favs:[
					{"kind":"前端开发","opt":"js"},
					{"kind":"后端开发","opt":"php"}
				]
			};
		},
		methods:{
			showTable(){
				if(this.favIpt == ""){
					return false;
				}
				return true;
			}
		},
		computed:{
			//getFavs 方法返回一个新的数组，array.filter(callback) 回调函数内部做了判断，最后返回复合判断条件的新的数据。
			getFavs(){
				return this.favs.filter( function( value ) {
					if(value.opt.indexOf(this.favIpt) >=0){
						return true;
					}else{
						return false;
					}
				}.bind(this));
			}
		}
	}
</script>