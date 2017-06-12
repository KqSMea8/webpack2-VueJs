export const ADD_NEWS = (state, news) => {
  state.news.push(news)
  state.news.sort((a, b) => {
    return b.date - a.date
  })
}

export const UPDATE_NEWS = (state, news) => {
  let find = false
	// forEach遍历数组，从localStorage取得值或者空数组
  state.news.forEach(x => {
    if (x.date === news.date) {
      // 对相同日期的内容做处理
      news.stories.forEach(y => {
      	// 如果localStorage的stories数组中的内容ID没有一个等于新news的stories数组中的内容ID
        if (!x.stories.some(z => { return z.id === y.id })) {
        	// 在localStorage的stories数组中，开头增加该内容
          x.stories.splice(0, 0, y)
        }
      })
      // 更新顶部轮播图
      news.top_stories.forEach(y => {
        if (!x.top_stories.some(z => { return z.id === y.id })) {
        	// 删除并返回数组的最后一个元素
          x.top_stories.pop()
	        // 向数组的开头添加，向数组的开头添加
          x.top_stories.unshift(y)
        }
      })
      find = true
    }
  })

  if (!find) {
    state.news.push(news)
  }
	// 排序，大于零不用换位置，小于零换位置
	// a-b 从小到大 b-a从大到小
  state.news.sort((a, b) => {
    return b.date - a.date
  })
}

export const ADD_TOPICS = (state, topics) => {
  state.topics = topics
}

export const ADD_SECTIONS = (state, sections) => {
  state.sections = sections
}

export const ADD_POSTS = (state, post) => {
  state.posts.push(post)
}

export const ADD_TOPICPOSTS = (state, posts) => {
  state.topicPosts = posts
}

export const ADD_SECTIONLIST = (state, section) => {
  state.sectionList = section
}

export const ADD_INDEX = (state) => {
  state.index++
}
