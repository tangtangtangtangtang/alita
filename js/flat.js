/*
 * @Description: 数组展平
 * @Author: TangXiaozhuo
 * @Date: 2020-02-10 19:43:44
 * @LastEditTime : 2020-02-11 16:25:21
 * @LastEditors  : Tang
 */

//todo 尾调优化

export function flatten(ar) {
  if (!Array.isArray(ar)) throw Error("参数错误");
  let result = [];
  ar.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

arrayFlatten = arr => {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(arrayFlatten(val)) : acc.concat(val),
    []
  );
};
