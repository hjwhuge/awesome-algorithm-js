### 题目 - 二叉树的层序遍历

> [leetcode 102](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

> 运用到算法-广度优先遍历

题目描述

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

示例：

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]

输入：root = [1]
输出：[[1]]

```

### 代码实现

#### BFS

> 详细题解参考 [详细题解参考](https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/) [来源](https://leetcode.cn/u/nettee/)

> 通过 bfs 输出代码；输出结果 [[3,9,20,15,7]]

```js
var levelOrder = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [];

  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    res.push(node.value);
  }

  return [res];
};
```

最终实现代码

> 常规 bfs 输出并不是按层输出，我们需要稍微修改一下代码，在每一层遍历开始前，先记录队列中的结点数量 n（也就是这一层的结点数量），然后一口气处理完这一层的 n 个结点。

```js
var levelOrder = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [];

  queue.push(root);

  while (queue.length !== 0) {
    let currentArr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      currentArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentArr);
  }

  return res;
};
```
