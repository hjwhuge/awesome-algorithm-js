### 题目 - 二叉搜索树的后序遍历序列

> [leetcode 33](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

题目描述
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
示例：

```js
二叉树如下：
     5
    / \
   2   6
  / \
 1   3

输入: [1,6,3,2,5]
输出: false

输入: [1,3,2,6,5]
输出: true
```

### 代码实现

- 后续遍历最后一个为根节点
- 二叉搜索树特点：根节点大于左节点，小于右节点

```js
var verifyPostorder = function (postorder) {
  if (!postorder.length) return true;

  // 获取根节点
  const root = postorder[postorder.length - 1];
  const idx = postorder.findIndex((item) => item > root);

  // 获取左右子树
  const left = postorder.slice(0, idx);
  const right = postorder.slice(idx, postorder.length - 1);

  // 判断左右子树是否符合要求
  const bLeft = left.some((item) => item > root);
  if (bLeft) return false;
  const bRight = right.some((item) => item < root);
  if (bRight) return false;

  // 判断左右子树是否符合要求
  return verifyPostorder(left) && verifyPostorder(right);
};
```
