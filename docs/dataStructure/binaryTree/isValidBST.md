### 题目 - 验证二叉搜索树

> [leetcode 98](https://leetcode-cn.com/problems/validate-binary-search-tree/)

题目描述

示例：给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

```js
输入：root = [2,1,3]
输出：true
输入：root = [5,1,4,null,null,3,6]
输出：false
```

### 思路

采用中序遍历的特殊性，遍历之后的序列是升序的，在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可

### 代码实现

```js
var isValidBST = function (root) {
  let stack = [];
  // 存放上一个节点初始值无穷小
  let prev = -Infinity;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 每次和上一个节点做判断
    if (root.val <= prev) {
      return false;
    }
    prev = root.val;
    root = root.right;
  }
  return true;
};
```
