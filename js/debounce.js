/*
 * @Description: desc
 * @产品wiki地址: 
 * @接口wiki地址: 
 * @Author: TangXiaozhuo
 * @Date: 2020-03-11 11:37:45
 * @LastEditTime: 2020-03-11 11:41:40
 * @LastEditors: Tang
 */

const debounce = (fn, ts) => {
  let timer = null
  return () => {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(fn, ts)
  }
}