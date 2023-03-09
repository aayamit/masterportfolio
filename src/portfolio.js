/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Amit Kumar Portfolio",
    type: "website",
    url: "http://amitkrz.com/",
  },
};

//Home Page
const greeting = {
  title: "Amit Kumar",
  logo_name: "AmitKumar",
  nickname: "crypto_enthusiast",
  subTitle:
    "I am excited to apply for an internship at your company and eager to contribute my skills and knowledge to the company. I am confident that this opportunity will provide me with invaluable experience and help me grow both personally and professionally. Let's team up to make a positive impact together!",
  resumeLink:
    "https://drive.google.com/file/d/1L7MuLxbd6-Ld3g3mpEHofoujbHQXNjqC/view?usp=sharing",
  portfolio_repository: "https://github.com/aayamit",
  githubProfile: "https://github.com/aayamit",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/aayamit",
  // linkedin: "https://www.linkedin.com/in/aayamit/",
  // gmail: "aayamit@gmail.com",
  // gitlab: "https://gitlab.com/aayamit",
  // facebook: "https://www.facebook.com/amitkshk/",
  // twitter: "https://twitter.com/samianyr",
  // instagram: "https://www.instagram.com/amitkrz/"

  {
    name: "Github",
    link: "https://github.com/aayamit",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aayamit/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/patnadaily",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:aayamit@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/samianyr",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/amitkshk/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amitkrz/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Equity Analysis",
      fileName: "FullStackImg",
      skills: [
        "⚡ Strong analytical skills: I can analyze and interpret large amounts of financial data.",
        "⚡ Financial Modeling Skills: I am able to able to build complex financial models that can help them forecast future earnings, cash flows, and other important metrics.",
        "⚡ Ability to perform thorough research and analysis of markets and companies: I have written various reports.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "ri:file-excel-2-fill",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bank",
          fontAwesomeClassname: "carbon:finance",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "finance",
          fontAwesomeClassname: "map:finance",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "growth",
          fontAwesomeClassname: "mdi:finance",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Fintech Enthusiast",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Extensive knowledge of cryptocurrencies and blockchain technology, with a keen interest in staying up-to-date on the latest trends and developments in the field.",
        "⚡ Proficiency in analyzing market trends and making informed investment decisions related to cryptocurrencies and other digital assets.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "logos:bitcoin",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "eth",
          fontAwesomeClassname: "logos:ethereum",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "block",
          fontAwesomeClassname: "eos-icons:blockchain",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/aayamit/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aayamit",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aayamit",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/aayamit",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@aayamit",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/aayamit",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "T.A. Pai Management Institute, Manipal",
      subtitle: "MBA in Banking and Financial Services",
      logo_path: "iiitk_logo.png",
      alt_name: "TAPMI",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ In the first year, the program covers courses on accounting, finance, economics, and banking, along with basic knowledge about different functional areas of management. The second year offers students electives for specialization in banking or capital markets.",
        "⚡ The program includes an integrated leadership program to develop essential leadership skills, and students have the opportunity to gain hands-on experience through the Bloomberg terminals and field visits to State Bank of India/Bombay Stock Exchange.",
        "⚡ The course is aided by the state-of-the-art Bloomberg Lab, and upon completion, students can pursue managerial careers in the fields of banking and financial services with leading national and multinational banks and financial institutions.",
      ],
      website_link: "https://www.tapmi.edu.in/",
    },
    {
      title: "Patna University",
      subtitle: "B.S. in Physics",
      logo_path: "iu_logo.png",
      alt_name: "Patna University",
      duration: "2018 - 2021",
      descriptions: [
        "⚡  I have a strong foundation in Physics, which is essential for understanding the principles of Quantum Mechanics.",
        "⚡  I have taken specialized courses related to Quantum Mechanics, such as Quantum Field Theory, Quantum Computing, and Quantum Information.",
        "⚡ Additionally, I have completed research projects related to Quantum Mechanics, such as simulations of quantum systems and experiments on quantum entanglement.",
      ],
      website_link: "https://pup.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Decentralized Finance (DeFi): The Future of Finance Specialization",
      subtitle: "",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/6QX9M8BA5Q6U",
      alt_name: "Duke University",
      color_code: "#8C151599",
    },
    {
      title: "Google Data Analytics Specialization",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E79ND42XFAUE",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Risk Management Specialization",
      subtitle: "",
      logo_path: "nyif.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/2HFVGLWJSU37",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Excel Skills for Business Specialization",
      subtitle: "",
      logo_path: "mqu.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/4WDMFG52JQLW",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Stock Valuation with Dividend Discount Model",
      subtitle: "",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/SVE8JATC9G2B",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Valuation with WACC",
      subtitle: "",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/B2BBNQWGT22M",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Bloomberg Market Concepts",
      subtitle: "",
      logo_path: "blmbrg.png",
      certificate_link:
        "https://portal.bloombergforeducation.com/certificates/zgxHVrq5Ufg3GDtxrLRGc786",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "NISM-Series- VIII: Equity Derivatives Certificate",
      subtitle: "",
      logo_path: "nism.png",
      certificate_link:
        "https://drive.google.com/file/d/1DsDeJdEeGaxcZQvPJAxAl_-fNIXzucXt/view?usp=share_link",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",

  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Startups in India: Ecosysten",
      createdAt: "2023-02-10T16:26:54Z",
      description: "Startup Ecosystem: India VS China ",
      url:
        "https://www.linkedin.com/posts/aayamit_startup-ecosystem-china-vs-india-ugcPost-7030880641344782336-5Sso?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Union Budget 2023: Predictions",
      createdAt: "2023-01-29T16:26:54Z",
      description: "Union Budget 2023: Predictions",
      url:
        "https://www.linkedin.com/posts/aayamit_budget-predictions-for-fy-23-24-activity-7025893346988466176-rpri?utm_source=share&utm_medium=member_desktop",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I am looking for an internship in Finance domain.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "For when I find myself overwhelmed with thoughts, I write.",
    link: "https://amitkrz.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "T.A. Pai Management Institute, Manipal, Karnatka - 576104",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/wFvmWGtujZ4QJyHT9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
