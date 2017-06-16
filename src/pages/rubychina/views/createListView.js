/*eslint-disable*/
import { mapState, mapGetters } from 'vuex'
import $ from 'jquery'
import ItemList from '../components/ItemList'
import Sider from '../components/Sider'
import TabHeader from '../components/TabHeader'
const createListView = tab => ({
	name      : `${tab}-topics-view`,
	render(createElement) {
		// @returns {VNode}
		return createElement(
		// {String | Object | Function}
		// 一个 HTML 标签，组件设置，或一个函数
		// 必须 Return 上述其中一个
		'div',
		// {Object}
		// 一个对应属性的数据对象
		// 您可以在 template 中使用.
		// 可选项.
		{},
		// {String | Array}
		// 子节点(VNodes).
		// 可选项.
		[
			createElement(TabHeader, {
				props: {
					current: this.current,
					options: this.activeType.newOptions,
					node   : this.node,
					nodes  : this.nodesGroup,
				}
			}),
			createElement('div', {attrs: {class: 'container'}}, [
				createElement('div', {attrs: {class: 'row'}}, [
					createElement('div', {attrs: {class: 'col-md-9'}}, [
						createElement(
						ItemList,
						{
							props: {
								loading: this.loading,
								items  : this.items,
							}
						}
						),
					]),
					createElement('div', {attrs: {class: 'col-md-3'}}, [
						createElement(Sider, {props: {isLogining: false}}),
					]),
				]),
			]),
		])
	},
	components: {
		ItemList,
		Sider,
	},
	computed  : {
		node() {
			const {newOptions} = this.$store.getters.activeType
			const nodeid = newOptions.indexOf('node_id') > -1 ? newOptions.split('node_id=')[1].split('&')[0] : 0
			return nodeid > 0 ? this.nodes.find(item => item.id === Number(nodeid)) : {}
		},
		nodesGroup() {
			return this.$store.getters.groupNodes
		},
		...mapState({
			current: state => state.route.path.split('/'),
			loading: state => state.topic.lists[tab].isFetching,
			items  : state => state.topic.lists[tab].items,
			nodes  : state => state.node.lists.items,
			options: state => state.route.fullPath.split('?')[1],
		}),
		...mapGetters([
			'activeType',
			'groupNodes',
		]),
	},
	watch     : {
		options(to, from){
			this.fetchNodes()
			this.fetchTopics()
			this.hideModal()
		},
	},
	beforeMount() {
		this.fetchNodes()
		this.fetchTopics()
		this.hideModal()
	},
	methods   : {
		fetchNodes() {
			this.$store.dispatch('fetchNodesIfNeeded')
		},
		fetchTopics() {
			const {newOptions} = this.activeType
			this.$store.dispatch('refreshTopics', {tab})
			this.$store.dispatch('fetchTopicsIfNeeded', {tab, options: newOptions})
		},
		hideModal() {
			$('#nodeModal').modal('hide')
			$('body').removeClass('modal-open')
			$('.modal-backdrop').remove()
		},
	},
})
export default createListView
