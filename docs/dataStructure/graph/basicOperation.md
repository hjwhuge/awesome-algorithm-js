### 基本操作

> 实现图的过程，实际上就是构造顶点数组 vertex 以及 邻接表数组 adj 的过程。

```js
// 顶点类，通过顶点类构建顶点数组
function Vert(data, visited) {
  // 顶点的数据
  this.data = data;
  // 标示着顶点是否被访问过
  this.visited = visited;
}

// 通过顶点类构造顶点数组
// let vertex = [new Vert(0), new Vert(1), new Vert(2), new Vert(3), new Vert(4)];

// 图类，构造邻接表数组 adj，传递顶点数组 vertex 进行初始化
function Graph(vertex = []) {
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
// 实现顶点之间连接关系
Graph.prototype.addEdge = function (data1, data2) {
  // 查找顶点 v1 在顶点数组的位置
  var v1Index = this.searchPos(data1);
  // 查找顶点 v2 在顶点数组的位置
  var v2Index = this.searchPos(data2);

  this.adj[v1Index].push(v2Index);
  this.adj[v2Index].push(v1Index);
  this.edges++;
};
// 工具方法-查找拥有指定数据的顶点在顶点数组中的位置
Graph.prototype.searchPos = function (data) {
  var index = -1;
  for (var i = 0; i < this.quantity; i++) {
    if (this.vertex[i].data == data) {
      index = i;
      break;
    }
  }
  return index;
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
var vertex = [new Vert(0), new Vert(1), new Vert(2), new Vert(3), new Vert(4)];

var g = new Graph(vertex);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.showGraph();
```
