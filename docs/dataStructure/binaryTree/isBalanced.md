### 题目 - 平衡二叉树

> [leetcode 110](https://leetcode-cn.com/problems/balanced-binary-tree/)

给定一个二叉树，判断它是否是高度平衡的二叉树。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：true

输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

### 代码实现

#### 自顶向下遍历

首先计算当前节点左右子树的高度，如果左右子树的高度差是否不超过 1，再分别递归地遍历左右子节点，并判断左子树和右子树是否平衡。

```js
var isBalanced = function (root) {
  if (!root) {
    return true;
  } else {
    const left = height(root.left);
    const right = height(root.right);
    return (
      Math.abs(left - right) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }

  function height(root) {
    if (!root) {
      return 0;
    } else {
      const leftHeight = height(root.left);
      const rightHeight = height(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
};
```

#### 自底向上遍历

对于当前节点，先递归地判断其左右子树是否平衡，再判断以当前节点为根的子树是否平衡。如果一棵子树是平衡的，则返回其高度（高度一定是非负整数），否则返回 −1。如果存在一棵子树不平衡，则整个二叉树一定不平衡。

```js
var isBalanced = function (root) {
  return height(root) >= 0;

  function height(root) {
    if (!root) {
      return 0;
    } else {
      const leftHeight = height(root.left);
      const rightHeight = height(root.right);
      if (
        leftHeight === -1 ||
        rightHeight === -1 ||
        Math.abs(leftHeight - rightHeight) > 1
      ) {
        return -1;
      } else {
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
  }
};
```
