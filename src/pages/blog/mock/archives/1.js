module.exports = {
  api: '/blog/mock/archives',
  response: function (req, res) {
    res.json(
      [
        {
          'id': 210285498,
          'created': '2017-02-26T05:00:33Z',
          'updated': '2017-03-16T07:49:41Z',
          'title': '不依赖服务端实现 react-router 的 browserHistory',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>SPA 项目基本上都会用到路由 <code>router</code>。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950261,
              'name': 'Nodejs'
            },
            {
              'id': 548037617,
              'name': 'React'
            },
            {
              'id': 548037602,
              'name': 'Router'
            },
            {
              'id': 548037646,
              'name': 'Vue'
            }
          ]
        },
        {
          'id': 205319771,
          'created': '2017-02-04T03:34:16Z',
          'updated': '2017-03-17T01:18:48Z',
          'title': '记录一下折腾黑苹果过程',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>也算是完成了读书时候的心愿，以前读书时候老想着弄个黑苹果，但是一直没有成功。最近折腾安装前后花的时间就两三天那样，参考了一堆前人经验，所以不会很折腾，总体上算是完美的</p>\n',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/22615077/d8cde9de-eac7-11e6-98be-6531cc36bc61.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 531939314,
              'name': 'CustoMac'
            },
            {
              'id': 531938577,
              'name': 'Sierra'
            }
          ]
        },
        {
          'id': 196350551,
          'created': '2016-12-19T07:48:21Z',
          'updated': '2017-02-12T11:58:28Z',
          'title': 'Adobe CEP 扩展相关',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>Adobe 系列通常情况下宿主应用是不会运行未经签名扩展的，只有打包并签名才可以运行。但是可以打开开发者模式</p>\n',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/21304385/cae9241a-c5ff-11e6-98fb-1ef0e84ee80e.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 175174882,
              'name': 'Adobe'
            },
            {
              'id': 175183154,
              'name': 'Extension'
            },
            {
              'id': 531938099,
              'name': 'Photoshop'
            }
          ]
        },
        {
          'id': 126817142,
          'created': '2016-01-15T06:44:56Z',
          'updated': '2017-03-01T12:46:11Z',
          'title': 'Mirror - 基于 issues 的博客工具',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950544,
              'name': 'Blog'
            },
            {
              'id': 534950402,
              'name': 'Github'
            },
            {
              'id': 534950261,
              'name': 'Nodejs'
            }
          ]
        },
        {
          'id': 71470122,
          'created': '2015-04-28T03:50:13Z',
          'updated': '2017-04-11T05:54:52Z',
          'title': '输入框输入值自动格式化',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>这里说的自动格式化是指当用户在输入框里面输入数字，例如银行卡号，为了方便用户输入，希望在输入过程中对输入数字进行加空格处理，优化用户体验</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 548066947,
              'name': 'Javascript'
            }
          ]
        },
        {
          'id': 71329290,
          'created': '2015-04-27T16:00:36Z',
          'updated': '2017-03-30T11:08:04Z',
          'title': '创建类似 http://ithinkimight.com/ 随机大小排布界面',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p><code>ithinkimight.com</code> 这个网站图片来自 Instagram，图片随机大小，位置也是随机，图片可以重叠，但是并没有 <strong>过分</strong> 重叠。这种随机大小，位置排版页面元素跟平常的整齐 <code>grid</code> 或者 <code>瀑布流</code> 风格很不一样，下面我们尝试一下实现类似效果</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950544,
              'name': 'Blog'
            },
            {
              'id': 548067165,
              'name': 'Grid'
            },
            {
              'id': 548066947,
              'name': 'Javascript'
            }
          ]
        },
          {
          'id': 1210285498,
          'created': '2017-02-26T05:00:33Z',
          'updated': '2017-03-16T07:49:41Z',
          'title': '不依赖服务端实现 react-router 的 browserHistory',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>SPA 项目基本上都会用到路由 <code>router</code>。react 还有 vue 对应有其路由插件。 react-router 还有 vue-router 都有 hashHistory 和 browserHistory 模式。这里大概说一下两者区别</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950261,
              'name': 'Nodejs'
            },
            {
              'id': 548037617,
              'name': 'React'
            },
            {
              'id': 548037602,
              'name': 'Router'
            },
            {
              'id': 548037646,
              'name': 'Vue'
            }
          ]
        },
        {
          'id': 1205319771,
          'created': '2017-02-04T03:34:16Z',
          'updated': '2017-03-17T01:18:48Z',
          'title': '记录一下折腾黑苹果过程',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>也算是完成了读书时候的心愿，以前读书时候老想着弄个黑苹果，但是一直没有成功。最近折腾安装前后花的时间就两三天那样，参考了一堆前人经验，所以不会很折腾，总体上算是完美的</p>\n',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/22615077/d8cde9de-eac7-11e6-98be-6531cc36bc61.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 531939314,
              'name': 'CustoMac'
            },
            {
              'id': 531938577,
              'name': 'Sierra'
            }
          ]
        },
        {
          'id': 1196350551,
          'created': '2016-12-19T07:48:21Z',
          'updated': '2017-02-12T11:58:28Z',
          'title': 'Adobe CEP 扩展相关',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>Adobe 系列通常情况下宿主应用是不会运行未经签名扩展的，只有打包并签名才可以运行。但是可以打开开发者模式</p>\n',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/21304385/cae9241a-c5ff-11e6-98fb-1ef0e84ee80e.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 175174882,
              'name': 'Adobe'
            },
            {
              'id': 175183154,
              'name': 'Extension'
            },
            {
              'id': 531938099,
              'name': 'Photoshop'
            }
          ]
        },
        {
          'id': 1126817142,
          'created': '2016-01-15T06:44:56Z',
          'updated': '2017-03-01T12:46:11Z',
          'title': 'Mirror - 基于 issues 的博客工具',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '',
          'thumb': 'https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950544,
              'name': 'Blog'
            },
            {
              'id': 534950402,
              'name': 'Github'
            },
            {
              'id': 534950261,
              'name': 'Nodejs'
            }
          ]
        },
        {
          'id': 171470122,
          'created': '2015-04-28T03:50:13Z',
          'updated': '2017-04-11T05:54:52Z',
          'title': '输入框输入值自动格式化',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p>这里说的自动格式化是指当用户在输入框里面输入数字，例如银行卡号，为了方便用户输入，希望在输入过程中对输入数字进行加空格处理，优化用户体验</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 548066947,
              'name': 'Javascript'
            }
          ]
        },
        {
          'id': 171329290,
          'created': '2015-04-27T16:00:36Z',
          'updated': '2017-03-30T11:08:04Z',
          'title': '创建类似 http://ithinkimight.com/ 随机大小排布界面',
          'author': {
            'name': 'LoeiFy',
            'avatar': 'https://avatars3.githubusercontent.com/u/2193211?v=3',
            'url': 'https://github.com/LoeiFy'
          },
          'summary': '<p><code>ithinkimight.com</code> 这个网站图片来自 Instagram，图片随机大小，位置也是随机，图片可以重叠，但是并没有 <strong>过分</strong> 重叠。这种随机大小，位置排版页面元素跟平常的整齐 <code>grid</code> 或者 <code>瀑布流</code> 风格很不一样，下面我们尝试一下实现类似效果</p>\n',
          'thumb': '',
          'category': {
            'id': 0,
            'name': 'blog'
          },
          'tags': [
            {
              'id': 534950544,
              'name': 'Blog'
            },
            {
              'id': 548067165,
              'name': 'Grid'
            },
            {
              'id': 548066947,
              'name': 'Javascript'
            }
          ]
        }
      ]
    )
  }
}
