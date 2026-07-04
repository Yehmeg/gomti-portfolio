"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaAward } from "react-icons/fa";

export default function Research() {
  return (
    <section
      id="research"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          Research
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 mb-20">
          Applying Machine Learning to solve real-world environmental problems.
        </p>

        <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-12
          hover:border-cyan-400
          transition
        ">

          <div className="flex items-center gap-4">

            <FaAward className="text-4xl text-cyan-400"/>

            <div>

              <p className="text-cyan-400 font-semibold">
                IEEE Conference Publication
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Satellite-Based Air Quality Prediction Using Ensemble Machine Learning
              </h3>

            </div>

          </div>

          <p className="text-gray-400 mt-8 leading-8">
            Published research focused on predicting PM2.5 concentration using
            satellite observations, CPCB datasets, and ensemble Machine Learning
            models including LightGBM, XGBoost and CatBoost.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "IEEE",
              "LightGBM",
              "XGBoost",
              "CatBoost",
              "Python",
              "Remote Sensing",
            ].map((tag) => (
              <span
                key={tag}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-300
                "
              >
                {tag}
              </span>
            ))}

          </div>

          <button
            className="
              mt-10
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              flex
              items-center
              gap-3
            "
          >
            <FaFilePdf />

            View Publication
          </button>

        </div>

      </div>
    </section>
  );
}