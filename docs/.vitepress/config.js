module.exports = {
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
      { text: "博客", link: "https://hjwhuge.github.io/huaRongBlog/" },
      { text: "github", link: "https://github.com/hjwhuge" },
    ],
    sidebar: {
      "/dataStructure/": getDataStructureSidebar(),
      "/algorithm/": getAlgorithmSidebar(),
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
      text: "链表",
      children: [
        { text: "链表-简介", link: "/dataStructure/linkedlist/intro" },
        { text: "反转链表", link: "/dataStructure/linkedlist/reverseList" },
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
