### 基本操作

> 实现图的过程，实际上就是构造顶点数组 vertex 以及 邻接表数组 adj 的过程。

```js
// 顶点类，通过顶点类构建顶点数组
function Vert(data, visited = false) {
  // 顶点的数据
  this.data = data;
  // 标示着顶点是否被访问过
  this.visited = visited;
}

// 通过顶点类构造顶点
// let s = new Vert(data, visited)

// 图类，构造邻接表数组 adj，传递顶点数组 vertex 进行初始化
function Graph(vertex = []) {
  // 顶点数组
  this.vertex = vertex;
  // 顶点数量
  this.quantity = vertex.length;
  // 边的数量
  this.edges = 0;
  // 邻接表数组
  this.adj = [];
  for (let i = 0; i < this.quantity; i++) {
    this.adj[i] = [];
  }
}
// 图中新增边（顶点s和顶点t）
Graph.prototype.addEdge = function (s, t) {
  // 查找顶点 s 在顶点数组的位置
  var sIndex = this.vertex.findIndex((item) => item.data === s);
  // 查找顶点 t 在顶点数组的位置
  var tIndex = this.vertex.findIndex((item) => item.data === t);

  this.adj[sIndex].push(t);
  this.adj[tIndex].push(s);
  this.edges++;
};
// 查看图
Graph.prototype.showGraph = function () {
  var putStr = "";
  for (var i = 0; i < this.quantity; i++) {
    putStr = "";
    putStr += i + " -> ";
    for (var j = 0; j < this.quantity; j++) {
      if (this.adj[i][j] !== undefined) {
        putStr += " " + this.adj[i][j] + " ";
      }
    }
    console.log(putStr);
  }
};
```

测试

```js
// 通过顶点类构造顶点数组
var vertex = [
  new Vert("A"),
  new Vert("B"),
  new Vert("C"),
  new Vert("D"),
  new Vert("E"),
];

var g = new Graph(vertex);
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

g.showGraph();

// 输出结果
0 ->  B  C
1 ->  A  D
2 ->  A  E
3 ->  B
4 ->  C
```

### 图的搜索

> 经常用图来解决的问题比如：从一个城市到另外一个城市的最短距离，这个问题实际上可以抽象出从图中的一个顶点到达另外一个顶点的最短路径的问题。图的这一操作叫做搜索，对图有两种基本搜索方式：深度优先搜索、广度优先搜索。

#### 深度优先搜索

深度优先搜索的思路是，从一条路径的顶点开始，直到到达最后一个顶点，然后回溯，继续追溯下一条路径。

具体到我们的存储结构：顶点数组 和 邻接表数组，我们找到起始顶点在 顶点数组 中的位置，然后找到相应位置 邻接表数组 中存储的相邻顶点，做递归搜索即可，代码如下：

```js
Graph.prototype.dfs = function (data) {
  // 找到起始顶点在顶点数组中的位置
  var index = this.vertex.findIndex((item) => item.data === data);
  // 将其设置为已访问
  this.vertex[index].visited = true;
  // console.log(this.vertex[index].data);

  // 遍历邻接表数组中存储的相邻顶点，递归搜索
  for (var i = 0; i < this.adj[index].length; i++) {
    var key = this.adj[index][i];
    var currentVertex = this.vertex.find((item) => item.data === key);
    // 判断当前顶点是否已经访问
    if (!currentVertex.visited) {
      this.dfs(currentVertex.data);
    }
  }
};

// 测试
g.dfs("A");
```

#### 广度优先搜索

深度优先搜索是纵向延伸的搜索，而广度优先搜索是横向延伸的搜索。递归可以解决深度优先所搜，而广度优先搜索需要使用一个队列，来操作，具体代码并不复杂，如下：

- 目标顶点入队，从目标节点开始遍历
- 目标顶点出队，并把 visited 设为 true，目标节点的相邻顶点入队（入队前判断该顶点之前未被访问）

```js
Graph.prototype.bfs = function (data) {
  // 定义一个队列
  var queue = [];
  // 将起始顶点入队
  queue.push(data);

  // 遍历队列的过程就是在横向搜索
  while (queue.length > 0) {
    // 出队
    var key = queue.shift();
    // 该顶点设为已访问
    var idx = this.vertex.findIndex((item) => item.data === key);
    this.vertex[idx].visited = true;
    console.log(key);
    // 遍历把符合条件相邻顶点入队
    for (var j = 0; j < this.adj[idx].length; j++) {
      var currentVertex = this.vertex.findIndex(
        (item) => item.data === this.adj[idx][j]
      );
      if (!this.vertex[currentVertex].visited) {
        queue.push(this.adj[idx][j]);
      }
    }
  }
};

// 测试
g.bfs("A");
```
