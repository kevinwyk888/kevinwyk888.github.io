import type { SiteContent } from "./types";

const zh: SiteContent = {
  lang: "zh",
  meta: {
    title: "王煜凯 | 工程学术主页",
    description:
      "王煜凯的中英双语学术主页，展示研究方向、教育经历、课程背景、项目摘要与联系方式。",
  },
  site: {
    brand: "王煜凯",
    brandMark: "YW",
    location: "美国安娜堡 / 中国上海",
  },
  header: {
    menuLabel: "菜单",
    nav: [
      { key: "home", label: "首页", href: "/zh/" },
      {
        key: "about",
        label: "关于我",
        href: "/zh/#about",
        children: [
          { key: "education", label: "教育经历", href: "/zh/#education" },
          { key: "experience", label: "经历与实践", href: "/zh/#experience" },
          { key: "courses", label: "课程经历", href: "/zh/#courses" },
          { key: "contact", label: "联系方式", href: "/zh/#contact" },
        ],
      },
      { key: "research", label: "研究方向", href: "/zh/research/" },
      { key: "projects", label: "项目总览", href: "/zh/projects/" },
      { key: "cv", label: "简历", href: "/zh/cv/" },
    ],
  },
  footer: {
    note: "本站使用 Astro 构建，用于以中英双语展示研究方向、课程背景与工程项目。",
    copyright: "© 2026 王煜凯。",
    links: [
      { label: "GitHub", href: "https://github.com/kevinwyk888", external: true },
      { label: "邮箱", href: "mailto:kevin.wykrp@gmail.com", external: true },
      { label: "研究方向", href: "/zh/research/" },
    ],
  },
  home: {
    hero: {
      eyebrow: "个人简介",
      title: "王煜凯",
      subtitle: "电子与计算机工程、工业与运筹工程本科生",
      description:
        "我是上海交通大学浦江国际学院（原上海交通大学密西根学院）双学位项目的本科生，目前分别在上海交通大学和密歇根大学学习电子与计算机工程、工业与运筹工程。我尤其关注如何将优化、统计和工程建模应用于现实问题。",
      badges: [],
      interests: {
        title: "研究兴趣",
        items: ["机器学习", "运筹优化", "统计推断", "科研交流"],
      },
      stats: [
        { label: "所在地点", value: "安娜堡 / 上海" },
        { label: "常用语言", value: "普通话、英语" },
      ],
      primaryAction: { label: "研究方向", href: "/zh/research/" },
      secondaryAction: { label: "项目总览", href: "/zh/projects/" },
      bannerImage: "/images/banner.jpg",
      bannerAlt: "王煜凯个人主页顶部横幅占位图",
    },
    education: {
      id: "education",
      title: "教育经历",
      items: [
        {
          institution: "密歇根大学安娜堡分校",
          degree: "工业与运筹工程 学士",
          dates: "2025.08 - 2027.05",
          location: "美国密歇根州安娜堡",
          gpa: "绩点: 4.00 / 4.00",
          logo: "/images/logos/UMICH.png",
          logoAlt: "密歇根大学校徽占位图",
          description: [],
        },
        {
          institution: "上海交通大学",
          degree: "电子与计算机工程 学士",
          dates: "2023.08 - 2027.08",
          location: "中国上海",
          gpa: "绩点: 3.78 / 4.00",
          logo: "/images/logos/SJTU.png",
          logoAlt: "上海交通大学校徽占位图",
          description: [],
        },
        {
          institution: "柏林工业大学",
          degree: "交流经历",
          dates: "2025.01",
          location: "德国柏林",
          logo: "/images/logos/TU-Berlin-Logo.png",
          logoAlt: "柏林工业大学校徽占位图",
          description: [],
        },
      ],
    },
    experience: {
      id: "experience",
      title: "课外 / 实践经历",
      items: [
        {
          role: "本科科研助理",
          organization: "密歇根大学",
          dates: "2025.09 - 至今",
          location: "美国安娜堡",
          kind: "科研",
          summary: "更多细节可见“研究方向”页面。",
          highlights: [],
        },
        {
          role: "助教",
          organization: "上海交通大学浦江国际学院",
          dates: "2025.05 - 2025.08",
          location: "中国上海",
          kind: "教学",
          summary: "协助实验课和数学课程的教学，并为学生提供学习支持。",
          highlights: [
            "PHYS1410J 物理实验（简谐振动）。",
            "MATH2140J 线性代数。",
          ],
        },
        {
          role: "网管员",
          organization: "上海交通大学学生网络信息管理部",
          dates: "2023.10 - 2025.08",
          location: "中国上海",
          kind: "技术服务",
          summary: "维护宿舍区的有线与无线网络，响应同学报修，排查网络稳定性问题。",
          highlights: [],
        },
        {
          role: "模拟暑期项目实习生",
          organization: "SilverFOCS-24su",
          dates: "2024.05 - 2024.08",
          location: "中国上海",
          kind: "项目实践",
          summary: "按照项目要求开发了两款游戏，包括一款经典打砖块游戏和一款更具实验性的节奏平台跳跃游戏。",
          highlights: [
            "完成了经典 2D 碰撞类游戏项目 Mobius。",
            "完成了使用 Elm 开发的 2D 节奏平台跳跃游戏 Soul Symphony。",
          ],
        },
        {
          role: "志愿服务与国际项目支持",
          organization: "觅源青年志愿者队，\n上海交通大学浦江国际学院国际项目办公室",
          dates: "2023.12 - 2025.05",
          location: "中国上海",
          kind: "服务",
          summary: "参与乡村支教、交换生协助、劳动教育活动，以及科普活动中的访客引导。",
          highlights: [
            "参与湖南支教、校园服务及中国航天日志愿活动。",
            "协助接待并支持来自合作院校的交换学生。",
          ],
        },
      ],
    },
    courses: {
      id: "courses",
      title: "课程经历",
      note: "每个气泡显示课号、课程名称及修读学校：\nUM = 密歇根大学，SJTU = 上海交通大学。",
      groups: [
        {
          name: "优化、概率与决策",
          accent: "#dbe7f8",
          courses: [
            { code: "IOE 201", title: "经济决策", weight: 3, detail: "UM" },
            { code: "IOE 202", title: "运筹工程与分析", weight: 3, detail: "UM" },
            { code: "IOE 310", title: "优化与计算方法", weight: 5, detail: "UM" },
            { code: "IOE 316", title: "马尔可夫过程导论", weight: 4, detail: "UM" },
            { code: "IOE 474", title: "离散事件仿真", weight: 4, detail: "UM" },
            { code: "IOE 511", title: "连续优化方法", weight: 5, detail: "UM" },
            { code: "IOE 515", title: "随机过程", weight: 5, detail: "UM" },
            { code: "IOE 610", title: "线性规划 II", weight: 5, detail: "UM" },
            { code: "ECE4010J", title: "工程中的概率方法", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "机器学习与数据分析",
          accent: "#d8efe5",
          courses: [
            { code: "EECS 445", title: "机器学习导论", weight: 5, detail: "UM" },
            { code: "IOE 366", title: "工程数据分析导论", weight: 5, detail: "UM" },
            { code: "IOE 373", title: "数据分析工具与技术", weight: 4, detail: "UM" },
            { code: "IOE 473", title: "高级数据分析", weight: 5, detail: "UM" },
            { code: "ECE4880J", title: "计算机视觉", weight: 5, detail: "SJTU" },
          ],
        },
        {
          name: "编程与算法",
          accent: "#efe2d6",
          courses: [
            { code: "ECE2800J", title: "程序设计与基础数据结构", weight: 4, detail: "SJTU" },
            { code: "ECE2810J", title: "数据结构与算法", weight: 5, detail: "SJTU" },
            { code: "ENGR1510J", title: "计算机与编程导论（进阶）", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "数学基础",
          accent: "#e7e1f5",
          courses: [
            { code: "MATH1560J", title: "荣誉微积分 II", weight: 4, detail: "SJTU" },
            { code: "MATH2550J", title: "荣誉微积分 III", weight: 4, detail: "SJTU" },
            { code: "MATH2560J", title: "荣誉微积分 IV", weight: 4, detail: "SJTU" },
            { code: "MATH2140J", title: "线性代数", weight: 4, detail: "SJTU" },
            { code: "MATH2030J", title: "离散数学", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "电气工程与物理",
          accent: "#dfe9dd",
          courses: [
            { code: "ECE2150J", title: "电路导论", weight: 4, detail: "SJTU" },
            { code: "ECE2160J", title: "信号与系统导论", weight: 4, detail: "SJTU" },
            { code: "ECE2300J", title: "电磁学 I", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "思维调节类课程",
          accent: "#f2e5ec",
          courses: [
            { code: "IOE 333", title: "人因工程与工效学", weight: 4, detail: "UM" },
            { code: "IOE 463", title: "工作测量与设计", weight: 4, detail: "UM" },
            { code: "HIS 102", title: "全球视野下的中国历史", weight: 3, detail: "SJTU" },
            { code: "ART 201", title: "科学、艺术与哲学", weight: 3, detail: "SJTU" },
            { code: "GER xxx", title: "德语 I", weight: 3, detail: "TUB" },
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      title: "精选项目",
      intro: "",
      cta: { label: "查看完整项目总览", href: "/zh/projects/" },
      items: [
        {
          title: "数据驱动的密歇根大学足球分析：球队、球员与比赛结果",
          year: "2026",
          program: "密歇根大学 · SURE",
          abstract:
            "本项目在密歇根大学工程本科生暑期科研计划（SURE）中与 Albert S. Berahas 合作开展，使用 2025 年 Wyscout 数据分析密歇根大学足球队的球队表现、球员贡献与比赛结果。项目结合可解释的球员重要性评分、ElasticNet 特征筛选与普通最小二乘（OLS）分析，以及基于分布的胜平负分析，为球员评估、训练重点和赛前准备提供参考。",
          tags: ["体育数据分析", "ElasticNet", "统计建模", "球员评估"],
          reportLink: { label: "海报", href: "/reports/2026_SURE_Poster_final.pdf" },
          image: "/images/projects/um-sure-soccer-2026.jpg",
          imageFit: "contain",
          featured: true,
        },
        {
          title: "步长调优：Wolfe 参数如何影响优化性能",
          year: "2026",
          abstract:
            "这个 IOE 511 项目关注连续优化中的一个更高层问题：Wolfe 线搜索参数如何影响不同测试问题上的收敛行为、效率与鲁棒性。项目重点不在单一算法本身，而在于比较多种优化方法对参数的敏感性，并说明线搜索参数的选择如何实质性改变实际表现。",
          tags: ["连续优化", "Wolfe 线搜索", "敏感性分析", "线搜索参数"],
          reportLink: { label: "报告", href: "/reports/IOE511_phase_II.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/IOE511_Project",
            external: true,
          },
          image: "/images/projects/IOE511.png",
        },
        {
          title: "智慧骑行：共享单车小时租赁需求预测",
          year: "2026",
          abstract:
            "这个 IOE 473 项目构建了一个共享单车小时租赁需求预测流程，综合使用时间、环境与历史需求特征。项目比较了线性回归、MLP、随机森林与 XGBoost，并进一步引入 MLP 加 residual LSTM 的混合结构，以更好地捕捉局部峰值与短期波动。",
          tags: ["需求预测", "MLP", "LSTM", "XGBoost", "时间序列"],
          reportLink: { label: "报告", href: "/reports/IOE473_project.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/IOE473_Project",
            external: true,
          },
          image: "/images/projects/IOE473.png",
        },
        {
          title: "基于增强 U-Net 精修的图像自动上色",
          year: "2025",
          abstract:
            "这个计算机视觉项目在预训练 SIGGRAPH17 自动上色基线之上，构建了两阶段框架，并加入增强 U-Net 精修模块。设计结合了单步残差校正、全局颜色先验以及解码器自注意力，以生成更鲜明且语义一致的结果。",
          tags: ["计算机视觉", "U-Net", "注意力机制", "图像上色"],
          reportLink: { label: "报告", href: "/reports/488_FinalReport.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/ECE488-Project",
            external: true,
          },
          image: "/images/projects/ECF488(CV).png",
          featured: true,
        },
        {
          title: "美国致命警察枪击事件统计分析",
          year: "2025",
          abstract:
            "这个项目围绕 2015 至 2025 年美国致命警察枪击事件展开统计分析，使用可视化、假设检验、置信区间与预测区间等方法，研究泊松特征、星期与月份依赖关系、政治环境中的种族差异，以及执法记录设备可能带来的影响。",
          tags: ["统计分析", "假设检验", "Mathematica", "社会数据"],
          reportLink: { label: "报告", href: "/reports/401_Project.pdf" },
          image: "/images/projects/ECE401_shooting.png",
          featured: true,
        },
        {
          title: "Soul Symphony",
          year: "2024",
          abstract:
            "一款 2D 节奏平台跳跃游戏。玩家通过谱写旋律来改变环境、拯救迷失灵魂，并在信仰与牺牲的故事中推进探索。项目在 SilverFOCS 实习中使用 Elm 开发完成。",
          tags: ["Elm", "游戏开发", "节奏", "平台跳跃"],
          demoLink: {
            label: "演示",
            href: "https://focs.ji.sjtu.edu.cn/silverfocs/demo/2024/p2team12/",
            external: true,
          },
          image: "/images/projects/soul-symphony.jpg",
          featured: true,
        },
        {
          title: "Mobius",
          year: "2024",
          abstract:
            "一款经典 2D 碰撞类游戏项目，开发于同一轮实习周期，重点在于玩法实现与交互打磨。",
          tags: ["游戏开发", "2D", "碰撞系统"],
          demoLink: {
            label: "演示",
            href: "https://focs.ji.sjtu.edu.cn/silverfocs/demo/2024/p1team12/",
            external: true,
          },
          image: "/images/projects/Mobius.png",
        },
        {
          title: "2024 MCM / ICM 气候风险决策框架",
          year: "2024",
          abstract:
            "这个建模项目面向气候驱动极端天气风险下的保险机构、地产开发方与社区管理者，构建了一个综合决策框架。模型结合 AHP 风险评估、ARIMA 预测，以及面向历史建筑的 MLP 价值保持模型。",
          tags: ["数学建模", "AHP", "ARIMA", "MLP"],
          reportLink: { label: "报告", href: "/reports/2405335.pdf" },
          image: "/images/projects/MCM.png",
        },
      ],
    },
    contact: {
      id: "contact",
      title: "联系方式",
      intro: "如果你有兴趣开展科研合作、讨论课程或交流项目，欢迎通过以下方式联系我。",
      channels: [
        {
          label: "个人邮箱",
          value: "kevin.wykrp@gmail.com",
          href: "mailto:kevin.wykrp@gmail.com",
          note: "个人联系。",
        },
        {
          label: "UMich 邮箱",
          value: "kevinwyk@umich.edu",
          href: "mailto:kevinwyk@umich.edu",
          note: "密歇根大学相关学术联系。",
        },
        {
          label: "SJTU 邮箱",
          value: "kevin_wyk@sjtu.edu.cn",
          href: "mailto:kevin_wyk@sjtu.edu.cn",
          note: "上海交通大学相关学术联系。",
        },
        {
          label: "GitHub",
          value: "github.com/kevinwyk888",
          href: "https://github.com/kevinwyk888",
          note: "可查看代码仓库与后续项目更新。",
        },
      ],
    },
  },
  researchPage: {
    eyebrow: "研究方向",
    title: "研究方向",
    description:
      "我目前的研究主要围绕两个正在进行的项目展开：一个聚焦密歇根大学足球队的数据驱动 AI 分析，另一个关注大语言模型（LLM）编程智能体运行轨迹中的性能退化监测。这两个项目共同体现了我对决策支持、优化方法和可靠的应用型 AI 系统的兴趣。",
    tagPlacement: "inline",
    tags: [
      "足球数据分析",
      "智能体监测",
      "可靠的 LLM 系统",
      "优化",
      "数据驱动决策支持",
    ],
    stats: [
      { label: "进行中的项目", value: "2 个" },
      { label: "应用场景", value: "足球数据分析 + AI 智能体" },
      { label: "当前重点", value: "决策支持、监测、应用机器学习" },
    ],
    sections: [
      {
        title: "当前进行中的项目",
        body: ["目前，这两个正在进行的项目最能体现我的研究方向。"],
        items: [
          "WinAI：以数据驱动 AI 助力密歇根大学足球队。导师：Albert Berahas（aberahas@umich.edu）。该项目利用真实的大学足球比赛表现、球探与追踪数据，为密歇根大学男足和女足构建分析工具、预测模型和决策支持流程。",
          "LLM 智能体异常检测。导师：Raed Al Kontar（alkontar@umich.edu）。该项目与 Rongbo Zhu 合作开展，研究 LLM 编程智能体的可靠性，探索如何通过轻量级方法，在长时间运行的智能体轨迹最终失败之前监测性能退化。",
        ],
      },
      {
        title: "研究主题",
        body: [
          "虽然这两个项目位于完全不同的应用场景中，但它们背后有相似的结构：都在研究 AI 与数据分析如何为真实世界的重要决策提供支持。一个项目嵌入在体育表现与教练决策中，另一个则关注 AI 系统自身如何变得更可靠、更可观测。",
          "这也符合我希望继续探索的问题类型：那些同时要求预测性能、严谨评估以及清晰决策意义的场景。",
        ],
      },
      {
        title: "方法 / 工具",
        body: [
          "我目前主要使用 Python、统计方法和以实验为基础的工程工作流程。",
        ],
        items: [
          "使用 Python 和 R 进行数据分析与建模",
          "统计推断与预测建模",
          "面向决策支持的优化思维",
          "可视化、实验比较与技术写作",
          "针对智能体轨迹的轻量级监测思路",
        ],
      },
      {
        title: "下学期目标",
        body: [
          "从长远来看，我希望攻读研究型硕士或博士学位。",
        ],
      },
    ],
  },
  projectsPage: {
    eyebrow: "项目总览",
    title: "项目总览",
    description: "本页汇总了我过往项目的简介，并提供相关报告、海报和演示。",
    links: [],
    tagPlacement: "inline",
    stats: [
      { label: "展示项目", value: "8 个" },
      { label: "报告与海报", value: "6 份 PDF" },
      { label: "公开演示", value: "2 个游戏链接" },
    ],
    tags: ["体育数据分析", "计算机视觉", "统计分析", "游戏开发", "建模"],
    note: "浏览下方项目简介，可通过报告、研究海报或演示了解更多细节。",
    items: [],
  },
  cvPage: {
    eyebrow: "简历",
    title: "学术概览",
    description: "这一页以更适合简历阅读的形式总结教育背景、荣誉与技术能力，同时保持整个网站便于后续维护。",
    links: [
      { label: "项目总览", href: "/zh/projects/" },
      { label: "联系方式", href: "/zh/#contact" },
    ],
    stats: [
      { label: "学位路径", value: "双学位本科培养" },
      { label: "研究方向", value: "驾驶 AI 与优化" },
      { label: "服务实践", value: "助教、技术支持、志愿服务" },
    ],
    tags: ["教育背景", "荣誉", "编程", "服务"],
    resumeNote:
      "如果后续需要加入可下载的 PDF 简历，请将文件放到 public/files/resume.pdf，并在 src/i18n/en.ts 与 src/i18n/zh.ts 中补充下载链接。",
    snapshot: [
      { label: "University of Michigan", value: "工业与运筹工程本科，2025-2027" },
      { label: "Shanghai Jiao Tong University", value: "电子与计算机工程本科，GPA 3.78 / 4.00" },
      { label: "研究主题", value: "驾驶 AI、建模、优化" },
      { label: "工作语言", value: "中文、英文" },
    ],
    awardsTitle: "荣誉与奖项",
    awards: [
      {
        title: "美国大学生数学建模竞赛（MCM）S 奖",
        meta: "2024.01",
        description: "因建模能力与团队问题求解表现获得竞赛认可。",
      },
      {
        title: "上海交通大学“黎明杯”机械创新比赛二等奖",
        meta: "2024.05",
        description: "因工程竞赛中的应用型问题解决表现获奖。",
      },
      {
        title: "上海交通大学 2023 学年 B 类奖学金",
        meta: "2024.10",
        description: "基于学业表现获得奖学金认定。",
      },
    ],
    skillsTitle: "技能与证书",
    skills: [
      {
        name: "语言能力",
        items: ["英文", "中文", "TOEFL 102"],
      },
      {
        name: "编程",
        items: ["Python", "C/C++", "Matlab", "Elm", "Pascal", "LaTeX", "Markdown"],
      },
      {
        name: "工具",
        items: ["Git", "VS Code", "Photoshop", "OBS", "Microsoft Office"],
      },
    ],
  },
};

zh.projectsPage.items = zh.home.projects.items;

export default zh;
