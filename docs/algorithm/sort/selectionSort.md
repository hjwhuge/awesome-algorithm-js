### 选择排序

### 思想

选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

<img :src="$withBase('/选择排序.gif')" alt="选择排序" />

### 解法

```js
function selectionSort(array) {
  // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // 将当前元素和最小元素位置互换
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
    // 等价于下面的写法
    // const temp = array[i];
    // array[i] = array[minIndex];
    // array[minIndex] = temp;
  }
  return array;
}
```

### 复杂度

时间复杂度：`O(n²)`

空间复杂度:`O(1)`

### 稳定性

> 对于值相同的元素，排序之后相对位置不变

不稳定
