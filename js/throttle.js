/*
 * @Description: desc
 * @Author: TangXiaozhuo
 * @Date: 2020-03-11 11:41:46
 * @LastEditTime: 2020-03-11 11:43:23
 * @LastEditors: Tang
 */
const throttle = (fn, ts) => {
  let doing = false
  return () => {
    if (doing) return
    doing = true
    setTimeout(() => {
      fn()
      doing = false
    }, ts)
  }
}