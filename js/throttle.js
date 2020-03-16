/*
 * @Description: desc
 * @Author: TangXiaozhuo
 * @Date: 2020-03-11 11:41:46
 * @LastEditTime: 2020-03-15 18:43:15
 * @LastEditors: Tang
 */
const throttle = (fn, ts) => {
  let doing = false;
  return () => {
    if (doing) return;
    doing = true;
    setTimeout(() => {
      fn();
      doing = false;
    }, ts);
  };
};
