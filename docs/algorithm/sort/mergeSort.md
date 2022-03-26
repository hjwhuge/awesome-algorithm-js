### 归并排序

### 思想

要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了

- 分治思想。分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了

下面是对序列 11、8、3、9、7、1、2、5 排序的过程：

<img :src="$withBase('/归并排序.png')" alt="归并排序" />

<img :src="$withBase('/归并排序.gif')" alt="归并排序" />

### 解法

分割数组时直接将数组分割为两个数组，合并时直接合并数组。

- 思路简单，写法简单

```js
const mergeSort = (arr) => {
  // 当任意数组分解到只有一个时返回。
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2); // 找到中间值
  const left = arr.slice(0, middle); // 分割数组
  const right = arr.slice(middle);
  // 递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right));
};
// 合并函数
const mergeArr = (left, right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 判断2个数组中元素大小，依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // 合并 多余数组 ，后续两个循环把比较完成之后剩余数组加入temp中
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const testArr = [];
let i = 0;
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}

const res = mergeSort(testArr);
console.log(res);
```

### 复杂度

时间复杂度：O(nlogn)

空间复杂度:O(n)

### 稳定性

> 对于值相同的元素，排序之后相对位置不变

稳定
