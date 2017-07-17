// 新闻列表
import NewsList from '../components/NewsList'
// 新闻内容
import NewsContent from '../components/NewsContent'
// 主题日报
import TopicList from '../components/TopicList'
// 专栏总览
import SectionList from '../components/SectionList'

export default {
  routes: [
    {path: '/', component: NewsList},
    {path: '/news/:id', component: NewsContent},
    {path: '/topic/:id', component: TopicList},
    {path: '/section/:id', component: SectionList}
  ]
}
