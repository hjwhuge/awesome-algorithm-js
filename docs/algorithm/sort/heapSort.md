### 堆排序

### 思想

我们可以把堆排序的过程大致分解成两个大的步骤，建堆和排序。

1、建堆，我们首先将数组建成一个堆（以大顶堆为例）。建堆的过程，有两种思路：上浮或者下沉。

- 更多实现可以查看 数据结构 - 堆 - 堆的基本操作

2、排序

- 建堆结束之后，根据大顶堆的特性。数组中的第一个元素就是堆顶，也就是最大的元素。我们把它跟最后一个元素交换，那最大元素就放到了下标为 n 的位置

- 这个过程有点类似上面讲的“删除堆顶元素”的操作，当堆顶元素移除之后，我们把下标为 n 的元素放到堆顶，然后再通过堆化的方法，将剩下的 n−1 个元素重新构建成堆。堆化完成之后，我们再取堆顶的元素，放到下标是 n−1 的位置，一直重复这个过程，直到最后堆中只剩下标为 1 的一个元素，排序工作就完成了。

<img :src="$withBase('/heapSort.png')" alt="堆排序" />

### 解法

```js
function heapSort(array) {
  buildHeap(array);
  console.log("buildHeap", array);
  // 交换第一个和最后一个元素，然后重新调整大顶堆
  for (let i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]];
    bubbleDown(array, 0, i - 1);
  }
  return array;
}
// 堆化数据，从最后一个非叶子节点开始下沉，一直到堆顶元素
function buildHeap(array) {
  const len = array.length;
  let start = Math.floor(len / 2) - 1;
  for (let i = start; i >= 0; i--) {
    bubbleDown(array, i, len);
  }
}
// 这里下沉根据不同len来进行堆排序
function bubbleDown(array, index, len) {
  while (true) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    // 用于和子节点比较
    let findIndex = index;
    if (leftIndex <= len && array[leftIndex] - array[findIndex] > 0) {
      findIndex = leftIndex;
    }
    if (rightIndex <= len && array[rightIndex] - array[findIndex] > 0) {
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

### 复杂度

时间复杂度：O(nlogn)

空间复杂度:O(1)

### 稳定性

> 对于值相同的元素，排序之后相对位置不变

不稳定
