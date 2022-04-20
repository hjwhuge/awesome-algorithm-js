### 题目 - 最小的 k 个数

> [leetcode 剑指 offer 40](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是 1、2、3、4。

示例：

```js
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

输入：arr = [0,1,2,1], k = 1
输出：[0]
```

#### 实现思路

方案一：排序

- 排序之后返回最小的 k 个数

- 时间复杂度(o(nlogn))

方案二：大顶堆

- 遍历前 k 个数，构建一个大顶堆

- 从第 k 个数开始遍历，和大顶堆的最大值进行比较，若比最大值小，交换两个数的位置，重新构建大顶堆

- 第二次遍历完成之后，大顶堆里的数就是整个数据里最小的 k 个数。

- 时间复杂度(o(nlogk))

### 代码实现

#### 排序实现

```js
var getLeastNumbers = function (arr, k) {
  let res = arr.sort((a, b) => a - b);
  return res.splice(0, k);
};
```

#### 堆实现

```js
var getLeastNumbers = function (arr, k) {
  if (k > arr.length) {
    return [];
  }
  // 前k个数建立大顶堆
  for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
    bubbleDown(arr, i, k);
  }
  // 判断后k个数中是否有更小的数
  for (let i = k; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      bubbleDown(arr, 0, k);
    }
  }
  return arr.splice(0, k);
};
function bubbleDown(array, index, len) {
  // 用于判断是否还有子节点
  const lastIndex = len - 1;
  while (true) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    // 用于和子节点比较
    let findIndex = index;
    if (leftIndex <= lastIndex && array[leftIndex] - array[findIndex] > 0) {
      findIndex = leftIndex;
    }
    if (rightIndex <= lastIndex && array[rightIndex] - array[findIndex] > 0) {
      findIndex = rightIndex;
    }
    if (index !== findIndex) {
      [array[index], array[findIndex]] = [array[findIndex], array[index]];
      index = findIndex;
    } else {
      break;
    }
  }
}
```
