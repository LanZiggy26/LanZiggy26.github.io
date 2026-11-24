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
      },
      {
        title: "一起读经 · 版本记录",
        url: "https://github.com/LanZiggy26/yiqi-dujing#二版本记录app",
        icon: "版",
        tags: ["私密", "仅本人可看", "每日同步"],
        desc: "App 目前状况、各经典音频覆盖与历次版本。放在 GitHub 私密仓库，须登录本人账号才能打开。",
        isNew: true
      },
      {
        title: "抱朴短视频",
        url: "videos.html",
        icon: "影",
        tags: ["老子", "庄子", "周易", "8 支"],
        desc: "旅美华人跟杜保瑞老师读经典：老子与领导力、庄子与美国教育、周易与夫妻相处、如老牛低头食草。",
        isNew: true
      },
      {
        title: "菜根谭职场修行记",
        url: "http://baopujiangtang.com/caigentan/",
        icon: "菜",
        tags: ["菜根谭", "职场新人", "互动游戏", "中英双语"],
        desc: "依杜保瑞老师《菜根谭的乾坤人生》八单元编排：从试用期到带团队，40 个职场情境三选一，盖印评上中下策，收集 48 张原文锦囊。",
        isNew: true
      },
      {
        title: "义理问卦",
        url: "http://baopujiangtang.com/wengua/",
        icon: "卦",
        tags: ["周易", "掷卦", "杜师疏解", "中英双语"],
        desc: "问一件事，掷出一卦，依杜师疏解《周易》的义理看清所处的时与位、判断走势；卦册可通读六十四卦。以自省为主，不断吉凶。",
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
        title: "颐趣 · 养生游园",
        url: "https://claude.ai/artifact/ALCiE6Kh4abwGZZGDG5P7V",
        icon: "颐",
        tags: ["节气时辰", "养生游戏", "体质小测"],
        desc: "今日节气与十二时辰、每日功课，学堂讲倪海厦与徐文兵；游园有真假养生、药膳厨房、舌象诊所等十几个小游戏。",
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
