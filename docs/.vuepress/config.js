module.exports = {
  title: 'RoyalCat',
  description: `A simple VuePress project deployed with RoyalCat.`,
  themeConfig: {
    logo: 'https://gitee.com/ddf_shanxi/imgbed/raw/master/img/202112121609730.png',
    lastUpdated: 'Last Updated', // string | boolean,
    searchMaxSuggestions: 10,  //搜索默认条数
    sidebar: 'auto', //自动侧边栏导航
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      },
    ],
  },
  dest: 'public',
};
