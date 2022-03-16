### 题目 - 前序遍历

> [leetcode 144](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

给你二叉树的根节点 root，返回它节点值的前序遍历

示例：

```js
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,2,3]
```

进阶: 递归算法很简单，你可以通过迭代算法完成吗？

### 代码实现

递归实现

```js
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};
```

非递归实现
