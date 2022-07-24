### 题目 - 二叉树的层序遍历

> [leetcode 102](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

> 运用到算法-广度优先遍历

题目描述

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]

输入：root = [1]
输出：[[1]]

```

### 代码实现

#### BFS

```js
var levelOrder = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [];

  queue.push(root);

  while (queue.length !== 0) {
    let currentArr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      currentArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentArr);
  }

  return res;
};
```
