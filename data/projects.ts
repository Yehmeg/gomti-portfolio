export type Project = {
  title: string;
  description: string;
  shortDescription: string;
  tech: string[];
  image: string;
  video?: string;
  github: string;
  demo?: string;
  featured?: boolean;
  metric?: string;
};

export const projects: Project[] = [
  {
    title: "PM2.5 Prediction & AQI Classification",
    description:
      "Dual-model ML framework for PM2.5 prediction and AQI classification using satellite observations and CPCB ground station data. Published in IEEE.",
    shortDescription:
      "Ensemble ML framework for air quality prediction using satellite and ground station data.",
    tech: [
      "Python",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Scikit-Learn",
    ],
    image: "/projects/air-quality.png",
    video: "/projects/airquality.mp4",
    github: "https://github.com/Yehmeg/PM-2.5-Prediction-and-Remark-Classification",
    demo: "",
    featured: true,
    metric: "0.8649 R² Score",
  },
  {
    title: "SupplyPrescript",
    description:
      "AI-powered supply chain optimization platform with prescription analytics for inventory management and demand forecasting.",
    shortDescription:
      "Supply chain optimization with ML-driven prescription analytics.",
    tech: [
      "Python",
      "React",
      "FastAPI",
      "PostgreSQL",
      "XGBoost",
    ],
    image: "/projects/supplyprescript.png",
    github: "https://github.com/Yehmeg/SupplyPrescript",
    demo: "https://supplyprescriptai.vercel.app",
    featured: true,
    metric: "Production Ready",
  },
  {
    title: "LetsPool",
    description:
      "Real-time carpooling platform with intelligent matching algorithms, route optimization, and live tracking.",
    shortDescription:
      "Carpooling platform with smart matching and route optimization.",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Google Maps API",
    ],
    image: "/projects/letspool.png",
    github: "https://github.com/Yehmeg/LetsPool",
    demo: "https://letspool.vercel.app",
    featured: true,
    metric: "Live on Stores",
  },
  {
    title: "Phishing Email Text Classifier",
    description:
      "NLP-based phishing detection system using TF-IDF vectorization and ensemble classifiers achieving 99.6% ROC-AUC.",
    shortDescription:
      "NLP phishing detector with TF-IDF and ensemble ML models.",
    tech: [
      "Python",
      "TF-IDF",
      "Scikit-Learn",
      "NLP",
      "Ensemble Methods",
    ],
    image: "/projects/phishing-classifier.png",
    video: "/projects/mail.mp4",
    github: "https://github.com/Yehmeg/Phishing-Email-Detection",
    demo: "",
    featured: true,
    metric: "99.6% ROC-AUC",
  },
  {
    title: "Road Accident Severity Prediction",
    description:
      "Multi-class classification model predicting accident severity using Random Forest and XGBoost on historical traffic data.",
    shortDescription:
      "Multi-class severity prediction with Random Forest and XGBoost.",
    tech: [
      "Python",
      "Pandas",
      "Random Forest",
      "XGBoost",
      "Scikit-Learn",
    ],
    image: "/projects/accident-severity.png",
    video: "/projects/road.mp4",
    github: "https://github.com/Yehmeg/Road-Traffic-Accident-Severity-Prediction",
    demo: "",
    featured: false,
    metric: "Traffic Analytics",
  },
];