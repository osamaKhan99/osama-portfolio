// Mock data for portfolio

export const personalInfo = {
  name: "Osama Waseem",
  title: "Full Stack Developer",
  baseContent: "Turning ideas into scalable digital products.",
  subContent: "From analytics dashboards to DeFi apps — I turn complex logic into scalable, high performance products.",
  roles: ["MERN Stack Developer", "Web3 Engineer", "Frontend Specialist", "React Developer"],
  tagline: "Building the decentralized future with modern web technologies",
  experience: "5+ years",
  email: "osama021khan@gmail.com",
  location: "Karachi, Pakistan",
  avatar: "./src/assets/osama-caricature-bg.png"
};

export const about = {
  description: `Senior Full Stack Engineer focused on building scalable, real world products across Web2 and Web3 ecosystems. With ${personalInfo.experience} of hands-on experience, I've shipped analytics tools, dashboards, APIs, and smart contract powered applications into production. I specialize in React, Next.js, TypeScript, Node.js, and NestJS, with deep experience integrating EVM and Solana protocols. My work centers on clean architecture, performance, and crafting user experiences that scale.`,
  highlights: [
    `${personalInfo.experience} of professional experience in MERN stack and modern web technologies`,
    "Expert in React, Next.js, TypeScript, Node.js, and NestJS",
    "End-to-end development of scalable Web2 and Web3 products",
    "Hands-on integration of EVM and Solana smart contracts and dApps",
    "Built secure REST and GraphQL APIs with optimized database performance",
    "Delivered high-performance UIs with animations and modern UX patterns",
    "Experience with blockchain tooling, wallets, and on-chain/off-chain workflows",
    "Strong collaboration across product and engineering teams"
  ]
};


export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS",
    "TailwindCSS",
    "Material UI",
    "Redux",
    "GSAP",
    "Framer",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "MongoDB",
    "Prisma",
    "GraphQL",
    "PostgreSQL",
    "TypeORM"
  ],
  web3: [
    "EVM Smart Contract Integration",
    "Solana Programs Integration",
    "Wagmi",
    "Web3.js",
    "Ethers",
    "Alchemy",
  ],
  tools: [
    "Git",
    "Github",
    "Vercel",
    "Claude",
    "Cursor",
    "Vite",
    "NPM",
    "Lighthouse",
    "Yarn",
    "Postman",
    "Figma",
  ]
};


