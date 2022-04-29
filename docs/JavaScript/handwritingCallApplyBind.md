### apply，call，bind 三者的区别

- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
- bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。

#### arguments 说明

- arguments 是一个对应于传递给函数的参数的类数组对象
- arguments 对象不是一个 Array 。它类似于 Array，但除了 length 属性和索引元素之外没有任何 Array 属性

### 手写 call 函数

```javascript
// 传入参数列表 call2(thisObj, params1, params2)
Function.prototype.call2 = function (context) {
  //因为传进来的context有可能是null
  context = context || window;
  // fn指向调用call的函数
  context.fn = this;

  // 类数组转数组
  let args = [...arguments];
  // 获取传入参数
  args = args.slice(1);

  //相当于执行了context.fn(arguments[1], arguments[2]);
  const result = context.fn(...args);

  delete context.fn;
  //因为有可能this函数会有返回值return
  return result;
};
```

::: details 测试手写 call 函数

```js
// 测试一下
var value = 2;
var obj = {
  value: 1,
};
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
bar.call2(null); // 2
console.log(bar.call2(obj, "kevin", 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

:::

### 手写 apply 函数

```javascript
// 传入数组 apply2(thisObj, [params1, params2])
Function.prototype.apply2 = function (context) {
  context = context || window;
  context.fn = this;

  let result;
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
};
```

::: details 测试手写 apply 函数

```js
// 测试一下
var value = 2;
var obj = {
  value: 1,
};
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
bar.apply2(null); // 2
console.log(bar.apply2(obj, ["kevin", 18]));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

:::

### 手写 bind 函数

```javascript
// 传入参数列表 bind2(thisObj, params1, params2)
// 返回值：调用有指定this值和参数的函数的结果
Function.prototype.bind2 = function (context) {
  var _this = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    // 通过new调用返回函数
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    // 直接调用返回函数
    const argsF = args.concat(...arguments);
    return _this.apply(context, argsF);
  };
};
```

::: details 测试手写 bind 函数

```js
// 测试一下
var value = 2;
var obj = {
  value: 1,
};
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
const fn = bar.bind2(null);
fn(); // 2
const fn1 = bar.bind2(obj, "kevin", 18);
let data = fn1();
console.log(data);
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

:::
