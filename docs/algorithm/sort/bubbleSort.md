### 冒泡排序

### 思想

冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。

- 一次冒泡（循环）会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作
- 优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。

<img :src="withBase('/冒泡排序.gif')" alt="冒泡排序" />

<script setup>
import { withBase } from 'vitepress'
</script>

### 解法

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // 提前退出冒泡循环的标志位
    let flag = false;
    for (let j = 0; i < array.length - j - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = true;
      }
    }
    // 没有数据交换，提前退出
    if (!flag) {
      break;
    }
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
