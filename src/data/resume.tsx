// site.config.ts (or config.ts depending on repo structure)

export const DATA = {
  name: "Beshoy Abd Al-Masih",
  title: "Telecommunications Engineer | Data Scienctist",
  url: "https://beshoy.vercel.app", // replace with your deployed site link
  description:
    "I'm Beshoy, a Telecommunications Engineering student and Data Science enthusiast. Passionate about building machine learning solutions, analyzing data, and applying modern tech to solve real-world problems.",

  socials: {
    github: "https://github.com/BeshoyAbdALMasih",
    linkedin: "https://www.linkedin.com/in/beshoy-abd-al-masih-6b01712a5/", // replace with yours
    email: "BeshoyAbdalmasih14@gmail.com", // replace with your email
  },

  projects: [
    {
      title: "Salary Classification Analysis",
      description:
        "A machine learning project analyzing salary classification based on features like education, job title, and demographics.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "https://github.com/BeshoyAbdALMasih/Salary-Classification-Analysis",
    },
    {
      title: "Housing Price Prediction",
      description:
        "Predictive modeling project focused on estimating housing prices using regression techniques and feature engineering.",
      tech: ["Python", "NumPy", "Scikit-learn"],
      link: "https://github.com/BeshoyAbdALMasih/Housing-Price-Prediction",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Explored collaborative filtering and content-based techniques to build a movie recommendation engine.",
      tech: ["Python", "Pandas", "Surprise", "NLP"],
      link: "https://github.com/BeshoyAbdALMasih/Movie-Recommendation-System",
    },
    {
      title: "Linear Regression",
      description:
        "This project implements a Linear Regression model using only NumPy, showcasing the mathematical foundations behind regression and gradient descent optimization. It is designed for learning and experimentation rather than production use.",
      tech: ["NumPy"],
      link: "https://github.com/BeshoyAbdALMasih/My_own_LinearRegression",
    },
  ],

  blog: {
    enabled: false, // set true if you want a blog
  },

  theme: {
    colorScheme: "light", // or "dark"
    accentColor: "#00C6FF",
  },
};
