import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Beshoy Abd Al-Masih",
  initials: "BA",
  url: "https://github.com/BeshoyAbdALMasih", // must be a valid URL for metadataBase
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/Cairo,+Egypt",
  description:
    "Telecommunications engineering student & data science learner. I build ML solutions, analyze data, and ship practical projects.",
  summary:
    "I'm a Telecommunications Engineering student and Data Science enthusiast. I focus on ML, analytics, and applying modern tooling to real-world problems. See my [education](/#education) and recent [projects](https://github.com/BeshoyAbdALMasih).",

  avatarUrl: "/me.png",

  skills: [
    // kept original shape, updated for your stack, retained a few general ones
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "SQL",
    "Data Visualization",
    "Machine Learning",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "BeshoyAbdalmasih14@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BeshoyAbdALMasih",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/beshoy-abd-al-masih-6b01712a5/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/potatodragoo", // keep key & url so `DATA.contact.social.X.url` never breaks
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com", // placeholder but valid
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:BeshoyAbdalmasih14@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

 work: [] as {
  company: string;
  role: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}[],


  education: [
    {
      school: "Telecommunications Engineering (B.Sc.)",
      href: "#",
      degree: "Undergraduate — In Progress",
      logoUrl: "/education.png",
      start: "2022",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Salary Classification Analysis",
      href: "https://github.com/BeshoyAbdALMasih/Salary-Classification-Analysis",
      dates: "2024",
      active: true,
      description:
        "ML project analyzing salary classes using features like education, job title, and demographics. Full EDA + training pipeline.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "NumPy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/BeshoyAbdALMasih/Salary-Classification-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Housing Price Prediction",
      href: "https://github.com/BeshoyAbdALMasih/Housing-Price-Prediction",
      dates: "2024",
      active: true,
      description:
        "Regression modeling for housing prices with feature engineering and evaluation.",
      technologies: ["Python", "NumPy", "Scikit-learn", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BeshoyAbdALMasih/Housing-Price-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Movie Recommendation System",
      href: "https://github.com/BeshoyAbdALMasih/Movie-Recommendation-System",
      dates: "2024",
      active: true,
      description:
        "Built recommendation engine using collaborative filtering and content-based approaches.",
      technologies: ["Python", "Pandas", "Surprise", "NLP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BeshoyAbdALMasih/Movie-Recommendation-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Linear Regression (from scratch)",
      href: "https://github.com/BeshoyAbdALMasih/My_own_LinearRegression",
      dates: "2024",
      active: true,
      description:
        "Numpy-only implementation of Linear Regression with gradient descent to highlight the math behind the model.",
      technologies: ["NumPy", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BeshoyAbdALMasih/My_own_LinearRegression",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  // kept field; leaving empty avoids showing someone else’s events
  hackathons: [],
} as const;
