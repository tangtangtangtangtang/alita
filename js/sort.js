/*
 * @Description: 排序
 * @Author: TangXiaozhuo
 * @Date: 2020-03-15 12:47:51
 * @LastEditTime: 2020-03-15 18:43:29
 * @LastEditors: Tang
 */
const ar = [];
for (let i = 0; i < 100000; i++) {
  ar.push(Math.floor(Math.random() * (100 - 1) + 1));
}

// 冒泡
function sort(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length - i; j++) {
      if (ar[j] > ar[j + 1]) {
        let temp = ar[j + 1];
        ar[j + 1] = ar[j];
        ar[j] = temp;
      }
    }
  }
  return ar;
}

// 快速排序

function quickSort(ar) {
  if (ar.length <= 1) return ar;
  let post = ar[0];
  let left = [];
  let right = [];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] < post) {
      left.push(ar[i]);
    } else {
      right.push(ar[i]);
    }
  }
  return []
    .concat(quickSort(left))
    .concat([post])
    .concat(quickSort(right));
}

let startTime = Date.now();
console.log(quickSort(ar));
console.log("快排耗时:", Date.now() - startTime);
startTime = Date.now();
console.log(sort(ar));
console.log("冒泡耗时:", Date.now() - startTime);
