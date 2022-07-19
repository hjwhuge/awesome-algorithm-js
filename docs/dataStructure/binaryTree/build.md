### 题目 - 重建二叉树

> [leetcode 07](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

题目描述

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

示例：

```js
Input: (preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7]);
Output: [3, 9, 20, null, null, 15, 7];

Input: (preorder = [-1]), (inorder = [-1]);
Output: [-1];
```

### 代码实现

- 前置知识
  - 前序遍历：根节点、左节点、右节点
  - 中序遍历：左节点、根节点、右节点
  - 后序遍历：左节点、右节点、根节点
- 实现思路
  - 通过前序遍历获取根节点
  - 在中序遍历中定位根节点，即得到左右子树节点数目
    - 可以通过 hash 表提前缓存节点下标
  - 构造根节点
  - 递归构造左右子树

```js
var buildTree = function (preorder, inorder) {
  // 构造哈希映射，用于快速定位中序遍历中的根节点
  const n = inorder.length;
  const indexMap = new Map();
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i);
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);

  function myBuildTree(
    preorder,
    inorder,
    preorder_left,
    preorder_right,
    inorder_left,
    inorder_right
  ) {
    if (preorder_left > preorder_right) {
      return null;
    }

    // 前序遍历中的第一个节点就是根节点
    const preorder_root = preorder_left;
    // 在中序遍历中定位根节点，得到下标
    const inorder_root = indexMap.get(preorder[preorder_root]);

    // 先把根节点建立出来
    const root = new TreeNode(preorder[preorder_root]);
    // 得到左子树中的节点数目
    const size_left_subtree = inorder_root - inorder_left;
    // 递归地构造左子树，并连接到根节点
    // 前序遍历中「从 左边界 + 1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = myBuildTree(
      preorder,
      inorder,
      preorder_left + 1,
      preorder_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );
    // 递归地构造右子树，并连接到根节点
    // 前序遍历中「从 左边界 + 左子树节点数目 + 1 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位 + 1 到 右边界」的元素
    root.right = myBuildTree(
      preorder,
      inorder,
      preorder_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );
    return root;
  }
};
```
