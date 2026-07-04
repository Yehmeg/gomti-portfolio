// "use client";

// import Image from "next/image";
// import { FaGithub } from "react-icons/fa";

// export default function FeaturedProject() {
//   return (
//     <div
//       className="
//       group
//       rounded-[40px]
//       overflow-hidden
//       border
//       border-white/10
//       bg-white/5
//       backdrop-blur-xl
//       transition
//       duration-500
//       hover:border-cyan-400
//       "
//     >
//       <div className="grid lg:grid-cols-[1.3fr_1fr]">
//         <div className="flex flex-col h-full">

//   {/* Video */}
//   <div className="relative aspect-video overflow-hidden bg-[#050816]">

//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       preload="metadata"
//       className="absolute inset-0 w-full h-full object-cover opacity-80"
//     >
//       <source
//         src="/projects/airquality.mp4"
//         type="video/mp4"
//       />
//     </video>

//     <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

//     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050816]/40" />

//   </div>

//   {/* Bottom Info */}
//   <div className="p-6 border-t border-cyan-500/10">

//     <p className="text-cyan-400 uppercase tracking-widest text-sm">
//       Project Impact
//     </p>

//     <div className="grid grid-cols-2 gap-6 mt-6">

//       <div>
//         <h3 className="text-3xl font-black text-white">0.8649</h3>
//         <p className="text-gray-400">Best R² Score</p>
//       </div>

//       <div>
//         <h3 className="text-3xl font-black text-white">10</h3>
//         <p className="text-gray-400">Monitoring Stations</p>
//       </div>

//       <div>
//         <h3 className="text-3xl font-black text-white">PM2.5</h3>
//         <p className="text-gray-400">Target Pollutant</p>
//       </div>

//       <div>
//         <h3 className="text-3xl font-black text-white">IEEE</h3>
//         <p className="text-gray-400">Published</p>
//       </div>

//     </div>

//   </div>

// </div>

        
//         <div className="p-12 flex flex-col justify-center">

//           <span className="text-cyan-400 font-semibold">
//             FEATURED PROJECT
//           </span>

//           <h3 className="text-5xl font-black mt-4">
//             Satellite Air Quality Prediction
//           </h3>

//           <p className="text-gray-400 mt-8 leading-8">
//             Developed an AI-driven air quality prediction system using
//             satellite observations, CPCB datasets and ensemble machine
//             learning models. Published the research in IEEE.
//           </p>

//           <div className="flex flex-wrap gap-3 mt-8">

//             {[
//               "LightGBM",
//               "XGBoost",
//               "CatBoost",
//               "Python",
//               "Pandas",
//               "IEEE",
//             ].map((tag) => (
//               <span
//                 key={tag}
//                 className="
//                 px-4
//                 py-2
//                 rounded-full
//                 bg-cyan-500/10
//                 text-cyan-300
//                 border
//                 border-cyan-500/20
//                 "
//               >
//                 {tag}
//               </span>
//             ))}

//           </div>

//           <div className="flex gap-5 mt-10">

//             <a
//               href="https://github.com/Yehmeg/PM-2.5-Prediction-and-Remark-Classification"
//               target="_blank"
//               className="
//               px-6
//               py-3
//               rounded-xl
//               bg-cyan-500
//               text-black
//               flex
//               items-center
//               gap-3
//               "
//             >
//               <FaGithub />
//               GitHub
//             </a>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export default function FeaturedProject() {
  return (
    <section className="py-24">
      <div
        className="
          group
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400/50
        "
      >
        <div className="grid lg:grid-cols-[55%_45%]">

          {/* LEFT SIDE */}
          <div className="relative h-full min-h-[300px]  overflow-hidden">

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                object-cover
                opacity-80
                transition-transform
                duration-700
                group-hover:scale-105
              "
            >
              <source
                src="/projects/airquality.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050816]/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/20 via-transparent to-transparent" />

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col min-h-[300px]">

            {/* TOP 70% */}
            <div className="flex-[6] p-8 flex flex-col justify-center">


              <h2 className="mt-5 text-[2.3rem] font-bold leading-tight ">
                PM 2.5 Prediction
              </h2>

              <div className="flex gap-3 mt-5 flex-wrap">

                <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                  ● Published in IEEE
                </span>

                <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">
                  Air Quality Prediction
                </span>

              </div>

              <p className="mt-3 text-gray-20 text-lg leading-4">
                Developed an AI-powered PM2.5 prediction system using
                satellite imagery, CPCB datasets and ensemble machine
                learning models including LightGBM, XGBoost and
                CatBoost.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">

                {[
                  "Python",
                  "LightGBM",
                  "XGBoost",
                  "CatBoost",
                  "Pandas",
                
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-100
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-3 flex-wrap">

                <a
                  href="https://github.com/Yehmeg/PM-2.5-Prediction-and-Remark-Classification"
                  target="_blank"
                  className="
                    px-2
                    py-3
                    rounded-xl
                    bg-cyan-100
                    text-black
                    flex
                    items-center
                    gap-0
                    font-semibold
                  "
                >
                  <FaGithub />
                  GitHub
                </a>


              </div>

            </div>

            {/* BOTTOM 30% */}
            <div className="flex-[2] border-t border-white/10 bg-white/[0.02]">

              <div className="grid grid-cols-2 h-full">

                <div className="p-2 border-r border-white/10 border-b border-white/10">
                  <h3 className="text-1xl font-black">0.8649</h3>
                  <p className="text-gray-100 mt-1">Best R² Score</p>
                </div>

                <div className="p-2 border-b border-white/10">
                  <h3 className="text-1xl font-black">10</h3>
                  <p className="text-gray-100 mt-1">Monitoring Stations</p>
                </div>

                <div className="p-2 border-r border-white/10">
                  <h3 className="text-1xl font-black">PM2.5</h3>
                  <p className="text-gray-100 mt-1">Target Pollutant</p>
                </div>

                <div className="p-2">
                  <h3 className="text-1xl  font-black">IEEE</h3>
                  <p className="text-gray-100 mt-1">Research Published</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}