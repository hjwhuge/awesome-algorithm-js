### 基本操作

> 二叉搜索树：查找、插入、删除操作

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  show() {
    console.log(this.value);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // find(data) {
  //   let node = this.root;
  //   if (node) {
  //     if (data === node.value) {
  //       return node;
  //     } else if (data < node.value) {
  //       return this.find(data, node.left);
  //     } else {
  //       return this.find(data, node.right);
  //     }
  //   } else {
  //     return null;
  //   }
  // }
  insert(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    let parent = null;
    while (current) {
      parent = current;
      if (data < parent.value) {
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  }
  // 二叉树前序遍历
  preOrder(node) {
    if (node) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  // 二叉树中序遍历
  middleOrder(node) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  }
  // 二叉树后序遍历
  laterOrder(node) {
    if (node) {
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  }
  // 获取二叉树最小值
  getMin() {
    let current = this.root;
    while (current) {
      if (!current.left) {
        return current;
      }
      current = current.left;
    }
  }
  // 获取二叉树最大值
  getMax() {
    let current = this.root;
    while (current) {
      if (!current.right) {
        return current;
      }
      current = current.right;
    }
  }
  // 获取二叉树深度
  getDeep(node, deep) {
    deep = deep || 0;
    if (node == null) {
      return deep;
    }
    deep++;
    let dleft = this.getDeep(node.left, deep);
    let dright = this.getDeep(node.right, deep);
    return Math.max(dleft, dright);
  }
}
```

```js
let t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
// t.middleOrder(t.root);
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root));
```
