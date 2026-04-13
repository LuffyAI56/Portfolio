
export interface Project {
  id: string;
  title: string;
  description: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  kaggleLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  gpa?: string;
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string[];
  location?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  kaggle?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  contact: ContactInfo;
  heroTagline: string;
  aboutMe: string[];
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  name: "Ginjala Sri Ram Kumar Reddy",
  role: "AI/ML Engineer and Computer Science undergraduate",
  contact: {
    email: "sriramginjala60@gmail.com",
    phone: "+91 8790567522",
    linkedin: "https://www.linkedin.com/in/sriram-kumar-reddy-ginjala/",
    github: "https://github.com/sriram020204",
    kaggle: "https://www.kaggle.com/sriramginjala",
  },
  heroTagline: "AI/ML Engineer skilled in building end-to-end AI solutions and predictive modeling systems.",
  aboutMe: [
    "AI/ML Engineer and Computer Science undergraduate with experience in building end-to-end AI solutions, and predictive modeling systems.",
    "Skilled in Python, SQL, TensorFlow, PyTorch, and modern LLM ecosystems."
  ],
  skills: [
    { category: "Languages", skills: ["Python", "SQL"] },
    { category: "Libraries & Frameworks", skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Transformers", "Matplotlib"] },
    { category: "Developer Tools", skills: ["Git", "VS Code", "Jupyter"] },
    { category: "Databases & Query Tools", skills: ["MySQL"] },
    { category: "ML/AI Toolkits", skills: ["Hugging Face Transformers"] }
  ],
  projects: [
    {
      id: "tendorix-ai",
      title: "Tendorix A.I",
      description: [
        "Built an end-to-end AI platform to automate tender eligibility analysis from raw PDF documents.",
        "Integrated Azure Document Intelligence for OCR and layout parsing; used Zephyr LLM for structured eligibility extraction (89%+ accuracy).",
        "Implemented semantic matching using all-MiniLM-L6-v2 to align company profiles with tender requirements.",
        "Developed summarization pipelines that reduced tender length by 60–70%, improving user comprehension.",
        "Automated proposal generation using dynamic templates populated with extracted and matched data.",
        "Reduced manual eligibility verification time by 90%, significantly accelerating tender processing for companies."
      ],
      techStack: ["Python", "FastAPI", "MongoDB", "Azure AI", "GCP", "Firebase", "LLMs"],
      githubLink: "https://github.com/sriram020204",
    },
    {
      id: "electricity-demand",
      title: "Electricity Demand Forecasting – Odisha SLDC",
      description: [
        "Built a deep learning pipeline using N-BEATS to forecast 15-minute interval electricity demand for Odisha’s South Zone under SLDC supervision.",
        "Engineered lag features, squared weather covariates, and rolling aggregates from temperature, humidity, pressure, and rainfall data.",
        "Trained model with a 672-input / 96-output window, achieving MAE: 26.89, MAPE: 5.11%, and sMAPE: 5.04%."
      ],
      techStack: ["PyTorch", "N-BEATS", "Pandas", "Scikit-learn"],
      kaggleLink: "https://www.kaggle.com/code/sriramginjala/electricity-demand-forecasting-using-n-beats"
    },
    {
      id: "diet-recommendation",
      title: "Personalized Diet Recommendation Feature",
      description: [
        "Developed a K-Nearest Neighbors-based diet recommendation feature for a health website, tailored to users’ weight, height, BMI, and dietary restrictions.",
        "Engineered user profile vectors and applied distance-based similarity to suggest personalized daily meal plans."
      ],
      techStack: ["Python", "Scikit-learn", "KNN"],
      githubLink: "https://github.com/SlayZ121/Medico",
    }
  ],
  experience: [
    {
      company: "Quadric IT",
      role: "A.I/M.L Intern",
      dates: "May 2025 – July 2025",
      description: [
        "Developed an AI system to extract eligibility criteria from tender documents using OCR and rule-based parsing.",
        "Implemented a semantic matching pipeline to assess company eligibility against extracted tender requirements.",
        "Created modules for tender summarization and dynamic document generation using user-defined templates."
      ],
      location: "Hyderabad (On-site)"
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology and Management, Gwalior",
      degree: "B.Tech in Computer Science and Engineering",
      dates: "Nov 2022 – Apr 2026",
      gpa: "7.64 / 10",
      details: ["Madhya Pradesh"],
    },
    {
      institution: "Sasi Jr College, Velivennu",
      degree: "Intermediate (MPC)",
      dates: "Jul 2019 – Jul 2021",
      gpa: "98.3%",
      details: ["Andhra Pradesh"],
    }
  ]
};
