const hosts = ''
const path = 'blog/mock'

export default function api(url) {
  return `${hosts}/${path}/${url}`
}
