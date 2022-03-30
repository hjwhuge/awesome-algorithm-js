### 概念

说明：不需要一块连续的内存空间来存储

用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和下一个元素的地址。

- 链表查询时间复杂度 O(n)。
  - 需要遍历才能查询到元素
- 链表插入、删除操作时间复杂度 O(1)。
  - 插入、删除元素只需断开连接重新赋值

<img :src="$withBase('/链表.png')" alt="链表" />

#### 分类

- 单链表
  - 每个结点除了存储数据，还存储了下一个结点的地址
  - 后继指针：下个结点地址的指针
  - 头结点：第一个结点
  - 尾结点：最后一个结点，后继指针指向 null
  - 解决问题：LRU 缓存
- 双向链表
  - 和单链表相比，每个结点多了一个前驱结点
  - 前驱结点：上一个结点地址
- 循环链表
  - 特殊的单链表，尾结点的后继指针指向头结点
  - 解决问题：约瑟夫问题
- 双向循环链表
- 静态链表

### 基础题目练习

- 算法之美推荐题目
  - [单链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
  - [链表中环的检测](https://leetcode-cn.com/problems/linked-list-cycle/)
  - [ 链表中环的检测 II -不允许修改链表](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
  - [两个有序的链表合并](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
  - [删除链表倒数第 n 个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
  - [求链表的中间节点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
- 算法面试通过推荐题目
  - [单链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
  - [链表交换相邻元素](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
  - [链表中环的检测](https://leetcode-cn.com/problems/linked-list-cycle/)
  - [ 链表中环的检测 II -不允许修改链表](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
  - [ K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
    - hard
