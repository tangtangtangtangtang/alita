/*
 * @Description: 深拷贝
 * @Author: TangXiaozhuo
 * @Date: 2020-02-10 19:09:32
 * @LastEditTime : 2020-02-10 19:41:25
 * @LastEditors  : Tang
 */

// 基础类型: string、number、undefined、null、boolean、symbol
// 引用类型: object、function、array、Date、RegExp
export default function deepClone({ target, limitDep = 100 }, currentDep = 1) {
  // 过于深层次
  if (currentDep >= limitDep) return target;
  // 基础类型
  if (
    ["string", "number", "undefined", "boolean", "symbol"].includes(
      typeof target
    )
  ) {
    console.log("基础类型");
    return target;
  }
  // 数组
  if (Array.isArray(target)) {
    console.log("数组");
    return [].concat(target);
  }
  // 对象
  const newObj = new Object();
  Object.keys(target).forEach(key => {
    newObj[key] = deepClone({ target: target[key], limitDep }, currentDep++);
  });
  return newObj;
}
