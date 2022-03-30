module.exports = {
  base: "/",
  title: "awesome-algorithm-js",
  description: "数据结构与算法练习记录",
  themeConfig: {
    sidebarDepth: 3,
    lastUpdated: "上次更新",
    navbar: [
      { text: "数据结构分类", link: "/dataStructure/" },
      { text: "算法分类", link: "/algorithm/" },
      { text: "设计模式", link: "/designPattern/" },
      { text: "JavaScript", link: "/JavaScript/" },
      { text: "关于", link: "/about/" },
      { text: "博客", link: "https://hjwhuge.github.io/huaRongBlog/" },
      { text: "github", link: "https://github.com/hjwhuge" },
    ],
    sidebar: {
      "/dataStructure/": getDataStructureSidebar(),
      "/algorithm/": getAlgorithmSidebar(),
      "/designPattern/": getDesignPatternSidebar(),
      "/JavaScript/": getJavaScriptSidebar(),
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
        { text: "反转链表", link: "/dataStructure/linkedList/reverseList" },
        {
          text: "链表中环的检测",
          link: "/dataStructure/linkedList/hasCycle",
        },
        {
          text: "链表中环的检测II",
          link: "/dataStructure/linkedList/detectCycle",
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
      ],
    },
    {
      text: "哈希表",
      children: [
        { text: "哈希表-简介", link: "/dataStructure/hashTable/intro" },
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
      text: "排序",
      children: [
        { text: "排序-概览", link: "/algorithm/sort/intro" },
        { text: "冒泡排序", link: "/algorithm/sort/bubbleSort" },
        { text: "插入排序", link: "/algorithm/sort/insertionSort" },
        { text: "选择排序", link: "/algorithm/sort/selectionSort" },
        { text: "归并排序", link: "/algorithm/sort/mergeSort" },
        { text: "快速排序", link: "/algorithm/sort/quickSort" },
        { text: "桶排序", link: "/algorithm/sort/bucketSort" },
        { text: "计数排序", link: "/algorithm/sort/countingSort" },
        { text: "基数排序", link: "/algorithm/sort/radixSort" },
      ],
    },
    {
      text: "递归",
      children: [
        { text: "递归-概览", link: "/algorithm/recursion/intro" },
        { text: "递归-斐波拉契数列", link: "/algorithm/recursion/fibonacci" },
        { text: "递归-跳台阶", link: "/algorithm/recursion/jumpFloor" },
        { text: "递归-实现pow函数", link: "/algorithm/recursion/pow" },
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
function getJavaScriptSidebar() {
  return [
    {
      text: "JavaScript专题",
      link: "/JavaScript/",
    },
    {
      text: "手写实现 call、apply、bind",
      link: "/JavaScript/handwritingCallApplyBind",
    },
  ];
}
function getAboutSidebar() {
  return [
    {
      text: "me",
      link: "/about/index",
    },
    {
      text: "数据结构与算法",
      link: "/about/explanation",
    },
  ];
}
