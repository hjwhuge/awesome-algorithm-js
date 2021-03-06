### 二分查找（Binary Search）

> 一种针对有序数据集合的查找算法,也叫折半查找算法.

#### 示例

给定一个有序数据 8，11，19，23，27，33，45，55，67，98，要求查找值为 19 的情况

- 利用二分思想，每次都与区间的中间数据比对大小，缩小查找区间的范围。其中，low 和 high 表示待查找区间的下标，mid 表示待查找区间的中间元素下标
  - 查找终止条件：直到找到要查找的元素，或者区间被缩小为 0

<img :src="$withBase('/二分查找.png')" alt="二分查找" />

#### 时间复杂度

- 高效的时间复杂度，O(logn)

#### 二分查找的局限性

- 一般来说只适用于数组这种数据结构
  - 数组支持通过下标随机访问元素
- 待处理数据必须是有序的
- 数据量太小不适合二分查找
  - 数据量小可以直接遍历查找
- 数据量太大不适合二分查找
  - 二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空间连续，对内存的要求比较苛刻。
