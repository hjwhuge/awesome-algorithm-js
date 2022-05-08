### 基本操作

> 给定数据为简单情况、复杂变体情况下的二分查找实现

#### 二分查找的递归实现

> 简单情况，即有序数组中不存在重复元素

```js
// 二分查找的递归实现
function bsearch(data = [], n, val) {
  return bsearchInternally(data, 0, n - 1, val);
}
function bsearchInternally(data = [], low, high, value) {
  if (low > high) return -1;
  // 求中间元素
  let mid = Math.floor((low + high) / 2);
  if (data[mid] == value) {
    return mid;
  } else if (data[mid] < value) {
    return bsearchInternally(data, mid + 1, high, value);
  } else {
    return bsearchInternally(data, low, mid - 1, value);
  }
}
```

#### 二分查找的非递归实现

> 简单情况，即有序数组中不存在重复元素

```js
function bsearch(data = [], n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // 求中间元素
    let mid = (high + low) >> 1;
    if (data[mid] == value) {
      return mid;
    } else if (data[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
```

::: details 测试一下

```js
// 测试一下
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const idx = bsearch(arr, arr.length, 3);
console.log(idx);
// 2
```

:::

### 四种常见的二分查找变形问题

- 查找第一个值等于给定值的元素
- 查找最后一个值等于给定值的元素
- 查找第一个大于等于给定值的元素
- 查找最后一个小于等于给定值的元素

温馨提示：可以通过画图方式加深理解

#### 查找第一个值等于给定值的元素

```js
function bsearch(data = [], n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // 求中间元素
    let mid = (high + low) >> 1;
    if (data[mid] == value) {
      // 依次判断前一个元素是否等于给定元素
      if (data[mid - 1] !== value) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (data[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// 测试一下
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 11, 18];
const idx = bsearch(arr, arr.length, 8); // 5
```

#### 查找最后一个值等于给定值的元素

```js
function bsearch(data = [], n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // 求中间元素
    let mid = (high + low) >> 1;
    if (data[mid] == value) {
      // 依次判断后一个元素是否等于给定元素
      if (data[mid + 1] !== value) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (data[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// 测试一下
const arr = [1, 3, 4, 5, 6, 8, 8, 8, 11, 18];
const idx = bsearch(arr, arr.length, 8); // 7
```

#### 查找第一个大于等于给定值的元素

```js
function bsearch(data = [], n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // 求中间元素
    let mid = (high + low) >> 1;
    if (data[mid] >= value) {
      // 依次判断前一个元素是否小于给定元素
      if (data[mid - 1] < value) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 测试一下
const arr = [3, 5, 6, 7, 10];
const idx = bsearch(arr, arr.length, 5); // 1
```

#### 查找最后一个小于等于给定值的元素

```js
function bsearch(data = [], n, value) {
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    // 求中间元素
    let mid = (high + low) >> 1;
    if (data[mid] <= value) {
      // 依次判断后一个元素是否大于给定元素
      if (data[mid + 1] > value) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// 测试一下
const arr = [3, 4, 6, 7, 10];
const idx = bsearch(arr, arr.length, 4); // 1
const idx1 = bsearch(arr, arr.length, 7); // 3
```
