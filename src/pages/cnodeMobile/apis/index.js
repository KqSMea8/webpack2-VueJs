require('es6-promise').polyfill()
require('isomorphic-fetch')

const baseOpts = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
	method: 'get',
	// credentials: 'include',
  mode: 'cors'
}

const isObj = (obj) => {
  return obj && Object.prototype.toString.call(obj) === '[object Object]'
}

const isFormData = (obj) => {
  return obj && Object.prototype.toString.call(obj) === '[object FormData]'
}

const fetchApi = (cfg) => {
  let opts = Object.assign({}, baseOpts, cfg)
  const url = opts.url
  delete opts.url

  let fetchUrl = 'https://cnodejs.org/api'
	// URL开头有没有斜杠
  if (/^\//.test(url)) {
    fetchUrl += url
  } else {
    fetchUrl += '/' + url
  }

  // 不是“GET”请求
  if (opts.method.toLowerCase() !== 'get' && isObj(opts.body) && opts.headers['Content-Type'].indexOf('application/json') > -1) {
    opts.body = JSON.stringify(opts.body)
  }

  // 是“GET”请求
  if (opts.method.toLowerCase() === 'get' && isObj(opts.body)) {
    fetchUrl += '?'
    for (let key in opts.body) {
      let value = opts.body[key]

      if (value instanceof Array) {
        value = JSON.stringify(value)
      }
      fetchUrl += key + '=' + value + '&'
    }
    fetchUrl = fetchUrl.slice(0, -1)
    delete opts.body
  }

  // fetchUrl = 'https://cnodejs.org/api' + fetchUrl;
  return new Promise((resolve, reject) => {
  	console.log(`Promise fetchUrl:`, fetchUrl)
  	console.log(`Promise opts:`, opts)
    fetch(fetchUrl, opts).then((res) => {
      const isSuccess = res.ok || (res.status >= 200 && res.status < 300)
	    console.log(`fetch isSuccess:`, isSuccess)
      if (isSuccess) {
        const data = res.headers.get('content-type') && res.headers.get('content-type').indexOf('json') >= 0 ? res.json() : res.text()
        resolve(data)
      } else {
        throw res
      }
    }).catch((err) => {
      reject(err)
    })
  })
}

export default fetchApi
