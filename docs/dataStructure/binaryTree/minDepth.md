### 题目 - 二叉树的最小深度

> [leetcode 111](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

题目描述

给定一个二叉树，找出其最小深度。
最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：2

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

### 代码实现

#### DFS 实现

```js
var minDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const leftHeight = minDepth(root.left);
    const rightHeight = minDepth(root.right);
    // 左子节点或右子节点中有为空的
    if (root.left === null || root.right === null) {
      return leftHeight + rightHeight + 1;
    }
    // 左子节点或右子节点都不为空
    return Math.min(leftHeight, rightHeight) + 1;
  }
};
```
