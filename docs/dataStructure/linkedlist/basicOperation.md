### 基本操作

> 单链表：查找、插入、删除操作

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.val !== item) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 向链表末尾追加节点
  append(newVal) {
    const newNode = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // 指定元素向后插入
  insert(newVal, val) {
    const currentNode = this.findByValue(val);
    if (currentNode === -1) {
      console.log("未找到插入位置");
      return;
    }
    const newNode = new Node(newVal);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找前一个
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.val !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  // 根据值删除
  remove(item) {
    const prevNode = this.findPrev(item);
    if (prevNode === -1) {
      console.log("未找到元素");
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}
```

测试

```js
const LList = new LinkedList();
LList.append("A");
LList.append("B");
LList.append("C");
LList.append("D"); // A -> B -> C -> D
console.log("-------------insert item------------");
LList.insert("X", "A"); // 首元素后插入
LList.insert("Y", "D"); // 尾元素后插入
LList.display(); // A -> X -> B -> C -> D -> Y
console.log("-------------remove item------------");
LList.remove("B");
LList.display(); // A -> X -> C -> D -> Y
console.log("-------------find by item------------");
LList.findByValue("A");
console.log("-------------find by index------------");
LList.findByIndex(2);
console.log("-------------与头结点同值元素测试------------");
LList.insert("head", "C");
LList.display(); // A -> X -> C -> head -> D -> Y
LList.findPrev("head"); // C
LList.remove("head");
LList.display(); // A -> X -> C -> D -> Y
```
