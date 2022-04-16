### 堆的实现

> 堆是完全二叉树，而完全二叉树比较适合用数组来存储。用数组来存储完全二叉树是非常节省存储空间的。因为我们不需要存储左右子节点的指针，单纯地通过数组的下标，就可以找到一个节点的左右子节点和父节点。

<img :src="$withBase('/heapAchieve.png')" alt="堆数组实现" />

从图中我们可以看到，以数组中下标为 i 的节点为例，它的左子节点就是：下标为 i∗2 + 1 的节点，右子节点就是：下标为 i∗2 + 2 的节点，父节点就是下标为 (i - 1) / 2​(取整，去除小数部分) 的节点。

### 堆的构建

#### 通过上浮的方式实现（大顶堆为列）

- 从第二个元素开始，每个元素和父节点比较
- 如果大于父节点，该节点上浮（交换位置），并且继续和祖父节点判断，直到 index 为 0，终止循环
- 如果小于父节点，直接跳出循环

```js
function bubbleUp(array, index) {
  // index 为0终止循环
  while (index > 0) {
    // 下面两种方式都可以获取父节点下标
    // const parentIndex = (index - 1) >> 1;
    const parentIndex = Math.floor((index - 1) / 2);
    // 这里修改判断条件即适用于小顶堆
    if (array[index] - array[parentIndex] > 0) {
      [array[index], array[parentIndex]] = [array[parentIndex], array[index]];
      index = parentIndex;
    } else {
      break;
    }
  }
}

function createMaxHeap(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    bubbleUp(arr, i);
  }
  return arr;
}
```

#### 通过下沉的方式实现（小顶堆为列）

- 从最后一个非叶子节点开始，和左右子节点比较，一直到堆顶元素
- 如果大于子节点，该节点下沉（交换位置），并且继续和孙节点判断，直到 没有子节点，终止循环
- 如果小于子节点，直接跳出循环

```js
function bubbleDown(array, index) {
  // 用于判断是否还有子节点
  const lastIndex = array.length - 1;
  while (true) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    // 用于和子节点比较
    let findIndex = index;
    // 这里修改第二个判断条件即适用于大顶堆
    if (leftIndex <= lastIndex && array[leftIndex] - array[findIndex] < 0) {
      findIndex = leftIndex;
    }
    // 这里修改第二个判断条件即适用于大顶堆
    if (rightIndex <= lastIndex && array[rightIndex] - array[findIndex] < 0) {
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

function createMinHeap(arr) {
  if (arr.length <= 1) return arr;
  // 从最后一个非叶子节点开始，一直到堆顶元素
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    bubbleDown(arr, i);
  }
  return arr;
}
```

### 堆的插入

- 堆的插入是往堆的尾部添加一条数据，可能会破坏堆的结构
- 我们需要针对新加入的元素，从下到上进行一次上浮操作

```js
// 伪代码
offer(value) {
    arr.push(value);
    // 上浮，和构建堆方法一致
    bubbleUp(arr.length - 1);
}
```

### 堆的删除（堆顶元素）

- 堆的删除是往堆的头部删除一条数据
- 为了保证堆满足完全二叉树的定义，我们需要把堆的最后一项移到第一项，然后对第一项进行一次下沉操作

```js
// 伪代码
poll(value) {
    // 删掉第一个元素；并把最后一个元素放到队首
    const last = arr.pop();
    arr[0] = last;
    // 下沉，和构建堆方法一致
    this.bubbleDown(0);
}
```
