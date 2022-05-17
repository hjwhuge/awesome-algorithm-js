### 题目 - 二叉树的最大深度

> [leetcode 104](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

#### 题目描述

给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

#### 示例：

```js
给定二叉树[(3, 9, 20, null, null, 15, 7)];
返回它的最大深度 3 。
```

### 代码实现

#### DFS 实现

```js
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
```
