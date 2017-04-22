/**
 * Created by LinChuQiang.
 */
export default{
	//Vue.js 的插件应当有一个公开方法 install
	//第一个参数是 Vue 构造器 , 第二个参数是一个可选的选项对象
	install( Vue, options ){
		
		// 1. 添加全局方法或属性
		Vue.myGlobalMethod = function () {
			// 逻辑...
		}
		
		// 2. 添加全局资源
		// 注册一个全局自定义指令 v-focus
		Vue.directive( 'focus',{
			//被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
			inserted : function( el ) {
				// 聚焦元素
				el.focus()
			}
		})
		
		// 3. 注入组件
		Vue.mixin({
			created: function () {
				// 逻辑...
			}
		})
		
		// 4. 添加实例方法
		// Vue.prototype.$myName = "zhagngsan";
		Vue.prototype.checkUserName = ( value ) => {
			if( value == "" ) {
				return true; // 如果没有填写,默认为true
			}
			if( /\w{6,20}/.test( value ) ) {
				return true;
			} else {
				return false;
			}
		}
	}
}
