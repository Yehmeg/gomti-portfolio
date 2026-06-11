export type Project = {
  title: string;
  description: string;
  tech: string[];
  metric: string;
};

export const projects: Project[] = [
  {
    title: "PM2.5 Prediction & AQI Classification",

    description:
      "Dual-model ML framework for PM2.5 prediction and AQI classification.",

    tech: [
      "Python",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Scikit-Learn",
    ],

    metric: "83.15% Accuracy",
  },

  {
    title: "AI-Powered Phishing Detection",

    description:
      "NLP-based phishing detection system using TF-IDF and machine learning.",

    tech: [
      "Python",
      "TF-IDF",
      "Scikit-Learn",
      "NLP",
    ],

    metric: "99.6% ROC-AUC",
  },

  {
    title: "Road Accident Severity Prediction",

    description:
      "Multi-class classification using Random Forest and XGBoost.",

    tech: [
      "Python",
      "Pandas",
      "Random Forest",
      "XGBoost",
    ],

    metric: "Traffic Analytics",
  },
];