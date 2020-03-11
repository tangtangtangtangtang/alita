/*
 * @Description: desc
 * @产品wiki地址: 利用辅助栈完成
 * @接口wiki地址: 优化：https://zhuanlan.zhihu.com/p/87257507
 * 优化: stack.push(x - min)、pop/top(上一次的min + top)、上一次的min = top < 0 ? min - top : min
 * @Author: TangXiaozhuo
 * @Date: 2020-03-11 01:01:24
 * @LastEditTime: 2020-03-11 01:04:14
 * @LastEditors: Tang
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (this.min[this.min.length-1] === undefined) {
      this.min.push(x)
  }else if (x <= this.min[this.min.length-1]) { 
      this.min.push(x)
  } else {
      this.min.push(this.min[this.min.length-1])
  }
  this.stack.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.min.pop()
  return this.stack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1]
};