"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SectionHeader from "../dashboard/SectionHeader";
import EducationCard from "./EducationCard";
import { education } from "./educationdata";

export default function Education() {

  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((current + 1) % education.length);

  const prev = () =>
    setCurrent(
      (current - 1 + education.length) %
      education.length
    );

  return (

    <section
  id="education"
  className="py-24 px-6"
>

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader

          title="Education"

          subtitle="My academic journey."

        />

        <div className="relative mt-20">

          {/* Left */}

          <button

            onClick={prev}

            className="
            absolute
            left-[-30px]
            top-1/2
            -translate-y-1/2
            z-20

            w-14
            h-14

            rounded-full

            bg-white/10

            backdrop-blur-xl

            border

            border-white/10

            hover:border-cyan-400

            transition
            "

          >

            <FaChevronLeft className="mx-auto"/>

          </button>

          {/* Card */}

          <AnimatePresence mode="wait">

            <EducationCard

              key={current}

              item={education[current]}

            />

          </AnimatePresence>

          {/* Right */}

          <button

            onClick={next}

            className="
            absolute
            right-[-30px]
            top-1/2
            -translate-y-1/2
            z-20

            w-14
            h-14

            rounded-full

            bg-white/10

            backdrop-blur-xl

            border

            border-white/10

            hover:border-cyan-400

            transition
            "

          >

            <FaChevronRight className="mx-auto"/>

          </button>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-4 mt-10">

          {education.map((_, index) => (

            <button

              key={index}

              onClick={() => setCurrent(index)}

              className={`
              w-3
              h-3
              rounded-full
              transition-all
              ${
                current === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/20"
              }
              `}
            />

          ))}

        </div>

      </div>

    </section>

  );

}
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { FaGraduationCap, FaSchool, FaStar } from "react-icons/fa";

// const education = [
//   {
//     title: "Bachelor of Technology",
//     subtitle: "Computer Science & Engineering (AI)",
//     school: "Indira Gandhi Delhi Technical University for Women",
//     year: "2024 – 2028",
//     grade: "CGPA 9.15 / 10",
//     badge: "CURRENT",
//     icon: <FaGraduationCap />,
//   },
//   {
//     title: "Senior Secondary (CBSE)",
//     subtitle: "Class XII",
//     school: "Rajkiya Pratibha Vikas Vidyalaya",
//     year: "2022 – 2023",
//     grade: "87%",
//     badge: "",
//     icon: <FaSchool />,
//   },
//   {
//     title: "Secondary (CBSE)",
//     subtitle: "Class X",
//     school: "Rajkiya Pratibha Vikas Vidyalaya",
//     year: "2020 – 2021",
//     grade: "94.8%",
//     badge: "",
//     icon: <FaSchool />,
//   },
// ];

// export default function Education() {
//   return (
//     <section className="py-24">

//       <Swiper
//         modules={[Navigation, Pagination]}
//         slidesPerView={1}
//         spaceBetween={40}
//         navigation
//         pagination={{ clickable: true }}
//         className="max-w-5xl mx-auto"
//       >

//         {education.map((item) => (

//           <SwiperSlide key={item.title}>

//             <div
//               className="
//               relative
//               rounded-[36px]
//               border
//               border-white/10
//               bg-white/5
//               backdrop-blur-xl
//               p-10
//               min-h-[420px]
//               "
//             >

//               {item.badge && (

//                 <div
//                   className="
//                   absolute
//                   top-8
//                   right-8
//                   px-5
//                   py-2
//                   rounded-full
//                   bg-cyan-500/20
//                   text-cyan-300
//                   text-xs
//                   tracking-[0.2em]
//                   "
//                 >
//                   {item.badge}
//                 </div>

//               )}

//               <div
//                 className="
//                 w-20
//                 h-20
//                 rounded-3xl
//                 bg-cyan-500/10
//                 flex
//                 items-center
//                 justify-center
//                 text-4xl
//                 text-cyan-400
//                 "
//               >
//                 {item.icon}
//               </div>

//               <h2 className="text-5xl font-black mt-10">
//                 {item.subtitle}
//               </h2>

//               <p className="text-xl mt-4 text-gray-300">
//                 {item.title}
//               </p>

//               <p className="text-gray-400 mt-8">
//                 {item.school}
//               </p>

//               <div className="flex gap-12 mt-12">

//                 <div>

//                   <p className="uppercase text-xs text-gray-500">
//                     Academic Year
//                   </p>

//                   <h3 className="text-2xl font-bold mt-2">
//                     {item.year}
//                   </h3>

//                 </div>

//                 <div>

//                   <p className="uppercase text-xs text-gray-500">
//                     Result
//                   </p>

//                   <h3 className="text-2xl font-bold mt-2 flex items-center gap-2">

//                     <FaStar className="text-yellow-400"/>

//                     {item.grade}

//                   </h3>

//                 </div>

//               </div>

//             </div>

//           </SwiperSlide>

//         ))}

//       </Swiper>

//     </section>
//   );
// }