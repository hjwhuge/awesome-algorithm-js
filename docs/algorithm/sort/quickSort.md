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

### 解法

```js
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 获取 pivot 交换完后的index
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
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
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
