### 题目 - 对称的二叉树

> [leetcode 28](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

题目描述

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

示例：

```js
输入：root = [1,2,2,3,4,4,3]
输出：true

输入：root = [1,2,2,null,3,null,3]
输出：false
```

### 代码实现

通过二叉树的前序遍历和其对称二叉树的前序遍历做比较，如果两个序列是一样的，那么该二叉树就是对称的。
对称即根节点左子树值 === 右子树值 或者 左右子节点都不存在

```js
var isSymmetric = function (root) {
  return check(root, root);
  function check(p, q) {
    // 两个节点都为空
    if (!p && !q) return true;
    // 只有一个节点为空
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return check(p.left, q.right) && check(p.right, q.left);
  }
};
```
