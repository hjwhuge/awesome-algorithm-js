module.exports = {
  base: "/",
  title: "awesome-algorithm-js",
  description: "数据结构与算法练习记录",
  themeConfig: {
    algolia: {
      apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      indexName: "docsearch",
    },
    sidebarDepth: 2,
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
