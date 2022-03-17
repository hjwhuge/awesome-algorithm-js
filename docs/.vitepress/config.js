module.exports = {
  base: "/",
  title: "awesome-algorithm-js",
  description: "数据结构与算法练习记录",
  themeConfig: {
    algolia: {
      apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      indexName: "docsearch",
    },
    sidebarDepth: 3,
    lastUpdated: "Last Updated",
    nav: [
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
};

function getDataStructureSidebar() {
  return [
    {
      text: "数据结构专题",
      link: "/dataStructure/index",
    },
    {
      text: "数组",
      children: [{ text: "数组-简介", link: "/dataStructure/array/intro" }],
    },
    {
      text: "链表",
      children: [
        { text: "链表-简介", link: "/dataStructure/linkedList/intro" },
        { text: "反转链表", link: "/dataStructure/linkedList/reverseList" },
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
          text: "验证二叉搜索数",
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
      text: "算法专题",
      link: "/algorithm/index",
    },
    {
      text: "复杂度分析",
      link: "/algorithm/complexities",
    },
  ];
}
function getDesignPatternSidebar() {
  return [
    {
      text: "JavaScript设计模式整理",
      link: "/designPattern/index",
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
      link: "/about/index",
    },
    {
      text: "数据结构与算法",
      link: "/about/explanation",
    },
  ];
}
