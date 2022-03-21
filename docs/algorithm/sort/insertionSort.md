### 插入排序

### 思想

我们将数组中的数据分为两个区间，已排序区间和未排序区间；初始已排序区间只有一个元素，就是数组的第一个元素。

插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束

<img :src="$withBase('/插入排序.gif')" alt="插入排序" />

### 解法

```js
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (value < array[j]) {
        // 数据移动
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    // 插入数据
    array[j + 1] = value;
  }
  return array;
}
```

### 复杂度

时间复杂度：`O(n²)`

空间复杂度:`O(1)`

### 稳定性

> 对于值相同的元素，排序之后相对位置不变

稳定
