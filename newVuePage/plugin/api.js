const hosts = 'http://localhost:3333/src/pages/blog'
const path = 'json'

export default function api(url) {
  return `${hosts}/${path}/${url}.json`
}
