"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function Research() {
  return (
    <section
      id="research"
      className="py-16 px-6"
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

        <p className="text-center text-gray-400 mt-3 mb-8">
          Applying Machine Learning to solve real-world environmental problems.
        </p>

        <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6 lg:p-8
          hover:border-cyan-400
          transition
        ">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">

            <div className="space-y-3 lg:pr-4">
              <div className="flex items-center gap-3">
                <FaAward className="text-3xl text-cyan-400 flex-shrink-0"/>
                <div>
                  <p className="text-cyan-400 font-semibold text-sm">IEEE Conference Publication</p>
                  <h3 className="text-2xl font-bold mt-1">PM 2.5 Prediction and Remark Classification</h3>
                </div>
              </div>

              <p className="text-gray-400 leading-7 text-base">
                Published research focused on predicting PM2.5 concentration using
                satellite observations, CPCB datasets, and ensemble Machine Learning
                models including LightGBM, XGBoost and CatBoost.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "LightGBM",
                  "XGBoost",
                  "CatBoost",
                  "Python",
                  "Remote Sensing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-gray-300 text-sm">
                <p><span className="font-semibold text-white">Conference:</span>{" "}2026 Sixth International Conference on Advances in Electrical, Computing, Communications and Sustainable Technologies (ICAECT)</p>
                <p><span className="font-semibold text-white">DOI:</span>{" "}<a href="https://doi.org/10.1109/ICAECT68478.2026.11425951" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">10.1109/ICAECT68478.2026.11425951</a></p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/research/PM-2.5-Prediction-and-Remark-Classification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-cyan-500
                    text-black
                    inline-flex
                    items-center
                    gap-2
                    hover:bg-cyan-400
                    hover:scale-105
                    transition-all
                    duration-300
                    text-sm
                  "
                >
                  <FaFilePdf className="w-4 h-4" />
                  View Paper
                </a>
              </div>
            </div>

            <div className="relative w-full max-h-[420px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col">
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-b border-white/10 px-3 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  <span className="text-sm font-semibold text-blue-300">IEEE Xplore</span>
                </div>
                <span className="text-xs text-gray-500 px-2 py-1 bg-white/5 rounded border border-white/10">Full Text</span>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                <h1 className="text-lg lg:text-xl font-bold text-white leading-snug">
                  PM 2.5 Prediction and Remark Classification
                </h1>

                <div className="text-sm text-gray-400 space-y-1">
                  <p className="font-medium text-gray-300">Gomti Kumari; Saurav Kumar Saini; Ritu Rani; Poonam Bansal</p>
                  <p>ICAECT 2026</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300 hover:bg-white/10 hover:text-white transition flex items-center gap-1">
                    <FaFilePdf className="w-3 h-3" />
                    PDF
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300 hover:bg-white/10 hover:text-white transition flex items-center gap-1">
                    Cite This
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300 hover:bg-white/10 hover:text-white transition flex items-center gap-1">
                    Share
                  </button>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Abstract</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    This research presents an ensemble Machine Learning approach for predicting PM2.5 concentration using satellite observations and CPCB ground monitoring data. The study leverages LightGBM, XGBoost, and CatBoost models to achieve high prediction accuracy for air quality forecasting. The methodology incorporates remote sensing data with ground-based measurements to develop robust prediction models capable of classifying air quality remarks for environmental monitoring applications.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span className="text-gray-500">Conference:</span> <span className="text-gray-300">ICAECT 2026</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Date:</span> <span className="text-gray-300">08–09 January 2026</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Published:</span> <span className="text-gray-300">13 March 2026</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Publisher:</span> <span className="text-gray-300">IEEE</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Location:</span> <span className="text-gray-300">Bhilai, India</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">DOI:</span> <span className="text-cyan-400 truncate max-w-[60%]">10.1109/ICAECT68478.2026.11425951</span></div>
                </div>
              </div>

              <div className="border-t border-white/10 px-3 py-2.5 bg-white/5">
                <a
                  href="https://ieeexplore.ieee.org/document/11425951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View on IEEE Xplore
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
