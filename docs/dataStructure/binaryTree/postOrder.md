### 题目 - 后序遍历

> [leetcode 145](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

给你二叉树的根节点 root，返回它节点值的后序遍历

示例：

```js
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [3,2,1]
```

进阶: 递归算法很简单，你可以通过迭代算法完成吗？

### 代码实现

递归实现

```js
var postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
  }
  return array;
};
```

非递归实现
