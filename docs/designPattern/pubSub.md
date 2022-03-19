### JavaScript 发布-订阅模式

通用实现（用 js 实现简单发布订阅模式）

```js
const event = {
  // 缓存列表，存放订阅者的回调函数
  clientList: {},
  // 订阅消息
  listen: function (key, fn) {
    // 如果还没有订阅过此类消息，给该消息创建一个缓存列表
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    // 订阅的消息添加进消息缓存列表
    this.clientList[key].push(fn);
  },
  // 发布消息
  trigger: function () {
    // 获取消息类型，shift删除数组第一项，并返回该项
    let key = Array.prototype.shift.call(arguments);
    // 取出该消息对应的回调函数合集
    let fns = this.clientList[key];
    // 如果没有订阅该消息，返回false
    if (!fns || fns.length === 0) {
      return false;
    }

    fns.forEach((fn) => {
      // arguments 是发布消息附带的参数
      fn.apply(this, arguments);
    });
  },
  // 取消订阅
  remove: function (key, fn) {
    let fns = this.clientList[key];
    // 如果key对应的消息没有被人订阅，则直接返回
    if (!fns) {
      return false;
    }
    if (!fn) {
      // 如果没有传入具体的回调函数，则表示取消key对应消息的所有订阅
      fns && (fns.length = 0);
    } else {
      // 反向遍历，找到订阅者的回调函数
      for (let i = fns.length - 1; i >= 0; i--) {
        let _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  },
};
```

代码测试

```js
const installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};
let salesOffices = {};
installEvent(salesOffices);
let fn1 = function (price) {
  console.log("jiage：aa-fn1：" + price);
};
let fn2 = function (price) {
  console.log("jiage：aa-fn2：" + price);
};
salesOffices.listen("aa", fn1);
salesOffices.listen("aa", fn2);
salesOffices.remove("aa", fn1);
salesOffices.trigger("aa", 20000);
// 输出：jiage：aa-fn2：20000
// salesOffices.trigger('bb', 66666);
```
