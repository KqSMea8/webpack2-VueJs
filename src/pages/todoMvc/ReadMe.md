##TodoMvc
- Source：https://github.com/liangxiaojuan/vue-todos
- Blog: http://yangyi1024.com/categories/web%E5%89%8D%E7%AB%AF/
- view: http://yangyi1024.com/todo/#/list/1f80CD7e-1EE5-49fe-3b14-7EE28543D2cA
###亮点
1. 


###需求分析
- 增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)
- 增
	1. 新增单个待办
	2. 新增由多个待办组成的集合名称
- 删
	1. 删除单个待办
	2. 删除多个待办的集合
- 查
	1. 统计集合里的待办数目
	2. 获取单个待办
	3. 获取待办集合名称
	4. 查询待办集合是否被锁定
- 改
	1. 修改单个待办
	2. 修改待办集合标题

###数据分析
1. 多个待办的集合和单个待办数据
```
/**
* 左边的列表肯定是一个数组对象,考虑到我们每点击到这个标题，
* 就会跳转到详细，所有需要id来作为标识进行跳转，
* 再根据图上，标注好的标题，数字，锁定图标，得到下面的标题
*/
[{
 id:String, //唯一标示
 titie: String, // 标题
 isDelete: Boolean, // 是否删除(物理删除)
 isLocked: Boolean, // 是否锁定
 count: Number  // 未完成待办项数目
 record : [  // 多个单条待办
  {
     text: String,  // 文字内容
     isDelete: Boolean, // 是否删除(物理删除)
     isChked: Boolean // 是否完成
  }
 ]
}]
```
###API分析
(API接口形式、Params传入数据、Data返回数据)

+ 查询所有的待办集合及其单项
+ 新增待办集合的标题
+ 修改待办集合的标题
+ 修改该待办集合为锁定状态
+ 删除该待办集合
+ 查询该待办集合的多个待办项目
+ 新增待办项目到该待办集合中
+ 修改待办项目内容
+ 修改待办项目为完成状态
+ 删除待办项目

查询所有的待办集合及其单项
```
api: /todo/groups (get)
params: {}
data : 
[
	{
		id: String,  //单条待办项唯一标示
		titie: String, // 标题
		count: Number  // 未完成待办项数目
		isDelete: Boolean, // 是否删除(物理删除)
		isLocked: Boolean, // 是否锁定
		items : [  // 多个单条待办
			{
				text: String,  // 文字内容
				isDelete: Boolean, // 是否删除(物理删除)
				isChked: Boolean // 是否完成
			}
		]
	},
	{...},
	...
]
```

查询指定的待办集合及其单项
```
api: /todo/groups?id=String (get)
params: {id: String}
data : []
```

新增待办集合
```
api: /todo/addgroup (post)
params: {id: String,titie: String}
data : []
```

修改、删除、锁定待办集合
```
// 虽然这里有三个操作,但都是修改单条数据,所以可以合并在一个接口
api: /todo/updategroup (post)
params: {id: String,titie: String,isDelete: Boolean,isLocked: Boolean}
data : []
```

新增待办单项
```
api: /todo/additem (post)
params: {id: String,titie: String}
data : []
```

修改、删除、锁定待办单项
```
api: /todo/updateitem (post)
params: {text: String,isDelete: Boolean,isChked: Boolean}
data : []
```

###组件分析
- app.vue 最外层根组件
- layouts.vue 布局组件
- menus.vue 左侧集合列表
- menuDetail.vue 右侧集合详情
- item.vue 待办单项











###遗憾
1. vue的生命周期
2. 响应式浏览

