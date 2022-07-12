module.exports = {
  base: "/",
  title: "awesome-algorithm-js",
  description: "数据结构与算法练习记录",
  head: [{ link: { rel: "icon", href: "/favicon.ico" } }],
  themeConfig: {
    sidebarDepth: 3,
    lastUpdated: "上次更新",
    navbar: [
      { text: "数据结构分类", link: "/dataStructure/" },
      { text: "算法分类", link: "/algorithm/" },
      { text: "设计模式", link: "/designPattern/" },
      { text: "关于", link: "/about/" },
      { text: "博客", link: "https://hjwhuge.github.io/huaRongBlog/" },
      { text: "github", link: "https://github.com/hjwhuge" },
    ],
    sidebar: {
      "/dataStructure/": getDataStructureSidebar(),
      "/algorithm/": getAlgorithmSidebar(),
      "/designPattern/": getDesignPatternSidebar(),
      "/about/": getAboutSidebar(),
    },
  },
  plugins: [
    [
      "copy-code2",
      {
        showInMobile: true,
      },
    ],
    [
      "@vuepress/docsearch",
      {
        appId: "Z1EHO2WMD6",
        apiKey: "a7d5d3de5a7e323e21f5dd761180bff5",
        indexName: "hjwhuge",
        placeholder: "Search",
      },
    ],
  ],
};

