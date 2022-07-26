### 题目 - 二叉搜索树中第 K 小的元素

> [leetcode 230](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

题目描述

给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

示例：

```js
输入：root = [3,1,4,null,2], k = 1
输出：1
```

### 代码实现

#### 中序遍历

- 中序遍历：对于树中的任意节点来说，先打印它的左子节点，然后再打印它本身，最后打印它的右子节点。
- 二叉搜索树：在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，而右子树节点的值都大于这个节点的值。
- 综和得出：通过中序遍历，得到一个从小到大有序数据

```js
// 递归版本
var kthSmallest = function (root, k) {
  const arr = inorderTraversal(root);
  return arr[k - 1];
  function inorderTraversal(root, array = []) {
    if (root) {
      inorderTraversal(root.left, array);
      array.push(root.val);
      inorderTraversal(root.right, array);
    }
    return array;
  }
};
// 迭代版本
var kthSmallest = function (root, k) {
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
};
```
