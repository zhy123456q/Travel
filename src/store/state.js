// 防止用户关闭本地存储或者开启隐身模式
let defautCity = '上海'
try {
  if (localStorage.city) {
    defautCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export default {
  city: defautCity
}
