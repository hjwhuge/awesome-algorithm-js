### 题目 - 返回数据流第 K 大元素

> [leetcode 703](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)

设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

#### 实现思路

- 方案一：用数组存储前 k 项，每次行加入数据重新排序，最后返回数组最后一个
  - 时间复杂度较高 需要 o(n) = N\*klogk(每次需要重新排序)
- 方案二：采用优先队列来存储前 k 项（小顶堆），最后返回 堆顶元素
  - 注意 js 要自己实现优先队列
  - 时间复杂度较高 需要 o(n) = N\*logk(对比方案一优化 k 倍)

### 代码实现

#### 排序+数组实现

```js
var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = nums;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.arr.push(val);
  this.arr.sort((a, b) => b - a);
  return this.arr[this.k - 1];
};
```

#### 优先队列实现

官方题解

```js
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const x of nums) {
    this.add(x);
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.offer(val);
  if (this.heap.size() > this.k) {
    this.heap.poll();
  }
  return this.heap.peek();
};

// 堆方式实现的优先队列
class MinHeap {
  constructor(data = []) {
    this.data = data;
    // 定义队列的优先顺序，小于0，升序
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // 对数据进行初始化处理
  heapify() {
    if (this.size() < 2) return;
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

  // 对index号元素执行上浮操作
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

  // 对index号元素执行下沉操作
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
