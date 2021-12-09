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

// 判断内容是否含有表情字符，现有数据库不支持。
const hasEmoji = (str = '') => {
  const reg =
    /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g
  return str.match(reg) && (str.match(reg) || '0').length
}

export default({
  localGet,
  localSet,
  localRemove,
  hasEmoji
})
