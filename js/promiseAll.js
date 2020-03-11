/*
 * @Description: desc
 * @产品wiki地址: 
 * @接口wiki地址: 
 * @Author: TangXiaozhuo
 * @Date: 2020-03-11 11:09:23
 * @LastEditTime: 2020-03-11 11:32:33
 * @LastEditors: Tang
 */
const promiseAll = (promiseArr) => {
  let finish = 0
  let error = 0
  return new Promise((rs, rj) => {
    let result = []
    promiseArr.forEach(async (pro, index) => {
      result[index] = await pro()
      if (error) rj()
      if (++finish === promiseArr.length) rs(result)
    })
  })
}

promiseAll([() => 1, () => 2]).then(res => {
  console.log(res)
})

