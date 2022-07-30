### 题目 - 二叉树&二叉搜索树的最近公共祖先

> [leetcode 235 二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

> [leetcode 236 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

题目描述

- 给定一个二叉（搜索）树, 找到该树中两个指定节点的最近公共祖先。
- 最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）

示例：

```js
// 二叉搜索树
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。

// 二叉树
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

### 代码实现

#### 二叉搜索树

- 二叉搜索树：根节点大于左子树，小于右子树
- 根据 root 和 p、q 值大小比较；如果 p、q 分别位于左右子树，那么结果就是当前 root

```js
// 递归写法
var lowestCommonAncestor = function (root, p, q) {
  // p、q 都在左子树
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // p、q 都在右子树
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
// 非递归写法
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // p、q 都在左子树
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    }
    // p、q 都在右子树
    else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};
```

#### 二叉树

- 适用于二叉树的解法同样适用于二叉搜索树
- 路径 （遍历，找出路径，然后对比）；实现更复杂
- 递归
  - 终止条件：root 为空或者 等于 p / q
  - 遍历左右子树

```js
// 递归
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null) {
    return right;
  } else {
    return right === null ? left : root;
  }
};
```
