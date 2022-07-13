### 题目 - 二叉树的镜像

> [leetcode 27](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

题目描述

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

示例：

```js
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

### 代码实现

遍历每个节点，如果该节点有子节点，就交换它的两个子节点。当交换完所有节点的左右子节点之后，就得到树的镜像。

```js
var mirrorTree = function (root) {
  if (!root) {
    return root;
  }
  const tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  if (root.left) {
    mirrorTree(root.left);
  }
  if (root.right) {
    mirrorTree(root.right);
  }
  return root;
};
```