function getDataStructureSidebar() {
  return [
    {
      text: "数据结构专题",
      link: "/dataStructure/",
    },
    {
      text: "数组",
      children: [
        { text: "数组-简介", link: "/dataStructure/array/intro" },
        {
          text: "数组-数组中重复的数字",
          link: "/dataStructure/array/findRepeatNumber",
        },
        {
          text: "数组-二维数组中的查找",
          link: "/dataStructure/array/findNumberIn2DArray",
        },
      ],
    },
    {
      text: "链表",
      children: [
        { text: "链表-简介", link: "/dataStructure/linkedList/intro" },
        {
          text: "链表-基本操作",
          link: "/dataStructure/linkedList/basicOperation",
        },
        { text: "反转链表", link: "/dataStructure/linkedList/reverseList" },
        {
          text: "链表中环的检测",
          link: "/dataStructure/linkedList/hasCycle",
        },
        {
          text: "两个有序的链表合并",
          link: "/dataStructure/linkedList/mergeTwoLists",
        },
        {
          text: "求链表的中间结点",
          link: "/dataStructure/linkedList/middleNode",
        },
        {
          text: "删除链表倒数第 n 个结点",
          link: "/dataStructure/linkedList/removeNthFromEnd",
        },
        {
          text: "链表交换相邻元素",
          link: "/dataStructure/linkedList/swapPairs",
        },
        {
          text: "K 个一组翻转链表",
          link: "/dataStructure/linkedList/reverseKGroup",
        },
      ],
    },
    {
      text: "栈和队列",
      children: [
        { text: "栈和队列-简介", link: "/dataStructure/stackQueue/intro" },
        {
          text: "判断括号字符串是否有效",
          link: "/dataStructure/stackQueue/isValid",
        },
        { text: "用队列实现栈", link: "/dataStructure/stackQueue/myStack" },
        { text: "用栈实现队列", link: "/dataStructure/stackQueue/myQueue" },
        {
          text: "返回滑动窗口的最大值",
          link: "/dataStructure/stackQueue/maxSlidingWindow",
        },
      ],
    },
    {
      text: "哈希表",
      children: [
        { text: "哈希表-简介", link: "/dataStructure/hashTable/intro" },
        { text: "两数之和", link: "/dataStructure/hashTable/twoSum" },
        { text: "三数之和", link: "/dataStructure/hashTable/threeSum" },
        { text: "四数之和", link: "/dataStructure/hashTable/fourSum" },
        {
          text: "有效的字母异位词",
          link: "/dataStructure/hashTable/isAnagram",
        },
        {
          text: "宝石与石头",
          link: "/dataStructure/hashTable/numJewelsInStones",
        },
        {
          text: "第一个只出现一次的字符",
          link: "/dataStructure/hashTable/firstUniqChar",
        },
        {
          text: "常数时间插入、删除和获取随机元素",
          link: "/dataStructure/hashTable/RandomizedSet",
        },
      ],
    },
    {
      text: "二叉树",
      children: [
        { text: "二叉树-简介", link: "/dataStructure/binaryTree/intro" },
        {
          text: "二叉树-基本操作",
          link: "/dataStructure/binaryTree/basicOperation",
        },
        {
          text: "二叉树-前序遍历",
          link: "/dataStructure/binaryTree/preOrder",
        },
        {
          text: "二叉树-中序遍历",
          link: "/dataStructure/binaryTree/inOrder",
        },
        {
          text: "二叉树-后序遍历",
          link: "/dataStructure/binaryTree/postOrder",
        },
        {
          text: "二叉树的层序遍历",
          link: "/dataStructure/binaryTree/levelOrder",
        },
        {
          text: "重建二叉树",
          link: "/dataStructure/binaryTree/build",
        },
        {
          text: "对称的二叉树",
          link: "/dataStructure/binaryTree/symmetric",
        },
        {
          text: "二叉树的镜像",
          link: "/dataStructure/binaryTree/mirror",
        },
        {
          text: "二叉搜索树-第 k 小的节点",
          link: "/dataStructure/binaryTree/kthSmallest",
        },
        {
          text: "二叉搜索树-后序遍历",
          link: "/dataStructure/binaryTree/verifyPostorder",
        },
        {
          text: "验证二叉搜索树",
          link: "/dataStructure/binaryTree/isValidBST",
        },
        {
          text: "二叉树&二叉搜索树最近公共祖先",
          link: "/dataStructure/binaryTree/lowestCommonAncestor",
        },
        {
          text: "二叉树-最大深度",
          link: "/dataStructure/binaryTree/maxDepth",
        },
        {
          text: "二叉树-最小深度",
          link: "/dataStructure/binaryTree/minDepth",
        },
        {
          text: "平衡二叉树",
          link: "/dataStructure/binaryTree/isBalanced",
        },
      ],
    },
    {
      text: "堆",
      children: [
        { text: "堆-简介", link: "/dataStructure/heap/intro" },
        {
          text: "堆-基本操作",
          link: "/dataStructure/heap/basicOperation",
        },
        {
          text: "堆-实现优先队列",
          link: "/dataStructure/heap/priorityqueue",
        },
        {
          text: "最小的 k 个数",
          link: "/dataStructure/heap/getLeastNumbers",
        },
        {
          text: "返回数据流第 K 大元素",
          link: "/dataStructure/heap/kthLargest",
        },
        {
          text: "数据流中的中位数",
          link: "/dataStructure/heap/medianFinder",
        },
      ],
    },
    {
      text: "图",
      children: [
        { text: "图-简介", link: "/dataStructure/graph/intro" },
        {
          text: "图-基本操作/搜索",
          link: "/dataStructure/graph/basicOperation",
        },
      ],
    },
  ];
}
function getAlgorithmSidebar() {
  return [
    {
      text: "复杂度分析",
      link: "/algorithm/complexities",
    },
    {
      text: "算法专题",
      link: "/algorithm/",
    },
    {
      text: "递归和循环",
      children: [
        { text: "递归-概览", link: "/algorithm/recursion/intro" },
        { text: "斐波拉契数列", link: "/algorithm/recursion/fibonacci" },
        { text: "跳台阶", link: "/algorithm/recursion/jumpFloor" },
        { text: "实现pow函数", link: "/algorithm/recursion/pow" },
      ],
    },
    {
      text: "排序",
      children: [
        { text: "排序-概览", link: "/algorithm/sort/intro" },
        { text: "冒泡排序", link: "/algorithm/sort/bubbleSort" },
        { text: "插入排序", link: "/algorithm/sort/insertionSort" },
        { text: "选择排序", link: "/algorithm/sort/selectionSort" },
        { text: "归并排序", link: "/algorithm/sort/mergeSort" },
        { text: "快速排序", link: "/algorithm/sort/quickSort" },
        { text: "堆排序", link: "/algorithm/sort/heapSort" },
        { text: "桶排序", link: "/algorithm/sort/bucketSort" },
        { text: "计数排序", link: "/algorithm/sort/countingSort" },
        { text: "基数排序", link: "/algorithm/sort/radixSort" },
      ],
    },
    {
      text: "搜索",
      children: [
        { text: "BFS 和 DFS", link: "/algorithm/search/bfsanddfs" },
        { text: "括号生成", link: "/algorithm/search/generateParenthesis" },
      ],
    },
    {
      text: "查找",
      children: [
        { text: "查找-概览", link: "/algorithm/find/intro" },
        { text: "二分查找-基本操作", link: "/algorithm/find/basicOperation" },
        { text: "实现求平方根函数", link: "/algorithm/find/mySqrt" },
      ],
    },
    {
      text: "位运算",
      children: [
        { text: "位运算-概览", link: "/algorithm/bit/intro" },
        { text: "只出现一次的数字", link: "/algorithm/bit/singleNumber" },
        { text: "位1的个数", link: "/algorithm/bit/hammingWeight" },
        { text: "2的幂", link: "/algorithm/bit/isPowerOfTwo" },
      ],
    },
    {
      text: "贪心算法",
      children: [
        { text: "贪心算法-概览", link: "/algorithm/greedy/intro" },
        { text: "买卖股票的最佳时机 II", link: "/algorithm/greedy/maxProfit" },
      ],
    },
    {
      text: "分治算法",
      children: [
        { text: "分治算法-概览", link: "/algorithm/divideAndConquer/intro" },
        {
          text: "多数元素",
          link: "/algorithm/divideAndConquer/majorityElement",
        },
      ],
    },
    {
      text: "回溯算法",
      children: [
        { text: "回溯算法-概览", link: "/algorithm/backTranking/intro" },
        { text: "矩阵中的路径", link: "/algorithm/backTranking/exist" },
        {
          text: "机器人的运动范围",
          link: "/algorithm/backTranking/movingCount",
        },
        { text: "N 皇后", link: "/algorithm/backTranking/solveNQueens" },
        { text: "N皇后 II", link: "/algorithm/backTranking/totalNQueens" },
      ],
    },
    {
      text: "动态规划",
      children: [
        {
          text: "动态规划-概览",
          link: "/algorithm/dynamicProgramming/intro",
        },
        {
          text: "爬楼梯",
          link: "/algorithm/dynamicProgramming/climbStairs",
        },
        {
          text: "三角形最小路径和",
          link: "/algorithm/dynamicProgramming/minimumTotal",
        },
        {
          text: "乘积最大子数组",
          link: "/algorithm/dynamicProgramming/maxProduct",
        },
        {
          text: "股票买卖系列",
          link: "/algorithm/dynamicProgramming/stock",
        },
        {
          text: "最长递增子序列",
          link: "/algorithm/dynamicProgramming/lengthOfLIS",
        },
        {
          text: "剪绳子",
          link: "/algorithm/dynamicProgramming/cuttingRope",
        },
        {
          text: "零钱兑换",
          link: "/algorithm/dynamicProgramming/coinChange",
        },
        {
          text: "编辑距离",
          link: "/algorithm/dynamicProgramming/minDistance",
        },
      ],
    },
  ];
}
function getDesignPatternSidebar() {
  return [
    {
      text: "JavaScript设计模式",
      link: "/designPattern/",
    },
    {
      text: "单例模式",
      link: "/designPattern/singleton",
    },
    {
      text: "发布-订阅模式",
      link: "/designPattern/pubSub",
    },
  ];
}
function getAboutSidebar() {
  return [
    {
      text: "me",
      link: "/about/",
    },
    {
      text: "数据结构与算法",
      link: "/about/explanation",
    },
  ];
}
