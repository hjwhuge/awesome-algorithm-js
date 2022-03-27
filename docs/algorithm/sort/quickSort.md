### 快速排序

### 思想

通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。

实现步骤：

- 选择一个基准元素 target（一般选择第一个数）
- 将比 target 小的元素移动到数组左边，比 target 大的元素移动到数组右边
- 分别对 target 左侧和右侧的元素进行快速排序
- 从上面的步骤中我们可以看出，快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）

下面是对序列 6、1、2、7、9、3、4、5、10、8 排序的过程：
<img :src="$withBase('/快速排序.jpg')" alt="快速排序" />
<img :src="$withBase('/快速排序.gif')" alt="快速排序" />

### 解法一

单独开辟两个存储空间 left 和 right 来存储每次递归比 target 小和大的序列

每次递归直接返回 left、target、right 拼接后的数组

浪费大量存储空间，写法简单

```js
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const target = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
}

const testArr = [];
let i = 0;
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}
console.log("unsort", testArr);
quickSort(testArr);
console.log("sort", testArr);
```

### 解法二

```js
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 分区函数，每执行一次，进行一轮快排，返回当前基准元素的index
const partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot];
  let startIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex);
      startIndex++;
    }
  }
  swap(arr, startIndex, pivot);
  return startIndex;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    // 以right为区分点
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    // 通过上一轮的基准元素index，递归后续排序，知道拆分的数组长度为1
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
    quickSort(
      arr,
      partitionIndex + 1 > right ? right : partitionIndex + 1,
      right
    );
  }
};

const testArr = [];
let i = 0;
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}
console.log("unsort", testArr);
quickSort(testArr, 0, testArr.length - 1);
console.log("sort", testArr);
```

### 复杂度

时间复杂度：平均 O(nlogn)，最坏 O(n2)，实际上大多数情况下小于 O(nlogn)

空间复杂度:O(logn)（递归调用消耗）

### 稳定性

> 对于值相同的元素，排序之后相对位置不变

不稳定

### 归并排序和快速排序的区别

归并排序的处理过程是由下到上的，先处理子问题，然后再合并。而快排正好相反，它的处理过程是由上到下的，先分区，然后再处理子问题。归并排序虽然是稳定的、时间复杂度为 O(nlogn) 的排序算法，但是它是非原地排序算法。我们前面讲过，归并之所以是非原地排序算法，主要原因是合并函数无法在原地执行。快速排序通过设计巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题