export const projects = [
  {
    id: 1,
    title: "Spock Analytics",
    description: "Spock is a Web3 analytics platform that helps projects leverage on-chain and off-chain data to understand users, run engagement campaigns, and track growth metrics. It enables teams to discover ideal users, improve conversion and retention, and make data-driven decisions for scaling their products.",
    image: "./src/assets/1-BHLPKaBJ.png",
    technologies: ["React", "NestJs", "PostgreSQL", "Analytics", "Charts"],
    liveLink: "https://app.spockanalytics.xyz",
    category: "SaaS"
  },
  {
    id: 2,
    title: "Mesh",
    description: "Mesh is a liquidity and asset management protocol built on the Solana ecosystem, enabling users to swap, stake, and track performance through competitive leaderboards. Powered by the Jupiter Aggregator, Mesh delivers optimized trade execution while providing tools to manage and grow digital assets efficiently within a single platform.",
    image: "./src/assets/1-C5NbyRXc.png",
    technologies: ["React", "Web3", "Solana", "Swap", "Stake"],
    liveLink: "https://swap.meshprotocol.xyz/swap",
    category: "Web3"
  },
  {
    id: 3,
    title: "Blackmirror Social App",
    description: "Social Dashboard for Black Mirror Web Series to complete the social network tasks added by admin to earn some points",
    image: "./src/assets/1-BMDQ.png",
    technologies: ["Next.Js", "TypeScript", "Social", "Quests", "Netflix"],
    liveLink: "https://black-mirror-interface.vercel.app",
    category: "Social"
  },
  {
    id: 4,
    title: "Bomefers",
    description: "Bomefers is a Web3 platform that lets users create and personalize NFTs by customizing traits, styles, and visual elements in real time. Users can connect their wallets, modify NFT attributes, preview unique designs, and mint or trade their customized assets directly on the blockchain.",
    image: "./src/assets/2-BNFTPL.png",
    technologies: ["Next.Js", "TypeScipt", "NFT", "EVM"],
    liveLink: "https://bomefers.com/home",
    category: "NFT"
  },
  {
    id: 5,
    title: "Lumina Dex (Solis)",
    description: "Lumina is a next-generation decentralized exchange designed for fast, secure, and low-cost crypto trading on MINA network.",
    image: "./src/assets/1-7LbflqnS.png",
    technologies: ["Next.Js", "TypeScipt", "Dex", "Mina", "Web3"],
    liveLink: "https://solis.gizmolab.io",
    category: "Web3"
  },
  {
    id: 6,
    title: "Mey Network",
    description: "Landing Page for a RWA, a Web3 platform for tokenizing and managing real-world assets, enabling users to invest, trade, and track asset backed tokens securely.",
    image: "./src/assets/1-MNLG.png",
    technologies: ["NextJs", "TypeScript", "Three.js", "Web3", "RWA"],
    liveLink: "https://mey.network",
    category: "Web3"
  },
  {
    id: 7,
    title: "GNGIM",
    description: "A blockchain-based asset management tool that allows you to monitor, organize, and track the performance of your digital and tokenized assets seamlessly.",
    image: "./src/assets/1-BMA.png",
    technologies: ["NextJs", "Web3", "TypeScript", "Crypto"],
    liveLink: "https://bam.pngvntoken.com/",
    category: "Web3"
  },
  {
    id: 8,
    title: "Nebula",
    description: "A comprehensive tool for tracking on-chain/off-chain activities and managing campaigns, enabling users to monitor performance, analyze engagement, and optimize strategies.",
    image: "./src/assets/2-D0ufIKOF.png",
    technologies: ["Next.Js", "TypeScript", "MongoDB", "TailwindCSS"],
    liveLink: "https://app.nebula-agency.com/signin",
    category: "Web3"
  },
  {
    id: 9,
    title: "Stars Mini App",
    description: "Telegram Mini App, a game where you can play with your friends online and fight against others through battle simulations",
    image: "./src/assets/1-STGA.png",
    technologies: ["React.Js", "TypeScript", "Telegram Mini App", "Game"],
    liveLink: "https://t.me/stars_mini_bot",
    category: "Game"
  },
  {
    id: 10,
    title: "Grand City",
    description: "Grand City is a Telegram Mini App game where players can build and grow their businesses, generate revenue, and expand their empire. Progress through seasons by completing engaging, themed tasks inspired by Trailer Park Boys.",
    image: "./src/assets/2-BMOWP.png",
    technologies: ["React", "NestJs", "Telegram", "TypeScript", "PostgreSQL"],
    liveLink: "https://t.me/grand_city_test_bot",
    category: "Game"
  },
  {
    id: 11,
    title: "Pet Life",
    description: "The digital realm where the joy of pet companionship meets the thrill of gaming in a community-driven universe",
    image: "./src/assets/1-Dm29USWH.png",
    technologies: ["Next.Js", "TypeScript", "GSAP"],
    liveLink: "https://pet-life-chi.vercel.app/",
    category: "Website"
  },
  {
    id: 12,
    title: "Gizmo Portal",
    description: "A Digital Portal where you can find tools for Web3 and data for related web3 VCs and investors.",
    image: "./src/assets/1-CaHK311s.png",
    technologies: ["Next.Js", "TypeScript", "Ethereum"],
    liveLink: "https://portal.gizmolab.io/",
    category: "SaaS"
  },
  {
    id: 13,
    title: "JobsterX",
    description: "JobsterX is an all in one career platform where users create a profile and the system handles everything from resume building and mock interviews to job applications.",
    image: "./src/assets/1-JBX765.png",
    technologies: ["React.Js", "Node.js", "AI"],
    liveLink: "https://portal.jobsterx.com",
    category: "SaaS"
  },
];

export const certifications = [
  {
    id: 1,
    title: "Certified JavaScript Developer",
    issuer: "Hacker Rank",
    date: "January 2022",
    icon: "award"
  },
  {
    id: 2,
    title: "Xord Blockship Certification",
    issuer: "Xord",
    date: "Sept 2021 - Oct 2021",
    icon: "award"
  },
  {
    id: 3,
    title: "Folio Summer Internship",
    issuer: "Folio3",
    date: "June 2021 - July 2021",
    icon: "award"
  },
  {
    id: 4,
    title: "Responsive Website Certification",
    issuer: "freecodecamp",
    date: "2019",
    icon: "award"
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Karachi",
    year: "2018 - 2021",
    description: "Bachelor’s degree in Computer Science with a strong foundation in software engineering, data structures, databases, and modern web technologies."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Xord Blockship",
    year: "2021",
    description: "Intensive 12-week program covering MERN stack"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable DeFi Applications: Best Practices",
    excerpt: "Learn the essential patterns and practices for building production-ready DeFi protocols that can handle millions in TVL.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    tags: ["DeFi", "Solidity", "Best Practices"]
  },
  {
    id: 2,
    title: "Solana vs Ethereum: A Developer's Perspective",
    excerpt: "A deep dive into the differences between developing on Solana and Ethereum, including performance, costs, and developer experience.",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&q=80",
    tags: ["Solana", "Ethereum", "Blockchain"]
  },
  {
    id: 3,
    title: "Optimizing Gas Costs in Smart Contracts",
    excerpt: "Practical techniques to reduce gas consumption in your Solidity smart contracts and save thousands in deployment costs.",
    date: "Feb 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    tags: ["Solidity", "Gas Optimization", "Smart Contracts"]
  },
  {
    id: 4,
    title: "Integrating MetaMask with React: Complete Guide",
    excerpt: "Step-by-step tutorial on integrating MetaMask wallet into your React application with error handling and best practices.",
    date: "Jan 22, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
    tags: ["React", "Web3", "Tutorial"]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/osamaKhan99",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/osamakhan99",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://x.com/iOsama99",
    icon: "twitter"
  },
  {
    name: "Email",
    url: "mailto:osama021khan@gmail.com",
    icon: "mail"
  }
];
