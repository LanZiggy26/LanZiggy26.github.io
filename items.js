/*
 * 书房的内容清单 —— 以后要加东西，只改这个文件。
 *
 * 加一项：复制下面任意一段 { ... }, 贴在同一组里，改文字和网址，存档即可。
 *   title  标题
 *   url    点进去的网址
 *   icon   图标：图片路径（例如 "icons/dujing.png"）或一个汉字（例如 "医"）
 *   tags   小标签，可写几个
 *   desc   一两句介绍
 *   isNew  写 true 会显示红色"新"字（可不写）
 *
 * 加一组：复制一整段 { group: ..., items: [ ... ] }。
 */
window.SHELF = [
  {
    group: "经典",
    items: [
      {
        title: "一起读经",
        url: "http://baopujiangtang.com/dujing/",
        icon: "icons/dujing.png",
        tags: ["读经", "真人朗读", "手机可用"],
        desc: "九部经典原文与杜保瑞老师疏解。可读、可听、逐字高亮，记录读经天数，长出一棵读经树。",
        isNew: true
      }
    ]
  },
  {
    group: "中医",
    items: [
      {
        title: "经方学堂",
        url: "https://claude.ai/artifact/Um3AbETwHS39qd7NqK9L1h",
        icon: "经",
        tags: ["每日一学", "医学原典", "经络舌脉"],
        desc: "六经辨证、方剂与医案查询，经络走向、舌诊脉诊、针灸查穴、四季养生，还有小游戏练习。",
        isNew: true
      },
      {
        title: "倪海厦经方中医",
        url: "https://lanziggy26.github.io/nihaixia/",
        icon: "https://lanziggy26.github.io/nihaixia/logo.jpg",
        tags: ["伤寒论", "六经辨证", "医案"],
        desc: "整理倪海厦老师的教学：伤寒论、金匮要略、黄帝内经、神农本草经与上千则医案。",
        isNew: true
      }
    ]
  }
];
