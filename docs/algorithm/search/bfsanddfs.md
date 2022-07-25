### 广度优先搜索（BFS）

> 广度优先搜索（Breadth-First-Search），我们平常都简称 BFS。

- 直观地讲，它其实就是一种“地毯式”层层推进的搜索策略，即先查找离起始顶点最近的，然后是次近的，依次往外搜索。

- 广度优先搜索需要借助队列来实现，遍历得到的路径就是，起始顶点到终止顶点的最短路径

示例图

<img :src="$withBase('/bfs.png')" alt="广度优先搜索" />

相关题目（leetcode）

- [二叉树的层序遍历](../../dataStructure/binaryTree/levelOrder.md)

#### 模板代码

适用于树、图等数据结构

```js
function BFS(graph, start, end) {

  let queue = [];
  queue.push([start]);
  // 标识该节点已经访问过
  visited.set(start);

  while (queue.length !== 0) {
    // 取出队列第一个元素
    const node = queue.shift();
    // 标记该节点已经访问
    visited.set(node);

    // 处理该节点
    process(node);
    // 找node后继节点、判断是否被访问
    nodes = generate_related_nodes(node);

    queue.push(nodes);

    ...
  }
}
```

### 深度优先搜索（DFS）

> 深度优先搜索（Depth-First-Search），简称 DFS。最直观的例子就是“走迷宫”。

- 实际上，深度优先搜索用的是一种比较著名的算法思想，回溯思想

- 广度优先搜索非常适合用递归实现，换种说法，深度优先搜索是借助栈来实现的。

- 假如我们要从顶点 s 开始找顶点 t，从 s 开始，如果遇到有多个相邻顶点，
  随意选择一个相邻顶点，接着往下查找，直到最后还没找到时，回退到上一个相邻顶点，重新选择一条路继续走，直到最终找到顶点 t

示例图

<img :src="$withBase('/dfs.png')" alt="深度优先搜索" />

相关题目（leetcode）

- [二叉树的中序遍历](../../dataStructure/binaryTree/inOrder.md)
- [二叉树的最大深度](../../dataStructure/binaryTree/maxDepth.md)

#### 模板代码

适用于树、图等数据结构

```js
function DFS(node, visited) {
  // 标识该节点已经访问过
  visited.set(node);

  // 处理该节点
  process(node);

  for (let next_node of node.children) {
    // 如果没有被访问，继续递归
    if (!visited.get(next_node)) {
      DFS(next_node, visited);
    }
  }
}
```

#### 拓展训练题目

- [括号生成](./generateParenthesis.md)
- [单词接龙](https://leetcode-cn.com/problems/word-ladder/)
- [员工的重要性](https://leetcode-cn.com/problems/employee-importance/)
- [路径总和](https://leetcode-cn.com/problems/path-sum/)
- [课程表](https://leetcode-cn.com/problems/course-schedule/)
- [岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

### 剪枝

是一种搜索时经常运用到的策略，在搜索时，根据一些规则，忽略掉一些确定不需要遍历的分支
