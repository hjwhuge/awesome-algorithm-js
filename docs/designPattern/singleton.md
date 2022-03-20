### 单例模式

定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

通用实现（用 js 实现）

```js
// 最基础的
var Singleton = function (name) {
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function () {
  console.log(this.name);
};
Singleton.getInstance = function () {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};
var a = Singleton.getInstance("sven1");
var b = Singleton.getInstance("sven2");
console.log(a === b);
```

代码测试

```js

```
