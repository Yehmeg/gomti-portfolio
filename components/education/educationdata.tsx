
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export const education = [
  {
    icon: FaGraduationCap,
    color: "cyan",
    title: "Bachelor of Technology",
    subtitle:
      "Computer Science & Engineering with Specialization in Artificial Intelligence",
    institute: "Indira Gandhi Delhi Technical University for Women",
    duration: "2024 – 2028",
    grade: "CGPA 9.15 / 10",
    badge: "CURRENT",
    profile:
      "https://www.resulthubdtu.com/IGDTUW/StudentProfile/2028/06401172024",
    isCollege: true,
  },

  {
    icon: FaSchool,
    color: "purple",
    title: "School Education",
    isCollege: false,

    school: [
      {
        class: "Class XII (CBSE)",
        marks: "87%",
        year: "2023",
        school: "Rajkiya Pratibha Vikas Vidyalaya , BT Block Shalimar Bagh, Delhi",
      },
      {
        class: "Class X (CBSE)",
        marks: "94.8%",
        year: "2021",
        school: "Rajkiya Pratibha Vikas Vidyalaya , BT Block Shalimar Bagh, Delhi",
      },
    ],
  },
];