import Mock from 'mockjs'
let Groups = []
const COUNT = [1, 2, 3, 4, 5]

// 所有的待办集合及其单项
for (let i = 1; i < COUNT.length; i++) {
	Groups.push(Mock.mock({
		id      : Mock.Random.guid(),
		title   : Mock.Random.first(),
		isDelete: false,
		isLock  : Mock.Random.boolean(),
		items   : COUNT.map(() => {
			return {
				text    : Mock.Random.cparagraph(2),
				isDelete: false,
				isChked : Mock.Random.boolean()
			}
		})
	}))
}
export {
	Groups
}
