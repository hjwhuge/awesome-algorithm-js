### 优先队列 - 堆实现

> 优先队列是在队列先进先出的基础上改造，在优先队列中，元素被赋予优先级。当访问元素时，具有最高优先级的元素最先删除。优先队列具有最高级先出的行为特征。

```js
class Heap {
  constructor(data = []) {
    this.data = data;
    // 定义队列的类型，此处是小顶堆，小于0，升序
    this.comparator = (a, b) => a - b;
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
    // 两种写法都可以
    // let temp = this.data[index1];
    // this.data[index1] = this.data[index2];
    // this.data[index2] = temp;
  }

  size() {
    return this.data.length;
  }
}
```

测试

```js
function HeapTest() {
  let minHeap = new Heap();
  console.log("开始添加元素");
  minHeap.offer(2);
  minHeap.offer(1);
  minHeap.offer(7);
  minHeap.offer(4);
  console.log("查看堆:", minHeap.data);
  minHeap.offer(5);
  minHeap.offer(6);
  minHeap.offer(10);
  console.log("查看堆:", minHeap.data);
  console.log("check:", isHeapArr(minHeap.data));
  console.log("获取堆顶元素：", minHeap.peek());
}
function createTest() {
  console.log("随机创建测试:");
  let arr = [];
  let i = 0;
  while (i <= 10) {
    const num = Math.floor(Math.random() * 100);
    arr.push(num);
    i++;
  }
  let heap = new Heap(arr);
  console.log("check:", isHeapArr(heap.data));
}

function isHeapArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let p = arr[i];
    let l = arr[i * 2 + 1];
    let r = arr[i * 2 + 2];
    if (l < p || r < p) {
      return false;
    }
  }
  return true;
}
```
