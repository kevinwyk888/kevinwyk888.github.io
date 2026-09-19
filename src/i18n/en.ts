import type { SiteContent } from "./types";

const en: SiteContent = {
  lang: "en",
  meta: {
    title: "Yukai Wang | Engineering Profile",
    description:
      "Bilingual academic homepage for Yukai Wang with research interests, education, coursework, project abstracts, and contact information.",
  },
  site: {
    brand: "Yukai Wang",
    brandMark: "YW",
    location: "Ann Arbor, United States / Shanghai, China",
  },
  header: {
    menuLabel: "Menu",
    nav: [
      { key: "home", label: "Home", href: "/en/" },
      {
        key: "about",
        label: "About Me",
        href: "/en/#about",
        children: [
          { key: "education", label: "Education", href: "/en/#education" },
          { key: "experience", label: "Experience", href: "/en/#experience" },
          { key: "courses", label: "Previous Courses", href: "/en/#courses" },
          { key: "contact", label: "Contact", href: "/en/#contact" },
        ],
      },
      { key: "research", label: "Research Orientation", href: "/en/research/" },
      { key: "projects", label: "Project Overview", href: "/en/projects/" },
      { key: "cv", label: "CV / Resume", href: "/en/cv/" },
    ],
  },
  footer: {
    note: "Designed with Astro to present research, coursework, and engineering projects in English and Chinese.",
    copyright: "© 2026 Yukai Wang.",
    links: [
      { label: "GitHub", href: "https://github.com/kevinwyk888", external: true },
      { label: "Email", href: "mailto:kevin.wykrp@gmail.com", external: true },
      { label: "Research", href: "/en/research/" },
    ],
  },
  home: {
    hero: {
      eyebrow: "Introduction",
      title: "Yukai Wang",
      subtitle:
        "B.S. candidate in Electrical & Computer Engineering \n and Industrial & Operations Engineering",
      description:
        "I am a dual-degree program undergraduate student in Shanghai Jiao Tong University Global College (Formerly, UM-SJTU Joint Institute). My current academic path combines Electrical and Computer Engineering at Shanghai Jiao Tong University with Industrial and Operations Engineering at the University of Michigan. I am especially interested in how optimization, statistics, and engineering modeling can be applied to real-world problems.",

      badges: [
        "Electrical & Computer Engineering",
        "Industrial & Operations Engineering",
        "Machine Learning",
        "Optimization",
        "Statistical Inference",
        "Research Communication",
      ],
      stats: [
        { label: "Locations", value: "Ann Arbor / Shanghai" },
        { label: "Preferred languages", value: "Mandarin Chinese, English" },
      ],
      primaryAction: { label: "Research Orientation", href: "/en/research/" },
      secondaryAction: { label: "Project Overview", href: "/en/projects/" },
      bannerImage: "/images/banner.jpg",
      bannerAlt: "Landscape banner placeholder for Yukai Wang's personal homepage",
    },
    education: {
      id: "education",
      title: "Education",
      items: [
        {
          institution: "University of Michigan, Ann Arbor",
          degree: "B.S. Industrial and Operations Engineering",
          dates: "2025.08 - 2027.05",
          location: "Ann Arbor, Michigan, USA",
          gpa: "GPA: 4.00 / 4.00",
          logo: "/images/logos/UMICH.png",
          logoAlt: "University of Michigan placeholder logo",
          description: [
          ],
        },
        {
          institution: "Shanghai Jiao Tong University",
          degree: "B.S. Electrical and Computer Engineering",
          dates: "2023.08 - 2027.08",
          location: "Shanghai, China",
          gpa: "GPA: 3.78 / 4.00",
          logo: "/images/logos/SJTU.png",
          logoAlt: "Shanghai Jiao Tong University placeholder logo",
          description: [
          ],
        },
        {
          institution: "Technische Universitaet Berlin",
          degree: "Exchange Experience",
          dates: "2025.01",
          location: "Berlin, Germany",
          logo: "/images/logos/TU-Berlin-Logo.png",
          logoAlt: "TU Berlin placeholder logo",
          description: [
          ],
        },
      ],
    },
    experience: {
      id: "experience",
      title: "Extracurricular / Experience",
      items: [
        {
          role: "Undergraduate Research Assistant",
          organization: "University of Michigan",
          dates: "2025.09 - Present",
          location: "Ann Arbor, USA",
          kind: "Research",
          summary:
            "See more details on the Research Orientation page.",
          highlights: [
          ],
        },
        {
          role: "Teaching Assistant",
          organization: "Shanghai Jiao Tong University Global College",
          dates: "2025.05 - 2025.08",
          location: "Shanghai, China",
          kind: "Teaching",
          summary:
            "Assisted coursework delivery and student support in both laboratory and mathematics settings.",
          highlights: [
            "PHYS1410J Physics Lab (Simple Harmonic Motion).",
            "MATH2140J Linear Algebra.",
          ],
        },
        {
          role: "Campus Network Maintainer",
          organization: "Network & Information Management Organization, SJTU",
          dates: "2023.10 - 2025.08",
          location: "Shanghai, China",
          kind: "Technical Service",
          summary:
            "Maintained wireless and wired dormitory networks, responded to student requests, and troubleshot stability issues.",
          highlights: [
          ],
        },
        {
          role: "Imitated Summer Intern",
          organization: "SilverFOCS-24su",
          dates: "2024.05 - 2024.08",
          location: "Shanghai, China",
          kind: "Industry Project",
          summary:
            "Worked under program requirements to build two games, including a classic brick breaking title and a more experimental rhythm platform game.",
          highlights: [
            "Built Mobius, a classic 2D collision-based game project.",
            "Built Soul Symphony, a 2D rhythm-platformer developed in Elm.",
          ],
        },
        {
          role: "Volunteer & International Program Support",
          organization: "Miyuan Youth Volunteer Team,\n International Program Office of SJTU-GC",
          dates: "2023.12 - 2025.05",
          location: "Shanghai, China",
          kind: "Service",
          summary:
            "Participated in rural education support, exchange student assistance, labor education events, and visitor guidance during public science activities.",
          highlights: [
            "Included support education in Hunan, campus service, and Space Day of China volunteering.",
            "Helped welcome and support exchange students from partner institutions.",
          ],
        },
      ],
    },
    courses: {
      id: "courses",
      title: "Previous Courses",
      intro:
        "This section highlights courses that I found most impactful for my current research and technical interests. It is not an exhaustive transcript but rather a curated selection to show the breadth and depth of my training.",
      note: "Each bubble shows the course code, title, and where it was taken:\n UM = University of Michigan, SJTU = Shanghai Jiao Tong University.",
      groups: [
        {
          name: "Optimization, Probability & Decision",
          accent: "#dbe7f8",
          courses: [
            { code: "IOE 201", title: "Economic Decision Making", weight: 3, detail: "UM" },
            { code: "IOE 202", title: "Operations Engineering & Analytics", weight: 3, detail: "UM" },
            { code: "IOE 310", title: "Optimization and Computational Methods", weight: 5, detail: "UM" },
            { code: "IOE 316", title: "Introduction to Markov Processes", weight: 4, detail: "UM" },
            { code: "IOE 474", title: "Discrete-Event Simulation", weight: 4, detail: "UM" },
            { code: "IOE 511", title: "Continuous Optimization Methods", weight: 5, detail: "UM" },
            { code: "IOE 515", title: "Stochastic Processes", weight: 5, detail: "UM" },
            { code: "IOE 610", title: "Linear Programming II", weight: 5, detail: "UM" },
            { code: "ECE4010J", title: "Probabilistic Methods in Engineering", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "Machine Learning & Data Analytics",
          accent: "#d8efe5",
          courses: [
            { code: "EECS 445", title: "Introduction to Machine Learning", weight: 5, detail: "UM" },
            { code: "IOE 366", title: "Introduction to Engineering Data Analytics", weight: 5, detail: "UM" },
            { code: "IOE 373", title: "Data Analytics Tools and Techniques", weight: 4, detail: "UM" },
            { code: "IOE 473", title: "Advanced Data Analytics", weight: 5, detail: "UM" },
            { code: "ECE4880J", title: "Computer Vision", weight: 5, detail: "SJTU" },
          ],
        },
        {
          name: "Programming & Algorithms",
          accent: "#efe2d6",
          courses: [
            { code: "ECE2800J", title: "Programming and Elementary Data Structures", weight: 4, detail: "SJTU" },
            { code: "ECE2810J", title: "Data Structures and Algorithms", weight: 5, detail: "SJTU" },
            { code: "ENGR1510J", title: "Accelerated Intro to Computers & Programming", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "Mathematics & Foundations",
          accent: "#e7e1f5",
          courses: [
            { code: "MATH1560J", title: "Honors Calculus II", weight: 4, detail: "SJTU" },
            { code: "MATH2550J", title: "Honors Calculus III", weight: 4, detail: "SJTU" },
            { code: "MATH2560J", title: "Honors Calculus IV", weight: 4, detail: "SJTU" },
            { code: "MATH2140J", title: "Linear Algebra", weight: 4, detail: "SJTU" },
            { code: "MATH2030J", title: "Discrete Mathematics", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "Electrical Engineering & Physics",
          accent: "#dfe9dd",
          courses: [
            { code: "ECE2150J", title: "Intro to Circuits", weight: 4, detail: "SJTU" },
            { code: "ECE2160J", title: "Intro to Signals and Systems", weight: 4, detail: "SJTU" },
            { code: "ECE2300J", title: "Electromagnetics I", weight: 4, detail: "SJTU" },
          ],
        },
        {
          name: "Intellectual Breather Courses",
          accent: "#f2e5ec",
          courses: [
            { code: "IOE 333", title: "Human Factors and Ergonomics", weight: 4, detail: "UM" },
            { code: "IOE 463", title: "Measurement and Design of Work", weight: 4, detail: "UM" },
            { code: "HIS 102", title: "Chinese History in Global Perspectives", weight: 3, detail: "SJTU" },
            { code: "ART 201", title: "Science, Art and Philosophy", weight: 3, detail: "SJTU" },
            { code: "GER xxx", title: "German I", weight: 3, detail: "TUB" },
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      title: "Selected Projects",
      intro:
        "",
      cta: { label: "See Full Project Overview", href: "/en/projects/" },
      items: [
        {
          title: "Tuning the Step: How Wolfe Parameters Shape Optimization Performance",
          year: "2026",
          abstract:
            "This IOE 511 project focuses on a big-question study in continuous optimization: how Wolfe line-search parameters influence convergence behavior, efficiency, and robustness across a broad set of test problems. Rather than emphasizing a single algorithm, the work compares parameter sensitivity across multiple optimization methods and highlights how line-search choices can materially change practical performance.",
          tags: ["Continuous Optimization", "Wolfe Line Search", "Sensitivity Analysis", "Linear Search Parameters"],
          reportLink: { label: "Report", href: "/reports/IOE511_phase_II.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/IOE511_Project",
            external: true,
          },
          image: "/images/projects/IOE511.png",
        },
        {
          title: "Ride Smartly: Hourly Bike-Sharing Rental Demand Prediction",
          year: "2026",
          abstract:
            "This IOE 473 project develops an hourly bike-sharing demand prediction pipeline using temporal, environmental, and historical demand features. It compares linear regression, MLP, random forest, and XGBoost, then extends the framework with a hybrid MLP plus residual LSTM design to better capture local peaks and short-term fluctuations.",
          tags: ["Demand Forecasting", "MLP", "LSTM", "XGBoost", "Time Series"],
          reportLink: { label: "Report", href: "/reports/IOE473_project.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/IOE473_Project",
            external: true,
          },
          image: "/images/projects/IOE473.png",
        },
        {
          title: "Automatic Image Colorization with Enhanced U-Net Refinement",
          year: "2025",
          abstract:
            "This computer vision project improves a pre-trained SIGGRAPH17 colorization baseline through a two-stage framework with an enhanced U-Net refinement module. The design combines single-step residual correction, a global color prior, and decoder self-attention to produce more vivid and semantically consistent results.",
          tags: ["Computer Vision", "U-Net", "Attention", "Image Colorization"],
          reportLink: { label: "Report", href: "/reports/488_FinalReport.pdf" },
          githubLink: {
            label: "GitHub",
            href: "https://github.com/kevinwyk888/ECE488-Project",
            external: true,
          },
          image: "/images/projects/ECF488(CV).png",
          featured: true,
        },
        {
          title: "Fatal Police Shootings Statistical Analysis",
          year: "2025",
          abstract:
            "This project studies fatal police shootings in the United States from 2015 to 2025 using visualization, hypothesis testing, confidence intervals, and prediction intervals. It examines Poisson behavior, weekday and month dependence, racial disparities across political contexts, and the influence of body-camera use.",
          tags: ["Statistics", "Hypothesis Testing", "Mathematica", "Social Data"],
          reportLink: { label: "Report", href: "/reports/401_Project.pdf" },
          image: "/images/projects/ECE401_shooting.png",
          featured: true,
        },
        {
          title: "Soul Symphony",
          year: "2024",
          abstract:
            "A 2D rhythm-platformer where players compose music to shape the environment, rescue lost souls, and explore a story of faith and sacrifice. The project was developed in Elm during the SilverFOCS internship program.",
          tags: ["Elm", "Game Development", "Rhythm", "Platformer"],
          demoLink: {
            label: "Demo",
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
            "A classic 2D collision-based game project developed during the same internship cycle, focusing on gameplay implementation and polished interaction.",
          tags: ["Game Development", "2D", "Collision Systems"],
          demoLink: {
            label: "Demo",
            href: "https://focs.ji.sjtu.edu.cn/silverfocs/demo/2024/p1team12/",
            external: true,
          },
          image: "/images/projects/Mobius.png",
        },
        {
          title: "2024 MCM / ICM Climate-Risk Decision Framework",
          year: "2024",
          abstract:
            "This modeling project develops an integrated framework for insurers, property developers, and community leaders facing climate-driven extreme-weather risk. It combines AHP-based risk assessment, ARIMA forecasting, and an MLP preservation model for historically significant buildings.",
          tags: ["Mathematical Modeling", "AHP", "ARIMA", "MLP"],
          reportLink: { label: "Report", href: "/reports/2405335.pdf" },
          image: "/images/projects/MCM.png",
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      intro:
        "If you are interested in research collaboration, coursework discussion, or project exchange, feel free to reach out through any of the following channels.",
      channels: [
        {
          label: "Personal Email",
          value: "kevin.wykrp@gmail.com",
          href: "mailto:kevin.wykrp@gmail.com",
          note: "Preferred for personal contact.",
        },
        {
          label: "UMich Email",
          value: "kevinwyk@umich.edu",
          href: "mailto:kevinwyk@umich.edu",
          note: "Best for academic contact in Michigan.",
        },
        {
          label: "SJTU Email",
          value: "kevin_wyk@sjtu.edu.cn",
          href: "mailto:kevin_wyk@sjtu.edu.cn",
          note: "Available for Shanghai-related academic contact.",
        },
        {
          label: "GitHub",
          value: "github.com/kevinwyk888",
          href: "https://github.com/kevinwyk888",
          note: "Code, repositories, and future project updates.",
        },
      ],
    },
  },
  researchPage: {
    eyebrow: "Research Orientation",
    title: "Research Orientation",
    description:
      "My current research is shaped by two ongoing projects: one on data-driven AI for University of Michigan soccer and another on monitoring degradation in LLM coding-agent trajectories. Together they reflect my interest in decision support, optimization, and reliable applied AI systems.",
    tagPlacement: "inline",
    tags: [
      "Soccer analytics",
      "Agent monitoring",
      "Reliable LLM systems",
      "Optimization",
      "Data-driven decision support",
    ],
    stats: [
      { label: "Ongoing projects", value: "2" },
      { label: "Application areas", value: "Soccer analytics + AI agents" },
      { label: "Current emphasis", value: "Decision support, monitoring, applied ML" },
    ],
    sections: [
      {
        title: "Current Ongoing Projects",
        body: [
          "At the moment, my research orientation is best described through two ongoing projects.",
        ],
        items: [
          "WinAI Propelling UM Soccer with Data-Driven AI: Mentor: Albert Berahas (aberahas@umich.edu). This project works with real collegiate performance, scouting, and tracking data to build analytical tools, predictive models, and decision-support workflows for the U-M Men's and Women's Soccer Teams.",
          "LLM Agent Anomaly Detection: Mentor: Raed Al Kontar (alkontar@umich.edu). This project, carried out in collaboration with Rongbo Zhu, studies reliability questions in LLM coding agents. At a high level, it explores lightweight ways to monitor degradation in long agent trajectories before final failure.",
        ],
      },
      {
        title: "Research Themes",
        body: [
          "Although these two projects live in very different domains, they share a common structure. Both ask how AI and data analysis can support decisions that matter in practice. One is embedded in sports performance and coaching, while the other is about making AI systems themselves more reliable and observable.",
          "That combination fits the kind of problems I want to keep pursuing: settings where predictive performance, evaluation discipline, and clear decision relevance all matter at the same time.",
        ],
      },
      {
        title: "Methods / Tools",
        body: [
          "My current toolkit is built around Python, statistics, and experiment-driven engineering workflows. Depending on the project, I move between predictive modeling, evaluation design, visualization, and structured technical reporting.",
        ],
        items: [
          "Python and R for data analysis and modeling",
          "Statistical inference and predictive modeling",
          "Optimization-oriented thinking for decision support",
          "Visualization, reporting, and experimental comparison",
          "Lightweight monitoring ideas for agent trajectories",
        ],
      },
      {
        title: "Next-Term Goals",
        body: [
          "Next term, I plan to learn more through IOE 515 Stochastic Processes, EECS 498 Reinforcement Learning, and IOE 610 Linear Programming. I also want to keep exploring new fields while staying humble in front of knowledge.",
          "Longer term, I hope to pursue a PhD.",
        ],
      },
    ],
  },
  projectsPage: {
    eyebrow: "Project Overview",
    title: "Projects Overview",
    description:
      "This page includes my previous project summaries paired with reports, demos.",
    links: [],
    tagPlacement: "inline",
    stats: [
      { label: "Projects shown", value: "7" },
      { label: "Reports retained", value: "5 PDFs" },
      { label: "Public demos", value: "2 game links" },
    ],
    tags: ["Computer Vision", "Statistics", "Game Development", "Modeling"],
    note: "Long-form report links from the original site were preserved and moved into Astro's public directory.",
    items: [],
  },
  cvPage: {
    eyebrow: "CV / Resume",
    title: "Academic Snapshot",
    description:
      "This page summarizes education, distinctions, and technical skills in a resume-friendly format while keeping the new site easy to maintain.",
    links: [
      { label: "Projects", href: "/en/projects/" },
      { label: "Contact", href: "/en/#contact" },
    ],
    stats: [
      { label: "Degrees", value: "Dual-degree undergraduate path" },
      { label: "Research", value: "Driving AI + optimization" },
      { label: "Service", value: "Teaching, tech support, volunteering" },
    ],
    tags: ["Education", "Awards", "Programming", "Service"],
    resumeNote:
      "To add a downloadable resume later, place your PDF at public/files/resume.pdf and add a download link in src/i18n/en.ts and src/i18n/zh.ts.",
    snapshot: [
      { label: "University of Michigan", value: "B.S. IOE, 2025-2027" },
      { label: "Shanghai Jiao Tong University", value: "B.S. ECE, GPA 3.78 / 4.00" },
      { label: "Research themes", value: "Driving AI, modeling, optimization" },
      { label: "Working languages", value: "English, Chinese" },
    ],
    awardsTitle: "Honors & Awards",
    awards: [
      {
        title: "The S Award, Mathematical Contest in Modeling (MCM)",
        meta: "2024.01",
        description: "Recognized in the United States MCM competition for modeling work and team problem solving.",
      },
      {
        title: "Second Prize, SJTU Liming Cup Mechanical Competition",
        meta: "2024.05",
        description: "Awarded for engineering competition participation and applied problem solving.",
      },
      {
        title: "SJTU 2023 Academic Year B-Class Scholarship",
        meta: "2024.10",
        description: "Scholarship recognition for academic performance.",
      },
    ],
    skillsTitle: "Skills & Certifications",
    skills: [
      {
        name: "Language Skills",
        items: ["English", "Chinese", "TOEFL 102"],
      },
      {
        name: "Programming",
        items: ["Python", "C/C++", "Matlab", "Elm", "Pascal", "LaTeX", "Markdown"],
      },
      {
        name: "Tools",
        items: ["Git", "VS Code", "Photoshop", "OBS", "Microsoft Office"],
      },
    ],
  },
};

en.projectsPage.items = en.home.projects.items;

export default en;
