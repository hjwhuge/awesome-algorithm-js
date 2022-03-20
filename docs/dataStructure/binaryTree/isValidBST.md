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

二叉搜索树定义

- 如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树

### 代码实现

递归

> 根据二叉搜索树定义，定义一个递归函数，每个子节点都必须在一个区间（min，max）之间，在递归左子树时，因为左子树节点都小于根节点，所以把上界 max 改为 root.val；同理递归右子树时，把下界 min 改为 root.val

```js
const helper = (root, min, max) => {
  if (root === null) {
    return true;
  }
  if (root.val <= min || root.val >= max) {
    return false;
  }
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};
```

中序遍历

> 采用中序遍历的特殊性，遍历之后的序列是升序的，在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可

```js
var isValidBST = function (root) {
  let stack = [];
  // 存放上一个节点，初始值无穷小
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
