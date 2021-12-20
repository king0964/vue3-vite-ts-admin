// 获取缓存信息
const localGet = (key: any) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key) || '0')
  } catch (error) {
    return value
  }
}
// 设置缓存信息
const localSet = (key: any, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
// 删除缓存信息
const localRemove = (key: any) => {
  window.localStorage.removeItem(key)
}
// 删除功能
const delData = (arr: any, name: any, listData: any) => {
  // console.log('listData', arr, listData)
  const temListData = JSON.parse(JSON.stringify(listData))
  for (let i = listData.length - 1; i >= 0; i--) { // 需要使用倒循环，不然i会溢出
    for (let j in arr) {
      if (listData[i]['date'] == arr[j]) {
        temListData.splice(i, 1)
        break
      }
    }
  }
  listData = temListData
  return listData
}

export default ({
  localGet,
  localSet,
  localRemove,
  delData
})
