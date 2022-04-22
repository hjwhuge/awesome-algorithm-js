### 题目 - 数据流中的中位数

> [leetcode 剑指 offer 41](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4]  的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

示例：

```js
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

#### 实现思路

- 通过构建一个大顶堆和一个小顶堆来实现
  - 小顶堆保存较大的一半 A（小顶堆），长度为 n/2(偶数)，长度为 (n+1)/2(奇数)
  - 大顶堆保存较小的一半 B（大顶堆），长度为 n/2(偶数)，长度为 (n-1)/2(奇数)
- 插入时候逻辑
  - 如果当前数据流是偶数，我们需要插入 A 中，实现逻辑：先把数据插入 B 中，找到最大值，再把最大值从 B 中移出并插入 A 中
  - 如果当前数据流是奇数，我们需要插入 B 中，实现逻辑：先把数据插入 A 中，找到最小值，再把最小值从 A 中移出并插入 B 中
  - 这样插入的原因是借助堆的特性，省去我们判断新数据的插入位置

### 代码实现

```js
var MedianFinder = function () {
  // 构建两个堆
  this.minHeap = new Heap();
  this.maxHeap = new Heap([], (a, b) => b - a);
};

MedianFinder.prototype.addNum = function (num) {
  // 奇数
  if (this.minHeap.size() !== this.maxHeap.size()) {
    this.minHeap.offer(num);
    this.maxHeap.offer(this.minHeap.poll());
  } else {
    this.maxHeap.offer(num);
    this.minHeap.offer(this.maxHeap.poll());
  }
};

MedianFinder.prototype.findMedian = function () {
  let m = this.minHeap.size();
  let n = this.maxHeap.size();
  let minNum = this.minHeap.peek();
  let maxNum = this.maxHeap.peek();
  if (m + n < 1) {
    return null;
  }
  if (m === n) {
    return (minNum + maxNum) / 2;
  } else {
    return minNum;
  }
};

// 堆实现
class Heap {
  constructor(data = [], comparator = (a, b) => a - b) {
    this.data = data;
    // 定义堆的类型，默认是小顶堆
    this.comparator = comparator;
    // 建堆
    this.heapify();
  }

  // 堆化，对数据进行初始化处理
  heapify() {
    if (this.size() <= 1) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // 获取堆顶元素
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // 添加元素
  offer(value) {
    this.data.push(value);
    // 上浮
    this.bubbleUp(this.size() - 1);
  }

  // 返回并删除队列的开头
  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      // 相当于删掉第一个元素；并把最后一个元素放到队首，进行下沉
      this.data[0] = last;
      // 下沉
      this.bubbleDown(0);
    }
    return result;
  }

  // 从下往上堆化，从最后一个节点开始，每次和父节点做比较，执行上浮操作
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 从上往下堆化，从第一个节点开始，每次和左右子节点做比较，执行下沉操作
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}
```
