### 题目 - 前序遍历

> [leetcode 144](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

给你二叉树的根节点 root，返回它节点值的前序遍历

示例：

> 二叉树输入一层一层往下看

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

> 两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同.

- 取根节点为目标节点，开始遍历
- 1.左节点入栈并输出该节点 -> 直至左节点为空的节点
- 2.节点出栈
- 3.以右节点为目标节点，再依次执行 1、2、3

```js
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};
```
