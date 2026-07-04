"use client";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-3">
          <span className="text-cyan-400 font-semibold tracking-[0.25em] uppercase">
  Featured AI Project
</span>
        </h2>

        <p className="text-center text-gray-400 mb-5 max-w-2xl mx-auto">
          AI-powered solutions built to solve real-world problems using
          Machine Learning, Deep Learning and Data Science.
        </p>

        <FeaturedProject />

        <div className="grid lg:grid-cols-2 gap-10 mt-5">
          <ProjectCard
            title="Road Traffic Accident Severity Prediction"
            description="Machine learning model for predicting road accident severity using historical traffic data."
            video="/projects/road.mp4"
            github="https://github.com/Yehmeg/Road-Traffic-Accident-Severity-Prediction"
            tags={[
              "Python",
              "XGBoost",
              "Random Forest",
              "Pandas",
            ]}
          />

          <ProjectCard
            title="AI Phishing Detection"
            description="AI-powered phishing detection system using NLP and machine learning."
            video="/projects/mail.mp4"
            github="https://github.com/Yehmeg/Road-Traffic-Accident-Severity-Prediction"
            tags={[
              "Python",
              "TF-IDF",
              "Scikit-learn",
              "NLP",
            ]}
          />
        </div>

      </div>
    </section>
  );
}