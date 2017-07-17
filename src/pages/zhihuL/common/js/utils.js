// 中转API完成IMG跨域读取
export const imgProxy = (imgUrl) => {
  return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}
// 返回顶部
export const goTop = (btnId) => {
  let btn = document.getElementById(btnId)
  let d = document.documentElement
  let b = document.body

  window.addEventListener('scroll', btnDisplay)

  function btnDisplay () {
    btn.style.display = (d.scrollTop + b.scrollTop > 200) ? 'block' : 'none'
  }

  btn.onclick = function () {
    btn.style.display = 'none'
    this.timer = setInterval(() => {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.2)
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.2)
      if ((d.scrollTop + b.scrollTop) === 0) {
        clearInterval(btn.timer)
      }
    }, 10)
  }
}

// 返回str日期的前几天，具体为idx指定的天数，形式为20170612
export const prevDate = (str, idx) => {
  let reg = /^\d*$/
  if (str.length !== 8 || !reg.test(str)) {
    return false
  }
  let arr = []
	// arr = 20170612
	// slice返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
	// slice返回一个新的字符串，包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
	// 2017
  arr.push(str.slice(0, 4))
	// 06
  arr.push(str.slice(4, 6))
	// 12
  arr.push(str.slice(6, 8))
  let newDate = new Date(new Date(arr[0], arr[1] - 1, arr[2]) - idx * 24 * 60 * 60 * 1000)
  return newDate.getFullYear().toString() + (newDate.getMonth() + 1 > 9 ? (newDate.getMonth() + 1).toString() : '0' + (newDate.getMonth() + 1).toString()) + (newDate.getDate() > 9 ? newDate.getDate().toString() : '0' + newDate.getDate().toString())
}
