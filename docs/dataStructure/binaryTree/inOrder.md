### 题目 - 中序遍历

> [leetcode 94](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

给你二叉树的根节点 root，返回它节点值的中序遍历

示例：

```js
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,3,2]
```

进阶: 递归算法很简单，你可以通过迭代算法完成吗？

### 代码实现

递归实现

```js
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};
```

非递归实现
