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

> 两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同.

- 取根节点为目标节点，开始遍历
- 1.左节点入栈 -> 直至左节点为空的节点
- 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并输出它，将该节点设为上一个访问节点
- 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行 1、2、3

```js
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let prev = null; // 标记上一个访问的节点
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 获取当前节点
    root = stack[stack.length - 1];
    // 右节点不存在或者右节点被访问过
    if (!root.right || root.right == prev) {
      root = stack.pop();
      result.push(root.val);
      prev = root;
      // 防止陷入进栈出栈循环
      root = null;
    } else {
      root = root.right;
    }
  }
  return result;
};
```
